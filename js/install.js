/*

  Desafio: use esse arquivo pra disparar a instalação do Service Worker.
  
 */

 if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', {scope: '/'})
  .then(function(reg) {
    console.log('Success on SW! ' + reg.scope);
  }).catch(function(error) {
    console.log('Error on SW ' + error);
  });
}