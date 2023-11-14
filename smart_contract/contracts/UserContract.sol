/isRegisteredUser/ SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract UserContract {
    struct User {
        string fullName;
        uint256 age;
        string gender;
        string department;
        address walletAddress;
        string image;
    }

    mapping(address => User) public users;

    event UserCreated(address indexed userAddress, string fullName);

    function createUser(
        string memory _fullName,
        uint256 _age,
        string memory _image,
        string memory _gender,
        string memory _department,
        address _walletAddress
    ) external {
        
        users[_walletAddress] = User({
            fullName: _fullName,
            age: _age,
            gender: _gender,
            image : _image,
            department: _department,
            walletAddress: _walletAddress
        });
        

        emit UserCreated(msg.sender, _fullName);
    }

     // Function to check if a user is registered
    function (address _userAddress) external view returns (bool) {
        return users[_userAddress].walletAddress != address(0);
    }

    function getUser(address _userAddress) external view returns (User memory) {
        return users[_userAddress];
    }

}
