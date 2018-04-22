# Front end of puppy monitoring application

This is the front end of Puppy monitoring application.
It is responsible for managing the Command Line Interface, sending requests to the back end and displaying informations.

Learn more in PUPPY.md

Table of Contents:
- Launch the front end in development environment
- Usage
- Architecture of the front end
- Tests




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




## Usage

The global syntax is `node puppy [options] [command]` or `puppy [options] [command]` if you set up the global command.
You can get more information using `node puppy --help`.

Here is a list of all the commands of Puppy:

- `add <website> <url> <check_interval>` : Add a website to monitoring
      `<website> [string]` the name of the website
      `<url> [string]` the url of the website
      `<check_interval> [number]` the time interval between each website check (in second)

- `list` : List all monitored websites

- `update [options] <website>` : Update the given fields of the website
      `-n --name [string]` the new name of the website
      `-u --url [string]` the new url of the website
      `-i --interval [number]` the new time interval between website checks (in seconds)

- `remove <website>` : Remove the website given by its name <website>

- `check` : Start the checking of all the websites on the remote server
    **Warning:** the checking will not stop until `stop` command is run, even if this shell is closed

- `stop` : Stop the checking of all websites

- `monitor` : Start the monitoring of websites. End the monitoring by pressing Escape, q or CTRL+C in this shell.

- `history`: Get the history of past alerts

- `test` : Add the alert and the response codes test routes to the website list.


## Architecture of the front end

The front end run with **Node.js**. It is based on a few modules such as:
- **Commander** for the CLI
- **Axios** for the HTTP requests
- **Blessed** for the custom terminal interface

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