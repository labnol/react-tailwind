import React from 'react';
import logo from './images/logo.png';

const App = () => (
  <div className="flex min-h-screen flex-col justify-center bg-gray-100 py-6 sm:py-12">
    <div className="relative py-3 sm:mx-auto sm:max-w-xl">
      <div className="absolute inset-0 -skew-y-6 transform bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg sm:-rotate-6 sm:skew-y-0 sm:rounded-3xl" />
      <div className="relative bg-white px-4 py-10 shadow-lg sm:rounded-3xl sm:p-20">
        <div className="mx-auto max-w-md">
          <div>
            <a href="https://digitalinspiration.com/">
              <img src={logo} className="h-7 sm:h-8" alt="Logo" />
            </a>
          </div>
          <div className="divide-y divide-gray-200">
            <div className="space-y-4 py-8 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
              <p>
                Quickly setup a React project with Create React App and Tailwind
                CSS.
              </p>
              <ul className="list-disc space-y-2">
                <li className="flex items-start">
                  <span className="flex h-6 items-center sm:h-7">
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-cyan-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <p className="ml-2">
                    <code className="text-sm font-bold text-gray-900">
                      npm run start
                    </code>
                    &nbsp;&mdash;&nbsp;Run the React app in development mode
                    with live reloading.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="flex h-6 items-center sm:h-7">
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-cyan-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <p className="ml-2">
                    <code className="text-sm font-bold text-gray-900">
                      npm run build
                    </code>
                    &nbsp;&mdash;&nbsp;Bundles the React app for deployment in
                    production environment.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="flex h-6 items-center sm:h-7">
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-cyan-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <p className="ml-2">
                    <code className="text-sm font-bold text-gray-900">
                      npm run inline
                    </code>
                    &nbsp;&mdash;&nbsp;Inline all CSS and JS in a single minfied
                    file using Gulp.
                  </p>
                </li>
              </ul>
              <p>
                All the unused CSS classes are automatically removed from the
                production build with PurgeCSS.
              </p>
            </div>
            <div className="pt-6 text-base font-bold leading-6 sm:text-lg sm:leading-7">
              <p>
                The React and Tailwind CSS starter kit is maintained by &nbsp;
                <a
                  href="https://digitalinspiration.com/"
                  className="text-cyan-600 no-underline hover:text-cyan-700"
                >
                  Amit Agarwal &rarr;
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default App;
