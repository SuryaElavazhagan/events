import React from 'react';
import { Event } from '../../model/Event';
import { EventCard } from '../../components/events/EventCard';
import '../../styles/views/event-listing.scss';
import { Link } from 'react-router-dom';

export function EventListing() {
  const events: Event[] = [
    new Event({ name: 'Sai Kishore weds Subashree', linkName: 'sndckbo23208cnow8', views: '175', date: 'Sun Jun 28 2020 12:17:39 GMT+0530 (India Standard Time)', poster: 'https://images.unsplash.com/photo-1553102674-af685bb5fe40' }),
    new Event({ name: 'Webinar', linkName: '2ncisuidb23208cnow8', views: '120', date: 'Sun Jun 28 2020 12:17:39 GMT+0530 (India Standard Time)', poster: 'https://images.unsplash.com/photo-1563986768817-257bf91c5753' }),
    new Event({ name: 'Grahapravesham', linkName: 'sndllaopjmamnsx8', views: '4429', date: 'Sun Jun 28 2020 12:17:39 GMT+0530 (India Standard Time)', poster: 'https://images.unsplash.com/photo-1576941089067-2de3c901e126' }),
    new Event({ name: 'Engagement', linkName: 'sndckjsndknsxca1123cq', views: '994', date: 'Sun Jun 28 2020 12:17:39 GMT+0530 (India Standard Time)', poster: 'https://images.unsplash.com/photo-1488563191899-79b83cb52fb9' })
  ];

  return (
    <section className="event-listing">
      <div className="header">
        <h3 className="header-title">My Events</h3>
        <Link to="/new">
          <svg width="24" height="24" className="add-event">
            <use xlinkHref="/sprite.svg#add" />
          </svg>
        </Link>
      </div>
      <main className="listing">
      {
        events.map(event => <EventCard key={event.linkName} event={event} />)
      }
      </main>
    </section>
  );
}