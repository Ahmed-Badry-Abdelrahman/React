import React from "react";

export const Button = React.memo(({ number, onClick, children }) => {
  return (
    <div>
      <button onClick={() => onClick(number)}>{children}</button>
    </div>
  );
});
