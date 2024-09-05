const Feature = ({ title, description }) => (
  <div className='flex items-start'>
    <span className='flex h-6 items-center sm:h-7'>
      <svg className='h-5 w-5 flex-shrink-0 text-cyan-500' viewBox='0 0 20 20' fill='currentColor'>
        <path
          fillRule='evenodd'
          d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
          clipRule='evenodd'
        />
      </svg>
    </span>
    <p className='ml-2'>
      <code className='text-sm font-bold text-gray-900'>{title}</code>
      &nbsp;&mdash;&nbsp;{description}
    </p>
  </div>
);

export default Feature;
