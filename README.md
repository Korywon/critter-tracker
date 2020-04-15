# AC:NH Critter Tracker

This was originally created to have a simple way of tracking the current statuses of all critters (bugs and fishes) in Animal Crossing: New Horizons. Due to the mass amount of information floating around the web, it is a rather nice way of consolidating information in a single spot, while presenting it in a clean, simple way. Less time clicking links, more time catching critters.

This web application is still under construction and will continue to be.

# Link to Website

The web app is current being deployed automatically with each commit to ZEIT. You can check it out here:

https://critter-tracker.now.sh/

# General Design

The web application was built using the ReactJS library and the Node framework. The app does have test suites in order to test the utility classes that assists with calculations and among other functions that are essential. Components are modularized in order to reduce the complexity of each file and for an easier time debugging the app.

# Data

The data on each entry of the bugs and fishes are stored in `bug.json` and `fish.json`, respectively. They are located under `public/data`. For now, the data is available to the public, but might be migrated to the `src` folder if there is too much traffic (e.g. people making get requests to the web app for data).

If there are any issues with the data (i.e. wrong data or inconsistencies), make an issue with a screenshot of your game containing the data or a link to the source. There is a lot of data, so any help is appreciated!
