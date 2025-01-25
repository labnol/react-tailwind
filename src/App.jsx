import Feature from '@components/Feature';
import Footer from '@components/Footer';
import logo from '@images/logo.png';

const features = [
  {
    title: 'npm run start',
    description: 'Run the React app in development mode with live reloading.',
  },
  {
    title: 'npm run build',
    description: 'Bundles the React app for deployment in production environment.',
  },
  {
    title: 'npm run inline',
    description: 'Inline all CSS and JS in a single minfied file.',
  },
];

const App = () => (
  <div className='flex min-h-screen flex-col justify-center bg-gray-100 py-6 sm:py-12'>
    <div className='relative py-3 sm:mx-auto sm:max-w-xl'>
      <div className='to-light-blue-500 absolute inset-0 -skew-y-6 transform bg-gradient-to-r from-cyan-400 shadow-lg sm:-rotate-6 sm:skew-y-0 sm:rounded-3xl' />
      <div className='relative bg-white px-4 py-10 shadow-lg sm:rounded-3xl sm:p-20'>
        <div className='mx-auto max-w-md'>
          <div>
            <a href='https://digitalinspiration.com/'>
              <img src={logo} className='h-7 sm:h-8' alt='Logo' />
            </a>
          </div>
          <div className='divide-y divide-gray-200'>
            <div className='space-y-5 py-8 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7'>
              <h1 className='text-lg font-semibold text-cyan-600'>
                React and Tailwind CSS Starter Kit
              </h1>
              <p>Create a React project with Vite and Tailwind CSS.</p>
              <div className='list-disc space-y-2'>
                {features.map((feature) => (
                  <Feature
                    key={feature.title}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              </div>
              <p className='text-sm font-medium text-cyan-500'>
                Built with Tailwind CSS 4 and React 19.
              </p>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default App;
