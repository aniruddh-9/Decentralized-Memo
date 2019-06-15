
module.exports = {
  networks: {
    development:{
      host: "127.0.0.1",
      port: 9545,
      network_id:"*" // Match any network id
    }
  },
  mocha: {
    // timeout: 100000
  },
  solc: {   
    optimizer :{
      enabled:true,
      runs:200
    }
  }
}
