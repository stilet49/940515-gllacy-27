var link = document.querySelector(".callback-form-button");
var popup = document.querySelector(".modal-callback");
var mask = document.querySelector(".modal-mask");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var name_user = popup.querySelector("[name=callback-name]");
var email = popup.querySelector("[name=callback-email]");
var message = popup.querySelector("[name=callnack-message]");

var storageName = "";
var storageEmail = "";

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("show-modal");
  mask.classList.add("visible");

  if (storageName && storageEmail) {
    name_user.value = storageName;
    email.value = storageEmail;
    message.focus();
  }
  else {
    name_user.focus();
  }

});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("show-modal");
  mask.classList.remove("visible");
  popup.classList.remove("error-modal");
});

form.addEventListener("submit", function (evt) {
  if (!name_user.value || !email.value || !message.value) {
    evt.preventDefault();
    popup.classList.remove("error-modal");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("error-modal");
  }
  else {
    localStorage.setItem("name", name_user.value);
    localStorage.setItem("email", email.value);
  }
});

window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
  if (popup.classList.contains("show-modal")) {
    popup.classList.remove("show-modal");
    popup.classList.remove("error-modal");
    mask.classList.remove("visible");
  }
}
});
