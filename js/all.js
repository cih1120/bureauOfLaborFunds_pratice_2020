var content_seal = document.querySelectorAll('.contentSeal')
var bottom_seal = document.querySelectorAll('.bottom_seal')
var btn = document.querySelectorAll('.learn')

var openFormBtn = document.getElementById('openForm')
var peopleArray = JSON.parse(localStorage.getItem('seal'))||[];
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
$('#openForm').click(function(){
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
change();
function change(){
	for(let i=0; i<len; i++) {
 	 btn[i].addEventListener('click',function(){
    	content_seal[i].src="img/seal.png";
    	bottom_seal[i].src="img/seal.png";
    	btn[i].classList.add("defaultBtn");
    	btn[i].setAttribute('disabled','disabled');
    	peopleArray.push('1');
    	checkSeal();
 	 })
	}
};

function checkSeal(){
	if(peopleArray.length == 3){
		openFormBtn.setAttribute('disabled','value');
		document.getElementById("openForm").classList.remove("defaultBtn");
		// $('.cardBtn').click(function(){
		// event.preventDefault();
		// $('.displayNone').fadeIn(100);
		// })
	}
}
