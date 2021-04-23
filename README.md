<p align="center">
<img src="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/486/906/datas/gallery.jpg" alt="Axess Logo"/>
</p>

# Axess

### [Winner of "Best Health or Social Good Hack" at Hacktech 2021](https://devpost.com/software/axess)

## What it does
Axess takes advantage of the popularity of tools such as CodePen and JSBin among those learning web development by offering an **NPM Package** that allows for seamless integration of online IDE's into a web accessibility education tool. This low-overhead solution may be an opportunity to introduce millions of aspiring web developers, regardless of background, to web accessibility.

## Get started
In an online IDE with node module integration set up (with a bundler such as webpack or rollup)
```bash
npm i axess
npm i --save-exact axe-core@4.0.2
```

Once these packages are installed, import axess's register function and invoke it in the app's entry-point with an optional selector to the iframe element.

The following is an example written in React
```javascript
import React, { useEffect } from "react";
import Interface from "./components/Interface";
import { register } from "axess";

function App() {
  useEffect(function () {
    register("#iframe-id");
  }, []);
  return <Interface />;
}

export default App;
```
Ensure that the register function is invoked after the iframe element is painted to the DOM.

## How we built it
To demonstrate how Axess would be used, we created an online IDE where the user is able to write and run HTML, CSS, Javascript. We take the user's code and run accessibility tests and then send the test results to our UI where we flag the issues. By clicking on the flag, the user sees an explanation of the issue and a solution to fix the problem. By clicking the "Learn More", the user can dive deeper into the best practices about creating accessible web applications. We also store web accessibility violation corrections in Firebase. After the user makes a correction, we send the initial code sample (the inaccessible code) and the corrected code (the accessible code) to Firebase where we compare the incorrect and correct codes for Machine Learning

## Challenges we ran into
Our initial plan was to create a Chrome Extension using React. However, we were not able to run the test and display the flags after each time update on the user's code due to mixtures of complications encountered in both the Front-end and Back-end of the development. Therefore, we switched our plans to create an NPM package that can be integrated into any online IDE seamlessly. 

## Accomplishments that we're proud of
We are proud of the data we collect and store for Machine Learning to automate fixing Web accessibility issues and the seamless integration into any online IDE platform.

## What we learned
We learned to use cloud technologies and creating NPM packages. We also improved our Front-end and Back-end developer skills. 
## What's next for Axess
We hope to teach beginners (aka future programmers) the best practices for making an accessible web application. We also use the data we collect to 
