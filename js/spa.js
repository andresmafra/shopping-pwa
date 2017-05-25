/*

	Desafio: implemente uma navegação via Ajax estilo SPA.
	Dá pra fazer com jQuery interceptando os cliques e carregando os conteúdos;

	Bonus points: faça uma transição de tela com CSS entre um estado e outro!

 */

$('body').on('click', 'a', function(e) {
     e.preventDefault();

     var link = $(this).attr('href');

     $('.current-page').load(link + ' .current-page' , function() {
          history.pushState({}, {}, link);
    });
 });

window.addEventListener("popstate", function(e) {
    $(".current-page").load(location.pathname + ' .current-page' , function() {
          history.pushState({}, {}, e.target.href);
    });
});