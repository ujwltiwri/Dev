const addBtn = document.querySelector(".add-btn");
const modalCont = document.querySelector(".modal-cont");
const colors = ["lightpink", "lightgreen", "lightblue", "black"];
let modalPriorityColor = colors[colors.length - 1]; // black by default
const textArea = document.querySelector(".textarea-cont");
const mainCont = document.querySelector(".main-cont");

var isModalPresent = false;

addBtn.addEventListener("click", function () {
  //case 1 -> if modal is not present
  // then display the modal
  if (!isModalPresent) {
    //display modal
    modalCont.style.display = "flex";
  } else if (isModalPresent) {
    //hide modal
    modalCont.style.display = "none";
  }

  isModalPresent = !isModalPresent; //to change the state of modal from true to false
  // and from false to true
});

//checking shift click from keyboard for writing data in modal
modalCont.addEventListener("keydown", function (e) {
  if (e.key == "Shift") {
    //will execute when shift is pressed
    console.log(textArea.value);
    // 1-> Call createTicket Function
    createTicket(modalPriorityColor, textArea.value);

    //2 Alter display and update isModalPresent
    modalCont.style.display = "none";
    isModalPresent = false;
    textArea.value = "";
  }
});

function createTicket(ticketColor, data) {
  let id = "helloid";

  let ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");
  ticketCont.innerHTML = `
    <div class = "ticket-color ${ticketColor}"></div>
    <div class = "ticket-id">#${id}</div>
    <div class = "task-area">${data}</div>
    <div class = "ticket-lock">
        <i class="fa-solid fa-lock"></i>
    </div>
  `;
  mainCont.appendChild(ticketCont);
}
