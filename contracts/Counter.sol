// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.7;

contract Counter {
    uint public total;
    uint public subtracted;
    uint public multiplied;
    uint public divided;
    
    function add(uint a, uint b) public {
        total = a+b;
    
    }
    function subtract(uint a, uint b) public {
        require(a>=b, "first num should be greater");
        subtracted = a - b ;
    }
    function multiply(uint a, uint b) public {
        multiplied = a*b;
    }
    function divide(uint a, uint b) public {
        divided = a/b;
    }

    function get() public view returns (uint[4] memory){
        return [total, subtracted, multiplied, divided];
    }
}