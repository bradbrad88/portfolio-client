interface Proptypes {
  children?: React.ReactNode;
}

const H3 = ({ children }: Proptypes) => {
  return <h3 className="text-purple text-3xl">{children}</h3>;
};

export default H3;
