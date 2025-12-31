importScripts('https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js');

// ეხმარება ბრაუზერს შეტყობინების მიღების დაფიქსირებაში
self.addEventListener('push', function(event) {
    console.log('Push message received.');
});

