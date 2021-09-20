import web3 from "web3";

export const EVM_REJECT = 'VM Exception while processing transaction: revert';

export const tokens = (amount) => {
  return new web3.utils.BN(
    web3.utils.toWei(amount.toString(), 'ether')
  );
};