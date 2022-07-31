import Prism from "prismjs";
import "../../../node_modules/prismjs/themes/prism-tomorrow.css";

interface Proptypes {
  code: string;
}

const Syntaxer = ({ code }: Proptypes) => {
  const codeSyntax = Prism.highlight(code, Prism.languages.javascript, "javascript");
  return (
    <div className="w-full bg-black p-2">
      <pre className="w-full font-mono overflow-x-auto whitespace-pre">
        <code className="text-inherit" dangerouslySetInnerHTML={{ __html: codeSyntax }} />
      </pre>
    </div>
  );
};

export default Syntaxer;
