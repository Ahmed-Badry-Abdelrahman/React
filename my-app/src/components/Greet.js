const Greet = (props) => {
  return (
    <div>
      <h1>
        Hello, {props.name} your name is {props.age} --
      </h1>
      {props.children}
    </div>
  );
};

export default Greet;
