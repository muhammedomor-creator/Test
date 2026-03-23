// --- PUSH NOTIFICATION FEATURE START ---
// Note: Service workers run in the background. We use the compat libraries 
// here because it is the standard and most reliable way to implement FCM background listeners.

importScripts('https://www.gstatic.com/firebasejs/11.6.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.6.1/firebase-messaging-compat.js');

// 1. Initialize Firebase using the exact same config from your app
const firebaseConfig = {
    apiKey: "AIzaSyDMHgHancA7i6lg6iNS9aF1-ezVCCauIvA",
    authDomain: "rokter-tan.firebaseapp.com",
    projectId: "rokter-tan",
    storageBucket: "rokter-tan.firebasestorage.app",
    messagingSenderId: "516974795629",
    appId: "1:516974795629:web:8e1abdfa2d7d0f83201864",
    measurementId: "G-73NB064BD8"
};

firebase.initializeApp(firebaseConfig);

// 2. Retrieve an instance of Firebase Messaging
const messaging = firebase.messaging();

// 3. Handle background messages
messaging.onBackgroundMessage(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    
    // Customize your background notification UI here
    const notificationTitle = payload.notification.title || 'রক্তের টান';
    const notificationOptions = {
        body: payload.notification.body,
        // You can add paths to images/icons here if you have them hosted
        // icon: '/your-logo.png',
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
// --- PUSH NOTIFICATION FEATURE END ---

