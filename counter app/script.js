
//ctrl +k+C

let saveEl= document.getElementById("save-el");
let countEl =document.getElementById("count-el");
let count = 0;

function increment() {

    count += 1
    countEl.textContent = count;
}


 
function save(){
 let saveText= count +" - ";
 saveEl.textContent+=saveText;
 count=0;
 countEl.textContent= count;

}
