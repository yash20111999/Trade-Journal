import { create } from "zustand";
import journalData from "../mock/journal.json";
import type { Journal, Leg, Action, } from "../types/journal";

interface JournalStore {
  journal: Journal;
  updateLeg: (tradeId: string, leg: Leg, action: Action) => void;
};


export const useJournalStore = create<JournalStore>((set) => ({
  journal: journalData as Journal,

  updateLeg: (tradeId, leg, action) =>
    set((state) => ({
      journal: {
        ...state.journal,
        trades: state.journal.trades.map((trade) =>
          trade.trade_id === tradeId
            ? { ...trade, [action]: [...trade[action], leg] }
            : trade,
        ),
      },
    })),
}));
