// SVG MAP
function svgturkiyeharitasi() {
    $(".svg-turkiye-haritasi-generic .is-active path").hover(function () {
        if ($(this).parent().attr("id") == "guney-kibris") return false;

        var provinceName  = $(this).parent().data("iladi"),
            frequencyOne  = $(this).parent().data("frequency-one"),
            frequencyTwo  = $(this).parent().data("frequency-two"),
            frequencyTree = $(this).parent().data("frequency-tree");
            frequencyFour = $(this).parent().data("frequency-four");

        $(".il-isimleri").html("<div><h5 class='title'>" + provinceName + "</h5><span>"+ frequencyOne +"</span><span>"+ frequencyTwo +"</span><span>"+ frequencyTree +"</span><span>"+ frequencyFour +"</span></div>");
        $(this).on("mousemove", function (event) {
            $(".il-isimleri").css("top", (event.pageY + 25));
            $(".il-isimleri").css("left", event.pageX);
        });
    }, function () {
        $(".il-isimleri").html("");
    });
}