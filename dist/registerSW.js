if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/mikeodnis/sw.js', { scope: '/mikeodnis/' })})}