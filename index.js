var id;
var count = 0;
var sec = 0;
var min = 0;
var hr = 0;

var start = document.getElementById("start").addEventListener("click", () => {
  id = setInterval(() => {
    stopwatch();
  }, 10);
});

var stop = document.getElementById("stop").addEventListener("click", () => {
  clearInterval(id);
});

var reset = document.getElementById("reset").addEventListener("click", () => {
  count = 0;
  sec = 0;
  min = 0;
  hr = 0;
  document.getElementById("count").innerHTML = "00";
  document.getElementById("sec2").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("hr").innerHTML = "00";
});

function stopwatch() {
  count++;
  document.getElementById("count").innerHTML = count;
  if (count == 100) {
    count = 0;

    if (sec == 60) {
      sec = 0;
      min++;
      document.getElementById("min").innerHTML = min;

      if (min == 60) {
        hr++;
        document.getElementById("hr").innerHTML = hr;
        min = 0;
        sec = 0;
      }
    } else {
      sec++;
      document.getElementById("sec2").innerHTML = sec;
    }
  }
}
var span = document.querySelectorAll("span");




