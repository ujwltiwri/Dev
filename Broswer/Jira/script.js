const uid = new ShortUniqueId();

const addBtn = document.querySelector(".add-btn");
const modalCont = document.querySelector(".modal-cont");
const colors = ["lightpink", "lightgreen", "lightblue", "black"];
let ticketColor = colors[colors.length - 1];
const textArea = document.querySelector(".textarea-cont");
const mainCont = document.querySelector(".main-cont");
const allPriorityColors = document.querySelectorAll(".priority-color");

let isModalPresent = false;

addBtn.addEventListener("click", () => {
  //1st case -> if modal is not present
  if (!isModalPresent) {
    //show the modal
    modalCont.style.display = "flex";
    //hide ticket Container
    mainCont.style.display = "none";
  } else if (isModalPresent) {
    modalCont.style.display = "none";
  }

  isModalPresent = !isModalPresent;
});

//2nd work to be done is to make tickets

modalCont.addEventListener("keydown", (keyPress) => {
  if (keyPress.key == "Shift") {
    //1 call createTicket()
    createTicket(ticketColor, textArea.value);

    //2nd -> alter display and update isModalPresent
    modalCont.style.display = "none";
    isModalPresent = !isModalPresent;
    //3rd empty the textarea
    textArea.value = "";

    //4th display ticket container
    mainCont.style.display = "flex";
  }
});

function createTicket(ticketColor, data) {
  let id = uid();

  let ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");
  ticketCont.innerHTML = `
        <div class ="ticket-color ${ticketColor}"></div>
        <div class ="ticket-id">${id}</div>
        <div class ="task-area">${data}</div>
        <div class="ticket-lock">
            <i class ="fa-solid fa-lock"></i>
        </div>
    `;

  mainCont.appendChild(ticketCont);
}

//choose Priority Color
allPriorityColors.forEach((colorElement) => {
  colorElement.addEventListener("click", function () {
    allPriorityColors.forEach((el) => {
      el.classList.remove("active");
    });
    colorElement.classList.add("active");
    ticketColor = colorElement.classList[0];
  });
});
