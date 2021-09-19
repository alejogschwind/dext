const Token = artifacts.require('Token');

require('chai')
  .use(require('chai-as-promised'))
  .should();

contract('Token', (accounts) => {

  describe('deployment', () => {
    let token;
    before(async () => {
      token = await Token.new();
    });

    it('should track token\'s name', async () => {
      const result = await token.name();
      result.should.be.equal('Mango');
    });

    it('should track token\'s symbol', async () => {
      const result = await token.symbol();
      result.should.be.equal('MNG');
    });

    it('should track token\'s decimals', async () => {
      const result = await token.decimals();
      result.toString().should.be.equal('18');
    });
  });
});