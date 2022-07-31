interface Proptypes {
  children?: React.ReactNode;
  top?: number;
}

const Section = ({ children, top }: Proptypes) => {
  return <section className="mt-8 mb-3 w-full">{children}</section>;
};

export default Section;
