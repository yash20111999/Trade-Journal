import React from "react";

const AddButton = ({
  label,
  clickHandler,
}: {
  label: string;
  clickHandler: () => void;
}) => {
  return (
    <button onClick={clickHandler} style={buttonStyle}>
      {label}
    </button>
  );
};

const buttonStyle: React.CSSProperties = {
  marginTop: "8px",
  background: "#30363d",
  border: "1px solid #484f58",
  color: "#fff",
  padding: "6px 10px",
  borderRadius: "4px",
  cursor: "pointer",
  alignSelf: "center",
};

export default AddButton;

