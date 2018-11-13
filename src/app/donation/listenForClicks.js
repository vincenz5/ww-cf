function listenForClicks(miniToken) {
    var button = document.querySelector('button.transferFunds')
  button.addEventListener('click', function () {
      miniToken.transfer(toAddress, value, { from: addr })
        .then(function (txHash) {
          console.log('Transaction sent')
          console.dir(txHash)
          waitForTxToBeMined(txHash)
        })
        .catch(console.error)
    })
  }
var filter = web3.eth.filter('latest');
filter.watch(function (error, result) {
  var block = web3.eth.getBlock(result, true);
  console.log('block #' + block.number);
  console.dir(block.transactions);
})
