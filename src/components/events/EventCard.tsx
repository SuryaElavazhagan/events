import React from 'react';
import '../../styles/components/event-card.scss';
import { Event } from '../../model/Event';
import { format } from 'date-fns';

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <div className="event-card">
      <img
        className="poster"
        src={event.poster}
        alt="Event Poster"
      />
      <div className="card event-details">
        <p title={event.name} className="event-name">{ event.name }</p>
        <p className="event-stats">
          on { format(event.date, 'dd MMM, yyyy') }
          <span className="event-stats-separator"></span>
          { event.views } views
        </p>
      </div>
    </div>
  );
}