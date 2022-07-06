import profileImage from "assets/profileImg.png";
import "stylesheets/Header.scss";

const Header = () => {
  return (
    <header id="header">
      <div className="header-content">
        <div className="image">
          <img src={profileImage} alt="" />
        </div>
        <div className="title">
          <h1>Brad Teague</h1>
          <h2>Aspiring Full Stack Developer</h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
