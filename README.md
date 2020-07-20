## Thanks to [CJ](https://github.com/w3cj) [Coding Garden](https://www.youtube.com/channel/UCLNgu_OupwoeESgtab33CCw)

## Front-end

- [x] Create client folder
- [x] Setup index.html
- [x] Bring in Skeleton CSS
  - http://getskeleton.com/
  - https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css
- [x] Create Header
- [x] Create form
  - [x] Name
  - [x] Content
  - [x] u-full-width to both inputs
- [x] Listen for form submit
- [x] Hide the form
- [x] Show loading spinner
- [x] Get data from form and log it
- ✅ Get user input on the Client
- ✅ Hide/Show elements on the client

## Back-end

- [ ] Create server folder
- [ ] npm init -y
- [ ] npm install express morgan
- [ ] Setup index.js
- [ ] Add GET / route
- [ ] Add POST /mews route
  - [ ] log out req.body

## Front-end

- [ ] fetch POST /mews with form data
- [ ] See the CORS error and revel in this moment
- ✅ Send user input from the client with fetch to the server

## Back-end

- [ ] npm install cors
- [ ] Make sure the server is recieving the data
- [ ] Add JSON body parser middleware
- [ ] Validate name and content
  - [ ] Must be a string
  - [ ] Cannot be empty
- [ ] If not valid
  - [ ] Error code 422
  - [ ] Invalid mew, must contain name and content
- [ ] Setup DB Connection
  - [ ] npm install monk
  - [ ] connect to db
  - [ ] create document collection (mews)
- [ ] If Valid
  - [ ] Create mew object with
    - [ ] name, content, created_date
  - [ ] Insert into DB
  - [ ] Respond with created mew object
- ✅ Store data in a database

## Front-end

- [ ] Log out created Mew after POST request
- [ ] Show the form
- [ ] Hide loading spinner

## Back-end

- [ ] GET /mews
  - [ ] Respond with mews from DB
- ✅ Retrieve data from a database on the Server

## Front-end

- [ ] fetch GET /mews
  - [ ] Iterate over array
  - [ ] Append each to page
  - [ ] Reverse before appending
  - [ ] Show the form
  - [ ] Hide loading spinner
- [ ] fetch GET /mews after creating a mew
- ✅ Retrieve data from a server on the client using Fetch
- ✅ Hide/Show elements on the client
- ✅ Add elements to the page on the client

## Back-end

- [ ] npm install bad-words
  - [ ] Use filter before inserting into DB
- [ ] npm install express-rate-limit
  - [ ] Limit to 1 request every 15 seconds

## Deploy

- ✅ Deploy server with now
  - [ ] Setup environment variables
    - [ ] Database connection
      - process.env.MONGO_URI
  - ✅ Show mlab
  - [ ] Deploy with environment variable
    - now -e MONGO_URI=@meower-db
  - [ ] Add alias
- ✅ Deploy client folder with now
  - [ ] Set API_URL based on hostname

## What's next?

- Add comments/replies to a mew
- User Accounts
  - Don't just have the user enter their name
  - Sign up/Login
- User Profiles
  - Only show mews from a given user
- Search Mews
- Hashtags
- User @mentions
- Realtime feed of mews
