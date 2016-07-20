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

    it("should instantiate with an administrator account", function(done) {
      PredictionMarket.new().then(function(predictionMarketInstance) {
        predictionMarketInstance.admin.call().then(function(admin) {
          assert.equal(admin, accounts[0], "Admin check doesn't match");
          done();
        });
      });
    });

    it("should instantiate with zero available markets", function(done) {
      PredictionMarket.new().then(function(predictionMarketInstance) {
        predictionMarketInstance.numMarkets.call().then(function(markets) {
          assert.equal(markets, 0, "There appear to be markets available");
          done();
        });
      });
    });
  });

  describe("#createMarket", function() {
    it("should create a new market", function(done) {
      PredictionMarket.new().then(function(predictionMarketInstance) {
        predictionMarketInstance.createMarket({ from: accounts[0] }).then(function() {
          return predictionMarketInstance.numMarkets.call().then(function(numMarkets) {
          console.log(numMarkets);
          assert.equal(numMarkets, 1, "No live market created");
          done();
          });
        });
      });
    });

    it("should only be called by an admin", function(done) {
      PredictionMarket.new().then(function(predictionMarketInstance) {
        predictionMarketInstance.createMarket({ from: accounts[1] }).then(function() {
          return predictionMarketInstance.numMarkets.call().then(function(numMarkets) {
            console.log(numMarkets);
          assert.equal(numMarkets, 0, "A non-admin can create markets!");
          done();
          });
        });
      });
    });
  });

})
