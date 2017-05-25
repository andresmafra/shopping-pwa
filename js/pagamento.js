/*
  
  Desafio: implemente a PaymentRequest API se estiver disponível, ao 
  invés de usar o formulário padrão da página.

 */


// if(!!window.location.href.match('pagar-estacionamento')) {
//    if(!navigator.onLine) {
//   alert('Fique online para realizar o pagamento!');
//   $('form button').attr('disabled', 'disabled')
// }
// }


$('body').on('submit', 'form', finalizaCompra);

function finalizaCompra(){

   if(!navigator.onLine) {
    alert('Fique online para realizar o pagamento!');
    $('form button').attr('disabled', 'disabled')
  } else {

    Materialize.toast('Só testes, não enviei o cartão, claro', 4000);
    $('form')[0].reset();

    var now = new Date();
    var saida = new Date(now.getTime() + 1000 * 60 * 15);

    var options = {
        icon: 'img/icon.png',
    }

    var notification = new Notification('Pagamento confirmado! Saída liberada até ' + saida.getHours() + 'h' + ("0" + (saida.getMinutes() + 1)).slice(-2), options);
    setTimeout(n.close.bind(notification), 2500); 
  }

  

	return false;
}