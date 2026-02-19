import React from "react";

const TableRow = ({
  symbol,
  price,
  quantity,
  date,
}: {
  symbol: string;
  price: number;
  quantity: number;
  date?: string;
}) => {
  return (
    <div style={rowStyle}>
      <span>{symbol}</span>
      <span>{price}</span>
      <span>{quantity}</span>
      <span>{date}</span>
    </div>
  );
};

const rowStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  paddingTop: "8px",
  paddingBottom: "8px",
  textAlign: "center",
};

export default TableRow;
