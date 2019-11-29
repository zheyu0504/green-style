time=0
setInterval(auto,4000)

function auto(){
	time++
	if(time>2){
		time=0
	}
	$(".show img").fadeOut(400, function(){
		$(".turn img").fadeOut()
		$(".show img").attr("src","img/slide/"+time+".jpg")
		$(".show img").fadeIn()
	})
}

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
	$(this).toggleClass("h-ani")
})

shop=0

$(".btn-s").click(function(){
	shop++
	$(".cart .nav-b span").text("購物車("+shop+")")
	$(".cart-i p").text(""+shop+"")
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

$("#login1 .btn-l").click(function(){
	alert("目前沒有網路無法登入")
	$("#login1").fadeOut()
})

$("#login2 .btn-l").click(function(){
	alert("目前沒有網路無法註冊")
	$("#login2").fadeOut()
})

$("#login2 img").click(function(){
	$("#login2").fadeOut()
})

$(".cart").click(function(){
	$("#login1").fadeIn()
})

$(".cart-i").click(function(){
	$("#login1").fadeIn()
})

$("#login").click(function(){
	$("#login1").fadeIn()
})

$(".p1").click(function(){
	$("#login1").fadeOut()
	$("#login2").fadeIn()
})

$(".p2").click(function(){
	alert("目前沒有網路請稍後在試")
	$("#login1").fadeOut()
})

$(".btn-e").click(function(){
	$(".login2").fadeIn()
})

$(".login img").click(function(){
	$("#login1").fadeOut()
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
	alert("資料已送出")
	$(".login2").fadeOut()
})

$('#form').submit(function () {
	alert("資料已送出，謝謝您的回覆。")
	$('.input-c').val("");
  	return false;
});

$('.btn-f').click(function () {
	alert("感謝您的訂閱")
  	return false;
});
