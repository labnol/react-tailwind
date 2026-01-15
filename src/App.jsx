import { useState } from 'react';
import EditBookingModal from '@components/EditBookingModal';
import EditBookingModalCompact from '@components/EditBookingModalCompact';
import Toast from '@components/Toast';

const App = () => {
  const [activeDesign, setActiveDesign] = useState('standard'); // 'standard' or 'compact'
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toast, setToast] = useState({ isVisible: false, message: '', description: '' });

  const handleSave = (formData, editScope) => {
    setIsModalOpen(false);

    // Show toast notification instead of a modal
    const bookingsUpdated = editScope === 'series' ? 5 : 1;
    setToast({
      isVisible: true,
      message: `${bookingsUpdated} booking${bookingsUpdated > 1 ? 's' : ''} updated`,
      description: 'The changes have been applied successfully',
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Demo Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <h1 className="text-xl font-bold text-gray-900">Recurring Booking Edit Flow</h1>
          <p className="text-sm text-gray-500 mt-1">Unified modal design - combining 3 modals into 1</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Design Overview Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Design Improvements</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Before */}
            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <h3 className="font-medium text-red-800 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Before: 4 Separate Modals
              </h3>
              <ol className="space-y-2 text-sm text-red-700">
                <li className="flex items-start gap-2">
                  <span className="font-mono bg-red-100 px-1.5 py-0.5 rounded text-xs">1</span>
                  <span>Edit Recurring Booking (scope selection)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono bg-red-100 px-1.5 py-0.5 rounded text-xs">2</span>
                  <span>Edit Booking (the actual form)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono bg-red-100 px-1.5 py-0.5 rounded text-xs">3</span>
                  <span>Update Recurring Series (confirmation)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono bg-red-100 px-1.5 py-0.5 rounded text-xs">4</span>
                  <span>Update Complete (success message)</span>
                </li>
              </ol>
            </div>

            {/* After */}
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 className="font-medium text-green-800 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                After: 1 Modal + Toast
              </h3>
              <ul className="space-y-2 text-sm text-green-700">
                <li className="flex items-start gap-2">
                  <span className="font-mono bg-green-100 px-1.5 py-0.5 rounded text-xs">1</span>
                  <span><strong>Unified Modal</strong> - scope toggle + form + inline confirmation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono bg-green-100 px-1.5 py-0.5 rounded text-xs">2</span>
                  <span><strong>Toast Notification</strong> - replaces success modal</span>
                </li>
              </ul>
              <div className="mt-3 pt-3 border-t border-green-200">
                <p className="text-xs text-green-600">
                  <strong>Key improvements:</strong> Scope selection integrated as toggle, confirmation shown inline, success shown as non-blocking toast
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Design Variants */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Design Variants</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Standard Design */}
            <button
              onClick={() => setActiveDesign('standard')}
              className={`p-4 rounded-lg border-2 text-left transition-all ${
                activeDesign === 'standard'
                  ? 'border-teal-500 bg-teal-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                  activeDesign === 'standard' ? 'border-teal-500' : 'border-gray-300'
                }`}>
                  {activeDesign === 'standard' && <div className="w-2 h-2 rounded-full bg-teal-500" />}
                </div>
                <h3 className="font-semibold text-gray-900">Standard Design</h3>
              </div>
              <p className="text-sm text-gray-600 ml-6">
                Card-style radio buttons for scope selection. Clear visual hierarchy with prominent scope toggle section. Inline confirmation banner appears on save.
              </p>
              <div className="ml-6 mt-2 flex flex-wrap gap-1">
                <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">Spacious</span>
                <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">2-step confirmation</span>
              </div>
            </button>

            {/* Compact Design */}
            <button
              onClick={() => setActiveDesign('compact')}
              className={`p-4 rounded-lg border-2 text-left transition-all ${
                activeDesign === 'compact'
                  ? 'border-teal-500 bg-teal-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                  activeDesign === 'compact' ? 'border-teal-500' : 'border-gray-300'
                }`}>
                  {activeDesign === 'compact' && <div className="w-2 h-2 rounded-full bg-teal-500" />}
                </div>
                <h3 className="font-semibold text-gray-900">Compact Design</h3>
              </div>
              <p className="text-sm text-gray-600 ml-6">
                Segmented control in the header for scope selection. More condensed form layout with collapsible additional options. Direct save without extra confirmation step.
              </p>
              <div className="ml-6 mt-2 flex flex-wrap gap-1">
                <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">Compact</span>
                <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">1-click save</span>
              </div>
            </button>
          </div>
        </div>

        {/* Demo Trigger */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Live Demo</h2>
          <p className="text-sm text-gray-500 mb-4">
            Click the button below to see the <strong>{activeDesign === 'standard' ? 'Standard' : 'Compact'}</strong> modal design in action.
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 bg-teal-600 text-white text-sm font-medium rounded-lg hover:bg-teal-700 transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            Edit Booking
          </button>

          {/* Instructions */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-medium text-gray-800 text-sm mb-2">Try these interactions:</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Toggle between "This booking only" and "This & future bookings"</li>
              <li>• Notice the scope impact indicator (shows count of affected bookings)</li>
              <li>• See how the button text changes based on your selection</li>
              <li>• Complete the save to see the toast notification</li>
              <li>• Switch between design variants above to compare</li>
            </ul>
          </div>
        </div>
      </div>

      {/* The Unified Modal - Standard Design */}
      {activeDesign === 'standard' && (
        <EditBookingModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
        />
      )}

      {/* The Unified Modal - Compact Design */}
      {activeDesign === 'compact' && (
        <EditBookingModalCompact
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
        />
      )}

      {/* Toast Notification (replaces the "Update Complete" modal) */}
      <Toast
        isVisible={toast.isVisible}
        onClose={() => setToast({ ...toast, isVisible: false })}
        message={toast.message}
        description={toast.description}
        type="success"
      />
    </div>
  );
};

export default App;
