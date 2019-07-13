
    
function calculateFidyah() {
    const numberOfDays = document.getElementById("numberOfDays").value
    const fidyahRate = 1.4;
    let answer = Math.ceil(numberOfDays * fidyahRate);
    document.getElementById('answer').innerHTML = "$"+answer;
}
