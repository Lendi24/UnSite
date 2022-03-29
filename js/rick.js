var trollLinks = ["https://www.youtube.com/watch?v=dQw4w9WgXcQ","https://www.youtube.com/watch?v=BsIa_LKojJI"]
var randLink = Math.random
var rand = Math.random() * 100;

setTimeout(function() {
    window.location.replace(trollLinks[Math.floor(Math.random()*trollLinks.length)]);
},rand * 1000);