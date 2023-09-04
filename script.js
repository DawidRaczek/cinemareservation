function seatonclick(event){
    if(event.target.classList.contains('seatclicked')){
        event.target.classList.remove('seatclicked')
    }
    else{
        event.target.classList.add('seatclicked')
    }
}


const placement = document.getElementById("placement");

for(let i = 1; i <= 10; i++){
    const row = document.createElement("div");
    row.classList.add("row");
    row.classList.add(`row-${i}`);
    for(let j = 1; j <= 7; j++){
        const seat = document.createElement("div");
        seat.classList.add("seat");
        seat.classList.add(`seat-${i}-${j}`);
        seat.setAttribute("id", "seat")
        row.appendChild(seat);
        
        seat.addEventListener('click',seatonclick)
   
    }
    placement.appendChild(row);
}
