pragma solidity ^0.4.17;

contract Lottery{
    address public manager;
    address[] public players;
    
    function Lotary() public {
        manager = msg.sender;
    }
    
    function enter() public payable {
        require(msg.value > .01 ether);
        players.push(msg.sender);
    }
    
    function ramdom() private view returns (uint){
        return uint(keccak256(block.difficulty, now, players));
    }
    
    function pickwinner() public restricted {
       
        uint index = ramdom()%players.length;
        players[index].transfer(this.balance);
    }
    
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
    
    function getPlayers() public view returns(address[]){
        return players;
    }
} 