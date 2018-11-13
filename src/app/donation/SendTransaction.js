counter.increment.sendTransaction(function (err, hash) {
    if (err) {
      return error(err);
    }
  
    waitForReceipt(hash, function () {
      log("Transaction succeeded.");
    });
  });