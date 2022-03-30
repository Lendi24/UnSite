var trollLinks = ["https://www.youtube.com/watch?v=dQw4w9WgXcQ","https://www.youtube.com/watch?v=BsIa_LKojJI","https://www.youtube.com/watch?v=boPyHl3iptQ","https://www.youtube.com/watch?v=Cm0qaXi9THA","https://www.youtube.com/watch?v=71BCNq5tLaU","https://www.youtube.com/watch?v=12rT3uotaqk"]
var randLink = Math.random
var rand = Math.random() * 100;
Timer();

function Timer() {
    setTimeout(function() {
        window.location.href = trollLinks[Math.floor(Math.random()*trollLinks.length)];
    },rand * 1000);
    Timer();
}