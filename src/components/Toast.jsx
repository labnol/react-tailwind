import React, { useEffect, useState } from 'react';

export default function Toast({
  isVisible,
  onClose,
  message,
  description,
  type = 'success',
  duration = 4000
}) {
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsShowing(true);
      const timer = setTimeout(() => {
        setIsShowing(false);
        setTimeout(onClose, 300); // Wait for animation to complete
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible && !isShowing) return null;

  const typeStyles = {
    success: {
      bg: 'bg-white',
      border: 'border-green-200',
      icon: 'bg-green-500',
      title: 'text-gray-900',
      description: 'text-gray-600',
    },
    error: {
      bg: 'bg-white',
      border: 'border-red-200',
      icon: 'bg-red-500',
      title: 'text-gray-900',
      description: 'text-gray-600',
    },
    info: {
      bg: 'bg-white',
      border: 'border-blue-200',
      icon: 'bg-blue-500',
      title: 'text-gray-900',
      description: 'text-gray-600',
    },
  };

  const styles = typeStyles[type];

  return (
    <div className="fixed bottom-4 right-4 z-[60]">
      <div
        className={`
          ${styles.bg} ${styles.border}
          border rounded-xl shadow-lg p-4 min-w-[320px] max-w-md
          transform transition-all duration-300 ease-out
          ${isShowing ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
        `}
      >
        <div className="flex items-start gap-3">
          {/* Icon */}
          <div className={`flex-shrink-0 w-8 h-8 ${styles.icon} rounded-full flex items-center justify-center`}>
            {type === 'success' && (
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            )}
            {type === 'error' && (
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
            {type === 'info' && (
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h4 className={`font-semibold ${styles.title}`}>{message}</h4>
            {description && (
              <p className={`text-sm ${styles.description} mt-0.5`}>{description}</p>
            )}
          </div>

          {/* Close Button */}
          <button
            onClick={() => {
              setIsShowing(false);
              setTimeout(onClose, 300);
            }}
            className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mt-3 h-1 bg-gray-100 rounded-full overflow-hidden">
          <div
            className={`h-full ${type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500'} rounded-full`}
            style={{
              animation: isShowing ? `shrink ${duration}ms linear forwards` : 'none',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes shrink {
          from { width: 100%; }
          to { width: 0%; }
        }
      `}</style>
    </div>
  );
}
