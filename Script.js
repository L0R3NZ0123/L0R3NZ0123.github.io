// Attendiamo che il documento sia completamente caricato
$(document).ready(function() {
    $('.btn-success').click(function() {
        // Visualizza l'alert
        alert('Grazie! Hai contattato Lorenzo Lisanti.');

        // Reimposta i valori dei campi del modulo
        $('input[type="text"]').val(''); // Reimposta i campi di testo
        $('input[type="email"]').val(''); // Reimposta i campi email
        $('textarea').val(''); // Reimposta l'area di testo

    });
});
