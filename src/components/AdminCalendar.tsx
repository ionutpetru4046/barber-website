/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useState } from 'react';
import { EventClickArg, DateSelectArg } from '@fullcalendar/core';

export default function AdminCalendar() {
  const [events, setEvents] = useState([
    {
      id: '1',
      title: 'Haircut - John Doe',
      start: '2025-06-26T10:00:00',
      end: '2025-06-26T11:00:00',
    },
    {
      id: '2',
      title: 'Beard Trim - Sarah Smith',
      start: '2025-06-27T14:00:00',
      end: '2025-06-27T14:30:00',
    },
  ]);

  return (
    <div className="bg-white rounded-lg shadow p-4 text-black">
      <h2 className="text-2xl font-semibold mb-4">Booking Calendar</h2>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        selectable={true}
        editable={false}
        events={events}
        height="auto"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
      />
    </div>
  );
}
