import Section from "components/elements/Section";
import H1 from "components/elements/H1";
import H2 from "components/elements/H2";
import H3 from "components/elements/H3";
import { Blog } from "data/blogs";
import Syntaxer from "components/utils/Syntaxer";
import nodemonImg from "assets/nodemon.png";

const ExpressTypeScript = ({ blog }: { blog: Blog }) => {
  return (
    <article className="mt-5 sm:mt-0 text-lg">
      <H1 styles={{ fontSize: "2.5rem" }}>{blog.title}</H1>
      <hr />
      <time dateTime={blog.date.toLocaleDateString()}>- {blog.date.toDateString()}</time>
      {/* CRITERIA */}
      <Section>
        <aside className="mx-8 text-zinc-400">
          The following article assumes you are comfortable with setting up a basic Node.js
          project, using npm and doing simple configuration on package.json file.
        </aside>
        <H2>Criteria</H2>
        <p>
          Produce a modern and productive setup when starting a new Node.js project. The
          criteria for this is quite straight-forward:
        </p>
        <ul className="list-disc list-inside">
          <li>Easy to setup, easy to deploy</li>
          <li>Utilise TypeScript</li>
          <li>Auto restart the development server on every file save</li>
          <li>ES Module Syntax</li>
          <li>Import aliases</li>
          <li>
            Simple implementation without bundling or transforming, eg: achieve solution
            without Webpack or Babel
          </li>
        </ul>
        <br />
        <p>ES Modules refers to the import syntax used, eg:</p>
        <Syntaxer>import module from "module"</Syntaxer>
        <p className="">rather than</p>
        <Syntaxer>const module = require("module")</Syntaxer>
        <br />
        <p> Import aliases gives us the ability to tidy up routes, eg:</p>
        <Syntaxer>import route from "routes/route"</Syntaxer>
        <p className="my-2">rather than</p>
        <Syntaxer>import route from "../../../routes/route"</Syntaxer>
      </Section>

      {/* IMPLEMENTATION */}
      <Section>
        <H2>Implementation</H2>
        <p>Getting straight to the point, we'll cover how it works at the end.</p>
        <H3>Dependencies</H3>
        <p>
          The following packages are very well suppported and currently have many millions of
          downloads per week:
        </p>
        <p className="mb-0">
          <strong>Project Dependencies:</strong>
        </p>
        <ul className="list-disc list-inside">
          <li>
            <a
              className="text-green underline"
              href="https://www.npmjs.com/package/tsconfig-paths"
              target={"_blank"}
            >
              tsconfig-paths
            </a>
          </li>
        </ul>
        <p className="mb-0 mt-2">
          <strong>Dev Dependencies:</strong>
        </p>
        <ul className="list-disc list-inside">
          <li>
            <a
              className="text-green underline"
              href="https://www.npmjs.com/package/typescript"
              target={"_blank"}
            >
              typescript
            </a>
          </li>
          <li>
            <a
              className="text-green underline"
              href="https://www.npmjs.com/package/ts-node"
              target={"_blank"}
            >
              ts-node
            </a>
          </li>
          <li>
            <a
              className="text-green underline"
              href="https://www.npmjs.com/package/nodemon"
              target={"_blank"}
            >
              nodemon
            </a>
          </li>
        </ul>
        <br />
        <p>
          After initialising npm in our project folder we can run the following command to
          install all the required dependencies in our project:
        </p>
        <Syntaxer language="shell">
          npm i tsconfig-paths && npm i -D typescript ts-node nodemon
        </Syntaxer>
        {/* <Syntaxer language="shell">npm i -D typescript ts-node nodemon</Syntaxer> */}
        <H3>Create tsconfig.json</H3>
        <p>
          With dependencies installed, we need to create a{" "}
          <span className="text-green">tsconfig.json</span> file to setup TypeScript options
          and path aliases. This file should ideally live in the root folder of the project,
          alongside <span className="text-green">package.json</span>.
        </p>
        <p>
          An easy way to create a <span className="text-green">tsconfig.json</span> file:
        </p>
        <Syntaxer language="shell">npx tsc --init</Syntaxer>

        <p id="tsnode-require">
          The following configuration should be set at a minimum and changing these may result
          in errors. Go wild with any other options using{" "}
          <a
            className="underline text-green"
            href="https://www.typescriptlang.org/tsconfig"
            target={"_blank"}
          >
            this guide
          </a>
          .
        </p>
        <Syntaxer language="json">{`{
  "compilerOptions": {
    "module": "CommonJS", // Essential that the compiled TypeScript transforms to CommonJS syntax. Other options can achieve this, but setting to Node18 for example will cause errors.
    "allowJs": true, // Set true if you plan on mixing JavaScript files in with TypeScript. This will allow ts-node to transform the import syntax on JavaScript files so that we don't have to revert to writing commonjs in regular JavaScript files.
    "rootDir": "./",
    "baseUrl": "./", // Setup for your own needs - in this instance, all source code would live in this folder. This option directly affects where the following "paths" option looks.
    "paths": {
      "src/*": ["./src*"], // This creates a src alias relative to the base folder - we can now import app from "src/app"
      "routes/*": ["./src/routes/*"] // another example, this allows us to directly access the routes folder that exists within src folder - import userRoute from "routes/userRoute"
    },
  },
  "files": ["index.ts"], // by providing specific files (in this case our entry point), TypeScript will only look at these files, then follow the flow of them to transpile other files as they are required. This may not be the best case for your project's requirements so consider using "include"
  "exclude": ["node_modules"], // important to prevent TypeScript trying to transpile every .ts file in node_modules
  // "include": ["index.ts", "./src/*"], // - an alternative to "files": will sweep through and transpile everything in the locations provided.
  "ts-node": {
    "preferTsExts": true // This will keep ts-node looking at the .ts files even if we use tsc to transpile all our source files (eg, the newly generated index.js lives alongside index.ts)
  }
}`}</Syntaxer>
        <H3>Configure package.json</H3>
        <p>
          <strong>The main points:</strong>
        </p>
        <ul className="list-disc list-inside">
          <li>Create a script to run the developer environment</li>
          <li>Create a script to run the production environment</li>
          <li>
            Set "type" to "commonjs" - the module option may seem like the correct option as we
            want to write in ESM syntax, but the TypeScript engine will be set to transpile the
            code back to common js before Node executes it.
          </li>
        </ul>
        <Syntaxer language="json">{`{
  "type": "commonjs", // default - may be omitted, just ensure it's NOT set to "module". Set to "commonjs" Node will expect commonjs import syntax, eg const module = require("module"). This is what we want as ts-node will transform our code this way despite us writing in ESM syntax (import module from "module").
  "scripts": {
    "dev": "nodemon index.ts", // developer environment, nodemon will handle restarting the server any time a file changes
    "start": "tsc && node index.js" // production environment, typescript will create a regular javascript version of all our source files next to their typescript counterparts. Once this is complete we execute Node on our entry point ()
  }
}`}</Syntaxer>
        <H3>Import tsconfig-paths/register</H3>
        <p>
          The entry point to our app needs to import{" "}
          <span className="text-green">tsconfig-paths/register</span>.
        </p>
        <p>
          This should be done very similar to how we include{" "}
          <a
            className="underline text-green"
            href="https://www.npmjs.com/package/dotenv"
            target={"_blank"}
          >
            dotenv
          </a>
          .
        </p>
        <Syntaxer>{`import "tsconfig-paths/register"
import "dotenv/config"`}</Syntaxer>
        <p>
          This needs to be imported at the top of our{" "}
          <span className="text-green">index.ts</span> file.
        </p>
        <p>This is all the configuration we need to get our project going.</p>
        <H3>Next Steps</H3>
        <p>
          Go ahead and build your project! Install any other packages you need, for example:
          Express.js, Dotenv etc.
        </p>
      </Section>
      <Section>
        <H2>TypeScript Configuration</H2>
        <H3>Modules</H3>
        <p>
          If you are new to TypeScript then it is worth noting that most packages have a
          corresponding <span className="text-green">@types/</span> package that can be
          installed as a developer dependency to make the package's types available to us as
          developers.
        </p>
        <p>For instance, if we were starting an Express project, we would install express:</p>
        <Syntaxer language="shell">npm i express</Syntaxer>
        <p>And then install its types:</p>
        <Syntaxer language="shell">npm i -D @types/express</Syntaxer>
        <ul className="list-disc list-inside">
          <li>
            <a
              className="text-green underline"
              href="https://www.npmjs.com/package/@types/node"
              target={"_blank"}
            >
              @types/node
            </a>
          </li>
          <li>
            <a
              className="text-green underline"
              href="https://www.npmjs.com/package/@types/express"
              target={"_blank"}
            >
              @types/express
            </a>
          </li>
          <li>
            <a
              className="text-green underline"
              href="https://www.npmjs.com/package/@tsconfig/recommended"
              target={"_blank"}
            >
              @tsconfig/recommended
            </a>{" "}
            - optional, but a great place to start when configuring TypeScript.
          </li>
        </ul>
        <br />
        <p>Install with the following command:</p>
        <Syntaxer language="shell">
          npm i -D @types/node @types/express @tsconfig/recommended
        </Syntaxer>
        <br />
        <p>
          Optional - edit your <span className="text-green">tsconfig.json</span> file to
          include the following property if you want to use{" "}
          <span className="text-green">@tsconfig/recommended</span>:
        </p>
        <Syntaxer language="json">{`{
  "compilerOptions": {
    "extends": "@tsconfig/recommended/tsconfig.json", // optional, but a great place to start from with TypeScript configuration. Alt/option click on the string to see the configuration this applies in VS Code.
  }
}`}</Syntaxer>
      </Section>
      <Section>
        <H2>How It Works</H2>
        <H3>Developer Environment</H3>
        <p>
          We kick off by running the npm command as we defined it in the{" "}
          <span className="text-green">package.json</span> file:
        </p>
        <Syntaxer language="shell">npm run dev</Syntaxer>
        <p>
          This will invoke Nodemon with the provided entry point,{" "}
          <span className="text-green">index.ts</span>.
        </p>
        <p>
          Nodemon is unable to run TypeScript files by itself, which is why we installed{" "}
          <span className="text-green">ts-node</span>. Nodemon has tight integration with
          ts-node and will search for it if passed a TypeScript file as the entry point.
        </p>
        <p>
          Ts-node is able to execute our TypeScript files directly. It doeosn't create new
          files the way that the regular TypeScript package does (by calling npx tsc). Instead,
          it transpiles our code in memory and then executes it with a regular Node runtime.
        </p>
        <H3>Production Environment</H3>
        <p>Our production enviroment is configured to use our "start" script:</p>
        <Syntaxer language="shell">npm start</Syntaxer>
        <p>This will in turn run:</p>
        <Syntaxer language="shell">{`tsc
# If trying to invoke tsc manually, be sure to either install typescript globally or use 'npx tsc'
# Running the command through npm scripts negates the need to use npx`}</Syntaxer>
        <p>
          The 'tsc' command runs the TypeScript transpiler on our source files to generate
          regular JavaScript files. You can see these JavaScript files populate our project
          next to their TypeScript counterparts.
        </p>
        <p>At this point the second part of the "start" script will execute:</p>
        <Syntaxer language="shell">{`node index.js
# The full command 'tsc && node index.js' works by executing tsc, then waiting for successful completion (&&) before running the next command 'node index.js'`}</Syntaxer>
        <p>
          Because our code is regular JavaScript at this point and our folder structure remains
          the same, Node.js is able to run it directly. No need for additional bundlers with
          this setup.
        </p>
        <H3>Worth Noting</H3>
        <p>Some quick points worth noting here:</p>
        <ul className="list-disc list-inside">
          <li>
            If the 'tsc' command is not provided any arguments, it will look for a{" "}
            <span className="text-green">tsconfig.json</span> file. The config file tells
            TypeScript what to transpile with "files" or "includes". This is how we are
            utilising 'tsc' in our project setup.
          </li>
          <li>
            <em>Important!</em> Once the 'tsc' command has run, our project will contain
            JavaScript versions of all our TypeScript source files sitting right next to them.
            Ts-node will default to looking at the regular .js files now, so if we continue to
            develop and make changes on the .ts files, we won't see any changes. This is where
            "preferTsExts" is important.
          </li>
          <li>
            For a large codebase, having the tsc command run could be a painful experience. A
            decently sized project should consider a more comprehensive setup with bundlers.
          </li>
          <li>
            Generally speaking, avoid running npm start and stick to npm run dev in the local
            environment. You could consider git ignoring .js files with 'src/**/*.js' so that
            an accidental execution of tsc could be cleaned up with version control methods.
          </li>
        </ul>
        <H3>Entry Point File Extension</H3>
        <p>
          It is important that our entry point is a TypeScript file, otherwise Nodemon will try
          to launch our app with <span className="text-green">node</span> instead of{" "}
          <span className="text-green">ts-node</span>. This is configurable if you need to
          launch with a <span className="text-green">*.js</span> file, but there are a few
          pitfalls such as failing to set:
        </p>
        <Syntaxer language="json">{`{
  "compilerOptions": {
    "allowJs": true
  }
}`}</Syntaxer>
        <p>You would likely need to set Nodemon to watch "ts" extensions as well.</p>

        <p>
          If in doubt, looking at the logs in our terminal should confirm that Nodemon is using{" "}
          <span className="text-green">ts-node</span> to launch our app instead of calling
          node.
          <img
            className="border-[1px] rounded-md shadow-lg shadow-black border-zinc-500 my-3 w-full"
            src={nodemonImg}
            alt="nodemon log screenshot"
          />
        </p>
        <br />
        <H3>Path Aliases</H3>
        <p>
          We need to import the <span className="text-green">tsconfig-paths</span> module prior
          to launching our app for path aliases to work.
        </p>
        <p>
          There are many ways to achieve this but in our setup here we import the module in the
          entry point of our application:
        </p>
        <Syntaxer>import "tsconfig-paths/register"</Syntaxer>
        <p>
          For instance, this would likely go in your index.ts file at line one, probably
          closely followed by:
        </p>
        <Syntaxer>import "dotenv/config"</Syntaxer>

        <p>
          The reason we install tsconfig-paths as a proper dependency, rather than just a dev
          dependency is because we will continue to use the module in production when we
          eventually deploy to AWS or Heroku etc. The criteria of our setup is to avoid
          bundlers and keep things simple. Using the Heroku approach, we can push our whole
          codebase and then simply run npm start to initialise our production environment.
          {/* Tsconfig-paths assumes that our project will be built before deploying and in that
          scenario it would never need to be installed on the production server. */}
        </p>
        <p>
          Our option will not be efficient on space but otherwise will perform well. An
          alternative setup would bundle our code with a package such as Webpack and utilise a
          plugin to ensure our custom paths are hard-coded into the built files that we upload
          separately to our server. This is far more efficient with space as it only introduces
          the parts of node_modules that are required to run our code, and everything is
          minified and optimised.
        </p>
        {/* <p>
          <span className="text-green">Ts-node</span> has another way to achieve this; by
          'requiring' a file. We can specify the 'required' file in{" "}
          <span className="text-green">tsconfig.json</span> or in the command line with the -r
          flag.
        </p>
        <p>
          If we 'require' the <span className="text-green">tsconfig-path/register</span> file,
          then this module will pre-configure our path aliases so they perform as desired
          during runtime.
        </p> */}

        {/* <p>Having the config:</p>
        <Syntaxer language="json">{`{
  "ts-node": {
    "require": ["tsconfig-paths/register"] // You could include "dotenv/config" in this array if you wish, then remove it from index.ts. This would mean that you could include dotenv as a developer dependency rather than project dependency.
  }
}`}</Syntaxer> */}

        {/* <p>Is the same as:</p>
        <Syntaxer language="shell">ts-node -r tsconfig-path/register</Syntaxer> */}
        {/* <p>
          So we have the option of adjusting the{" "}
          <span className="text-green">package.json</span> Nodemon script to:
        </p>
        <Syntaxer language="json">
          "dev": "nodemon -r tsconfig-paths/register index.ts"
        </Syntaxer>

        <p>
          The 'require' argument is passed on to <span className="text-green">ts-node</span> in
          this case and we would no longer need the{" "}
          <span className="text-green">ts-node.require</span> property set in{" "}
          <span className="text-green">tsconfig.json</span>.
        </p>
        <p>
          Another option would be to create a <span className="text-green">nodemon.json</span>{" "}
          configuration file and set a custom script in there:
        </p>
        <Syntaxer language="json">{`{
        "execMap": {
          "ts": "ts-node -r tsconfig-paths/register"
        }
      }`}</Syntaxer> */}
      </Section>
      <Section>
        <H2>Brief Module Explanation</H2>
        <H3>TypeScript</H3>
        <p>
          The main engine for transforming TypeScript files into regular JavaScript files. Can
          be installed locally and run in its most basic form with:
        </p>
        <Syntaxer language="shell">npx tsc file.ts</Syntaxer>
        <p>This would create a new file called file.js that can be run with Node.js.</p>
        <p>
          We can use it without providing the file as an argument in which case TypeScript will
          search for a <span className="text-green">tsconfig.json</span> file to work out how
          it should execute. This is how we utilise TypeScript in our project setup.
        </p>
        <H3>Ts-Node</H3>
        <p>
          Extends the functionality of the <span className="text-green">typescript</span>{" "}
          package so that TypeScript files can be run directly.
        </p>
        <p>If we run the command:</p>
        <Syntaxer language="shell">npx ts-node file.ts</Syntaxer>
        <p>
          This would not create a new file, instead the transformation to regular JavaScript
          would happen in memory and the transformed code would then be passed directly to
          Node.js. This is effective when used in conjunction with Nodemon, where we would
          rather not generate new files that we then have to deal with.
        </p>
        <p>
          <span className="text-green">Ts-node</span> Can be configured in the{" "}
          <span className="text-green">tsconfig.json</span> file and contains some properties
          unique to the regular TypeScript configuration. Access these options on the following
          property:
        </p>
        <Syntaxer language="json">{`{
  "ts-node": {
    // Only set options here that you only want seen by ts-node. 
    // Generally best to define compilerOptions at the base level of tsconfig.json, as this is where the IDE (VS Code) looks for them.
  }
}`}</Syntaxer>
        <H3>Nodemon</H3>
        <p>Restarts our application when we make a change to our source files.</p>
        <p>
          Has been built to integrate tightly with TypeScript, and will actively use{" "}
          <span className="text-green whitespace-pre">ts-node</span> if the entry point is a
          TypeScript file (eg, <span className="text-green">index.ts</span>).
        </p>
        <p>Can be configured with a nodemon.json file in the root folder of our directory.</p>
        <H3>Tsconfig-paths</H3>
        <p>Allows us to use module aliases, eg:</p>
        <Syntaxer>import module from "src/module"</Syntaxer>
        <p>Instead of</p>
        <Syntaxer>import module from "../../../src/module</Syntaxer>
        <p>
          Similar to{" "}
          <a
            className="text-green underline"
            href="https://www.npmjs.com/package/dotenv"
            target="_blank"
          >
            dotenv
          </a>
          , it needs to be imported into our app before anything else.
        </p>
        <p>
          We are not quite using this as intended. Ideally with this module we would only
          require it as a developer dependency and not use it in an actual deployment. To do
          this however, we would need to configure a bundler such as Webpack so that all our
          path aliases become hard-coded during a 'build' process. Then, instead of uploading
          the entire codebase, only the 'build' files would be required to run our app.
        </p>
        <p>
          Any serious project should consider this approach but it is outside the criteria of
          what we're trying to achieve here.
        </p>
      </Section>
      {/* <Section>
        <H2>Key Takeaways</H2>
        <H3>Module Syntax</H3>
        <p>
          With this implementation we are writing all our code in the modern "ES Modules"
          syntax, eg:
        </p>
        <Syntaxer>import module from "module"</Syntaxer>

        <p>
          We are configuring TypeScript so that when it transpiles the code it converts our
          import syntax to "CommonJS":
        </p>
        <Syntaxer>const module = require("module")</Syntaxer>
        <p>
          This means that our configuration needs to be consistent with this across the
          code-base.
        </p>
        <p>
          The <span className="text-green">package.json</span> "type" property should be
          "commonjs" so that Node expects what TypeScript prepares it.
        </p>
        <p>
          The <span className="text-green">tsconfig.json</span> "module" property should be
          "commonjs" as well, or another value that has the same result.
        </p>
      </Section> */}
    </article>
  );
};

export default ExpressTypeScript;
