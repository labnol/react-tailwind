import React from 'react';

const App = () => {
  return (
    <div class="m-12 bg-white shadow-2xl mx-auto max-w-3xl w-full">
      <div class="p-12">
        <div className="prose">
          <h2>React with Tailwind CSS</h2>
          <p className="bg-yellow-50 p-4 rounded-lg">
            How to quickly setup a React.js project with Create React App (CRA)
            and the Tailwind CSS framework. The styling is handled by
            TailwindCSS Typography plugin.
          </p>
          <p>
            The{' '}
            <a
              href="https://github.com/labnol/react-tailwind"
              target="_blank"
              rel="noopener noreferrer"
            >
              React TailwindCSS starter
            </a>{' '}
            is bootstrapped with Create React App and it uses PurgeCSS to remove
            all the unused CSS classes from the production build. It uses
            Prettier and ESLint to format and automatically fix your code in
            Visual Studio Code.
          </p>
          <h4>Available npm scripts</h4>
          <p>In the project directory, you can run:</p>
          <pre>npm run start</pre>
          <p>
            Runs the app in the development mode. Open `http://localhost:3000`
            to view it in the browser. The page will reload if you make edits.
            You will also see any lint errors in the console.
          </p>
          <pre>npm run build</pre>
          <p>
            Builds the React app for production to the `build` folder. It
            correctly bundles React in production mode and optimizes the build
            for the best performance. The build is minified and the filenames
            include the hashes. Your app is ready to be deployed!
          </p>
          <pre>npm run inline</pre>
          <p>
            This command uses <code>Gulp</code> to inline all the JavaScript and
            CSS files from the production build into a single minified file.
          </p>{' '}
          <h4>Credits</h4>
          <p>
            The React and Tailwind CSS starter is written by{' '}
            <a
              href="https://www.labnol.org/about"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-100 p-1 mr-2"
            >
              Amit Agarwal
            </a>
            <small>Email: amit@labnol.org</small>
          </p>
        </div>
        <div class="mt-5">
          <span class="inline-flex rounded-md shadow-sm">
            <a
              href="https://www.labnol.org"
              class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-gray-100 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150 no-underline"
            >
              Visit my Tech Blog
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default App;
