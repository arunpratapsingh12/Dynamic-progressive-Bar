const Inputmaxvalue = document.querySelector("#maxvalue");
const Inputvalue = document.querySelector("#value");
const progress = document.querySelector(".progressive-done");
const Massage = document.querySelector("#massage");


let finalvalue = 0;
let maxvalue = 0;

function dynamicprogression() {
    if (maxvalue < finalvalue) {
   
        Massage.innerText = `You trying something wrong`;
     
        
    } else {
        
        progress.style.width = `${(finalvalue / maxvalue) * 100}%`;
        
        const a = progress.innerText = `${Math.ceil((finalvalue / maxvalue) * 100)}%`;
        
    }

}
Inputmaxvalue.addEventListener('keyup', () => {
    maxvalue = parseInt(Inputmaxvalue.value, 10);
    // console.log(maxvalue);
    dynamicprogression();
})

Inputvalue.addEventListener("keyup", () => {
  finalvalue = parseInt(Inputvalue.value, 10);
//   console.log(finalvalue);
    dynamicprogression();
});