declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: "development" | "production" | "test";

    //Firebase 関連
    //Firebase ApiKey
    readonly VUE_APP_apiKey: string;

    //Firebase ApiKey
    readonly VUE_APP_authDomain: string;

    //Firebase ApiKey
    readonly VUE_APP_databaseURL: string;

    //Firebase ApiKey
    readonly VUE_APP_projectId: string;

    //Firebase ApiKey
    readonly VUE_APP_storageBucket: string;

    //Firebase ApiKey
    readonly VUE_APP_messagingSenderId: string;

    //Firebase ApiKey
    readonly VUE_APP_appId: string;

    //Firebase ApiKey
    readonly VUE_APP_measurementId: string;
  }
}
