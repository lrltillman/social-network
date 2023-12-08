# 18 NoSQL: Social Network API

## Description

This app is a back-end only database application that runs on a local server and uses a Mongo database. This app can only be used by booting up the server on the CLI and seeing and manipulating data in Insomnia or Postman. 

## Tech Stack

This app utilizes JavaScript, node.js (dependencies express and mongoose), and Insomnia to showcase the demo video.

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Things to fix

I was not able to complete this assignment to the degree that I originally wanted, so not all of the criteria will be met. In my video, I showcase I routes I was able to get working, and I also showcase a couple of the routes that resulted in errors. I also need to resolve the broken association between User and Thought models.

## Walkthrough video

[Link to video here](https://drive.google.com/file/d/1DxZa8z8ad3aPmfMsJj70-0jEoJMBT-Sm/view)

## Collaborators

I received help on this assignment from tutors Brandon Rose and Andrew Hardemon.