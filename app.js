
let curw = document.querySelector(".cur-hrs-w");
let prew = document.querySelector(".pre-hrs-w");
let curp = document.querySelector(".cur-hrs-p");
let prep = document.querySelector(".pre-hrs-p");
let curst = document.querySelector(".cur-hrs-st");
let prest = document.querySelector(".pre-hrs-st");
let cure = document.querySelector(".cur-hrs-e");
let pree = document.querySelector(".pre-hrs-e");
let curso = document.querySelector(".cur-hrs-so");
let preso = document.querySelector(".pre-hrs-so");
let curse = document.querySelector(".cur-hrs-se");
let prese = document.querySelector(".pre-hrs-se");
var datafetch;

let dbtn = document.querySelector(".daily-btn");
let wbtn = document.querySelector(".weekly-btn");
let mbtn = document.querySelector(".monthly-btn");

async function getData() {
    await fetch("data.json")
        .then(function (response) {
            //JSON data will arrive here
            return response.json();
        })
        .then(function (data) {
            datafetch = data;
        })
        .catch(function (err) {
            //Error occured
            console.log(err);
        });
    displayDaily();
}



function displayDaily() {

    for (var i = 0; i < datafetch.length; i++) {
        if (datafetch[i].title === "Work") {
            curw.innerHTML = datafetch[i].timeframes.daily.current + "hrs";
            prew.innerHTML = "Yesterday - " + datafetch[i].timeframes.daily.previous + "hrs";
        }
        else if (datafetch[i].title === "Play") {
            curp.innerHTML = datafetch[i].timeframes.daily.current + "hrs";
            prep.innerHTML = "Yesterday - " + datafetch[i].timeframes.daily.previous + "hrs";
        }
        else if (datafetch[i].title === "Study") {
            curst.innerHTML = datafetch[i].timeframes.daily.current + "hrs";
            prest.innerHTML = "Yesterday - " + datafetch[i].timeframes.daily.previous + "hrs";
        }
        else if (datafetch[i].title === "Exercise") {
            cure.innerHTML = datafetch[i].timeframes.daily.current + "hrs";
            pree.innerHTML = "Yesterday - " + datafetch[i].timeframes.daily.previous + "hrs";
        }
        else if (datafetch[i].title === "Social") {
            curso.innerHTML = datafetch[i].timeframes.daily.current + "hrs";
            preso.innerHTML = "Yesterday - " + datafetch[i].timeframes.daily.previous + "hrs";
        }
        else {
            curse.innerHTML = datafetch[i].timeframes.daily.current + "hrs";
            prese.innerHTML = "Yesterday - " + datafetch[i].timeframes.daily.previous + "hrs";
        }
    }
    dbtn.style.color = "white";
    wbtn.style.color = "#6f76c8";
    mbtn.style.color = "#6f76c8";
}

function displayWeekly() {
    for (var i = 0; i < datafetch.length; i++) {
        if (datafetch[i].title === "Work") {
            curw.innerHTML = datafetch[i].timeframes.weekly.current + "hrs";
            prew.innerHTML = "Last Week - " + datafetch[i].timeframes.weekly.previous + "hrs";
        }
        else if (datafetch[i].title === "Play") {
            curp.innerHTML = datafetch[i].timeframes.weekly.current + "hrs";
            prep.innerHTML = "Last Week - " + datafetch[i].timeframes.weekly.previous + "hrs";
        }
        else if (datafetch[i].title === "Study") {
            curst.innerHTML = datafetch[i].timeframes.weekly.current + "hrs";
            prest.innerHTML = "Last Week - " + datafetch[i].timeframes.weekly.previous + "hrs";
        }
        else if (datafetch[i].title === "Exercise") {
            cure.innerHTML = datafetch[i].timeframes.weekly.current + "hrs";
            pree.innerHTML = "Last Week - " + datafetch[i].timeframes.weekly.previous + "hrs";
        }
        else if (datafetch[i].title === "Social") {
            curso.innerHTML = datafetch[i].timeframes.weekly.current + "hrs";
            preso.innerHTML = "Last Week - " + datafetch[i].timeframes.weekly.previous + "hrs";
        }
        else {
            curse.innerHTML = datafetch[i].timeframes.weekly.current + "hrs";
            prese.innerHTML = "Last Week - " + datafetch[i].timeframes.weekly.previous + "hrs";
        }
    }
    dbtn.style.color = "#6f76c8";
    wbtn.style.color = "white";
    mbtn.style.color = "#6f76c8";
}

function displayMonthly() {
    for (var i = 0; i < datafetch.length; i++) {
        if (datafetch[i].title === "Work") {
            curw.innerHTML = datafetch[i].timeframes.monthly.current + "hrs";
            prew.innerHTML = "Last Month - " + datafetch[i].timeframes.monthly.previous + "hrs";
        }
        else if (datafetch[i].title === "Play") {
            curp.innerHTML = datafetch[i].timeframes.monthly.current + "hrs";
            prep.innerHTML = "Last Month - " + datafetch[i].timeframes.monthly.previous + "hrs";
        }
        else if (datafetch[i].title === "Study") {
            curst.innerHTML = datafetch[i].timeframes.monthly.current + "hrs";
            prest.innerHTML = "Last Month - " + datafetch[i].timeframes.monthly.previous + "hrs";
        }
        else if (datafetch[i].title === "Exercise") {
            cure.innerHTML = datafetch[i].timeframes.monthly.current + "hrs";
            pree.innerHTML = "Last Month - " + datafetch[i].timeframes.monthly.previous + "hrs";
        }
        else if (datafetch[i].title === "Social") {
            curso.innerHTML = datafetch[i].timeframes.monthly.current + "hrs";
            preso.innerHTML = "Last Month - " + datafetch[i].timeframes.monthly.previous + "hrs";
        }
        else {
            curse.innerHTML = datafetch[i].timeframes.monthly.current + "hrs";
            prese.innerHTML = "Last Month - " + datafetch[i].timeframes.monthly.previous + "hrs";
        }
    }
    dbtn.style.color = "#6f76c8";
    wbtn.style.color = "#6f76c8";
    mbtn.style.color = "white";
}


