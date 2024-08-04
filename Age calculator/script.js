// we add an const  to the bottton in order to get him in the web and the brithday in order to get the correct DOB to calculate 

const BtnEl = document.getElementById('btn');
const birthdayEl = document.getElementById('birthday');
const resultEl = document.getElementById('result')

// we create the function calculate Age in order to proceed with the eventListener already declared (Click)
BtnEl.addEventListener('click',calculateAge )







// we create the function input to give us the DOB and calculate the age and when print the value will display in the DOM


function calculateAge() {

   const birthdayValue =birthdayEl.value;
//    we validate 
if (birthdayValue === "") {
    alert("Please enter your DOB")
}else{
    const age = getAge(birthdayValue)
    resultEl.innerText = `Your Age is ${age}  ${age > 1 ? " Years": "Year"} old ...`;
}
}


function getAge(birthdayValue) {
    const CurrentDate = new Date()// constructor method get the date from the browser 
    const birthdayDate = new Date(birthdayValue);

    let age = CurrentDate.getFullYear( ) - birthdayDate.getFullYear();
    const months = CurrentDate.getMonth() // default variable given by js using the current month 


    if (
        months < 0 || (months === 0 && CurrentDate.getDate() < birthdayDate.getDate()) 
    
    
    ) 
        age --
        
    
    return age
}


