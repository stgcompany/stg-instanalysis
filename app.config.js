import 'dotenv/config';

export default {
  expo: {
    name: "STG Instanalysis",
    slug: "stg-instanalysis",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/stg-logo.png",
    userInterfaceStyle: "dark",
    splash: {
      image: "./assets/stg-horizontal.png",
      backgroundColor: "#000000"
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.stginstanalysis.app"
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/stg-logo.png",
        backgroundColor: "#000000"
      },
      package: "com.stginstanalysis.app"
    },
    web: {
      favicon: "./assets/stg-logo.png"
    },
    extra: {
      OPENAI_KEY: process.env.OPENAI_KEY,
      eas: {
        projectId: "c2f2cda9-c004-462b-b39a-a6a2c953394d"
      }
    }
  }
};
