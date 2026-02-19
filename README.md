# Trade Journal – Frontend Assignment ([<Demo Link>](https://trade-journal-gamma-jade.vercel.app/))

This project implements the **Trade Journal** as described in the assignment specification.  
The application allows users to view and manage trades composed of multiple BUY and SELL legs, with clear direction and status visibility.

The focus of this implementation is:

- Clean state modeling
- Predictable immutable updates
- Clear UI composition
- Separation of domain and UI state
- Scalable component structure

---

# Assignment Requirements Coverage

## ✔ Render Trades from Provided JSON Structure

- Journal is initialized from a JSON file.
- Trade is treated as the atomic unit.
- BUY and SELL legs are stored as arrays within each trade.
- Direction and status are explicitly modeled (not derived).

---

## ✔ Add BUY / SELL Legs

- Users can add BUY or SELL legs through a modal form.
- Updates are handled via Zustand.
- State updates are immutable.
- No page reloads.

---

## ✔ Trade State Awareness

- LONG trades are visually distinct (green tint).
- SHORT trades are visually distinct (red tint).
- OPEN vs CLOSED status is clearly visible.
- Add actions are disabled when a trade is CLOSED.

---

# Tech Stack

- **React** (with Vite)
- **TypeScript**
- **Zustand** for global state management
- CSS-in-JS using inline style objects

No backend or persistence is implemented, as specified in the assignment scope.

## Running the Project

```
git clone <repository-url> 
cd Trade-Journal
npm install
npm run dev
```

---

# State Management

The journal state mirrors the provided JSON structure:

```ts
journal: {
  journal_id: string
  trades: Trade[]
}
```
- Trades are stored as an array. Updates are performed immutably using:
```ts
trades.map(...)
```

### When a trade is updated:

- Only the modified trade object is replaced.
- Other trade objects retain their reference.

### To reduce unnecessary re-renders:

- BuyColumn, SellColumn, and TradeMeta are wrapped in React.memo.
- Only rows receiving updated trade references re-render.

---

# Component Architecture

```
src/
  components/
    AddButton.tsx
    AddLegModal.tsx
    BuyColumn.tsx
    Input.tsx
    Modal.tsx
    SellColumn.tsx
    TableRow.tsx
    TradeHeader.tsx
    TradeJournal.tsx
    TradeMeta.tsx
    TradeRow.tsx
  store/
    journalStore
  mock/
    journal.json
```

---

## Design Principles

- `TradeRow` handles layout only.
- `BuyColumn` and `SellColumn` are symmetrical and isolated.
- `Modal` handles UI state only.
- `Zustand` manages domain state exclusively.
- UI state (modal visibility) is kept local to components.

---

## Data Flow

1.  User clicks **+Buy** or **+Sell**.
2.  Modal opens (local component state).
3.  User submits form.
4.  `updateLeg()` updates the store immutably.
5.  The affected trade row re-renders.
6.  The full journal does not re-render unnecessarily.

---

## Validation

The Add Leg modal includes basic validation:

- Price and Quantity are required.
- Must be valid numbers.
- Cannot be negative.
- Zero values are allowed.
- Date is optional.
- Errors are shown using `alert` messages.

---

## UI Design

- Three-column layout: **BUY | TRADE | SELL**.
- Dark theme styling.
- Table-like grid inside BUY and SELL sections.
- Handles asymmetrical BUY/SELL leg counts.
- Disabled actions for `CLOSED` trades.
- The UI does not assume equal numbers of BUY and SELL legs.

---

## Non-Goals (Per Assignment)

The following features are intentionally not implemented:

- No PnL calculations.
- No derived metrics (average entry price, position size).
- No backend persistence.
- No authentication.
- No brokerage integration.
- No large-scale performance optimizations.

## Potential Improvements

- Derived metrics per trade
- Inline editing of legs
- Local storage persistence
- Virtualized list for large datasets
- Improved inline validation UI
- Unit and integration tests
