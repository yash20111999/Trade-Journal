import { memo, useState } from "react";
import type { Trade } from "../types/journal";
import TableRow from "./TableRow";
import AddButton from "./AddButton";
import AddLegModal from "./AddLegModal";

type Props = {
  trade: Trade;
};

const BuyColumnComponent = ({ trade }: Props) => {
  const [open, setOpen] = useState(false);
  const onAddBuyLeg = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div style={columnStyle}>
      {trade.buy.map((leg) => (
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
          <AddButton label="+ Buy" clickHandler={onAddBuyLeg} />
          <AddLegModal
            isOpen={open}
            onClose={() => setOpen(false)}
            tradeId={trade.trade_id}
            action="buy"
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

const BuyColumn = memo(BuyColumnComponent);

export default BuyColumn;
