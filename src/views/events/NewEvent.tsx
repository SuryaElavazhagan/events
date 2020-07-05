import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/views/new-event.scss';


// TODO: Need to add third step

interface EventDetails {
  name: string;
  description: string;
  poster: string;
  isLive: boolean;
  disableComments: boolean;
  scheduleTime?: number;
}

export function NewEvent() {
  const [currentStep, setCurrentStep] = useState(0);
  const stepHeader = [
    'Let’s start the next event',
    'Why don’t we add a face to your event?',
    'Let’s configure the basics before we start the event'
  ];
  const eventDetails: EventDetails = {
    name: '',
    description: '',
    poster: '',
    isLive: false,
    disableComments: false,
  };

  function handleSubmit() {
    switch (currentStep) {
      case 0:
        const eventName = document.getElementById('eventName') as HTMLInputElement;
        const eventDescription = document.getElementById('eventDescription') as HTMLTextAreaElement;
        if (eventName.value !== '') {
          eventDetails.name = eventName.value;
          eventDetails.description = eventDescription.value;
          setCurrentStep(1);
        }
        break;
    }
  }

  function renderCurrentStep() {
    switch(currentStep) {
      case 0:
        return (
          <div className="step-one">
            <div>
              <label htmlFor="eventName">Name for the event</label>
              <input type="text" id="eventName" />
            </div>
            <div>
              <label htmlFor="eventDescription">A few words about the event</label>
              <textarea name="Event Description" id="eventDescription"></textarea>
            </div>
            <button className="step-one-next next-button" type="submit" onClick={handleSubmit}>Next</button>
          </div>
        );
      case 1:
        return (
          <div className="step-two">
            <p>Cover image for the event <span className="optional-hint">(optional)</span></p>
            <div className="poster-input">
              <svg width="50" height="50">
                <use xlinkHref="/sprite.svg#camera" />
              </svg>
            </div>
            <div className="bottom-bar">
              <span>Cancel</span>
              <span>Back</span>
              <button type="submit" className="next-button">Next</button>
            </div>
          </div>
        );
    }
  }
  return (
    <div className="new-event">
      <div className="header">
        <Link to="/">
          <svg width="24" height="24" className="back">
            <use xlinkHref="/sprite.svg#back" />
          </svg>
        </Link>
        <h3>{ stepHeader[currentStep] }</h3>
      </div>
      {
        renderCurrentStep()
      }
    </div>
  );
}