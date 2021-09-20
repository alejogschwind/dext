// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import '@openzeppelin/contracts/utils/math/SafeMath.sol';

contract Token {
  using SafeMath for uint;
  
  string public name = "Mango";
  string public symbol = "MNG";
  uint256 public decimals = 18;
  uint256 public totalSupply;
  mapping(address => uint256) public balanceOf;

  constructor() {
    totalSupply = 100_000_000 * (10 ** decimals);
    balanceOf[msg.sender] = totalSupply;
  }

  function transfer(address _to, uint256 _value) public returns(bool success) {
    balanceOf[msg.sender] = balanceOf[msg.sender].sub(_value);
    balanceOf[_to] = _value;
    return true;
  }
}
