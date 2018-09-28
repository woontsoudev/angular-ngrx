// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  usersApi: 'http://1fbusa-uaa-service-dev.us-east-1.elasticbeanstalk.com:8080',
  propertiesApi:
    'http://1fbusa-properties-service-dev.us-east-1.elasticbeanstalk.com:8080',
  carsDemoApi: 'http://localhost:3000'
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
