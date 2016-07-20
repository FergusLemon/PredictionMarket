contract PredictionMarket {
  address public admin;
  uint public numMarkets;

  struct Market {
    string boolQuestion;
    address creator;
  }

  struct User {
    string username;
    address addr;
    uint amount;
  }

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

  function createMarket() isAdmin() returns (uint marketID) {
    marketID = numMarkets++;
  }
}
