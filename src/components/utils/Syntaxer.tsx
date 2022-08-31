import Prism from "prismjs";

import classnames from "classnames";

interface Proptypes {
  children?: string;
  className?: string;
  language?: string;
}

const Syntaxer = ({ children = "", language = "javascript", className }: Proptypes) => {
  const grammar = Prism.languages[language];

  const codeSyntax = Prism.highlight(children, grammar, language);
  const classname = classnames("w-full bg-black p-2 my-2", className);
  return (
    <div className={classname}>
      <pre className="w-full font-mono overflow-x-auto whitespace-pre">
        <code className="text-inherit" dangerouslySetInnerHTML={{ __html: codeSyntax }} />
      </pre>
    </div>
  );
};

export default Syntaxer;
