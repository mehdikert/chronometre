let h = document.getElementById('heure')
        let min = document.getElementById('minute')
        let sec = document.getElementById('seconde')
        let miliS = document.getElementById('miliSec')
        let xMs = 0;
        let xS = 0;
        let xM = 0;
        let xH = 0;
        let x;
        function miliSec() {
            xMs++;
            if (xMs < 10) {
                document.getElementById('miliSec').textContent = '0' + xMs
            } else if (xMs == 60) {
                xMs = 0;
                document.getElementById('miliSec').textContent = '0' + xMs;
                xS++;
                Sec()
            } else {
                document.getElementById('miliSec').textContent = xMs
            }
        }
        function Sec() {
            if (xS < 10) {
                document.getElementById('seconde').textContent = '0' + xS
            } else if (xS == 60) {
                xS = 0;
                document.getElementById('seconde').textContent = '0' + xS
                xM++;
                Min()
            } else {
                document.getElementById('seconde').textContent = xS
            }
        }
        function Min() {
            if (xM < 10) {
                document.getElementById('minute').textContent = '0' + xM
            } else if (xM == 60) {
                xM = 0;
                document.getElementById('minute').textContent = '0' + xM
                xH++;
                Heure();
            } else {
                document.getElementById('minute').textContent = xM
            }
        }
        function Heure() {

            if (xM < 10) {
                document.getElementById('heure').textContent = '0' + xM
            } else {
                document.getElementById('heure').textContent = xM
            }
        }
        function startChrono() {
            x = setInterval(miliSec, 1)
            document.querySelector('input:nth-child(1)').setAttribute('disabled', 'true')
            document.querySelector('input:nth-child(2)').removeAttribute('disabled')
            document.getElementById('start').style.transform = 'none'
        }

        function stop() {
            clearInterval(x)
            document.querySelector('input:nth-child(2)').setAttribute('disabled', 'true')
            document.getElementById('stop').style.transform = 'none'
            document.querySelector('input:nth-child(1)').removeAttribute('disabled')
        }

        ///// RESET FUNCTION 
        function reset() {
            window.location.reload()
        }