export const ChildComponent = (props) => {
  return (
    <div>
      <button onClick={() => props.childId(1)}>send data</button>
    </div>
  );
};
