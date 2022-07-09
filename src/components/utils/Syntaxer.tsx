import Prism from "prismjs";
import "../../../node_modules/prismjs/themes/prism-tomorrow.css";

interface Proptypes {
  code: string;
}

const Syntaxer = ({ code }: Proptypes) => {
  const codeSyntax = Prism.highlight(code, Prism.languages.javascript, "javascript");
  return (
    <div className="code-block">
      <pre>
        <code dangerouslySetInnerHTML={{ __html: codeSyntax }} />
      </pre>
    </div>
  );
};

export default Syntaxer;
