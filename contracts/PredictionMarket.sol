contract PredictionMarket {
  address public admin;
  uint public numMarkets;

  function PredictionMarket() {
    admin = msg.sender;
    numMarkets = 0;
  }

  modifier isAdmin() {
    if (msg.sender != admin) {
      throw;
    }
    _
  }

  function createMarket() returns (uint marketID) {
    marketID = numMarkets++;
  }
}
