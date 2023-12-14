const btns = document.querySelectorAll(".btn");
const submit = document.querySelector(".submit");
const oval = document.querySelectorAll(".oval");
const notogri = document.querySelectorAll(".display div");
const href = document.querySelector(".href");
const one = document.querySelector(".cans");
const btnHref = document.querySelector(".btn_href");
let urin = 0;
let correct = [];
let truee = ["2", "0", "0", "8"];
function pasword() {
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      urin++;
      if (urin == 1) {
        oval[0].classList.add("active");
        correct.push(btn.textContent);
      } else if (urin == 2) {
        oval[1].classList.add("active");
        correct.push(btn.textContent);
      } else if (urin == 3) {
        oval[2].classList.add("active");
        correct.push(btn.textContent);
      } else if (urin == 4) {
        oval[3].classList.add("active");
        correct.push(btn.textContent);
      }
      submit.addEventListener("click", () => {
        if (
          correct[0] == truee[0] &&
          correct[1] == truee[1] &&
          correct[2] == truee[2] &&
          correct[3] == truee[3]
        ) {
          href.setAttribute("href", "./correct.html");
        } else {
          if (urin == 4) {
            href.removeAttribute("href");
            submit.classList.add("redd");
          }
        }
      });
      one.addEventListener("click", () => {
        for (let i = 0; i < oval.length; i++) {
          oval[i].classList.remove("active");
          btnHref.setAttribute("href", "./index.html");
        }
      });
    });
  });
}
pasword();
