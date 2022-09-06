const rootElement = document.getElementById("spa-root");
const routerLoggingPrefix = "[SPA-Router]: 👉️ ";
const routes = {
    "#/":                               { title: "UnSite - Welcome!",       html: "/html/home.html",         func: null },
    "#/verification":                   { title: "UnSite - Verification",   html: "",         func: null },
};


let routeActive = {key: "#/", value: "#"};
let ignoreNextCall = 0;


async function requestPage(path) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            return this.responseText;
        }
    };

    xhttp.open('GET', path, true);
    xhttp.onerror = function () { 
        console.log(routerLoggingPrefix+"(🔴) Could not find requested page on server \""+window.location.hash.slice(1)+"\"" + " on server or cache"); 
        routeActive  = {key: "#/", value: "#"};
        return "<h1>Error 404!</h1>";
    };
    xhttp.send();
}

function applyPage(html) {
    rootElement.innerHTML = html;
}

async function router(routeNewObject) {
    if (routeNewObject) {
            routeActive = {key: window.location.hash, value: routeNewObject};
            document.title = routeNewObject.title;            

            //console.log(route);
            applyPage( await requestPage(routeNewObject.html));        
            console.log(routerLoggingPrefix+"(⚪) Requested page \""+window.location.hash.slice(1)+"\"");
    } else {
        console.log(routerLoggingPrefix+"(🔴) Could not find requested page \""+window.location.hash.slice(1)+"\""+ " in routes"); 
        ignoreNextCall = 0;        
    }
}

checkUrlHash();
window.addEventListener('hashchange', function (e) {
    checkUrlHash();
});

function checkUrlHash() {
    if (ignoreNextCall <= 0) {
        var hash = window.location.hash;
        router(routes[hash]);    
    } else ignoreNextCall--;
}