import React from "react";

type InputProps = {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type: string;
};

export const Input = ({ label, value, onChange, type }: InputProps) => {
  return (
    <div style={inputContainerStyle}>
      <label style={labelStyle}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={inputStyle}
      />
    </div>
  );
};

const inputContainerStyle: React.CSSProperties = {
  marginBottom: "12px",
};

const labelStyle: React.CSSProperties = {
  fontSize: "12px",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "6px",
  marginTop: "4px",
  background: "#0d1117",
  border: "1px solid #30363d",
  color: "#fff",
  borderRadius: "4px",
};

