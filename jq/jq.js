/**
 * Created by ASUS-PC on 2017/12/8.
 */
$(".table-list:first li").on("mouseover",function () {
    console.log($(".table-list:first li"))
    $(".ele-home5").eq($(this).index()).addClass("ele").siblings().removeClass("ele");
})

