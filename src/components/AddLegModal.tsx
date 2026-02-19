import { useState } from "react";
import { nanoid } from "nanoid";
import Modal from "./Modal";
import { useJournalStore } from "../store/journalStore";
import type { Action } from "../types/journal";
import { Input } from "./Input";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  tradeId: string;
  action: Action;
};

const AddLegModal = ({
  isOpen,
  onClose,
  tradeId,
  action,
}: Props) => {
  const updateLeg = useJournalStore((s) => s.updateLeg);

  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = () => {
    const parsedPrice = Number(price);
    const parsedQty = Number(quantity);

    if (price.trim() === "" || quantity.trim() === "") {
      alert("Price and Quantity are required.");
      return;
    }

    if (isNaN(parsedPrice) || isNaN(parsedQty)) {
      alert("Price and Quantity must be valid numbers.");
      return;
    }

    if (parsedPrice < 0 || parsedQty < 0) {
      alert("Price and Quantity cannot be negative.");
      return;
    }

    updateLeg(
      tradeId,
      {
        leg_id: nanoid(),
        price: parsedPrice,
        quantity: parsedQty,
        date: date || undefined,
      },
      action,
    );

    setPrice("");
    setQuantity("");
    setDate("");

    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h3 style={headerStyle}>Add {action.toUpperCase()} Leg</h3>

      <Input label="Price" value={price} onChange={setPrice} type="number" />

      <Input
        label="Quantity"
        value={quantity}
        onChange={setQuantity}
        type="number"
      />

      <Input label="Date" value={date} onChange={setDate} type="date" />

      <button onClick={handleSubmit} style={submitStyle}>
        Add
      </button>
    </Modal>
  );
};

export default AddLegModal;

const headerStyle: React.CSSProperties = {
  marginBottom: "16px",
};

const submitStyle: React.CSSProperties = {
  marginTop: "16px",
  width: "100%",
  padding: "8px",
  background: "#238636",
  border: "none",
  color: "#fff",
  borderRadius: "4px",
  cursor: "pointer",
};
