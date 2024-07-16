
        let hours = 0, minutes = 0, seconds = 0, msec = 0;
        let Interval;

        function start() {
            clearInterval(Interval);
            Interval = setInterval(startTimer, 10);
        }

        function stop() {
            clearInterval(Interval);
        }

        function reset() {
            clearInterval(Interval);
            hours = minutes = seconds = msec = 0;
            document.getElementsByClassName("hours")[0].innerHTML = "00";
            document.getElementsByClassName("minutes")[0].innerHTML = "00";
            document.getElementsByClassName("seconds")[0].innerHTML = "00";
            document.getElementsByClassName("msec")[0].innerHTML = "00";
        }

        function startTimer() {
            msec++;
            if (msec > 99) {
                seconds++;
                msec = 0;
            }
            if (seconds > 59) {
                minutes++;
                seconds = 0;
            }
            if (minutes > 59) {
                hours++;
                minutes = 0;
            }
            document.getElementsByClassName("hours")[0].innerHTML = hours.toString().padStart(2, '0');
            document.getElementsByClassName("minutes")[0].innerHTML = minutes.toString().padStart(2, '0');
            document.getElementsByClassName("seconds")[0].innerHTML = seconds.toString().padStart(2, '0');
            document.getElementsByClassName("msec")[0].innerHTML = msec.toString().padStart(2, '0');
        }