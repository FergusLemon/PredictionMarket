contract PredictionMarket {
  address public admin;
  uint public numMarkets;

  function PredictionMarket() {
    admin = msg.sender;
    numMarkets = 0;
  }
}
