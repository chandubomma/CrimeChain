// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract EvidenceNFT is ERC721, Ownable {
    uint256 private currentTokenId = 1; // Start token IDs from 1

    struct Evidence {
        string description;
        string location;
        address collectedBy;
        uint256 timestamp;
    }

    event EvidenceCreated(uint256 indexed crimeId);

    mapping(uint256 => Evidence) public evidences;

    constructor() ERC721("Evidence NFT", "EVIDENCE") Ownable(msg.sender) {
       
    }

    function createEvidence(
        string memory _description,
        string memory _location
    ) external onlyOwner {
        uint256 tokenId = currentTokenId;
        _mint(msg.sender, tokenId);

        evidences[tokenId] = Evidence({
            description: _description,
            location: _location,
            collectedBy: msg.sender,
            timestamp: block.timestamp
        });
         emit EvidenceCreated(tokenId);

        currentTokenId++; // Increment token ID for the next evidence
    }

    function updateEvidence(
        uint256 tokenId,
        string memory _description,
        string memory _location
    ) external onlyOwner {
        require(ownerOf(tokenId) == msg.sender, "Only the owner can update the evidence");
        evidences[tokenId].description = _description;
        evidences[tokenId].location = _location;
    }

    function getEvidenceDetails(uint256 tokenId)
        external
        view
        returns (Evidence memory)
    {
        Evidence memory evidence = evidences[tokenId];
        require(ownerOf(tokenId) != address(0), "Evidence does not exist");
        return evidence;
    }

    function getEvidenceCount() external view returns (uint256) {
        return currentTokenId - 1; // Subtract 1 to get the actual count
    }
}
