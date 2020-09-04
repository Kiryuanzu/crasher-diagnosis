// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

//apiKeyはfirebase上でパブリック情報として扱われるので公開しても問題ないとのこと
export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCZUpxDatVcr86OVlQYQtmBifzCktto_nw',
    authDomain: 'circlecrusher-diagnosis.firebaseapp.com',
    databaseURL: 'https://circlecrusher-diagnosis.firebaseio.com',
    projectId: 'circlecrusher-diagnosis',
    storageBucket: 'circlecrusher-diagnosis.appspot.com',
    messagingSenderId: '158476269900',
  },
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
