import profileImage from "assets/profileImg.png";

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row h-screen w-screen justify-center items-center gap-8 px-2 sm:px-8">
      <div className="w-[280px]">
        <img
          className="w-full rounded-full  bg-green  border-white border-8"
          src={profileImage}
          alt=""
        />
      </div>
      <div className="w-fit max-w-[70%]">
        <h1 className="text-center sm:text-left text-dynamicTitle text-white mb-4">
          Brad Teague
        </h1>
        <h2 className="text-center sm:text-left text-slate-400 text-dynamicSubtitle ">
          Aspiring Full Stack Developer
        </h2>
      </div>
    </header>
  );
};

export default Header;
