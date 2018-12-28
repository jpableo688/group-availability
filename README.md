# Group Availability
- A quick utility/application to view your friend's availability.
- Each user can view days where everyone is available enter in their availability.

## Usage
Host on a web hosting site. The current build is capable of being hosted on Heroku easily.

## How This Works
- Using a Firebase backend, each user will enter their name and dates when they are available. Once they submit the form, the user will be taken back to the home page to view their availability being added and other people's availabilty. The object being sent to firebase is the user's name as the key and the user's name as an attribute and their array of dates as the other attribute.
- The frontend of this application gets the data from the Firebase database and renders different tables to display which days have the most users who are available.

## Disclaimer
Project is intended as a quick tool to plan a get together. Mainly functional but will contain bugs.
