let display = document.getElementsByClassName("screen")[0];
let buttons = document.qqueryselectorAll(".but");

let current = "";
let previous = "";
let operator = "";

buttons.forEach(item =>{
    item.addEventlistenr('click',()=>{
        const value=item.textContent;
        const action=item.dataset.action;
        if(!action){
            current+=value;
            display.textContent=current;
        }
         else if(action==="clear"){
            current='';
            previous='';
            operator='';
            display.textContent='0';
        }
        else if(action==='delete'){
            current=current.slice(0,-1);
            display.textContent=current!=0?current:0;
        }
    })
});
