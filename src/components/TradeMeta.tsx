import React, { memo } from "react";
import type { Trade } from "../types/journal";

type Props = {
  trade: Trade;
};

const TradeMetaComponent = ({ trade }: Props) => {
  return (
    <div style={metaContainerStyle}>
      <div style={directionStyle}>{trade.direction}</div>
      <div style={statusStyle}>{trade.status}</div>
      <div style={symbolStyle}>{trade.symbol}</div>
    </div>
  );
};

const metaContainerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderLeft: "1px solid #30363d",
  borderRight: "1px solid #30363d",
};

const directionStyle: React.CSSProperties = {
  fontWeight: 600,
};

const statusStyle: React.CSSProperties = {
  fontSize: "14px",
};

const symbolStyle: React.CSSProperties = {
  fontSize: "12px",
};

const TradeMeta = memo(TradeMetaComponent);

export default TradeMeta;
