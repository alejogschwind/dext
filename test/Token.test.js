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
  //
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
  });
});