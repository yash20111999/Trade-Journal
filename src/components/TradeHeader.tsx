import React from "react";

const TradeHeader = () => {
  const headerTitles = ["Symbol", "Price", "Qty", "Date"];
  const columns = [
    { title: "BUY", subTitles: headerTitles },
    { title: "TRADE" },
    { title: "SELL", subTitles: headerTitles },
  ];
  return (
    <div style={headerStyle}>
      {columns.map((column) => (
        <div key={column.title} style={columnStyle}>
          <div style={titleStyle}>
            <span>{column.title}</span>
          </div>

          {column.subTitles && (
            <div style={subtitlesContainerStyle}>
              {column.subTitles.map((subTitle) => (
                <span key={subTitle}>{subTitle}</span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const headerStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "2fr 0.7fr 2fr",
  fontWeight: 600,
  top: 0,
  letterSpacing: "1px",
  fontSize: "14px",
  color: "#8b949e",
  position: "sticky",
  background: "#0f1117",
  padding: "12px",
  border: "1px solid #30363d",
  borderRadius: "8px 8px 0 0",
  alignItems: "center",
};

const columnStyle: React.CSSProperties = {
  textAlign: "center",
  paddingBottom: "8px",
};

const titleStyle: React.CSSProperties = {
  color: "#fff",
  paddingBottom: "8px",
};

const subtitlesContainerStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  marginTop: "8px",
  color: "#fff",
  fontSize: "12px",
};

export default TradeHeader;
