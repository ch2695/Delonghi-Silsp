$(function () {

	/* 멀티탭 기능 구현 */
	$("button#tabBtn1").click(function () {
		$(this).css({
			"border": "1px solid #3289e8",
			"border-bottom": "none",
			"color": "#3289e8"
		});
		$("#loginArea button#tabBtn2").css({
			"border": "1px solid #bbb",
			"border-left": "none",
			"border-bottom": "1px solid #3289e8",
			"color": "#999"
		});
		$("#inputArea1").css({"display": "block"});
		$("#inputArea2").css({"display": "none"});
	});

	$("button#tabBtn2").click(function () {
		$(this).css({
			"border": "1px solid #3289e8",
			"border-bottom": "none",
			"color": "#3289e8"
		});
		$("#loginArea button#tabBtn1").css({
			"border": "1px solid #bbb",
			"border-right": "none",
			"border-bottom": "1px solid #3289e8",
			"color": "#999"
		});
		$("#inputArea1").css({"display": "none"});
		$("#inputArea2").css({"display": "block"});
	});
	/* 멀티탭 기능 구현 */


	/* GNB 시작 */
	/* 첫번째 서브메뉴 */
	$("ul#mainMenu>li:first-child").mouseover(function () {
		$("ul#mainMenu>li:first-child ul li").css({"display" : "block"});
        $("#subMenuBG").css({"display": "block"});
	});

	$("ul#mainMenu>li:first-child").mouseout(function () {
		$("ul#mainMenu>li:first-child ul li").css({"display" : "none"});
        $("#subMenuBG").css({"display": "none"});
	});
	/* 첫번째 서브메뉴 */

	/* 두번째 서브메뉴 */
	$("ul#mainMenu>li:nth-child(2)").mouseover(function () {
		$("ul#mainMenu>li:nth-child(2) ul li").css({"display" : "block"});
        $("#subMenuBG").css({"display": "block"});
	});

	$("ul#mainMenu>li:nth-child(2)").mouseout(function () {
		$("ul#mainMenu>li:nth-child(2) ul li").css({"display" : "none"});
        $("#subMenuBG").css({"display": "none"});
	});
	/* 두번째 서브메뉴 */

	/* 세번째 서브메뉴 */
	$("ul#mainMenu>li:nth-child(3)").mouseover(function () {
		$("ul#mainMenu>li:nth-child(3) ul li").css({"display" : "block"});
        $("#subMenuBG").css({"display": "block"});
	});

	$("ul#mainMenu>li:nth-child(3)").mouseout(function () {
		$("ul#mainMenu>li:nth-child(3) ul li").css({"display" : "none"});
        $("#subMenuBG").css({"display": "none"});
	});
	/* 세번째 서브메뉴 */

	/* GNB 끝 */

	/* 로그인 버튼 */
	$("#inputArea1 button").click(function () {
		var email = document.getElementById("email").value;
		var pwd = document.getElementById("password").value;
		if(email=="" || pwd=="") {
			alert("메일주소나 멤버십번호를 넣어주세요");
		}else {
			alert("email : " + email + "\npwd : " + pwd);
		}
	});
	/* 로그인 버튼 */

    /* 회원가입 인증하기 버튼 경고창 */
    $("#certificationBtn").click(function(){
        var memNo = $("#Text span:nth-child(3) input").val();
        if(memNo=="") {
            alert("멤버쉽 번호를 입력하세요");
        }else {
            alert("멤버쉽 번호 : " + memNo);
        }
    });
    /* 회원가입 인증하기 버튼 경고창 */

});





