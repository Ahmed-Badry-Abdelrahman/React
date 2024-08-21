export const ClickHandler = () => {
  const clickHandler = (count = 1) => {
    console.log("Button Clicked", count);
  };
  return (
    <div>
      <button onClick={() => clickHandler(5)}>click</button>
      <button onClick={() => clickHandler(10)}>click</button>
    </div>
  );
};
