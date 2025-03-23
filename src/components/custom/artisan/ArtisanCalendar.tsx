"use client"

import React from 'react';
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";

const ArtisanCalendar = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  // Example event dates (you would fetch these from an API in a real app)
  const eventDates = [
    new Date(2023, 6, 5),  // July 5, 2023
    new Date(2023, 6, 12), // July 12, 2023
    new Date(2023, 6, 20), // July 20, 2023
  ];
  
  // Function to check if a date has events
  const hasEvent = (day: Date) => {
    return eventDates.some(eventDate => 
      eventDate.getDate() === day.getDate() &&
      eventDate.getMonth() === day.getMonth() &&
      eventDate.getFullYear() === day.getFullYear()
    );
  };

  return (
    <Card className="bg-white border-dori/10">
      <CardContent className="p-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
          modifiers={{
            hasEvent: eventDates,
          }}
          modifiersStyles={{
            hasEvent: {
              fontWeight: 'bold',
              backgroundColor: 'rgba(13, 42, 96, 0.1)',
              color: '#0D2A60',
              borderRadius: '50%',
            }
          }}
        />
      </CardContent>
    </Card>
  );
};

export default ArtisanCalendar; 