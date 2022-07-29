interface Proptypes {
  children?: React.ReactNode;
}

const H2 = ({ children }: Proptypes) => {
  return <h2 className="text-green text-4xl mb-3">{children}</h2>;
};

export default H2;
