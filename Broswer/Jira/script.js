const uid = new ShortUniqueId();

const addBtn = document.querySelector(".add-btn");
const modalCont = document.querySelector(".modal-cont");
const colors = ["lightpink", "lightgreen", "lightblue", "black"];
let ticketColor = colors[colors.length - 1];
const textArea = document.querySelector(".textarea-cont");
const mainCont = document.querySelector(".main-cont");
const allPriorityColors = document.querySelectorAll(".priority-color");
const toolBoxColors = document.querySelectorAll(".toolbox-color-cont > * ");
const removeBtn = document.querySelector(".remove-btn");
let ticketsArr = [];

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

function createTicket(ticketColor, data, ticketId) {
  let id = ticketId || uid();

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

  //if ticket is being generated for 1st time then save it into localStorage
  if (!ticketId) {
    ticketsArr.push({
      ticketColor,
      ticketId: id,
      ticketTask: data,
    });
  }

  localStorage.setItem("tickets", JSON.stringify(ticketsArr));

  handleRemoval(ticketCont, id);
  handlePriorityColor(ticketCont, id);
  handelLock(ticketCont, id);
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

//getting data from local Storage to show
if (localStorage.getItem("tickets")) {
  ticketsArr = JSON.parse(localStorage.getItem("tickets"));
  ticketsArr.forEach((ticketObj) =>
    createTicket(
      ticketObj.ticketColor,
      ticketObj.ticketTask,
      ticketObj.ticketId
    )
  );
}

//geting tickets on the basis of ticketColor
for (let i = 0; i < toolBoxColors.length; i++) {
  toolBoxColors[i].addEventListener("click", () => {
    let currColor = toolBoxColors[i].classList[0];
    let filteredTicketArr = ticketsArr.filter(
      (ticketObj) => ticketObj.ticketColor == currColor
    );

    // 1st Step -> Remove All Tickets
    let allTickets = document.querySelectorAll(".ticket-cont");
    allTickets.forEach((tickets) => tickets.remove());

    //2nd Step -> Show Filtered Tickets
    filteredTicketArr.forEach((ticketObj) =>
      createTicket(
        ticketObj.ticketColor,
        ticketObj.ticketTask,
        ticketObj.ticketId
      )
    );
  });

  //display all tickets when double clicked
  toolBoxColors[i].addEventListener("dblclick", () => {
    //remove tickets of specific color from UI
    let allTickets = document.querySelectorAll(".ticket-cont");
    allTickets.forEach((tickets) => tickets.remove());

    //now show all the tickets
    ticketsArr.forEach((ticketObj) =>
      createTicket(
        ticketObj.ticketColor,
        ticketObj.ticketTask,
        ticketObj.ticketId
      )
    );
  });
}

//make remove btn active
var isRemoveBtnActive = false;
removeBtn.addEventListener("click", function () {
  if (!isRemoveBtnActive) {
    //    case 1 -> if removeBtn is not active
    //              then make it active i.e. red color
    removeBtn.style.color = "red";
  } else if (isRemoveBtnActive) {
    // case 2 -> if removeBtn is active
    //           then make it inactive i.e. white color
    removeBtn.style.color = "white";
  }

  isRemoveBtnActive = !isRemoveBtnActive;
});

function handleRemoval(ticketCont, id) {
  ticketCont.addEventListener("click", function () {
    if (!isRemoveBtnActive) return;

    //remove from ticketArr
    let idx = getTicketidx(id);

    //splice the specific ticket from ticketarr
    ticketsArr.splice(idx, 1);

    //set in local storage
    localStorage.setItem("tickets", JSON.stringify(ticketsArr));
    ticketCont.remove(); // Remove from Front end Because it will not instantly be removed automactically if not handled like this
  });
}

function getTicketidx(id) {
  let idx = ticketsArr.findIndex((ticketObj) => {
    return ticketObj.ticketId == id;
  });
  return idx;
}

//change priority color on clicking
function handlePriorityColor(ticketCont, id) {
  let ticketColor = ticketCont.querySelector(".ticket-color");
  //add event listener of type click on ticket color
  ticketColor.addEventListener("click", function () {
    let currTicketColor = ticketColor.classList[1]; //lightpink
    let currTicketColoridx = colors.indexOf(currTicketColor); // 0

    let nextTicketColorIdx = (currTicketColoridx + 1) % colors.length; // -> Circular Array
    let nextTicketColor = colors[nextTicketColorIdx]; //lightgreen

    ticketColor.classList.remove(currTicketColor); //lightpink class remove
    ticketColor.classList.add(nextTicketColor); //lightgreen class added

    //Update local storage
    let idx = getTicketidx(id);
    //update the nextTicketColor in ticketArr
    ticketsArr[idx].ticketColor = nextTicketColor;
    //set in local storage
    localStorage.setItem("tickets", JSON.stringify(ticketsArr));
  });
}

//handle lock to edit ticket data
const unlock = "fa-lock-open";
function handelLock(ticketCont, id) {
  let ticketLock = ticketCont.querySelector(".ticket-lock");
  let lock = ticketLock.children[0].classList[1];
  let ticketTaskArea = ticketCont.querySelector(".task-area");

  ticketLock.addEventListener("click", function () {
    if (ticketLock.children[0].classList.contains(lock)) {
      //remove lock class
      ticketLock.children[0].classList.remove(lock);

      //add unlock class
      ticketLock.children[0].classList.add(unlock);

      //make content editable
      ticketTaskArea.setAttribute("contenteditable", "true");
    } else if (ticketLock.children[0].classList.contains(unlock)) {
      //remove unlock class
      ticketLock.children[0].classList.remove(unlock);

      //add lock class
      ticketLock.children[0].classList.add(lock);

      //make content non editable
      ticketTaskArea.setAttribute("contenteditable", "false");

      //set data in localstorage
      let idx = getTicketidx(id);
      ticketsArr[idx].ticketTask = ticketTaskArea.textContent;
      localStorage.setItem("tickets", JSON.stringify(ticketsArr));
    }
  });
}
