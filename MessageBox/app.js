// const content = document.getElementById('box')
// const button = document.getElementById('btn')
// const error = document.getElementById('alertMsg')
// const showContent = document.getElementById('MsgContent')
// const form = document.getElementById('form')
//     (function () {
//         form.addEventListener('btn', function (e) {
//             e.preventDefault()

//             if (content.value === "") {
//                 error.style.display = block
//             } else {
//                 showContent.innerText = content.value
//             }
//         })


//     })()
generate()
function generate() {
    const quotes = {
        "-Ankeet Oli" : '"I love you so much ....."',
        "-Mandira Kc" : '"Orewa Hokage ni naruuuu.."',
        "-Santosh Lamichane" : '"Kaizoku wa oreni naru....."',
        "-Ameet Oli" : '".....Ban..... KAiiiiiii...."'
    }
    const authors = Object.keys(quotes)
    const author = authors[Math.floor(Math.random() * authors.length)]
    const quote = quotes[author]
    document.getElementById('author').innerHTML = author
    document.getElementById('quote').innerHTML = quote
}