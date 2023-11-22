const Content = (props) => {
  return (
    <div>
      <p>
        Part: {props.parts[0].name}, exercises: {props.parts[1].exercises}
      </p>
      <p>
        Part: {props.parts[1].name}, exercises: {props.parts[2].exercises}
      </p>
      <p>
        Part: {props.parts[2].name}, exercises: {props.parts[2].exercises}
      </p>
    </div>
  );
};


export default Content;
