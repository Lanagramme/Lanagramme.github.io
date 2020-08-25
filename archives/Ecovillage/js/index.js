$(function() {

    $(".vertical-list ul li").click(function() {
        $(".vertical-list ul li").css('border', '');
        $(".vertical-list ul li").css("background-color", "rgba(17, 17, 17, 0.37)");
        $(this).css('border', '2px solid white'); 
        $(this).css("background-color", "rgba(17, 17, 17, 0.75)");
        $(".description").hide();
        $('#a'+ this.id).show();
        $('.class-presentation').css('background-image', 'url(./img/a' + this.id + '.jpg)');
    });

});
