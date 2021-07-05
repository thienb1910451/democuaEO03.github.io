const myslide = document.querySelectorAll('.myslide'),
	dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);  //lặp lại cô hạn hàm autoSlide trong 8s
function autoSlide() {        //sau 8s lặp lại một lần nên counter sẽ tăng dẫn và thay đổi
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {  //Slider hiện tại , nút next and prev 
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {  //5 nút tròn chuyển qua lại
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {   // sau khi ấn thì phải reset 8s từ đầu 
	clearInterval(timer);
	timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {

	let i;
	for (i = 0; i < myslide.length; i++) {      //cho tất cả slide ẩn
		myslide[i].style.display = "none";
	}
	for (i = 0; i < dot.length; i++) {        //cho tất cả các nút có class= 'active' thành "  "
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if (n > myslide.length) {   // nếu n> độ dài thì quay về silde đầu là 1
		counter = 1;
	}
	if (n < 1) {                //nếu bấm nút prev thì -1 nên lúc nhỏ hơn 1 sẽ quay tròn qua slide cuối (như 1 vòng tròn giữa các slide )
		counter = myslide.length;
	}
	myslide[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
}




// Ẩn hiện khi ấn vào con mobile

var header = document.getElementById('Input-mobile');  /*Lấy id của checkbox */

var menuItems=document.querySelectorAll('.header-left-text-mobile a[href*="#"]');
for(var i=0 ; i < menuItems.length ; i++){
	var menuItem= menuItems[i];

	menuItem.onclick = function() {
		header.checked = false;     //Khi ấn thì nút sẽ check nên bắt sự kiện ấn vào con thì bỉ check cho checkbox --> ẩn đi
	}
}


