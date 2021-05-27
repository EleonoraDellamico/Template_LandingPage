//MENU HAMBURGUER
const hamburger = document.getElementById('hamburger');
const listMenu = document.getElementById('list__menu');

function toggle() {
	listMenu.classList.toggle('show');
}
hamburger.addEventListener('click', toggle);

// //CAROUSEL POST

const lengthPosts = 6;

let counterPosts = 0;

const carouselPosts = document.getElementById('carouselPosts');
const slidesPosts = document.querySelectorAll('.slide.posts');
const nextBtnPosts = document.getElementById('nextBtnPosts');
const prevBtnPosts = document.getElementById('prevBtnPosts');

nextBtnPosts.addEventListener('click', function() {
	let auxLengthPosts = window.innerWidth >= 1440 ? 3 : lengthPosts;
	if (counterPosts < auxLengthPosts) {
		counterPosts++;
		let extraSpacing = 0;
		if (window.innerWidth >= 1440) {
			extraSpacing = 24 * counterPosts;
		}
		carouselPosts.scrollLeft = slidesPosts[0].offsetWidth * counterPosts + extraSpacing;
		console.log(slidesPosts[0].offsetWidth * counterPosts + extraSpacing);
		prevBtnPosts.style.visibility = 'visible';
	} else {
		nextBtnPosts.style.visibility = 'hidden';
	}
});

prevBtnPosts.addEventListener('click', function() {
	if (counterPosts > 0) {
		counterPosts--;
		let extraSpacing = 0;
		if (window.innerWidth >= 1440) {
			extraSpacing = 24 * counterPosts;
		}

		carouselPosts.scrollLeft = slidesPosts[0].offsetWidth * counterPosts + extraSpacing;
		nextBtnPosts.style.visibility = 'visible';
	} else {
		prevBtnPosts.style.visibility = 'hidden';
	}
});

// function carousel() {
// 	if (counter < slides.length - 1) {
// 		nextBtn.style.display = 'block';
// 	} else {
// 		nextBtn.style.display = 'none';
// 	}
// 	if (counter > 0) {
// 		prevBtn.style.display = 'block';
// 	} else {
// 		prevBtn.style.display = 'none';
// 	}
// 	slides.forEach(function(slide) {
// 		slide.style.transform = `translateX(-${counter * 100}vh)`;
// 	});
// }

// prevBtn.style.display = 'none';

//COUNTDOWN
const countdown = () => {
	const countDate = new Date('June 02, 2021 00:00:00').getTime();
	const now = new Date().getTime();
	const gap = countDate - now;

	const second = 1000,
		minute = second * 60,
		hour = minute * 60,
		day = hour * 24;

	const textDay = Math.floor(gap / day),
		textHour = Math.floor((gap % day) / hour),
		textMinute = Math.floor((gap % hour) / minute),
		textSecond = Math.floor((gap % minute) / second);

	document.querySelector('.day').innerText = textDay;
	document.querySelector('.hour').innerText = textHour;
	document.querySelector('.minute').innerText = textMinute;
	document.querySelector('.second').innerText = textSecond;
};

setInterval(countdown, 1000);

//VALIDATION EMAIL
const form = document.getElementById('form');
const inputEmail = document.getElementById('email');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	checkInputs();
});

function checkInputs() {
	const emailValue = inputEmail.value.trim();
	if (emailValue === '') {
		alert('you have to insert your email');
	} else if (!isEmail(emailValue)) {
		alert('The email you have insert is not correct');
	} else {
		alert('Thank You For Subscribing!');
	}
}

function isEmail(email) {
	return /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
		email
	);
}
