self.addEventListener('push', function(event) {
  console.log('[Service Worker] Push Received.');
  console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

  const title = 'Price Notification';
  const options = {
    body: 'BTC @ $100',
    icon: 'public/mobile-icon.png',
    badge: 'public/mobile-icon.png'
  };

  event.waitUntil(self.registration.showNotification(title, options));
});