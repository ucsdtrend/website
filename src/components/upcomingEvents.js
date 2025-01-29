import React from "react";
import "../styles/upcomingEvents.scss";
import event1 from "../static/events/diorama.jpg";

class upcomingEvents extends React.Component {

    render() {

        const events = [
            {
                title: "Diorama",
                description: "Join us next Friday for our F/W 2025 issue launch party! With this issue, we explore DIORAMA—a realm of intersecting narratives and liminal spaces, those in-betweens that lie at the heart of our existence. Come celebrate our team’s work, get insight into different pieces in the zine, and buy your copy!",
                image: event1,
                location: "The Forum @ Price Center",
                date: "31 January 2025",
                time: "5PM - 8PM",
                url: "https://www.instagram.com/p/DFLrIAbzIOL/?img_index=1"
            }
        ];

        return (
            <div className="events-container">
                <div className="event-header">
                    <p className="event-landing">Upcoming Events</p>
                    <button className="event-button" onClick={() => window.open('https://medium.com/@trenducsd', '_blank')}>
                            View events
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="11" height="11" fill="currentColor" class="event-arrow">
                                <path d="M3.41 2H16V0H1a1 1 0 0 0-1 1v16h2V3.41l28.29 28.3 1.41-1.41z"/>
                            </svg>
                    </button>
                </div>
                <div className="event-body">
                {events.map((events, index) => (
                    <div key={index} className="event-card">
                        <img
                            className="images-container"
                            src={events.image}
                            alt={`Events ${index}`}
                            onClick={() => window.open(events.url, '_blank')} 
                            style={{ cursor: 'pointer' }} 
                        ></img>
                        <div className="event-details">
                            <p className="event-title">{events.title}</p>
                            <p className="event-description">
                                {events.description}
                            </p>
                        </div>

                        <div className="event-when">
                            <p className="event-location">{events.location}</p>
                            <p className="event-date">{events.date}</p>
                            <p className="event-time">{events.time}</p>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        );
    }

}

export default upcomingEvents;