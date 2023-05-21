const SafeConfig = {
  //todo: change the RPC provider and private key to env variables
  SafeRPCProvider: "https://arb1.arbitrum.io/rpc",
  SafePrivateKey:
    "4f07e3acfde4f672844ad10c1a11df75bbd4b675a9dfed8a82dc3acaf3776c18",
  //   SafeRPCProvider: process.env.SAFE_RPC_PROVIDER,
  //   SafePrivateKey: process.env.SAFE_PRIVATE_KEY,
  SafeAccountConfig: {
    //treshold is the number of owners required to approve a transaction
    threshold: 2,
    // owners are the addresses of the owners of the safe, one should be our multisig
    owners: [
      "0xCBD656a27270bec1f433d8C7aF4D14d140F664E9",
      "0x6126B929bCbF01F053C04daC9958c9D01E3B6734"
    ]
  }
};

export default SafeConfig;
