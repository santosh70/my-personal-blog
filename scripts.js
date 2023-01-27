$(document).ready(function () {
    $("#travelcarousel").carousel({ interval: 2000 });
    $("#badmintoncarousel").carousel({ interval: 2000 });
    $("#volleyballcarousel").carousel({ interval: 2000 });



    $("#travelcarouselButton").click(function () {
        if ($("#travelcarouselButton").children("span").hasClass('fa-pause')) {
            $("#travelcarousel").carousel('pause');
            $("#travelcarouselButton").children('span').removeClass('fa-pause');
            $("#travelcarouselButton").children('span').addClass('fa-play');
        }
        else if ($("#travelcarouselButton").children('span').hasClass('fa-play')) {
            $("#travelcarousel").carousel('cycle');
            $("#travelcarouselButton").children('span').removeClass('fa-play');
            $("#travelcarouselButton").children('span').addClass('fa-pause');
        }
    });

    $("#badmintoncarouselButton").click(function () {
        if ($("#badmintoncarouselButton").children("span").hasClass('fa-pause')) {
            $("#badmintoncarousel").carousel('pause');
            $("#badmintoncarouselButton").children('span').removeClass('fa-pause');
            $("#badmintoncarouselButton").children('span').addClass('fa-play');
        }
        else if ($("#badmintoncarouselButton").children('span').hasClass('fa-play')) {
            $("#badmintoncarousel").carousel('cycle');
            $("#badmintoncarouselButton").children('span').removeClass('fa-play');
            $("#badmintoncarouselButton").children('span').addClass('fa-pause');
        }
    });

    $("#volleyballcarouselButton").click(function () {
        if ($("#volleyballcarouselButton").children("span").hasClass('fa-pause')) {
            $("#volleyballcarousel").carousel('pause');
            $("#volleyballcarouselButton").children('span').removeClass('fa-pause');
            $("#volleyballcarouselButton").children('span').addClass('fa-play');
        }
        else if ($("#volleyballcarouselButton").children('span').hasClass('fa-play')) {
            $("#volleyballcarousel").carousel('cycle');
            $("#volleyballcarouselButton").children('span').removeClass('fa-play');
            $("#volleyballcarouselButton").children('span').addClass('fa-pause');
        }
    });

    $('[data-toggle="tooltip"]').tooltip();
});
