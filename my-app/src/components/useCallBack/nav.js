import React from "react";

const Nav = () => {
  console.log("Nav-displayed");
  return (
    <div>
      <h1>Nav</h1>
    </div>
  );
};

export default React.memo(Nav);
