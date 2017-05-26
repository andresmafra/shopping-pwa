/*
  
  Desafio: implemente a PaymentRequest API se estiver disponível, ao 
  invés de usar o formulário padrão da página.

  */


  if(window.PaymentRequest) {  

    const supportedPaymentMethods = [  
    {  
      supportedMethods: ['basic-card'],  
    }  
    ];  
    const paymentDetails = {  
      total: {
        label: 'Total',  
        amount:{  
          currency: 'BRL',  
          value: 10.00  
        }  
      }
    };

    new PaymentRequest(  
      supportedPaymentMethods,  
      paymentDetails,  
      {}  
      ).show().then(function(data) {
        console.log(data)
      }).catch(function(err) {
        console.log(err)
      });

    } else {  

      $('body').on('submit', 'form', finalizaCompra);

      function finalizaCompra(){

       if(!navigator.onLine) {
        alert('Fique online para realizar o pagamento!');
        $('form button').attr('disabled', 'disabled');
        return false;
      } else {

        Materialize.toast('Só testes, não enviei o cartão, claro', 4000);
        $('form')[0].reset();

        var now = new Date();
        var saida = new Date(now.getTime() + 1000 * 60 * 15);

        var options = {
          icon: 'img/icon.png',
        }

        var notification = new Notification('Pagamento confirmado! Saída liberada até ' + saida.getHours() + 'h' + ("0" + (saida.getMinutes() + 1)).slice(-2), options);
        setTimeout(notification.close() , 2500); 
        console.log('returnnnn')
        return false;
      }

    }

  }




