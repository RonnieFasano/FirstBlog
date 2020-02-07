jQuery(document).ready(function ($){
    //hover dropdown menu
    $(function(){
        $(".dropdown").hover(
            function() {
                $('.dropdown-menu', this).stop(true, true).fadeIn("fast");
                $(this).toggleClass("caret caret-up");
                $('b', this).toggleClass("caret caret-up");
            },
            function() {
                $('.dropdown-menu', this).stop(true, true).fadeOut("fast");
                $(this).toggleClass("caret caret-up");
                $('b', this).toggleClass("caret caret-up");
            });
    });
});