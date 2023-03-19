
let currentDay = moment()

//Time in 24hrs format for time checker
let currentTime= moment().format("HH:00")

$("#currentDay").text(currentDay.format("dddd-Do-MMMM-YYYY"))

let $timeblock = $("#timeBlock")

//Time Slots Array
const workHrs = ["08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00"]

let workspace = document.querySelector('.container');



 //Time checker for TimeSlots thats added Css class
let timeSlotAvailability = function  timeSlotAvailability(arg){
    if (arg === currentTime) {
        return "present"
    } else if (arg > currentTime){
        return "future"
    } else {
        return "past"
    }
};






// Dynamic Render Time Slots 
workspace.innerHTML= workHrs.map((hours) =>{
    

   return `
   
    <div id="timeBlock" class="input-group timeblck">
   <div class="input-group-prepend">
     <span class="input-group-text mt-1"> Time: ${hours}</span>
   </div>
   <textarea data-time=${hours} class="form-control ${timeSlotAvailability(hours)} mt-1 abc ${hours}" aria-label="With textarea"></textarea>
   <button class="btn btn-outline-secondary btn-sm saveBtn mt-1 " onclick="myFunction()" type="button">
     🔒 Book
   </button>
 </div>`

  

}).join("")



//  let texf = document.querySelector("textarea")


function myFunction(){

   
    
  //Set localstorage to the button sibling textarea vale
    localStorage.setItem(event.target.previousElementSibling.dataset.time, event.target.previousElementSibling.value )

    // console.log(event.target.previousElementSibling.dataset.time)
}





//loops through localstrage and set textarea value if an entry exist 
Object.keys(localStorage).forEach(e => {
    console.log(e)


    // 
    document.querySelector(`[data-time="${e}"]`).value=`${localStorage[e]}`


});