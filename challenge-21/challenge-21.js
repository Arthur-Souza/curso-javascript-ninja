(function(win, doc){
  /*
  O desafio de hoje será um pequeno projeto: um cronômetro!
  As regras para criação do cronômetro são as seguintes:
  1. Crie um arquivo index.html e adicione esse script a ele;
  2. Crie um campo `input` do tipo `text`, e inicie-o com um valor 0 (zero).
  Ele será o nosso cronômetro;
  3. Crie 3 botões para as ações do cronômetro: Start, Stop e Reset;
  4. Ao clicar em Start, o valor do campo deve ser incrementado de 1 em 1, a
  cada segundo;
  5. Ao clicar em Stop, o cronômetro deve parar de contar;
  6. Ao clicar em Reset, o cronômetro deve zerar e parar de contar.

  Utilize o atributo data-js para nomear o campo e os botões. Você pode
  usar o nome que achar melhor, desde que ele seja semântico, ou seja, o nome
  dado ao elemento HTML deve definir o que o elemento é ou o que ele faz.
  */
  // ?
  var $timeOutput  = doc.querySelector('input.stopwatch__time');
  var $start = doc.querySelector('button[data-js=start]');
  var $stop = doc.querySelector('button[data-js=stop]');
  var $reset = doc.querySelector('button[data-js=reset]');

  var timeCount = 0;
  var timeId;

  function startStopwatch() {
    $timeOutput.value = timeCount++;
    timeId = setTimeout(startStopwatch, 1000);
  }

  function stopStopwatch() {
    if(!timeId)
      return false;

    clearTimeout(timeId);
    timeId = undefined;
  }

  function resetStopwatch() {
    $timeOutput.value = timeCount = 0;

    if(!timeId)
      return false;

    clearTimeout(timeId);
    timeId = undefined;
  }

  $start.addEventListener('click', function(event) {
    event.preventDefault();
    if(timeId)
      return false;

    startStopwatch();
  }, false);

  $stop.addEventListener('click', function(event) {
    event.preventDefault();
    stopStopwatch();
  }, false);

  $reset.addEventListener('click', function(event) {
    event.preventDefault();
    resetStopwatch();
  }, false);

}(window, document))
