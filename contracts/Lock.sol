// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;


contract Lock {
   uint256 public StartTime;
   uint256 public EndTime;

   function Reset() public  {
    require(block.timestamp > EndTime, "Time is not ended");
    StartTime =0;
    EndTime = 0;
   }

   function Start() public {
    StartTime = block.timestamp;
    
   }
 function End() public {
    EndTime = block.timestamp;
    
   }

   function Recent() public view returns(uint256) {
    return block.timestamp;
   }
}
