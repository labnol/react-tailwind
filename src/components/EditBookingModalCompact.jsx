import React, { useState } from 'react';
import Modal from './Modal';

/**
 * Alternative Design: Compact version with segmented control
 * This version is more compact and uses a segmented control at the top
 * instead of card-style radio buttons
 */
export default function EditBookingModalCompact({ isOpen, onClose, onSave }) {
  const [editScope, setEditScope] = useState('single');
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

  const futureBookingsCount = 5;

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
        {/* Header with integrated scope selector */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold text-gray-900">Edit Booking</h2>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Recurring
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-1">08:30 - 09:00, 16/01/2026</p>
          </div>

          {/* Segmented Control - Compact design */}
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setEditScope('single')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                editScope === 'single'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              This only
            </button>
            <button
              onClick={() => setEditScope('series')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                editScope === 'series'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              All future ({futureBookingsCount})
            </button>
          </div>
        </div>

        {/* Info banner when editing series */}
        {editScope === 'series' && (
          <div className="mb-5 p-3 bg-amber-50 rounded-lg border border-amber-200 flex items-center gap-3">
            <svg className="w-5 h-5 text-amber-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm text-amber-800">
              Changes will apply to <strong>{futureBookingsCount} bookings</strong> in this series
            </p>
          </div>
        )}

        {/* Compact Form Grid */}
        <div className="space-y-4">
          {/* Type + Period in one row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                Type
              </label>
              <div className="flex flex-wrap gap-1.5">
                {bookingTypes.slice(0, 3).map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setFormData({ ...formData, type: type.id })}
                    className={`px-3 py-1.5 rounded text-xs font-medium transition-all ${
                      formData.type === type.id
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
                <button className="px-2 py-1.5 rounded text-xs bg-gray-100 text-gray-500">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                Period
              </label>
              <div className="flex items-center gap-2 text-sm">
                <input
                  type="text"
                  value={formData.startDate}
                  readOnly
                  className="w-24 px-2 py-1.5 border border-gray-200 rounded text-sm bg-gray-50"
                />
                <input
                  type="text"
                  value={formData.startTime}
                  readOnly
                  className="w-16 px-2 py-1.5 border border-gray-200 rounded text-sm bg-gray-50"
                />
                <span className="text-gray-400">-</span>
                <input
                  type="text"
                  value={formData.endTime}
                  readOnly
                  className="w-16 px-2 py-1.5 border border-gray-200 rounded text-sm bg-gray-50"
                />
              </div>
            </div>
          </div>

          {/* Aircraft */}
          <div>
            <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
              Aircraft
            </label>
            <div className="flex items-center gap-1.5">
              {aircraftOptions.map((aircraft) => (
                <button
                  key={aircraft}
                  onClick={() => setFormData({ ...formData, aircraft })}
                  className={`px-3 py-1.5 rounded text-xs font-medium transition-all ${
                    formData.aircraft === aircraft
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {aircraft}
                </button>
              ))}
            </div>
          </div>

          {/* Instructor + Student */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                Instructor
              </label>
              <div className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg bg-white">
                <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-xs font-medium text-teal-700">
                  C
                </div>
                <span className="text-sm text-gray-900 flex-1">{formData.instructor}</span>
                <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                Student
              </label>
              <div className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg bg-white">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-xs font-medium text-blue-700">
                  D
                </div>
                <span className="text-sm text-gray-900 flex-1 truncate">{formData.student}</span>
                <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Additional Info - Collapsible */}
          <details className="group">
            <summary className="flex items-center gap-2 cursor-pointer text-sm text-teal-600 hover:text-teal-700 font-medium">
              <svg className="w-4 h-4 transition-transform group-open:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              Additional options
            </summary>
            <div className="mt-3 pl-6">
              <textarea
                value={formData.additionalInfo}
                onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                placeholder="Add notes or special instructions..."
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm resize-none h-16"
              />
            </div>
          </details>
        </div>

        {/* Warning Banner - Compact */}
        <div className="mt-5 p-3 bg-red-50 rounded-lg border border-red-200">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span className="text-sm text-red-800 font-medium">PIC unavailable:</span>
            <span className="text-sm text-red-700">Cypress Test is marked unavailable for this period</span>
          </div>
        </div>

        {/* Status Bar */}
        <div className="mt-3 flex items-center gap-2 text-sm">
          <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
            <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-green-700">All validation checks passed</span>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex items-center justify-end gap-3 pt-4 border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave?.(formData, editScope)}
            className="px-5 py-2 text-sm font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition-colors"
          >
            {editScope === 'single' ? 'Save' : `Update ${futureBookingsCount} Bookings`}
          </button>
        </div>
      </div>
    </Modal>
  );
}
