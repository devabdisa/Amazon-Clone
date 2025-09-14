import numeral from "numeral";
function CurrencyFormatter({ amount }) {
  const formattedPrice = numeral(amount).format("$0,0.00");
  return <div>{formattedPrice}</div>;
}

export default CurrencyFormatter;
