interface Proptypes {
  children?: React.ReactNode;
}

const H1 = ({ children }: Proptypes) => {
  return <h1 className="text-white font-thin text-6xl mb-3">{children}</h1>;
};

export default H1;
