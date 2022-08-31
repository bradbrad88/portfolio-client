import classnames from "classnames";

interface Proptypes {
  children?: React.ReactNode;
  divider?: boolean;
  styles?: React.CSSProperties;
  size?: number;
}

const H2 = ({ children, styles, size, divider = true }: Proptypes) => {
  const classes = classnames("text-green text-4xl mb-3 mt-5", {
    [`border-b-[1px] border-zinc-600`]: divider,
  });
  return (
    <h2 className={classes} style={{ ...styles }}>
      {children}
    </h2>
  );
};

export default H2;
