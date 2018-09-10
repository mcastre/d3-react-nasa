# D3 and React - NASA 

D3-driven React app showing NASA historical data

Datasets are public and can be found [here](https://data.nasa.gov/browse?limitTo=datasets).

### Start up
This app uses create-react-app as a base. To view the app locally, follow these steps:

1. Pull down repo to local machine
2. `npm install` to install dependencies
3. `npm start` to run the app
4. Visit `http://localhost:3000` in your browser

### Netlify Live Site
You can visit a live version of this site [here](https://loving-swartz-12bd3b.netlify.com/). Feedback is always appreciated!

### Challenges Faced
The biggest challenge was learning D3 and all of its intricacies in the 3 day time frame and getting a good working app done. Once you learn how to build a basic chart, you also needed to bootstrap it in React, which causes a few headaches because of similarities in how it manipulates the DOM. 

Another major decision you have to make was how to architect the graph with the data you have. In this case, I was able to pick and choose any public dataset and decide how I wanted to display data, and importantly, WHAT data to display. 

The dataset I chose accidentally offered me an interesting boon. Not just because it was from NASA and space science is awesome. Some fields in the data were incomplete. Making sure D3 handled the exceptions and formatting the data to how d3 expects was a good exercise in handling data in real-world situations. You won't always have 100% clean data.

One of the requirements for this exercise was to utilize Redux. While Redux is a fantastic tool and is an excellent choice for dealing with the ever-changing state of a complex application, I think that using Redux for this small app was overkill. Using React's built-in state management (setState, etc), is actually better and more performant for smaller applications that don't require a whole lot of state. Redux can get very verbose and boilerplate-y, you may end up with spaghetti code with all the actions and reducers and dispatch actions when you are trying to avoid spaghetti code by using Redux in the first place. 

Once you figure out how D3 generates its range, domain, axes, etc. it then becomes a simple matter to focus on other parts of the UI. It opens up a lot of options for adding features, and fairly easily, depending on how its architected. Had I more time to work on this, I would add different kinds of charts, have the ability to toggle what data is displayed in the X and Y axis, and throw in some animations.

