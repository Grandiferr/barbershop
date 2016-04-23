var enterLink = document.querySelector(".enter--link");
var popup = document.querySelector(".popup");
var close = popup.querySelector(".close-button");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var formSubmit = popup.querySelector(".f-login-form");
var storageLogin = localStorage.getItem("login");
var overlay = document.querySelector(".popup-overlay");


enterLink.addEventListener ("click", function(event) {
	event.preventDefault();
	popup.classList.add("popup-show");
	overlay.classList.add("popup-overlay-show");
	if (storageLogin) {
		login.value = storageLogin;
		password.focus();
	} else {
		login.focus();
	}
	console.log("Showed popup");	/* Act on the event */
});

formSubmit.addEventListener ("submit", function (event) {
	if (login.value && password.value) {
		localStorage.setItem("login", login.value);
		console.log("item set in local storage");
	} else {
		event.preventDefault();
		alert("Введите имя и пароль");
	}
})

close.addEventListener ("click", function(event) {
	event.preventDefault();
	popup.classList.remove("popup-show");
	overlay.classList.remove("popup-overlay-show");
	console.log("removed popup");	/* Act on the event */
});

overlay.addEventListener ("click", function(event) {
	event.preventDefault();
	popup.classList.remove("popup-show");
	mapPopup.classList.remove("popup-show");
	overlay.classList.remove("popup-overlay-show");
	console.log("removed popup");	/* Act on the event */
});

var mapOpen = document.querySelector(".open-map");
var mapPopup = document.querySelector(".popup-map");
var mapClose = mapPopup.querySelector(".close-button");

mapOpen.addEventListener ("click", function(event) {
	event.preventDefault();
	mapPopup.classList.add("popup-show");
	overlay.classList.add("popup-overlay-show");
	console.log("Showed map popup");	/* Act on the event */
});

mapClose.addEventListener ("click", function(event) {
	event.preventDefault();
	mapPopup.classList.remove("popup-show");
	overlay.classList.remove("popup-overlay-show");
	console.log("removed popup");	/* Act on the event */
});



