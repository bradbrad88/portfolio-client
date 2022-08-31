import classnames from "classnames";

interface Proptypes {
  children?: React.ReactNode;
  styles?: React.CSSProperties;
}

const H1 = ({ children, styles }: Proptypes) => {
  const classes = classnames("text-white font-thin text-6xl mb-3");
  return (
    <h1 className={classes} style={styles}>
      {children}
    </h1>
  );
};

export default H1;
