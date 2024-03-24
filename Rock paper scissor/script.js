const input = document.getElementById("input");

for (let i = 1; i <= 5; i++) {

    // console.log(input.value)+
}
// setInterval(myFunction, 1000);

function myFunction() {
    let d = new Date();
    document.getElementById("demo").innerHTML =
        d.getHours() + ":" +
        d.getMinutes() + ":" +
        d.getSeconds();
}