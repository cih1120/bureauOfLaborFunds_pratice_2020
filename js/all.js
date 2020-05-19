var seal1 = document.querySelector('.seal1');
var seal2 = document.querySelector('.seal2');
var seal3 = document.querySelector('.seal3');
// 視窗內印章
var bottom_seale1 = document.getElementById('#bottom_seal1');
var bottom_seale2 = document.getElementById('#bottom_seal2');
var bottom_seale3 = document.getElementById('#bottom_seal3');
// 下方印章
var learn1 = document.getElementById('learn1');
var learn2 = document.getElementById('learn2');
var learn3 = document.getElementById('learn3');
// 視窗內了解按鈕

var cardBtn = document.querySelector('.cardBtn')
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
$('.cardBtn').click(function(){
	event.preventDefault();
	$('.displayNone').fadeIn(100);
})
// 打開填寫視窗
$('.sign_win .winClose').click(function(){
	event.preventDefault();
	$('.displayNone').fadeOut(100);
})
// 關閉填寫視窗
reloadSeal();
checkSeal();
function reloadSeal(){
	for(var i=0;i<3;i++){
		if(peopleArray[i]==1){
			seal1.src="img/seal.png";
			bottom_seal1.src="img/seal.png"; 
			learn1.setAttribute("disabled", "disabled");
			learn1.classList.add("defaultBtn");
		}else if(peopleArray[i]==2){
			seal2.src="img/seal.png";
			bottom_seal2.src="img/seal.png"; 
			learn2.setAttribute("disabled", "disabled");
			learn2.classList.add("defaultBtn");
		}else if(peopleArray[i]==3){
			seal3.src="img/seal.png";
			bottom_seal3.src="img/seal.png"; 
			learn3.setAttribute("disabled", "disabled");
			learn3.classList.add("defaultBtn");
		}else{
			return;
		}
	}
}

function checkSeal(){
	if(peopleArray.length == 3){
		cardBtn.classList.remove("defaultBtn");
		cardBtn.setAttribute("disabled", "value");
	}else{
		return;
	}
}

function change(num){
	seal+num.src="img/seal.png";
	bottom_seal+num.src="img/seal.png"; 
	learn+num.setAttribute("disabled", "disabled");
	learn+num.classList.add("defaultBtn");
	str = JSON.stringify(peopleArray);
	localStorage.setItem('seal',str);
	checkSeal();
}


// function change1(){
// 	seal1.src="img/seal.png";
// 	bottom_seal1.src="img/seal.png"; 
// 	learn1.setAttribute("disabled", "disabled");
// 	learn1.classList.add("defaultBtn");
// 	peopleArray.push(1);
// 	str = JSON.stringify(peopleArray);
// 	localStorage.setItem('seal',str);
// 	checkSeal();
// };
// function change2(){
// 	seal2.src="img/seal.png";
// 	bottom_seal2.src="img/seal.png"; 
// 	learn2.setAttribute("disabled", "disabled");
// 	learn2.classList.add("defaultBtn");
// 	peopleArray.push(2);
// 	str = JSON.stringify(peopleArray);
// 	localStorage.setItem('seal',str);
// 	checkSeal();
// };
// function change3(){
// 	seal3.src="img/seal.png";
// 	bottom_seal3.src="img/seal.png"; 
// 	learn3.setAttribute("disabled", "disabled");
// 	learn3.classList.add("defaultBtn");
// 	peopleArray.push(3);
// 	str = JSON.stringify(peopleArray);
// 	localStorage.setItem('seal',str);
// 	checkSeal();
// };
learn1.addEventListener('click',function(){
	change(1);
});
learn2.addEventListener('click',function(){
	change(2);
});
learn3.addEventListener('click',function(){
	change(3);
});




// 點擊 #open_win1 後 #win1 diplay=block,
// 點擊 .winClose ， 開啟中的 window 會display=none;
// 點擊.learn會觸發該視窗的#poeple1seal改變src並且也同時變更最下方的src，並且改變布林
// 如三個布林都是ture，.cardBtn增加class>active，並且可點擊使#form_win{display:block;}