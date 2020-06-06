var content_seal = document.querySelectorAll('.contentSeal')
var bottom_seal = document.querySelectorAll('.bottom_seal')
var btn = document.querySelectorAll('.learn')

var openFormBtn = document.getElementById('openForm')
var peopleArray = JSON.parse(localStorage.getItem('value'))||[];
var str = '';

$('.openWin').click(function(event){
	event.preventDefault();
	$(this).parent().parent().parent().find('.window').fadeIn(100);
})
// 打開人物視窗
$('.people .winClose').click(function(event){
	event.preventDefault();
	$(this).parent().parent().find('.window').fadeOut(100);
})
// 關閉人物視窗
$('.js-open').click(function(){
	console.log('hi');
	event.preventDefault();
	$('.displayNone').fadeIn(100);
})
// 打開填寫視窗
$('.sign_win .winClose').click(function(){
	event.preventDefault();
	$('.displayNone').fadeOut(100);
})
// 關閉填寫視窗


let len = btn.length;
reloadSeal();
checkSeal();
change();

function reloadSeal(){
	for(var i=0;i<len;i++){
		if(peopleArray[i]==0){
			content_seal[0].setAttribute('src','img/seal.png');
	    	bottom_seal[0].src="img/seal.png";
	    	btn[0].classList.add("defaultBtn");
	    	btn[0].setAttribute('disabled','disabled');
		}else if(peopleArray[i]==1){
			content_seal[1].setAttribute('src','img/seal.png');
	    	bottom_seal[1].src="img/seal.png";
	    	btn[1].classList.add("defaultBtn");
	    	btn[1].setAttribute('disabled','disabled');
		}else if(peopleArray[i]==2){
			content_seal[2].setAttribute('src','img/seal.png');
	    	bottom_seal[2].src="img/seal.png";
	    	btn[2].classList.add("defaultBtn");
	    	btn[2].setAttribute('disabled','disabled');
		}
	}
}

function change(){
	for(let i=0; i<len; i++) {
 	 btn[i].addEventListener('click',function(){
    	content_seal[i].src="img/seal.png";
    	bottom_seal[i].src="img/seal.png";
    	btn[i].classList.add("defaultBtn");
    	btn[i].setAttribute('disabled','disabled');
    	peopleArray.push(i);
    	checkSeal();
    	str = JSON.stringify(peopleArray);
    	localStorage.setItem("value", str);
 	 })
	}
};
//點選我已瞭解

function checkSeal(){
	if(peopleArray.length == 3){
		openFormBtn.removeAttribute('disabled');
		openFormBtn.classList.add("js-open");
		document.getElementById("openForm").classList.remove("defaultBtn");
	}
	$('.js-open').click(function(){
	console.log('hi');
	event.preventDefault();
	$('.displayNone').fadeIn(100);})

	$('#btn_send').click(function(){
	alert('此活動已結束，感謝您的參加！');})
}
//三個按鈕集滿打開最下方填寫按鈕
