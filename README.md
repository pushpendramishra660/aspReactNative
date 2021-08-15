# Overview

this a sample projet which is created to show UI design of debit card and tabbar.
## Prerequisites

- [Node.js > 12](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Watchman](https://facebook.github.io/watchman)
- [Xcode 12](https://developer.apple.com/xcode)
- [Cocoapods 1.10.1](https://cocoapods.org)
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)

## Base dependencies

- [prop-types](https://github.com/facebook/prop-types) to type-check our components exposed properties.
- [react-navigation](https://reactnavigation.org/) navigation library.
- [react-native-progress-bar-animated](https://www.npmjs.com/package/react-native-progress-bar-animated) customizable and animated progress bar.
- [react-native-responsive-screen](npmjs.com/package/react-native-responsive-screen) for response ui design.
- [react-native-vector-icons](https://www.npmjs.com/package/react-native-vector-icons) buttons, logos and nav/tab bars icons.

## Install Project Libraries


After that you should proceed as with any javascript project:

- Go to your project's root folder and run `yarn install`.
- If you are using Xcode 12.5 or higher got to /ios and execute `pod install --`repo-update`
- Run `npx react-native run-ios` or `npx react-native run-android` to start your application!


## Folder structure

Project folder architecture as follows:

- `src`: This folder is the main container of all the code inside application.
  - `assets`: Asset folder to store all images,fonts, vectors, etc.
  - `components`: Folder to store any common component that you use through your app (such as a generic button)
  - `constants`: Folder to store any kind of constant that you have.
  - `navigation`: Folder to store all the navigation stack.
  - `screens`: Folder that contains all your application screens/features.
  - `services`: Folder to store application api services.
  - `App.js`: Main component that starts your whole app.
  - `index.js`: Entry point of application as per React-Native standards.
