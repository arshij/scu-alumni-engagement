CREATE TABLE events(
	eventid varchar(255) PRIMARY KEY,
	eventdate varchar(255),
	eventtime varchar(255),
	eventname varchar(255),
	eventdescription varchar(1500),
	eventlocation varchar(255),
	eventpostedby varchar(255),
	eventemail varchar(255),
	eventapproved varchar(255)
);


CREATE TABLE attendees(
	eventid varchar(255),
	attendeefirstname varchar(255),
	attendeelastname varchar(255),
	attendeegradyear varchar(255),
	attendeeemail  varchar(255),
	guestcount varchar(255)
);


CREATE TABLE users(
	username varchar(255) PRIMARY KEY,
	studentid varchar(255)

);
