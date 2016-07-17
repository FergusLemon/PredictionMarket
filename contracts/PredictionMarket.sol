contract PredictionMarket {
  address public administrator;

  function PredictionMarket() {
    administrator = msg.sender;
  }
}
