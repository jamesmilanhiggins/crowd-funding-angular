# CrowdFunding

#### _This app lets users view and pledge money towards projects. Admins can log in and edit and add new projects._



#### By _**James Higgins & Ken Rutan**_

## Description

_Users can click on the listed projects to view the project details. If the user would like, they can pledge money towards the specific project. Admins can add and edit projects. Users and admins can feature projects and filter by featured, and filter by category._

## Setup/Installation Requirements

### Firebase Integration

* Create a firebase account at `https://firebase.google.com`
* Add a new project to your firebase account
* Create a file in the app folder labeled api-keys.ts
* Add the following to your api-keys file:

`export var masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };
`
### Access Atom Files

* _Ensure connection to the Internet_
* _On a mac using spotlight search type in terminal_
* _Once in terminal enter the following commands to clone the file to your desktop and open the repository:_
```
$ cd desktop
$ git clone https://github.com/jamesmilanhiggins/crowd-funding-angular
$ cd crowd-funding-angular
$ npm install
$ bower install
$ ng serve
$ open localhost:4200 in your browser
```
or visit live site [here](https://crowd-funding-85940.firebaseapp.com/)


## Known Bugs

* There are no known bugs at this time*


## Support and contact details

_Please contact James Higgins at James.Milan.Higgins@gmail.com if you have any questions._

## Technologies Used

* JavaScript
* Angular
* Node
* Bower
* HTML
* Bootstrap
* Firebase

### License

*This software is licensed under MIT license.*

Copyright (c) 2017 **_James Higgins & Ken Rutan_**

![Homepage](home-page-screenshot.png)
![Detail](detail.png)
