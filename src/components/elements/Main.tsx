const Main = ({ children }: { children?: React.ReactNode }) => {
  return (
    <main className="text-white max-w-[700px] mx-auto mb-10 px-5 w-full">{children}</main>
  );
};
export default Main;
