import TradeRow from "./TradeRow";
import TableHeader from "./TradeHeader";
import { useJournalStore } from "../store/journalStore";
import React from "react";

const TradeJournal = () => {
  const journal = useJournalStore((state) => state.journal);
  return (
    <div style={journalStyle}>
      <TableHeader />
      {journal.trades.map((trade) => (
        <TradeRow key={trade.trade_id} trade={trade} />
      ))}
    </div>
  );
};

const journalStyle: React.CSSProperties = {
  margin: "24px",
  borderRadius: "8px",
  border: "1px solid #484f58",
};

export default TradeJournal;
