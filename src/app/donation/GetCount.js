counter.getCount.call(function (err, result) {
    if (err) {
      return error(err);
    } else {
      log("getCount call executed successfully.");
    }
  
    // Use the function's return value
  });