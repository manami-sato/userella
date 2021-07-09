{


	// use
	$(window).scroll(function(){
		$('.use').each(function(){
			let elHeight = $(this).offset().top;
			let scrollY = $(window).scrollTop();
			let windowHeight = $(window).height();
			if(scrollY > elHeight - windowHeight + 300){
				$(this).addClass('useFadein');
			}
		});
	});

	// use fade
	$(window).scroll(function(){
		$('.flow').each(function(){
			let elHeight = $(this).offset().top;
			let scrollY = $(window).scrollTop();
			let windowHeight = $(window).height();
			if(scrollY > elHeight - windowHeight + 250){
				$(this).addClass('flowFadein');
			}
		});
	});

	// よくある質問
	let answer = document.querySelectorAll(".answer");
	let btn = document.querySelectorAll(".btn");
	let question = document.querySelectorAll(".question");
	let qHeader = document.querySelectorAll(".qHeader");

	for (let i = 0; i < answer.length; i++) {
		answer[i].style.opacity = "0";
		let count = 0;
		qHeader[i].addEventListener("click",function (){
			count++;
			if(count % 2 !== 0){
				answer[i].style.opacity = "1";
				question[i].style.height = "220px";
				question[i].style.transition = "0.3s ease";
				answer[i].style.transition = "ease 0.3s 0.1s";
				btn[i].classList.add("btnAdd");
			}else{
				answer[i].style.opacity = "0";
				answer[i].style.transition = "ease 0.1s";
				question[i].style.height = "80px";
				btn[i].classList.remove("btnAdd");
			}
		});
	}

}