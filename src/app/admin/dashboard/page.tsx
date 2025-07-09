'use client';

import { useState, useMemo } from 'react';
import AdminCalendar from '@/components/AdminCalendar';

type BookingStatus = 'pending' | 'confirmed' | 'cancelled';

interface Booking {
  id: number;
  customerName: string;
  service: string;
  date: string;
  time: string;
  status: BookingStatus;
}

const initialBookings: Booking[] = [
  {
    id: 1,
    customerName: 'John Doe',
    service: 'Haircut',
    date: '2025-07-01',
    time: '10:00 AM',
    status: 'pending',
  },
  {
    id: 2,
    customerName: 'Jane Smith',
    service: 'Beard Trim',
    date: '2025-07-02',
    time: '11:30 AM',
    status: 'confirmed',
  },
];

export default function AdminDashboard() {
  const [bookings, setBookings] = useState<Booking[]>(initialBookings);
  const [search, setSearch] = useState('');

  const filteredBookings = useMemo(() => {
    if (!search) return bookings;
    return bookings.filter(
      (b) =>
        b.customerName.toLowerCase().includes(search.toLowerCase()) ||
        b.service.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, bookings]);

  const updateStatus = (id: number, status: BookingStatus) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status } : b))
    );
  };

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto bg-gradient-to-br from-[#111827] via-[#1f2937] to-[#374151] pt-32 pb-20">
      <h1 className="text-3xl font-bold mb-6 text-white">Admin Dashboard - Bookings</h1>

      <input
        type="text"
        placeholder="Search by customer or service..."
        className="mb-6 p-2 border border-gray-300 rounded w-full max-w-md"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="w-full overflow-x-auto mb-10">
        <table className="w-full min-w-[700px] border border-gray-700">
          <thead>
            <tr className="bg-gray-800 text-left text-white">
              <th className="p-3 border border-gray-600">Customer</th>
              <th className="p-3 border border-gray-600">Service</th>
              <th className="p-3 border border-gray-600">Date</th>
              <th className="p-3 border border-gray-600">Time</th>
              <th className="p-3 border border-gray-600">Status</th>
              <th className="p-3 border border-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center p-4 text-white">
                  No bookings found.
                </td>
              </tr>
            ) : (
              filteredBookings.map((b) => {
                const bgClass =
                  b.status === 'confirmed'
                    ? 'bg-green-800'
                    : b.status === 'pending'
                    ? 'bg-yellow-800'
                    : 'bg-red-800';

                return (
                  <tr key={b.id} className={`${bgClass} text-white`}>
                    <td className="p-3 border border-gray-600">{b.customerName}</td>
                    <td className="p-3 border border-gray-600">{b.service}</td>
                    <td className="p-3 border border-gray-600">{b.date}</td>
                    <td className="p-3 border border-gray-600">{b.time}</td>
                    <td className="p-3 border border-gray-600 capitalize">{b.status}</td>
                    <td className="p-3 border border-gray-600 space-x-2">
                      <button
                        onClick={() => updateStatus(b.id, 'confirmed')}
                        disabled={b.status === 'confirmed'}
                        className={`px-3 py-1 rounded text-sm font-semibold ${
                          b.status === 'confirmed'
                            ? 'bg-green-600 cursor-not-allowed'
                            : 'bg-green-500 hover:bg-green-600'
                        } text-white`}
                      >
                        Confirm
                      </button>
                      <button
                        onClick={() => updateStatus(b.id, 'cancelled')}
                        disabled={b.status === 'cancelled'}
                        className={`px-3 py-1 rounded text-sm font-semibold ${
                          b.status === 'cancelled'
                            ? 'bg-red-600 cursor-not-allowed'
                            : 'bg-red-500 hover:bg-red-600'
                        } text-white`}
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Calendar Section */}
      <div className="bg-gray-900 p-4 rounded shadow-lg">
        <h2 className="text-2xl font-semibold text-white mb-4">Calendar View</h2>
        <div className="w-full overflow-x-auto">
          <AdminCalendar />
        </div>
      </div>
    </div>
  );
}
