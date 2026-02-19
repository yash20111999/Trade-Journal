import type { Trade } from "../types/journal";
import BuyColumn from "./BuyColumn";
import SellColumn from "./SellColumn";
import TradeMeta from "./TradeMeta";
import React from "react";

type Props = {
  trade: Trade;
};

const TradeRow = ({ trade }: Props) => {
  const isLong = trade.direction === "LONG";

  const background = isLong
    ? "rgba(0, 100, 0, 0.4)"
    : "rgba(120, 0, 0, 0.4)";

  const rowStyle: React.CSSProperties = {
    display: "grid",
    padding: "12px",
    gridTemplateColumns: "2fr 0.7fr 2fr",
    background,
    marginBottom: "12px",
    borderRadius: "6px",
    overflow: "hidden",
  };

  return (
    <div style={rowStyle}>
      <BuyColumn trade={trade as Trade} />
      <TradeMeta trade={trade as Trade} />
      <SellColumn trade={trade as Trade} />
    </div>
  );
};

export default TradeRow;
