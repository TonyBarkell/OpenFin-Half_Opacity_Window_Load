# OpenFin - Open a Window at half Opacity untill the DOM conetent is loaded

This project explains how to Open an application, or child window a half opacity until the DOM content load is complete,

## Installing and running the project

Installing:

     npm install

Running

    npm start

## Loading a window at half Opacity

To create the a window at half opacity add the following paramters to either the 'startup_app' object in the application configuration for the main application window, or to the Window Options of a child window:

    "opacity" : 0.5,
    "waitForPageLoad" : false,
    
See https://developers.openfin.co/docs/application-configuration / https://developer.openfin.co/docs/javascript/stable/Window.html#~options

## Updating the opacity

The example code is conatined in `public\app\scripts\main.js`, comments have been added to the code at the start of the file.

A DOMContentLoaded listener is added to the current Window.  The Listerner executes the Window.animate() OpenFin API with a opcacity transition configured.
