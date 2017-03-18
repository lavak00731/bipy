(function ($) {
    'use strict';

    function registerAccount() {
        //Ajax Call para el registro
    }
    var modalOpener = $('.modal-opener');
    var ajaxModal = $('.ajaxloading');
    if (modalOpener.length > 0 && ajaxModal.length > 0) {
        modalOpener.on('click', function (e) {
            e.preventDefault();
            ajaxModal.modal({
                backdrop: 'static' // esto evita que el modal se cierre mientras se hace la llamada ajax
            });
            //Llamada de la función que hace la llamada ajax por el registro de usuario    
            registerAccount();
        });
    }
})(jQuery);
