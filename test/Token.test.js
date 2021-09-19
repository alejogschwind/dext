const Token = artifacts.require('Token');

require('chai')
  .use(require('chai-as-promised'))
  .should();

contract('Token', (accounts) => {

  describe('deployment', () => {

    it('should track the contract\'s name', async () => {
      const token = await Token.new();
      const result = await token.name();
      result.should.be.equal('DEXT');
    });
  });
});