`` `solidity
//pragma solidity  ^0.4.0
//import "@openzeppelin/test-helpers/expectRevert.sol";
// import the helpers

//import "hardhat/console.sol";
// Apply configuration


// import 'contracts/ModifiedAccessControl.sol';

contract OwnerContract { 
    address public  owner;
    // event for EVM logging
    event OwnerSet(address indexed oldOwner, address indexed newOwner);
    //event changeOwner(newOwner);
    modifier isOwner(){ 
        require(msg.sender == owner);
        _;
    }

    /**
     * @dev Set contract deployer as owner
     */
    constructor() public  {
        owner = msg.sender;  //'msg.sender' is sender of current call, contract deployer for a constructor
        emit OwnerSet(address(0), owner);
    }

    /**
     *@dev makes contract payable
     **/

    /**
     * @dev Change owner
     * @param newOwner address of new owner
     */
    function changeOwner(address newOwner) public  isOwner {
        emit OwnerSet(owner, newOwner);
        owner = newOwner;
    }

    /*
     *
     */

    function returnAddress(address _address) public view returns (address) {
        return _address;
    }

    /**
     *
     *@dev
     */


    /**
     * @dev Return owner address
     * @return address of owner
     * call
     * ether
     */
    function () external view returns (address ) {
        return owner;
    }

    function send() external payable {
        // 0x1E906a88F8F7fEf31Af96e1ea53718970fE36e96);
    `;
