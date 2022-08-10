
let result = document.getElementById("inputtext");

let calculate = (num) => {
    result.value+=num;
}

let Result = () =>{
    try{
        result.value = eval(result.value);
    }
    catch(err){
        alert("Enter Correct Input");
    }
}
 function Clear(){
    result.value = '';
 }

 function Delete(){
    result.value = result.value.slice(0,-1)
 }