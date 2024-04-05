const Container = (props) => {
  const { children, classes } = props;
  return (
    <div className={`container max-w-7xl mx-auto ${classes ? classes : ""}`}>
      {children}
    </div>
  );
};
export default Container;
