const markReadBtn = document.querySelector("button");

const unreadNumber = document.querySelector(".unread-number");

const newNotes = document.querySelectorAll(".new");

const redDots = document.querySelectorAll(".red-dot");

markReadBtn.addEventListener("click", allRead);

function allRead() {
  newNotes.forEach((value) => {
    value.classList.add("inactive");
  });

  redDots.forEach((value) => {
    value.classList.add("not-active");
  });

  unreadNumber.innerHTML = "0";
}
