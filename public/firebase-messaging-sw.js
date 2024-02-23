/*
Give the service worker access to Firebase Messaging.
Note that you can only use Firebase Messaging here, other Firebase libraries are not available in the service worker.

   
/*
Initialize the Firebase app in the service worker by passing in the messagingSenderId.
* New configuration for app@pulseservice.com
*/
firebase.initializeApp({
    apiKey: "AIzaSyDZJJv38F1nEqtYcFaarfdbQjM7BJMxxp4",
    authDomain: "spry-autumn-415104.firebaseapp.com",
    // databaseURL: "https://XXXX.firebaseio.com",
    projectId: "spry-autumn-415104",
    storageBucket: "spry-autumn-415104.appspot.com",
    messagingSenderId: "505686401912",
    appId: "1:505686401912:web:94e494f098d4fa61e05e8d",
    measurementId: "G-JY6BB6T5D0"
    });
  
/*
Retrieve an instance of Firebase Messaging so that it can handle background messages.
*/
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
    console.log(
        "[firebase-messaging-sw.js] Received background message ",
        payload,
    );
    /* Customize notification here */
    const notificationTitle = "Background Message Title";
    const notificationOptions = {
        body: "Background Message body.",
        icon: "/itwonders-web-logo.png",
    };
  
    return self.registration.showNotification(
        notificationTitle,
        notificationOptions,
    );
});