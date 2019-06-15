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
	it('Check Lists',function(){
		return Memo.deployed().then(function(instance){
			memo=instance;
			return memo.taskCount();
		}).then(function(count){
			return memo.tasks(count);
		}).then(function(task){
			//assert.equal(task.id.toNumber(), count.toNumber())
		    assert.equal(task.content, 'Welcome to Decentralized Memo App')
		    assert.equal(task.completed, false)
		    //assert.equal(taskCount.toNumber(), 1)
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


