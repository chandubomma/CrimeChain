// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CrimeRecordNFT is ERC721, Ownable {
    uint256 private currentTokenId ; // Start token IDs from 1

    struct CrimeRecord {
        string crimeType;
        string details;
        string location;
        uint256 id;
        uint256[] victims;
        uint256[] suspects;
        uint256[] evidenceIds;
        string result;
        address reportedBy;
        address assignedTo;
        uint256 timestamp;
    }

    mapping(uint256 => CrimeRecord) public crimeRecords;
    event CrimeRecordCreated(uint256 indexed crimeId);

   constructor() ERC721("Crime Record NFT", "CRIME") Ownable(msg.sender) {
        // Initialize the contract with the deployer as the initial owner
        currentTokenId = 1;
    }

    function createCrimeRecord(
        string memory _crimeType,
        string memory _details,
        string memory _location,
        uint256[] memory _victims,
        uint256[] memory _suspects,
        uint256[] memory _evidenceIds,
        string memory _result
    ) external onlyOwner {
        uint256 tokenId = currentTokenId;
        _mint(msg.sender, tokenId);

        crimeRecords[tokenId] = CrimeRecord({
            id:tokenId,
            crimeType: _crimeType,
            details: _details,
            location: _location,
            victims: _victims,
            suspects: _suspects,
            evidenceIds: _evidenceIds,
            result: _result,
            reportedBy: msg.sender,
            assignedTo: address(0), // Initially unassigned
            timestamp: block.timestamp
        });
        emit CrimeRecordCreated(tokenId);
        currentTokenId++; // Increment token ID for the next record
    }

    function updateCrimeRecord(
        uint256 tokenId,
        string memory _details,
        string memory _result
    ) external onlyOwner {
        require(ownerOf(tokenId) == msg.sender, "Only the owner can update the record");
        crimeRecords[tokenId].details = _details;
        crimeRecords[tokenId].result = _result;
    }

    function assignToInvestigator(uint256 tokenId, address investigator) external onlyOwner {
        require(ownerOf(tokenId) == msg.sender, "Only the owner can assign to an investigator");
        crimeRecords[tokenId].assignedTo = investigator;
    }

    function getCrimeRecordDetails(uint256 tokenId)
    external
    view
    returns (CrimeRecord memory)
    {
        CrimeRecord memory record = crimeRecords[tokenId];
        require(ownerOf(tokenId) != address(0), "Crime record does not exist");
        return record;
    }

    function getCrimeRecordCount() external view returns (uint256) {
        return currentTokenId - 1; // Subtract 1 to get the actual count
    }

    function linkEvidenceToCrime(uint256 crimeTokenId, uint256 evidenceTokenId) external onlyOwner {
        require(ownerOf(crimeTokenId) == msg.sender, "Only the owner can link evidence to the crime record");
        
        // Check if the evidence token exists
        require(ownerOf(evidenceTokenId) != address(0), "Evidence does not exist");

        // Link the evidence by adding its ID to the evidenceIds array
        crimeRecords[crimeTokenId].evidenceIds.push(evidenceTokenId);
    }

        // Function to get all crime records
    function getAllCrimeRecords() external view returns (CrimeRecord[] memory) {
        CrimeRecord[] memory records = new CrimeRecord[](currentTokenId);

        for (uint256 tokenId = 1; tokenId <= currentTokenId; tokenId++) {
            records[tokenId - 1] = crimeRecords[tokenId];
        }

        return records;
    }


}
