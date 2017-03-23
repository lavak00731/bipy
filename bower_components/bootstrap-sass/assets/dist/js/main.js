//Modal Opener
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

//Open and Close Menu
(function ($) {
    'use strict';
    var bodyTag = $('body');
    var nav = $('.navbar-toggle');
    var closeMenu = $('.main-menu-overlay .close-menu');
    if (nav.length > 0) {
        nav.on('click', function () {
            bodyTag.addClass('menu-open');
        });
        closeMenu.on('click', function (e) {
            e.stopPropagation();
            console.log(e.currentTarget);

            bodyTag.removeClass('menu-open');


        });
    }

})(jQuery);

//Secondary menu 
(function ($) {
    'use strict';
    var sdMenu = $('.secondary-menu');
    var sdItem = $('.secondary-menu .sd-menu-item');
    if (sdMenu.length > 0) {
        sdItem.on('click', function (e) {
            e.preventDefault();
            sdItem.removeClass('selected');
            $(this).addClass('selected');
        });
    }

})(jQuery);
