const Container = (props) => {
  const { children, classes } = props;
  return (
    <div className={`container px-2 max-w-7xl mx-auto ${classes ? classes : ""}`}>
      {children}
    </div>
  );
};
export default Container;
