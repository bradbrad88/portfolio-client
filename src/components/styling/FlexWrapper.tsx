interface Proptypes {
  children?: React.ReactNode;
}

const FlexWrapper = ({ children }: Proptypes) => {
  return (
    <div
      className="flex-wrapper"
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      {children}
    </div>
  );
};

export default FlexWrapper;
