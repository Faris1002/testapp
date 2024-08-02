Event Booking System Assessment 

email:farismuhammed.k2001@gmail.com reg.no:20MIS0218 

Objective: Create a basic system that tracks bookings for various events using Node.js, TypeScript, Express.js, and MongoDB. 

POST /events: Create a new event. The request body should contain the event name, date, and total number of tickets. 

![](Aspose.Words.452d453b-367c-4d8c-bd84-fe74dbb4b5b3.001.jpeg)

![](Aspose.Words.452d453b-367c-4d8c-bd84-fe74dbb4b5b3.002.jpeg)

![](Aspose.Words.452d453b-367c-4d8c-bd84-fe74dbb4b5b3.003.jpeg)

POST /bookings: Book tickets for an event. The request body should contain the user ID, quantity and event ID 

![](Aspose.Words.452d453b-367c-4d8c-bd84-fe74dbb4b5b3.004.jpeg)

Booking Limit: 

Each user can book a maximum of 15 tickets per booking request. This means that if a user tries to book more than 15 tickets in a single request, the system should only process up to 15 tickets and reject any additional requests in that transaction. 

![](Aspose.Words.452d453b-367c-4d8c-bd84-fe74dbb4b5b3.005.jpeg)

Availability Check: 

- Before confirming the booking, the system must check if there are enough tickets available for the event. If the event has reached its maximum capacity (i.e., no more tickets are available), the system should prevent further bookings and inform the user that the event is fully booked. 
- Adding an event dance show with 50 tickets: 

![](Aspose.Words.452d453b-367c-4d8c-bd84-fe74dbb4b5b3.006.jpeg)

- User123 book 10 tickets for the show 

![](Aspose.Words.452d453b-367c-4d8c-bd84-fe74dbb4b5b3.007.jpeg)

- User901 book 15 tickets for the show 

![](Aspose.Words.452d453b-367c-4d8c-bd84-fe74dbb4b5b3.008.jpeg)

- User201 cannot book 15 tickets for the show because there is only 5 more tickets 

![](Aspose.Words.452d453b-367c-4d8c-bd84-fe74dbb4b5b3.009.jpeg)

DELETE /bookings/:id: Cancel a booking by ID. 

![](Aspose.Words.452d453b-367c-4d8c-bd84-fe74dbb4b5b3.010.jpeg)

GET /events: Retrieve a list of events with available tickets. 

![](Aspose.Words.452d453b-367c-4d8c-bd84-fe74dbb4b5b3.011.jpeg)

GET /events/:id: Retrieve details of a specific event, including booked tickets and remaining tickets. 

![](Aspose.Words.452d453b-367c-4d8c-bd84-fe74dbb4b5b3.012.jpeg)

POST /print-ticket: This endpoint allows users to print a ticket for a specific booking. It generates a printable format of the ticket, which includes details of the event and booking. 

![](Aspose.Words.452d453b-367c-4d8c-bd84-fe74dbb4b5b3.013.jpeg)

**VS CODE AND MONGO DB SCREENSHOTS ![](Aspose.Words.452d453b-367c-4d8c-bd84-fe74dbb4b5b3.014.png)![](Aspose.Words.452d453b-367c-4d8c-bd84-fe74dbb4b5b3.015.png)**

![](Aspose.Words.452d453b-367c-4d8c-bd84-fe74dbb4b5b3.016.jpeg)

![](Aspose.Words.452d453b-367c-4d8c-bd84-fe74dbb4b5b3.017.jpeg)

![](Aspose.Words.452d453b-367c-4d8c-bd84-fe74dbb4b5b3.018.jpeg)

![](Aspose.Words.452d453b-367c-4d8c-bd84-fe74dbb4b5b3.019.png)

