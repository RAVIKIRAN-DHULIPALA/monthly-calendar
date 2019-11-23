let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

let images = [
  "./images/jan.jpg",
  "./images/feb.jpg",
  "./images/mar.jpg",
  "./images/apr.jpg",
  "./images/may.jpg",
  "./images/jun.jpg",
  "./images/jul.jpg",
  "./images/aug.jpg",
  "./images/sep.jpg",
  "./images/oct.jpg",
  "./images/nov.jpg",
  "./images/dec.jpg"
];

let monthAndYear = document.getElementById("monthAndYear");
let bg = document.getElementById("image");
let body = document.getElementById("body");
setBg();
showCalendar(currentMonth, currentYear);

function next() {
  currentYear = currentMonth === 11 ? currentYear + 1 : currentYear;
  currentMonth = (currentMonth + 1) % 12;
  showCalendar(currentMonth, currentYear);
}

function previous() {
  currentYear = currentMonth === 0 ? currentYear - 1 : currentYear;
  currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;
  showCalendar(currentMonth, currentYear);
}

function jump() {
  currentYear = parseInt(selectYear.value);
  currentMonth = parseInt(selectMonth.value);
  showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {
  let firstDay = new Date(year, month).getDay();
  let daysInMonth = 32 - new Date(year, month, 32).getDate();

  let tbl = document.getElementById("date"); // body of the calendar

  // clearing all previous cells
  tbl.innerHTML = "";

  // filing data about month and in the page via DOM.
  monthAndYear.innerHTML = months[month] + " " + year;
  bg.style.background = "url('" + images[month] + "')";
  bg.style.backgroundRepeat = "no-repeat";
  bg.style.backgroundSize = "cover";

  // creating all cells
  let date = 1;
  for (let i = 0; i < 6; i++) {
    // creates a table row

    //creating individual cells, filing them up with data.
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay) {
        let cell = document.createElement("div");
        cell.setAttribute("class", "number");
        let cellText = document.createTextNode("");
        cell.appendChild(cellText);
        tbl.append(cell);
      } else if (date > daysInMonth) {
        break;
      } else {
        let cell = document.createElement("div");
        cell.setAttribute("class", "number");
        let cellText = document.createTextNode(date);
        if (
          date === today.getDate() &&
          year === today.getFullYear() &&
          month === today.getMonth()
        ) {
          cell.classList.add("active");
        } // color today's date
        cell.appendChild(cellText);
        tbl.append(cell);
        date++;
      }
    }
  }
}
function setBg() {
  let bgimages = [
    "./images/bg.jpg",
    "./images/bg1.jpg",
    "./images/bg2.jpg",
    "./images/bg3.jpg",
    "./images/bg4.jpg",
    "./images/bg5.jpg",
    "./images/bg6.jpg",
    "./images/mainbg.jpg"
  ];
  var i = 0;
  function change() {
    body.style.background =
      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('" +
      bgimages[i] +
      "')";
    body.style.backgroundSize = "cover";
    body.style.animation = "fade-in 500ms linear infinite";
    i++;
    if (i > bgimages.length - 1) {
      i = 0;
    }
  }
  setInterval(change, 5000);
}
