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

	event TaskCreated(
		uint id,
		string content,
		bool completed

	);

	event TaskCompleted(
	    uint id,
	    bool completed
  	);

	mapping (uint => Task) public tasks;

	function createTask(string memory _content) public{
		taskCount++;
		tasks[taskCount]=Task(taskCount,_content,false);		
		emit TaskCreated(taskCount,_content,false);
	}

	function toggleCompleted(uint _id) public {
	    Task memory _task = tasks[_id];
	    _task.completed = !_task.completed;
	    tasks[_id] = _task;
	    emit TaskCompleted(_id, _task.completed);
  	}
}