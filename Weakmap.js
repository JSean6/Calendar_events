const events = [{
        title: "Meeting",
        date: new Date("2024-03-16T10:00:00"),
        location: "Circular Innovation Hub",
        attendees: new Set(["Jack", "Alice", "Darwin"])
    },
    {
        title: "Luncheon",
        date: new Date("2024-03-17T13:00:00"),
        location: "Restaurant",
        attendees: new Set(["Sarah", "David"])
    },
    {
        title: "Presentation",
        date: new Date("2024-03-18T10:00:00"),
        location: "Conference room",
        attendees: new Set(["Emily", "Michael", "Chris"])
    },
    {
        title: "Private meeting",
        date: new Date("2024-03-19T10:00:00"),
        location: "Conference room",
        attendees: new Set(["Emma", "Antoinne", "George"])
    },
    {
        title: "Zindua School open day",
        date: new Date("2024-03-20T10:00:00"),
        location: "Circular Innovation Hub",
        attendees: new Set(["Elaine", "Alicia", "Nathan", "Bernado"])
    },
    {
        title: "Students Orientation Day",
        date: new Date("2024-03-21T10:00:00"),
        location: "Circular Innovation Hub",
        attendees: new Set(["Alex", "Rodrigo", "Harvey", "Bernice"])
    },
    {
        title: "HTML Introduction",
        date: new Date("2024-03-22T10:00:00"),
        location: "Circular Innovation Hub",
        attendees: new Set(["Elaine", "Joy", "Nunez", "Bernadette"])
    }
];
//const eventOrganizers = new WeakMap();

// Function to set organizer for an event
// function setEventOrganizer(eventTitle, organizerName) {
//     const event = events.find(event => event.title === eventTitle);
//     if (event) {
//         eventOrganizers.set(event, organizerName);
//         console.log(`Organizer ${organizerName} set for event ${eventTitle}`);
//     } else {
//         console.log("Event not found");
//     }
// }
//setEventOrganizer("Meeting", "John");
const eventOrganizers = new WeakMap();

// Function to set organizer for each event
function setEventOrganizers() {
    events.forEach(event => {
        // Example: For each event, the organizer's name is set to "John Doe"
        eventOrganizers.set(event, "Sean Njoroge");
        console.log(`Organizer John Doe set for event ${event.title}`);
    });
}

// Setting organizers for each event
setEventOrganizers();

// Checking the organizers for each event using WeakMap
events.forEach(event => {
    const organizer = eventOrganizers.get(event);
    console.log(`Event: ${event.title}, Organizer: ${organizer}`);
});
// Checking the organizer using WeakMap
const meetingOrganizer = eventOrganizers.get(events[0]);
console.log("Meeting organizer:", meetingOrganizer);

function addAttendee(eventTitle, attendeeName) {
    const event = events.find(event => event.title === eventTitle);
    if (event) {
        event.attendees.add(attendeeName);
        console.log(`${attendeeName} added to ${eventTitle}`);
    } else {
        console.log("Event not found");
    }
}

function eventsArrayToJSON() {
    return JSON.stringify(events.map(event => {
        return {
            ...event,
            formattedDate: event.date.toLocaleDateString("en-US", { month: "2-digit", day: "2-digit", year: "numeric" })
        };
    }));
}

  // Function to add a custom "formattedDate" property to each event object:
  function addFormattedDate(events) {
    return events.map(event => {
      
      const eventDate = new Date(event.date)

      const formattedDate = `${eventDate.getMonth() + 1}/${eventDate.getDate()}/${eventDate.getFullYear()}`;
      // Add formattedDate property to event object:
      return { ...event, formattedDate };
    });
  }
  
  // Function to convert event array to JSON string with custom formatted date
  function eventsToJSON(events) {
    // Add custom formatted date to each event
    const eventsWithFormattedDate = addFormattedDate(events);
    // Convert array to JSON string
    return JSON.stringify(eventsWithFormattedDate);
  }
  
  // To the function and log the result:
  console.log(eventsToJSON(events));

function deleteEvent(eventTitle) {
    const index = events.findIndex(event => event.title === eventTitle);
    if (index !== -1) {
        events.splice(index, 1);
        console.log(`${eventTitle} deleted successfully`);
    } else {
        console.log("Event not found");
    }
}

function findEventWithMostAttendees() {
    return events.reduce((maxEvent, event) => {
        return event.attendees.size > maxEvent.attendees.size ? event : maxEvent;
    });
}


console.log("Events happening in the next 7 days:");
const now = new Date();
const nextWeek = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
const upcomingEvents = events.filter(event => event.date <= nextWeek);
upcomingEvents.forEach(event => {
    console.log(`Title: ${event.title}, Date: ${event.date}`);
});

// To add a new attendee
addAttendee("Meeting", "Eva");

// To delete an event:
deleteEvent("Lunch");

// To event with most attendees:
const eventWithMostAttendees = findEventWithMostAttendees();
console.log("Event with most attendees:", eventWithMostAttendees.title);

  // Function to display events in a table format
  function displayEvents(events) {
    // Table header
    console.log("| Title | Date | Location |");
    console.log("|-------|------|----------|");
  

    events.forEach(({title, date, location}) => {
      // Display events in table format
      console.log(`| ${title} | ${date} | ${location} |`);
    });
  }
  
  displayEvents(events);