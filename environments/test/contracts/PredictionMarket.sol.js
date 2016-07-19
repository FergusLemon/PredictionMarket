// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":true,"inputs":[],"name":"numMarkets","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"name":"","type":"address"}],"type":"function"},{"inputs":[],"type":"constructor"}],
    binary: "606060405260008054600160a060020a0319163317815560015560548060256000396000f3606060405260e060020a600035046326e04f9d81146024578063f851a44014602c575b005b604a60015481565b604a60005473ffffffffffffffffffffffffffffffffffffffff1681565b6060908152602090f3",
    unlinked_binary: "606060405260008054600160a060020a0319163317815560015560548060256000396000f3606060405260e060020a600035046326e04f9d81146024578063f851a44014602c575b005b604a60015481565b604a60005473ffffffffffffffffffffffffffffffffffffffff1681565b6060908152602090f3",
    address: "0x429e5504b08c8b0a7ef3aa76237d8926cb9940b4",
    generated_with: "2.0.9",
    contract_name: "PredictionMarket"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("PredictionMarket error: Please call load() first before creating new instance of this contract.");
    }

    Contract.Pudding.apply(this, arguments);
  };

  Contract.load = function(Pudding) {
    Contract.Pudding = Pudding;

    Pudding.whisk(contract_data, Contract);

    // Return itself for backwards compatibility.
    return Contract;
  }

  Contract.new = function() {
    if (Contract.Pudding == null) {
      throw new Error("PredictionMarket error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("PredictionMarket error: Please call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("PredictionMarket error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.PredictionMarket = Contract;
  }

})();
