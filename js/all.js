// 印章的樣式（上與下）
var seal1 = document.querySelectorAll('.sela1');
var seal2 = document.querySelectorAll('.sela2');
var seal3 = document.querySelectorAll('.sela3');

//window關閉按鈕（取消所有display:block）
var winClose = document.querySelectorAll('.winClose');
var peopleBoolean = [];

$('.openWin').click(function(event){
	event.preventDefault();
	$(this).parent().parent().parent().find('.window').fadeIn(100);
})
$('.winClose').click(function(event){
	event.preventDefault();
	$(this).parent().parent().find('.window').fadeOut(100);
})
// 點擊 #open_win1 後 #win1 diplay=block,
// 點擊 .winClose ， 開啟中的 window 會display=none;
// 點擊.learn會觸發該視窗的#poeple1seal改變src並且也同時變更最下方的src，並且改變布林
// 如三個布林都是ture，.cardBtn增加class>active，並且可點擊使#form_win{display:block;}