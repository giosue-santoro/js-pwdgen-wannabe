//Variabili con valori
var nome = prompt('Qual è il tuo nome?');
var cognome = prompt('Qual è il tuo cognome?');
var colore = prompt('Qual è il tuo colore preferito?');
var annoCorrente = new Date().getFullYear();

//Output
document.getElementById('output').innerHTML = 'la tua password: ' + nome + cognome + colore + annoCorrente;
