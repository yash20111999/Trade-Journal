import { memo, useState } from "react";
import type { Trade } from "../types/journal";
import TableRow from "./TableRow";
import AddButton from "./AddButton";
import AddLegModal from "./AddLegModal";

type Props = {
  trade: Trade;
};

const SellColumnComponent = ({ trade }: Props) => {
  const [open, setOpen] = useState(false);
  const onAddSellLeg = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div style={columnStyle}>
      {trade.sell.map((leg) => (
        <TableRow
          key={leg.leg_id}
          symbol={trade.symbol}
          price={leg.price}
          quantity={leg.quantity}
          date={leg.date}
        />
      ))}
      {trade.status === "OPEN" && (
        <>
          <AddButton label="+ Sell" clickHandler={onAddSellLeg} />
          <AddLegModal
            isOpen={open}
            onClose={() => setOpen(false)}
            tradeId={trade.trade_id}
            action="sell"
          />
        </>
      )}
    </div>
  );
};

const columnStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
};

const SellColumn = memo(SellColumnComponent);

export default SellColumn;
