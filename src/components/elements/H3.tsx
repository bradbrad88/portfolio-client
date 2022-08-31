interface Proptypes {
  children?: React.ReactNode;
  styles?: React.CSSProperties;
}

const H3 = ({ children, styles }: Proptypes) => {
  return (
    <h3 style={styles} className="text-purple text-3xl mt-5 mb-1">
      {children}
    </h3>
  );
};

export default H3;
