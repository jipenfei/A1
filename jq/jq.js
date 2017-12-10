/**
 * Created by ASUS-PC on 2017/12/8.
 */
$(".table-list:first li").on("mouseover",function () {
    console.log($(".table-list:first li"))
    $(".ele-home5").eq($(this).index()).addClass("ele").siblings().removeClass("ele");
})
console.log($(".pro-list1 ul").offset().left)
$("#right1").on("mouseover",function () {
    $(".pro-list1 ul").animate({
        left:"-=1235px"
    },"10")
})

$("#left1").on("mouseover",function () {

    $(".pro-list1 ul").animate({
        left:"+=1235px"
    },"10")
})