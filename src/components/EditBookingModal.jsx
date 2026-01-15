import React, { useState } from 'react';
import Modal from './Modal';

export default function EditBookingModal({ isOpen, onClose, onSave, bookingData }) {
  const [editScope, setEditScope] = useState('single'); // 'single' or 'series'
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Mock data for the form
  const [formData, setFormData] = useState({
    type: 'training',
    startDate: '16/01/2026',
    startTime: '08:30',
    endDate: '16/01/2026',
    endTime: '09:00',
    aircraft: 'N123AB',
    instructor: 'Cypress Test',
    student: 'Demo Middle Man Mr',
    additionalInfo: '',
  });

  const futureBookingsCount = 5; // This would come from props in real implementation

  const handleSave = () => {
    if (editScope === 'series' && !showConfirmation) {
      setShowConfirmation(true);
      return;
    }
    onSave?.(formData, editScope);
  };

  const bookingTypes = [
    { id: 'maintenance', label: 'Maintenance' },
    { id: 'training', label: 'Training Flight' },
    { id: 'ground', label: 'Ground Training' },
    { id: 'rental', label: 'Rental Flight' },
  ];

  const aircraftOptions = ['N123AB', 'N123AC', 'HOOBS-AFS-EMULATE'];

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <div className="p-6">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-1">
            <h2 className="text-xl font-semibold text-gray-900">Edit Booking</h2>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Recurring
            </span>
          </div>
          <p className="text-sm text-gray-500">08:30 - 09:00, 16/01/2026</p>
        </div>

        {/* Scope Toggle - Key UX improvement */}
        <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <label className="text-sm font-medium text-gray-700 mb-3 block">
            Apply changes to:
          </label>
          <div className="flex gap-2">
            <button
              onClick={() => {
                setEditScope('single');
                setShowConfirmation(false);
              }}
              className={`flex-1 px-4 py-3 rounded-lg border-2 transition-all text-left ${
                editScope === 'single'
                  ? 'border-teal-500 bg-teal-50 text-teal-900'
                  : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                  editScope === 'single' ? 'border-teal-500' : 'border-gray-300'
                }`}>
                  {editScope === 'single' && (
                    <div className="w-2 h-2 rounded-full bg-teal-500" />
                  )}
                </div>
                <div>
                  <div className="font-medium text-sm">This booking only</div>
                  <div className="text-xs text-gray-500">Changes affect only this occurrence</div>
                </div>
              </div>
            </button>
            <button
              onClick={() => setEditScope('series')}
              className={`flex-1 px-4 py-3 rounded-lg border-2 transition-all text-left ${
                editScope === 'series'
                  ? 'border-teal-500 bg-teal-50 text-teal-900'
                  : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                  editScope === 'series' ? 'border-teal-500' : 'border-gray-300'
                }`}>
                  {editScope === 'series' && (
                    <div className="w-2 h-2 rounded-full bg-teal-500" />
                  )}
                </div>
                <div>
                  <div className="font-medium text-sm">This & future bookings</div>
                  <div className="text-xs text-gray-500">
                    <span className="font-semibold text-teal-600">{futureBookingsCount} bookings</span> will be updated
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Inline Confirmation for Series Edit */}
        {editScope === 'series' && showConfirmation && (
          <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-blue-900">{futureBookingsCount} bookings will be updated</h4>
                <p className="text-sm text-blue-700 mt-1">
                  This includes this booking and all future bookings in the series. Are you sure you want to continue?
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Form Fields */}
        <div className="space-y-5">
          {/* Booking Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Type <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {bookingTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setFormData({ ...formData, type: type.id })}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    formData.type === type.id
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {type.label}
                </button>
              ))}
              <button className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-100 text-gray-500 hover:bg-gray-200 flex items-center gap-1">
                More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Flight Period */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Flight Period <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-4 gap-3">
              <div className="relative">
                <input
                  type="text"
                  value={formData.startDate}
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white"
                />
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <input
                type="text"
                value={formData.startTime}
                readOnly
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white"
              />
              <div className="relative">
                <input
                  type="text"
                  value={formData.endDate}
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white"
                />
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <input
                type="text"
                value={formData.endTime}
                readOnly
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white"
              />
            </div>
          </div>

          {/* Aircraft Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select aircraft <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-2">
              {aircraftOptions.map((aircraft) => (
                <button
                  key={aircraft}
                  onClick={() => setFormData({ ...formData, aircraft })}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    formData.aircraft === aircraft
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {aircraft}
                </button>
              ))}
              <button className="p-2 rounded-lg bg-gray-100 text-gray-500 hover:bg-gray-200">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
            </div>
          </div>

          {/* Instructor */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Instructor <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <div className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg bg-white">
                  <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-xs font-medium text-teal-700">
                    C
                  </div>
                  <span className="text-sm text-gray-900">{formData.instructor}</span>
                </div>
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <button className="p-2 rounded-lg border border-gray-300 text-gray-500 hover:bg-gray-50">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </button>
            </div>
          </div>

          {/* Student */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Student</label>
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <div className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg bg-white">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-xs font-medium text-blue-700">
                    D
                  </div>
                  <span className="text-sm text-gray-900">{formData.student}</span>
                </div>
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <button className="px-3 py-2 rounded-lg border border-gray-300 text-sm text-gray-600 hover:bg-gray-50 flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add User
              </button>
            </div>
          </div>

          {/* Additional Information */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Additional information</label>
            <textarea
              value={formData.additionalInfo}
              onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
              placeholder="Add any notes or special instructions..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm resize-none h-20 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>

          {/* Show More Link */}
          <button className="text-sm text-teal-600 hover:text-teal-700 font-medium">
            Show More
          </button>
        </div>

        {/* Warning Banner */}
        <div className="mt-5 p-4 bg-red-50 rounded-lg border border-red-200">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div>
              <h4 className="font-medium text-red-800 text-sm">PIC is marked not available</h4>
              <p className="text-sm text-red-700 mt-1">
                Blocks flight booking when the Pilot-in-Command is marked as unavailable for the scheduled time period.
              </p>
              <p className="text-sm text-red-600 mt-2 font-medium">
                Cypress Test has been marked unavailable for this period.
              </p>
            </div>
            <button className="ml-auto text-red-400 hover:text-red-600">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Validation Status */}
        <div className="mt-4 flex items-center gap-2 px-3 py-2 bg-green-50 rounded-lg border border-green-200">
          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-xs font-medium text-green-700 bg-green-100 px-2 py-0.5 rounded">All checks passed</span>
          <span className="text-sm text-green-700">All checks have passed, you may continue!</span>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex items-center justify-end gap-3 pt-4 border-t border-gray-200">
          <button
            onClick={() => {
              setShowConfirmation(false);
              onClose?.();
            }}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            Cancel
          </button>
          <button
            onClick={handleSave}
            className={`px-5 py-2 text-sm font-medium text-white rounded-lg transition-all flex items-center gap-2 ${
              showConfirmation
                ? 'bg-blue-600 hover:bg-blue-700'
                : 'bg-teal-600 hover:bg-teal-700'
            }`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {editScope === 'single'
              ? 'Save'
              : showConfirmation
                ? `Update ${futureBookingsCount} Bookings`
                : 'Save Changes'
            }
          </button>
        </div>
      </div>
    </Modal>
  );
}
