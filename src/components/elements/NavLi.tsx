interface Proptypes {
  children?: React.ReactNode;
}

const NavLi = ({ children }: Proptypes) => {
  return (
    <li className="sm:hover:border-b-2 sm:hover:text-green border-[#fff3] transition-colors border-r-2 sm:border-r-0 py-3 sm:pb-0 text-center text-sm sm:text-lg last-of-type:border-r-0 cursor-pointer text-shadow">
      {children}
    </li>
  );
};

export default NavLi;
