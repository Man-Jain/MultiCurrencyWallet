import Web3 from "web3";
import config from "app-config";

export let web3;

export const getWeb3 = () => {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    window.web3 = web3;
    console.log(web3);
    try {
      // Request account access if needed
      window.ethereum.enable().then((account) => {
        console.log("web3");
      });
    } catch (error) {
      web3 = error;
    }
  }
  // Legacy dapp browsers...
  else if (window.web3) {
    // Use Mist/MetaMask's provider.
    web3 = window.web3;
    console.log("Injected web3 detected.");
  }
  // Fallback to localhost; use dev console port by default...
  else {
    const provider = new Web3.providers.HttpProvider(
      "https://rinkeby.infura.io/v3/67531e96ca3842cdabf3147f5d2a3742"
    );
    web3 = new Web3(provider);
    console.log("No web3 instance injected, using Local web3.");
  }
};

