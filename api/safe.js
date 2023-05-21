import { ethers } from "ethers";
import Safe, { EthersAdapter, SafeFactory } from "@safe-global/protocol-kit";

import SafeConfig from "../constants/safeConfig";

const createSafeFactory = async () => {
  const provider = new ethers.providers.JsonRpcProvider(
    SafeConfig.SafeRPCProvider
  );
  const signerWallet = new ethers.Wallet(SafeConfig.SafePrivateKey, provider);
  const ethAdapter = new EthersAdapter({
    ethers,
    signerOrProvider: signerWallet
  });

  const safeFactory = await SafeFactory.create({ ethAdapter });
  return safeFactory;
};

const getSignerNonce = async () => {
  const provider = new ethers.providers.JsonRpcProvider(
    SafeConfig.SafeRPCProvider
  );
  const signer = new ethers.Wallet(SafeConfig.SafePrivateKey, provider);
  const nonce = await signer.getTransactionCount();
  return nonce;
};

const createSafe = async () => {
  console.log("Creating safe...");
  const safeFactory = await createSafeFactory();
  console.log("Safe factory created", safeFactory);

  const nonce = await getSignerNonce();
  const safe = await safeFactory.deploySafe({
    safeAccountConfig: SafeConfig.SafeAccountConfig,
    saltNonce: nonce
  });

  const safeAddress = await safe.getAddress();

  console.log("Safe address: ", safeAddress);

  return safeAddress;
};

export default createSafe;
