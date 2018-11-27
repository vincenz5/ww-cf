import { Component, OnInit } from '@angular/core';
import web3 from 'node_modules/web3';
import Web3 from 'web3';
import ethereum from 'node_modules/web3';
import eth from 'node_modules/web3';

declare var window;

window.addEventListener('load', async () => {
  // Modern dapp browsers...
  if (window.ethereum) {
    window.web3 = new Web3(ethereum);
    try {
      // Request account access if needed
      await ethereum.enable();
      // Acccounts now exposed
      web3.eth.sendTransaction({/* ... */ });
    } catch (error) {
      // User denied account access...
    }
  }
  // Legacy dapp browsers...
  else if (window.web3) {
    window.web3 = new Web3(web3.currentProvider);
    // Acccounts always exposed
    web3.eth.sendTransaction({/* ... */ });
  }
  // Non-dapp browsers...
  else {
    console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
  }
});


@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.scss']
})



export class DonationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // <!-- Check for Web3 -->


// Donation function called by button push
sendDonation (){
  console.log("Donation is on the way!")
  var donationContractAddress = "0xc44c04DF5Bd67c8353944d56aF09484180953002";
  var payee = "0x4595197A4e3E9E9dfdD3a3fC3A3fFA9de7cb01d1";
  //     if (web3.eth.accounts[0] !== userAccount) {
  var userAccount = web3.eth.accounts[0];
  var donationContractABI = [
    {
      "constant": false,
      "inputs": [
        {
          "name": "payee",
          "type": "address"
        }
      ],
      "name": "deposit",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "recipient",
          "type": "address"
        }
      ],
      "name": "transferPrimary",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "payee",
          "type": "address"
        }
      ],
      "name": "withdraw",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "payee",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "weiAmount",
          "type": "uint256"
        }
      ],
      "name": "Deposited",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "payee",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "weiAmount",
          "type": "uint256"
        }
      ],
      "name": "Withdrawn",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "recipient",
          "type": "address"
        }
      ],
      "name": "PrimaryTransferred",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "payee",
          "type": "address"
        }
      ],
      "name": "depositsOf",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "primary",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ]
  var Amount = document.getElementById('amount') as HTMLTextAreaElement).value;
  console.log(Amount)
  var B = web3.toWei(Amount, "ether")
  var DonationContract = web3.eth.contract(donationContractABI);
  var donationContract = DonationContract.at(donationContractAddress);

  // web3.eth.getBlock(48, function (error, result) {
  //     if (!error)
  //         console.log(JSON.stringify(result));
  //     else
  //         console.error(error);
  // })
  // one USD: 10000000000000000
  // donationContract.deposit(payee, { "from": web3.eth.accounts[0] })
  // console.log(donationContract)
  donationContract.deposit(payee, { gas: 200000, amount: B  }, console.log)
    // donationContract.deposit(payee, { gas: 200000, value: Amount }, console.log)
    // .on("receipt", function (receipt) {
    //   this.("#txStatus").text("Thank you for your donation! ");
    // })
    // .on("error", function (error) {
    //   // Do something to alert the user their transaction has failed
    //   this.("#txStatus").text(error);
    // });
  var accountInterval = setInterval(function () {
    // Check if account has changed
    if (web3.eth.accounts[0] !== userAccount) {
      userAccount = web3.eth.accounts[0];
      // Call a function to update the UI with the new account
      // getDonationsByOwner(userAccount)
      //     .then(displayDonations);
    }
  }, 10000);
}


  // var inWei = web3.toWei('10', 'ether')
  // function listenForClicks(miniToken) {
  //     var button = document.querySelector('button.transferFunds')
  //     button.addEventListener('click', function () {
  //         miniToken.transfer(toAddress, value, { from: addr })
  //             .then(function (txHash) {
  //                 console.log('Transaction sent')
  //                 console.dir(txHash)
  //                 waitForTxToBeMined(txHash)
  //             })
  //             .catch(console.error)
  //     })
  // }

  // async function waitForTxToBeMined(txHash) {
  //   let txReceipt
  //   while (!txReceipt) {
  //     try {
  //       txReceipt = await eth.getTransactionReceipt(txHash)
  //     } catch (err) {
  //       return indicateFailure(err)
  //     }
  //   }
  // }
}



