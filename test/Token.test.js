import { tokens } from './helpers';
const Token = artifacts.require('Token');

require('chai')
  .use(require('chai-as-promised'))
  .should();

contract('Token', (accounts) => {
  let token;
  // Basic Token Info
  const name = "Mango";
  const symbol = "MNG";
  const decimals = "18";
  const totalSupply = "100000000" + "0".repeat(+decimals);
  // Tests accounts
  const [
    deployer,
    receiver
  ] = accounts;

  beforeEach(async () => {
    token = await Token.new();
  });

  describe('deployment', () => {

    it('should track token\'s name', async () => {
      const result = await token.name();
      result.should.be.equal(name);
    });

    it('should track token\'s symbol', async () => {
      const result = await token.symbol();
      result.should.be.equal(symbol);
    });

    it('should track token\'s decimals', async () => {
      const result = await token.decimals();
      result.toString().should.be.equal(decimals);
    });

    it('should track token totalSupply', async () => {
      const result = await token.totalSupply();
      result.toString().should.be.equal(totalSupply);
    });

    it('should assign total supply to the deployer account', async () => {
      const result = await token.balanceOf(deployer);
      result.toString().should.be.equal(totalSupply);
    });
  });

  describe('transfer tokens', () => {
    let amount;
    let result;
    beforeEach(async () => {
      amount = tokens(10);
      result = await token.transfer(receiver, amount, { from: deployer });
    });

    it('should transfer token balance from sender to receiver', async () => {
      const balanceOfDeployer = await token.balanceOf(deployer);
      const balanceOfReceiver = await token.balanceOf(receiver);;

      balanceOfDeployer.toString().should.be.equal(tokens(99999990).toString());
      balanceOfReceiver.toString().should.be.equal(tokens(10).toString());
    });

    it('should emit a Transfer event', async () => {
      const log = result.logs[0];
      log.event.should.be.equal("Transfer");
      const event = log.args;
      event.from.should.be.equal(deployer, "from it's correct");
      event.to.should.be.equal(receiver, "to it's correct");
      event.value.toString().should.be.equal(amount.toString(), "value it's correct");
    });
  });

});