contract('PredictionMarket', function(accounts) {

  console.log(accounts);

  it("should assert true", function(done) {
    var predictionMarket = PredictionMarket.at(PredictionMarket.deployed_address);
    assert.isTrue(true);
    done();
  });

  it("should have a zero balance", function(done) {
    var balance = web3.eth.getBalance(PredictionMarket.deployed_address).toNumber();
    assert.equal(balance, 0, "The balance of this contract is not zero");
    done();
  });

  describe("instantiation of new instance", function() {
    beforeEach("create a new instance", function() {
      var predictionMarket = PredictionMarket.at(PredictionMarket.deployed_address);
    });

    it("should instantiate with an administrator account", function() {
      return PredictionMarket.new()
      .then(predictionMarketInstance => predictionMarketInstance.admin.call())
      .then(value => {
        assert.equal(value, accounts[0], "Admin check doesn't match")
      })
    });

    it("should instantiate with zero available markets", function() {
      return PredictionMarket.new()
      .then(predictionMarketInstance => predictionMarketInstance.marketCount.call())
      .then(value => {
        assert.equal(value, 0, "Markets are available")
      })
    });
  });

  describe("#createMarket", function() {

    it("should increase the market count by 1", function() {
      return PredictionMarket.new()
      .then(predictionMarketInstance => predictionMarketInstance.createMarket({ from: accounts[0] }))
      return predictionMarketInstance.marketCount.call()
      .then(value => {
        assert.equal(value, 1, "No market was created")
      })
    });

    it("should only be called by an admin", function(done) {
      PredictionMarket.new().then(function(predictionMarketInstance) {
        predictionMarketInstance.createMarket({ from: accounts[1] }).then(function() {
          return predictionMarketInstance.marketCount.call().then(function(numMarkets) {
            console.log(numMarkets);
          assert.equal(numMarkets, 0, "A non-admin can create markets!");
          done();
          });
        });
      });
    });
  });

})
