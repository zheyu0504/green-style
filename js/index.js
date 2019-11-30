$(".category-item").hover(function(){
	$(".category-item").removeClass("current")
	$(this).addClass("current")
})

$(".infor-icon img").click(function(){
	var divClass = $(this).attr("data-for")
	$(".infor").removeAttr("style")
	$("." + divClass).css("transform","rotate(0deg)")
})

$(".infor img").click(function(){
	$(".infor").removeAttr("style")
})

$(".infor-icon img").click(function(){
	var divClass = $(this).attr("data-for")
	$(".infor").removeAttr("style")
	$("." + divClass).css("transform","rotate(0deg)")
})

$(".heart").click(function(){
	$(this).toggleClass("h-ani");
	var message = "取消追蹤";
	if ($(this).hasClass("h-ani")) message = "追蹤成功";
    $("body").append("<div class='alert-box'>" + message + "</div>");
});

shop=0

$(".btn-s").click(function(){
	shop++
	$(".cart .nav-b span").text("購物車("+shop+")")
	$(".cart-i p").text(""+shop+"")
	var message = "成功加入購物車";
	if ($(this).hasClass("h-ani")) message = "成功加入購物車";
    $("body").append("<div class='alert-box'>" + message + "</div>");
	var divClass = $(this).attr("data-for")
	$("." + divClass).toggleClass("add-ani")
	
})

$("#item1").click(function(){
	$("#shop1").fadeIn()
	$("#shop2").fadeOut()
	$("#shop3").fadeOut()
	$("#shop4").fadeOut()
	$(".infor").removeAttr("style")
	$(".heart").removeClass("h-ani")
	$(".addcart").removeClass("add-ani")
})

$("#item2").click(function(){
	$("#shop2").fadeIn()
	$("#shop1").fadeOut()
	$("#shop3").fadeOut()
	$("#shop4").fadeOut()
	$(".infor").removeAttr("style")
	$(".heart").removeClass("h-ani")
	$(".addcart").removeClass("add-ani")
})

$("#item3").click(function(){
	$("#shop3").fadeIn()
	$("#shop2").fadeOut()
	$("#shop1").fadeOut()
	$("#shop4").fadeOut()
	$(".infor").removeAttr("style")
	$(".heart").removeClass("h-ani")
	$(".addcart").removeClass("add-ani")
})

$("#item4").click(function(){
	$("#shop4").fadeIn()
	$("#shop2").fadeOut()
	$("#shop3").fadeOut()
	$("#shop1").fadeOut()
	$(".infor").removeAttr("style")
	$(".heart").removeClass("h-ani")
	$(".addcart").removeClass("add-ani")
})

$("#login .btn-l").click(function(){
	alert("目前沒有網路無法登入")
	$(".login input").val("")
	$("#login").fadeOut()
})

$("#register .btn-l").click(function(){
	alert("目前沒有網路無法註冊")
	$(".login input").val("")
	$("#register").fadeOut()
})

$("#register img").click(function(){
	$("#register").fadeOut()
})

$(".cart").click(function(){
	$("#login").fadeIn()
})

$(".cart-i").click(function(){
	$("#login").fadeIn()
})

$("#nav-login").click(function(){
	$("#login").fadeIn()
})

$(".p1").click(function(){
	$("#login").fadeOut()
	$("#register").fadeIn()
})

$(".p2").click(function(){
	alert("目前沒有網路請稍後在試")
	$("#login").fadeOut()
})

$(".btn-e").click(function(){
	$(".login2").fadeIn()
})

$(".login img").click(function(){
	$("#login").fadeOut()
})

$(".login2 img").click(function(){
	$(".login2").fadeOut()
})

$(".btn-l2").click(function(){
	if(!$("#name").val()){
		return alert("您尚未填寫姓名");
	}
	if(!$("#address").val()){
		return alert("您尚未填寫地址");
	}
	if(!$("#phone").val()){
		return alert("您尚未填寫電話");
	}
	if(!$("#number").val()){
		return alert("您尚未填寫身分證字號");
	}
	$(".login2 input").val("")
	alert("資料已送出")
	$(".login2").fadeOut()
})

$('#form').submit(function(){
	alert("資料已送出，謝謝您的回覆。")
	$('#form input').val("");
  	return false;
});

$('#form2').submit(function(){
	alert("感謝您的訂閱")
	$('#form2 input').val("");
  	return false;
});



