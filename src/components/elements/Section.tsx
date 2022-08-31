interface Proptypes {
  children?: React.ReactNode;
  styles?: React.CSSProperties;
  top?: number;
}

const Section = ({ children, styles }: Proptypes) => {
  return (
    <section style={styles} className="mt-8 mb-3 w-full">
      {children}
    </section>
  );
};

export default Section;
