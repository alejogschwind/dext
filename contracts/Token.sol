// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Token {
  string public name = "Mango";
  string public symbol = "MNG";
  uint256 public decimals = 18;
  uint256 public totalSupply;
  mapping(address => uint256) public balanceOf;

  constructor() {
    totalSupply = 100_000_000 * (10 ** decimals);
    balanceOf[msg.sender] = totalSupply;
  }
}
