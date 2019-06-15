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
})




























/*const Memo = artifacts.require('./Memo.sol')

contract('Memo', (accounts) => {
  before(async () => {
    this.memo = await Memo.deployed()
  })

  it('deploys successfully', async () => {
    const address = await this.memo.address
    assert.notEqual(address, 0x0)
    assert.notEqual(address, '')
    assert.notEqual(address, null)
    assert.notEqual(address, undefined)
  })

  it('lists tasks', async () => {
    const taskCount = await this.memo.taskCount()
    const task = await this.memo.tasks(taskCount)
    assert.equal(task.id.toNumber(), taskCount.toNumber())
    assert.equal(task.content, 'Welcome to Decentralized Memo App')
    assert.equal(task.completed, false)
    assert.equal(taskCount.toNumber(), 1)
  });

	 it('creates tasks', async () => {
		  const result = await this.memo.createTask('A new task')
		  const taskCount = await this.memo.taskCount()
		  assert.equal(taskCount, 2)
		  const event = result.logs[0].args
		  assert.equal(event.id.toNumber(), 2)
		  assert.equal(event.content, 'A new task')
		  assert.equal(event.completed, false)
	})
})
*/