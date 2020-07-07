import React, { useState } from 'react';
import '../../styles/components/event-card.scss';
import { Event } from '../../model/Event';
import { format } from 'date-fns';

interface EventCardProps {
  event: Event;
}

type EventAction = 'rename' | 'delete' | 'download' | 'share';

export function EventCard({ event }: EventCardProps) {
  const [showOptions, setShowOptions] = useState(false);

  function toggleOptions() {
    setShowOptions(!showOptions);
  }

  function handleAction(action: EventAction) {
    switch(action) {
      default:
        throw new Error('Method not implemented yet!');
    }
  }
  
  return (
    <div className="event-card">
      <img
        className="poster"
        src={event.poster}
        alt="Event Poster"
      />
      <div className="card event-details">
        <div className="card-content">
          <p title={event.name} className="event-name">{ event.name }</p>
          <p className="event-stats">
            on { format(event.date, 'dd MMM, yyyy') }
            <span className="event-stats-separator"></span>
            { event.views } views
          </p>
        </div>
        <svg onClick={toggleOptions} className="event-options-trigger" width="24" height="24">
          <use xlinkHref="/sprite.svg#more" />
        </svg>
        {
          showOptions ? (
            <div className="event-options">
              <span onClick={() => handleAction('rename')}>Rename</span>
              <span onClick={() => handleAction('share')}>Share</span>
              <span onClick={() => handleAction('download')}>Download</span>
              <span onClick={() => handleAction('delete')} className="delete">Delete</span>
            </div>
          ) : undefined
        }
      </div>
    </div>
  );
}