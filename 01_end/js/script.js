$(".gnb").hover(
    function(){
        $(".sub").stop().slideDown();
    },
    function(){
        $(".sub").stop().slideUp();
    }
);

$(".tab1").click(
    function(){
        $(".notice").show();
        $(".gallery").hide();
    }
)


$(".tab2").click(
    function(){
        $(".notice").hide();
        // $(".gallery").show(); 디스플레이 블럭이랑 같음
        $(".gallery").css("display","flex")
    }
)

/* $(".tab li:eq(0) a")   0이 첫번째꺼 클래스를 안줬을때 이렇게 씀 */

/* popup */

$(".open").click(
    function(){
        $("#popup").fadeIn();
    }
);


$(".close").click(
    function(){
        $("#popup").fadeOut();
    }
);