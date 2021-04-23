# Axess

## Inspiration
With the exponential rise of technological developments in the last century, we as a society have witnessed such incredible improvements in our lifetimes that no generation in human history ever has. The internet, without a doubt, is one of the most important inventions that has been positively impacting our lives by being a fast path to information and connecting the entire globe. Unfortunately, it is still not quite accessible for a significant portion of the population: people with disabilities.
Websites and digital materials that are not designed with accessibility in mind, often excluding a significant population of potential users from participating in an internet-dependent world. Unfortunately, information exclusion is a barrier people with disabilities experience on a daily basis. 
For example, 67% of disabled Americans own a desktop or laptop computer, compared with 84% of those in the same age group who don’t have a disability.

## What it does
Axess takes advantage of the popularity of tools such as CodePen and JSBin among those learning web development by offering an **NPM Package** that allows for seamless integration of online IDE's into a web accessibility education tool. This low-overhead solution may be an opportunity to introduce millions of aspiring web developers, regardless of background, to web accessibility.

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
