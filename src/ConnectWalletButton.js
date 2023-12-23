import React from "react";
import { Wallet } from "@viaprotocol/web3-wallets";

function ConnectWalletButton() {
  const handleConnectWallet = async () => {
    try {
      const wallet = new Wallet();
      await wallet.connect();
      alert("Connected to wallet successfully!");
      // 连接成功后，可以在这里执行其他逻辑
    } catch (error) {
      console.error("Error connecting to wallet:", error);
      alert("Error connecting to wallet. Please try again.");
    }
  };

  return (
    <button onClick={handleConnectWallet}>Connect</button>
  );
}

export default ConnectWalletButton;
