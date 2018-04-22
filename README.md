# Front end of puppy monitoring application

This is the front end of Puppy monitoring application.
It is responsible for managing the Command Line Interface, sending requests to the back end and displaying informations.

Table of Contents:
- Launch the front end in development environment
- Architecture of the front end

## Use the front end in development environment

The front end requires the back end containers to run **on the same computer** to be functional.
Please start by running the back end (see README.md in Puppy back end repository)

To use the front end
- Install Node.js, if it is not already done
- Open a terminal at the front end folder
- Run `npm install` to install dependencies
- Run `node puppy` to display the welcome message from puppy

Now you can run puppy commands using the syntax `node puppy <command>`
For instance, run `node puppy --help` to see the list of available commands

### Communicate with the back end using Windows and Docker Toolbox

On **Windows**, you can run the back end using **Docker Toolbox**. The containers will run on a Docker Virtual Machine which has **a different IP adresse than localhost**.
Container ports are mapped to the Docker VM IP adresse and not to the localhost.

Therefore, to be able to communicate with the back end, you have to do the following modification:
- Run `docker-machine ip` to get the IP adress of the docker machine
- Copy this IP adress
- Open *config.json* file
- Replace *localhost* by the docker-machine IP adress

### Make puppy command global

- Open a terminal at the front end folder
- Run `sudo npm link` to make puppy a global command
- Run `puppy` to display welcome message from puppy

Now you can run puppy commands using the syntax `puppy <command>`
For instance, run `puppy --help` to see the list of available commands

## Architecture of the front end

The front end mainly consist of several commands. These commands are defined in the *puppy.js* file.
Each command calls a function defined in a file located in *src/*.

*Displayers* are the functions responsible for displaying the informations sent by the back end.
They can be found in the *src/displayer/* folder.

The `puppy monitor` command line uses **blessed** module to render a customized terminal interface which display alerts and statistics. It uses box components defined in the *src/blessedComponent* folder.

## Tests

When `puppy monitor` command is running, the back end send alerts to the front end:
- **DOWN** alerts are sent when the availability of a website goes under 80% for the last 2 minutes
- **UP** alerts are sent when the availability of a website goes back over 80% for the last 2 minutes

To test the alerts, the back end exposes a route. It simulates a website that periodically breaks and goes back up.
While monitoring this route, the back end will regularly send *down* and *up* alerts.

There is also a response codes test route. It generates random status codes in the response. The back end will record the number of each codes and send it in the statistics.

To monitor these routes, use the following commands:
- `puppy test` to add the tests route 
- `puppy monitor` to start monitoring the websites