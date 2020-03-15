import React from 'react';

const App = () => {
  return (
    <div className="p-32 bg-gray-100">
      <div className="max-w-xl mx-auto">
        <h3 className="text-2xl text-gray-700 font font-heading">
          React Tailwind CSS Starter Kit
        </h3>
        <p className="mt-6 mb-6 leading-relaxed text-gray-600">
          Quickly build a React.js project with Create React App (CRA) and the
          Tailwind CSS framework. The unused CSS classes are automatically
          removed from the production build with PurgeCSS.
        </p>
        <p className="mt-6 mb-6 text-gray-500">
          Written by&nbsp;
          <a
            className="hover:bg-yellow-200"
            href="https://www.labnol.org/about"
            target="_blank"
            rel="noopener noreferrer"
          >
            Amit Agarwal
          </a>{' '}
          <span className="text-sm text-gray-500">
            (Google Developer Expert, GSuite)
          </span>
        </p>
        <a
          className="no-underline btn btn-indigo"
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/labnol"
          title="Send a message on Twitter"
        >
          Contact @me
        </a>
      </div>
    </div>
  );
};

export default App;
