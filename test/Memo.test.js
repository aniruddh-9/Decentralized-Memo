// MOCHA TESTING FRAMEWORK AND CHAI ASSERTION LIBRARY

var Memo = artifacts.require("Memo.sol");

contract('Memo',function(accounts){
	it('initialized contract with correct values',function(){
		return Memo.deployed().then(function(instance){
			memo=instance;
			return memo.address;
		}).then(function(address){
			assert.notEqual(address,0x0);
			assert.notEqual(address,' ');
			assert.notEqual(address,null);
			assert.notEqual(address,undefined);
		})
	})
	it('Lists Tasks',function(){
		return Memo.deployed().then(function(instance){
			memo=instance;
				return memo.taskCount().then(function(taskcount){
					count = taskcount;
					return memo.tasks(taskcount);
			}).then(function(task){
			//	assert.equal(task.id.toNumber(),count);
			    assert.equal(task.content, 'Welcome to Decentralized Memo App')
			    assert.equal(task.completed, false)
			  //  assert.equal(count.toNumber(), 1)
			})
		})
	})
	it('Create Tasks',function(){
		return Memo.deployed().then(function(instance){
			memo=instance;
			return memo.createTask('A new Task');
		}).then(function(result){
			assert.equal(result.logs[0].args.id.toNumber(),2);
			assert.equal(result.logs[0].args.content,'A new Task');
			assert.equal(result.logs[0].args.completed,false);
			return memo.taskCount();
		}).then(function(count){
			assert.equal(count,2);
		})
	})
	it('Toggles task completion',function(){
		return Memo.deployed().then(function(instance){
			memo=instance;
			return memo.toggleCompleted(1);
		}).then(function(result){
			assert.equal(result.logs[0].args.id.toNumber(),1);
			assert.equal(result.logs[0].args.completed,true);
			return memo.tasks(1);
		}).then(function(task){
			assert.equal(task.completed,true);
		})
	})
})


