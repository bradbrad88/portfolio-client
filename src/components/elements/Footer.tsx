import SocialList from "./SocialList";
import resume from "assets/Resume.pdf";

const Footer = () => {
  return (
    <footer className="mt-auto flex flex-col items-center bg-[rgba(0,0,0,0.3)] p-4">
      <SocialList />
      <p>
        Email me:{" "}
        <a className="text-green" href={`mailto:${process.env.REACT_APP_EMAIL}`}>
          {process.env.REACT_APP_EMAIL}
        </a>
      </p>
      <p>
        Call or msg:{" "}
        <a className="text-green" href={"tel:+61431154056"}>
          0431 154 056
        </a>
      </p>
      <p>
        Resume:{" "}
        <a className="text-green" href={resume} download={"Brad_Teague_Resume.pdf"}>
          resume.pdf
        </a>
      </p>
    </footer>
  );
};

export default Footer;
