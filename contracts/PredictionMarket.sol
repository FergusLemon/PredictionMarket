contract PredictionMarket {
  address public admin;
  uint public marketCount;
  mapping (uint => Market) public markets;

  struct Market {
    string boolQuestion;
    address creator;
    bool answer;
    mapping (uint => User) users;
  }

  struct User {
    string username;
    address addr;
    uint amount;
  }

  function PredictionMarket() {
    admin = msg.sender;
    marketCount = 0;
  }

  modifier isAdmin() {
    if (msg.sender != admin) {
      throw;
    }
    _
  }

  function createMarket() isAdmin() returns (uint marketID) {
    marketID = marketCount++;
  }
}
