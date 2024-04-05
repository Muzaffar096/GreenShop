const Button = (props) => {
  const { children, onClick, classes, image } = props;
  return (
    <button onClick={onClick} className={`border-none ${classes}`}>
      {children} {image}
    </button>
  );
};

export default Button;
