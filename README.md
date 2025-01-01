![Instanalysis Banner](/assets/banner.png)

# STG Instanalysis

Instanalysis was developed by Eduardo Chavesa for a quick college project on a Mobile Development course using React Native.


### Install on your Cellphone

- [Play Store](https://play.google.com/store/apps/details?id=com.stginstanalysis.app);
- We didn't published on App Store as we had some difficulties on STG's Apple Connect Account.

## Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Running the Application](#running-the-application)

## Overview

Having STG Company as the stakeholder, we diceded to develop a mobile application that will help the clients with their organic marketing on Instagram.

We decided to use AI in a conversation form to make the onboarding of the user and understand his social media contents, niche, performance, etc.

To then finally give a feedback with a SWAT analysis and a score (0-100) of the user's Instgram profile. Giving some ideas on how to improve his content and perfomance.

As it was a quick project for a semester course I decided to just create a simple front-end without any back-end or database, just storing some data using AsyncStorage from React Native. 

## Technologies Used

- **React Native**: A JavaScript library for building user interfaces. It allows us to create reusable UI components.
- **Expo**: Expo is an open-source platform for making universal native apps for Android, iOS, and the web with JavaScript and React.
- **OpenAI API**: The most powerful platform for building AI products. Build and scale AI experiences powered by industry-leading models and tools.
- **react-native-sparkle-ai-chat**: Bring AI Chat to your react native app!

## Installation

Before you start, ensure you have `node` and `npm` installed on your machine. 

### Repository Dependencies

1. **Clone the repository**:

    ```bash
    git clone git@github.com:stgcompany/stg-instanalysis.git
    ```

2. **Navigate to the repository**:

    ```bash
    cd stg-instanalysis
    ```

3. **Install the dependencies**:

    ```bash
    npm install
    ```

### Mobile Emulation Dependencies

#### Android:

1. Install Andoid Studio;
2. Configure your environment variables (based on your OS) from Android Studio for the emulation to work;
3. Install and set a default android emulator
4. Install and set your Android SDK (API 34 recommended)

#### iOS:

1. Use a MacOS hardware (recommended);
2. Install XCode;
3. Install and set your desired iPhone version.

## Running the Application

Use one of these:

```bash
npm start
npm android
npm ios
npm web
```
You will be able to run the app on your default cellphone emulator installed on your machine or via the Expo app on your own cellphone.

Install the Expo app on Play Store or App Store and scan the QRCode on terminal to run on your own cellphone.
