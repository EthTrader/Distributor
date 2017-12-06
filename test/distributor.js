const Distributor = artifacts.require("./Distributor.sol");

// console.log(web3.version)

contract('Distributor', function(accounts) {

    it(`distribute funds`, () => {
      let receivers = [].concat(accounts).concat(accounts).concat(accounts).concat(accounts).concat(accounts).concat(accounts).concat(accounts).concat(accounts).concat(accounts).concat(accounts);
      let startAmount = web3.eth.getBalance(accounts[1]);
      return Distributor.deployed()
        .then( distributor => distributor.sendTo(receivers, {value: web3.toWei('1', 'ether')}) )
        .then( tx => console.log("gas: ", tx.receipt.cumulativeGasUsed) )
        .then( () => web3.eth.getBalance(accounts[1]) )
        .then( amount => assert.equal(amount.valueOf(), startAmount.plus(web3.toWei('.1', 'ether')), `account[1] did not have 1.1 ether`) );
    });

});
