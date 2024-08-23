// Quản lý các tab
$(document).ready(function() {
    $(".tab-content > section:not(:first-child)").hide();

    $(".menu > li > a").click(function(event) {
        event.preventDefault();
        $(".menu > li").removeClass("active");
        $(this).parent().addClass("active");

        let href = $(this).attr("href");
        $(".tab-content > section").hide();
        $(href).show();
    
        $('html, body').animate({
            scrollTop: $(href).offset().top - 170
        }, 500);

    });
});