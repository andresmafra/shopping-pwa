
this.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
  );
});

this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v4').then(function(cache) {
      return cache.addAll([
        'index.html',
        'loja-adidas.html',
        'loja-bacio-di-latte.html',
        'loja-brooksfield.html',
        'loja-burberry.html',
        'loja-cavalera.html',
        'loja-centauro.html',
        'loja-farm.html',
        'loja-forum.html',
        'loja-galetos.html',
        'loja-le-lis-blanc.html',
        'loja-ofner.html',
        'loja-pizza-hut.html',
        'loja-shoulder.html',
        'loja-so-sapatos.html',
        'loja-tip-top.html',
        'lojas.html',
        'manifest.json',
        'pagar-estacionamento.html',
        'css/main.css',
        'icons/MaterialIcons-Regular.ttf',
        'icons/material.css',
        'img/entrada.jpg',
        'img/icon.png',
        'img/ticket.png',
        'js/barcode.js',
        'js/install.js',
        'js/main.js',
        'js/pagamento.js',
        'js/spa.js',
        'img/loja/adidas.jpg',
        'img/loja/bacio-di-latte.jpg',
        'img/loja/brooksfield.jpg',
        'img/loja/burberry.jpg',
        'img/loja/cavalera.jpg',
        'img/loja/centauro.jpg',
        'img/loja/farm.jpg',
        'img/loja/forum.jpg',
        'img/loja/galetos.jpg',
        'img/loja/le-lis-blanc.jpg',
        'img/loja/ofner.jpg',
        'img/loja/pizza-hut.jpg',
        'img/loja/shoulder.jpg',
        'img/loja/so-sapatos.jpg',
        'img/loja/tip-top.jpg',
        'js/vendor/jquery.min.js',
        'js/vendor/materialize-0.97.0.min.js',
        'js/vendor/quagga.min.js'
        ]);
    })
    );
});
