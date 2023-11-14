// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract IdentityContract {
     uint256 private currentTokenId = 1; 
    struct Identity {
        string fullName;
        string Alias;
        uint256[] crimesInvolved;
        uint256 age;
        string gender;
        string image;
        string location;
        string otherDetails;
    }

    mapping(uint256 => Identity) public identities;

    event IdentityCreated(uint256 indexed identifier, string fullName);

    function createIdentity(
        string memory _fullName,
        string memory _Alias,
        uint[] memory _crimesInvolved,
        uint256 _age,
        string memory _gender,
        string memory _image,
        string memory _location,
        string memory _otherDetails
    ) external {
        uint256 _identifier = currentTokenId;
        identities[_identifier] = Identity({
            fullName: _fullName,
            Alias: _Alias,
            crimesInvolved: _crimesInvolved,
            age: _age,
            gender: _gender,
            image: _image,
            location: _location,
            otherDetails: _otherDetails
        });

        emit IdentityCreated(_identifier, _fullName);
        currentTokenId++;
    }

    function updateIdentity(
        uint256 _identifier,
        string memory _fullName,
        string memory _Alias,
        uint256[] memory _crimesInvolved,
        uint256 _age,
        string memory _gender,
        string memory _image,
        string memory _location,
        string memory _otherDetails
    ) external {

        identities[_identifier].fullName = _fullName;
        identities[_identifier].Alias = _Alias;
        identities[_identifier].crimesInvolved = _crimesInvolved;
        identities[_identifier].age = _age;
        identities[_identifier].gender = _gender;
        identities[_identifier].image = _image;
        identities[_identifier].location = _location;
        identities[_identifier].otherDetails = _otherDetails;
    }

   // Function to get identity details based on the identifier
    function getIdentity(uint256 _identifier) external view returns (Identity memory) {
        return identities[_identifier];
    }
}
