const Main = ({ children }: { children?: React.ReactNode }) => {
  return (
    <main className="text-white max-w-[700px] mx-auto mt-5 sm:mt-16 mb-10 px-5 w-full">
      {children}
    </main>
  );
};
export default Main;
