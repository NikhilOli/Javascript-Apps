const search = document.getElementById("search");
const button = document.getElementById("btn");
let website;
button.addEventListener("click", function() {
    // if(search.value == "Netflix"){
    //     window.location.replace("https://www.netflix.com/browse");
    // }else if(search.value == "facebook"){
    //     // location.open("https://facebook.com/")
    //     window.open("https://facebook.com/", "_blank");
//  website = search.value
//     // }
    // window.open(`https://${website}.com/`, "_blank");
    // search.value = "";
    redirect();
})
search.addEventListener("keydown", function(e){
    if(e.key == 'Enter'){
    redirect();
    }
})  
function redirect() {
    // if(search.value == "Netflix"){
    //     window.location.replace("https://www.netflix.com/browse");
    // }else if(search.value == "facebook"){
    //     // location.open("https://facebook.com/")
    //     window.open("https://facebook.com/", "_blank");
 website = search.value
    // }
    window.open(`https://${website}.com/`, "_blank");
    search.value = "";
}