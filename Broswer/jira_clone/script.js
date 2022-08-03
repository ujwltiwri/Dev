const uid = new ShortUniqueId();
let addBtn = document.querySelector(".add-btn");
let modalCont = document.querySelector(".modal-cont");
let textArea = document.querySelector(".textarea-cont");
const mainCont = document.querySelector(".main-cont")
const colors = ["lightpink", "lightgreen", "lightblue", "black"];
let ticketColor = colors[colors.length - 1]; //i.e initially black is our TicketColor
let ticketsArr = [];
const allPriorityColors = document.querySelectorAll(".priority-color")
//main variables end here

// 1. to toggle modal
let isModalActive = false;
addBtn.addEventListener("click", function (){
    if(!isModalActive){
        modalCont.style.display = "flex";
    } else if(isModalActive){
        modalCont.style.display = "none";
    }

    isModalActive = !isModalActive;
})

//2. Work to be done is to make tickets
modalCont.addEventListener("keydown", (keypress) => {
    if(keypress.key == "Shift"){
        //1 call createTicket()
        createTicket(ticketColor, textArea.value);

        //2nd -> alter display and update isModalPresent
        modalCont.style.display = "none";
        isModalActive = !isModalActive;

        //3rd -> empty textarea
        textArea.value = "";

        //4th display ticket container
        mainCont.style.display = "flex";
    }
})

function createTicket(ticketColor, data, ticketId){
    let id = ticketId || uid();
    let ticketCont = document.createElement("div");
    ticketCont.setAttribute("class", "ticket-cont");
    ticketCont.innerHTML = `
            <div class ="ticket-color ${ticketColor}"></div>
            <div class="ticket-id">${id}</div>
            <div class="task-area">${data}</div>
            <div class="ticket-lock">
                 <i class ="fa-solid fa-lock"></i>
            </div>
        `
    mainCont.appendChild(ticketCont);

    //if ticket is being generated for 1st time then save it into localStorage
    if(!ticketId){
        ticketsArr.push({
            ticketColor,
            ticketId: id,
            ticketTask:data,
        })
    }
    //set in local storage
    localStorage.setItem("tickets", JSON.stringify(ticketsArr));
}

//getting data from local storage
if(localStorage.getItem("tickets")){
    ticketsArr = JSON.parse(localStorage.getItem("tickets"));
    ticketsArr.forEach(ticketObj => createTicket(ticketObj.ticketColor, ticketObj.ticketTask, ticketObj.ticketId));
}

//choose Priority Color
allPriorityColors.forEach(colorelement =>
    colorelement.addEventListener("click", () => {
        allPriorityColors.forEach(element =>
            element.classList.remove("active")
        )
        colorelement.classList.add("active");
        ticketColor = colorelement.classList[0];
    })
);