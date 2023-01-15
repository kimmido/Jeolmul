$(function() {
    const gnbFix = $('header').height();
    console.log(gnbFix);

    // $("#title").on("click", function() {
    //     $('html').animate({'scrollTo' : 0}, 2000);
    // });

    $(window).on("scroll", function() {
        // if(gnbFix < $(window).scrollTop()) {
        //     $(".title-loginmenu-mainmenu").addClass("fixed");
        // } else {
        //     $(".title-loginmenu-mainmenu").removeClass("fixed");
        // }
    })

    $('#minus').on("click", function() { guestUpDown(-1) });
    $('#plus').on("click", function() { guestUpDown(1) });
    $('#guestNum').on("change", function() { 
        let num = Number($('#guestNum').val());
        limit(num);
    });

    function guestUpDown(upDown) {
        let num = Number($('#guestNum').val());
        num += upDown;
        guesLimit(num);
    }

    function guesLimit(num) {
        if(num < 0 ) { num = 0; }
        if(num > 20 ) { num = 20; }
        $('#guestNum').val(num);
    }

    const flexWidth = $('.room-list-flex').width();
    const scrollBt = $('.scroll-bt').width();
    const scrollWidth = $('.scroll-line').width() - scrollBt;

    console.log(flexWidth);
    console.log(scrollBt);
    console.log(scrollWidth);

    $('.scroll-bt').on("click", function(e) { moveBt(e) });

    function moveBt(e) {
        // e.target.position().left
        console.log($(e.target).position().top);
        console.log(this);
        console.log($(this));
    }
}); 