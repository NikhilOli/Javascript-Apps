const count = 0
function getcount(num) {
    count += num;
    document.getElementById('count').innerHTML = count;
}
getcount()