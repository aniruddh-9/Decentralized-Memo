// MOCHA TESTING FRAMEWORK AND CHAI ASSERTION LIBRARY

const Memo = artifacts.require('./Memo.sol')

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
  })
})