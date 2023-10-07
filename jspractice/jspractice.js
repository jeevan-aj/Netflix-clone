
$(document).ready(function(){
   $("p").on("mouseenter" ,function(){
    $(this).text("hello");
   });
    $("p").mouseleave(function(){
        $(this).text("hi");
    });
    $(".hide").click(function(){
        $("p").hide();
        $(this).text("bouble click me");
    });
    $(".hide").dblclick(function(){
        $('p').show();
    });



    $(".inputs").on({
    keydown:function(){
    $(this).css("outline","3px solid red");
    },
    keyup:function(){
        $(this).css("outline","3px solid blue");
    },
    focus:function(){
        $(this).css({"background-color":"green",
                    "opacity": "0.5",
                    "color": "black",
                    });
    },
    blur:function(){
        $(this).css({"background-color":"yellow",
    })
    },
    });
    $(".inputs").css("color","black");
});
