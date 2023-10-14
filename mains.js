$(document).ready(function(){
    $('header button').click(function(){
        $('.parte-debaixo').slideToggle();
    });
    
    $('form').on('submit', function(e){
        e.preventDefault();

        const inputNovaTarefa = $('#nova-tarefa').val();
        if (inputNovaTarefa) {
            $('table tbody').append(`
                <ul>
                    <li>${inputNovaTarefa}</li>
                </ul>`);
            $('#nova-tarefa').val('');
        }
    });
    $('table tbody').on('click', 'li', function() {
        $(this).toggleClass('concluida');
    });
});