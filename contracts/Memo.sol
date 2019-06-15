pragma solidity ^0.5.3;
contract Memo{
	uint public taskCount=0;	// State Variable
				// Written on blockchain and we get getter functions for free
	constructor() public{
		createTask("Welcome to Decentralized Memo App");
	}
	struct Task{
		uint id;
		string content;
		bool completed;
	}

	mapping (uint => Task) public tasks;
	function createTask(string memory _content) public{
		taskCount++;
		tasks[taskCount]=Task(taskCount,_content,false);		
	}
}