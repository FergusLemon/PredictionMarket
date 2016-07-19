contract PredictionMarket {
  address public administrator;
  uint public numMarkets;

  function PredictionMarket() {
    administrator = msg.sender;
    numMarkets = 0;
  }
}
