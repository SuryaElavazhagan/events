import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Toggle from 'react-toggle';
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
  const [currentStep, setCurrentStep] = useState(2);
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
      case 1:
        setCurrentStep(2);
        break;
    }
  }

  function handleBack() {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
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
              <span>
                <Link to="/">Cancel</Link>
              </span>
              <span onClick={handleBack}>Back</span>
              <button type="submit" className="next-button">Next</button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="step-three">
            <div className="configuration">
              <p>
                Stream the event live? (enabling this will stream the event from third party services)
              </p>
              <Toggle
                className="toggle"
                icons={false}
              />
            </div>
            <div className="configuration">
              <p>
              Allow participants to comment? (disabling this will not show the chatroom)
              </p>
              <Toggle
                className="toggle"
                icons={false}
              />
            </div>
            <div className="configuration">
              <p>
              Schedule the event to a later date/time?
              </p>
              <Toggle
                className="toggle"
                icons={false}
                disabled={true}
              />
            </div>
            <div className="bottom-bar">
              <span>
                <Link to="/">Cancel</Link>
              </span>
              <span onClick={handleBack}>Back</span>
              <button type="submit" className="next-button">Start</button>
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
        <h3 className="header-title">{ stepHeader[currentStep] }</h3>
      </div>
      {
        renderCurrentStep()
      }
    </div>
  );
}