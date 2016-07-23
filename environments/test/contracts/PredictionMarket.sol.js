// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[],"name":"createMarket","outputs":[{"name":"marketID","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"markets","outputs":[{"name":"boolQuestion","type":"string"},{"name":"creator","type":"address"},{"name":"answer","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"marketCount","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"name":"","type":"address"}],"type":"function"},{"inputs":[],"type":"constructor"}],
    binary: "606060405260008054600160a060020a03191633178155600155610176806100276000396000f3606060405260e060020a6000350463aea0e35f811461003c578063b1283e771461005b578063ec9790821461009e578063f851a440146100a7575b005b6100b96000805433600160a060020a0390811691161461016857610002565b6100cf60043560026020526000908152604090206001810154600160a060020a0381169060ff740100000000000000000000000000000000000000009091041683565b6100b960015481565b61015e600054600160a060020a031681565b6040518082815260200191505060405180910390f35b608082905280151560a052606080805283546002600019600183161561010002019091160460c0819052819060e0908690801561014d5780601f106101225761010080835404028352916020019161014d565b820191906000526020600020905b81548152906001019060200180831161013057829003601f168201915b505094505050505060405180910390f35b6060908152602090f35b50600180548082019091559056",
    unlinked_binary: "606060405260008054600160a060020a03191633178155600155610176806100276000396000f3606060405260e060020a6000350463aea0e35f811461003c578063b1283e771461005b578063ec9790821461009e578063f851a440146100a7575b005b6100b96000805433600160a060020a0390811691161461016857610002565b6100cf60043560026020526000908152604090206001810154600160a060020a0381169060ff740100000000000000000000000000000000000000009091041683565b6100b960015481565b61015e600054600160a060020a031681565b6040518082815260200191505060405180910390f35b608082905280151560a052606080805283546002600019600183161561010002019091160460c0819052819060e0908690801561014d5780601f106101225761010080835404028352916020019161014d565b820191906000526020600020905b81548152906001019060200180831161013057829003601f168201915b505094505050505060405180910390f35b6060908152602090f35b50600180548082019091559056",
    address: "0x6594923f5f14ead2ceac13499323cc1dfae7e937",
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
