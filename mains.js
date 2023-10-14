$(document).ready(function(){
    $('header button').click(function(){
        $('.parte-debaixo').slideToggle();
    });
    
    $('form').on('submit', function(e){
        e.preventDefault();

        const inputNovaTarefa = $('#nova-tarefa').val();
        if (inputNovaTarefa) {
            $('table tbody').append(`
                <tr>
                    <td>${inputNovaTarefa}</td>
                </tr>`);
            $('#nova-tarefa').val('');
        }
    });
    $('table tbody').on('click', 'td', function() {
        $(this).toggleClass('concluida');
    });
});