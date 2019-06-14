var Memo = artifacts.require("./Memo.sol");

module.exports = function(deployer) {
  deployer.deploy(Memo);
};
