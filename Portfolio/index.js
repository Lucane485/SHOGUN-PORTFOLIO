// ------------------------------
// localStorage Index
// ------------------------------

localStorage.setItem('site', 'index');

// ------------------------------
// Const / Let WarnungAktiv
// ------------------------------

const aktiv = document.getElementById('aktivSound');
const passiv = document.getElementById('passivSound');
const link = document.getElementById('linkSound');
const messageBox = document.getElementById('message-box');
let warnungAktiv = false;

// ------------------------------
// Function Aktiv
// ------------------------------

function aktivPlay() {
    passiv.volume = 0;
    aktiv.volume = 1;
    aktiv.loop = true;

    aktiv.play().catch(function (e) {
        if (warnungAktiv === false && aktiv.paused) {
            warnungAktiv = true;

            messageBox.innerHTML = "<b>KLeiner Fehler:</b> Bitte klicke zuerst auf die Seite<b> ⤦</b><br><small>" + e.message + "</small>";
            messageBox.classList.add('show');
            console.warn("KLeiner Fehler: Bitte klicke zuerst auf die Seite" + "   ⋙   " + e.message)

            setTimeout(function () {
                messageBox.classList.remove('show');
                warnungAktiv = false;
            }, 5000);
        }
    });
}

function aktivFinish() {
    aktiv.pause();
    aktiv.currentTime = 0;
    passiv.volume = 0.35;
}

// ------------------------------
// Function Passiv
// ------------------------------

function passivPlay() {
    passiv.volume = 0.35;
    passiv.loop = true;

    passiv.play().catch(function (e) {
        if (warnungAktiv === false && passiv.paused) {
            warnungAktiv = true;

            messageBox.innerHTML = "<b>KLeiner Fehler:</b> Bitte klicke zuerst auf die Seite<b> ⤦</b><br><small>" + e.message + "</small>";
            messageBox.classList.add('show');
            console.warn("KLeiner Fehler: Bitte klicke zuerst auf die Seite" + "   ⋙   " + e.message)

            setTimeout(function () {
                messageBox.classList.remove('show');
                warnungAktiv = false;
            }, 5000);
        }
    });
}

function passivFinish() {
    passiv.pause();
    passiv.currentTime = 0;
}

// ------------------------------
// Function Link
// ------------------------------

function linkPlay() {
    aktivFinish();
    passivFinish();
    link.volume = 0.5;

    setTimeout(function () {
        link.pause();
        link.currentTime = 0;
        window.location.href = 'about_me.html';
    }, 2500);

    link.play().catch(function (e) {
        if (warnungAktiv === false && link.paused) {
            warnungAktiv = true;

            messageBox.innerHTML = "<b>KLeiner Fehler:</b> Bitte klicke zuerst auf die Seite<b> ⤦</b><br><small>" + e.message + "</small>";
            messageBox.classList.add('show');
            console.warn("KLeiner Fehler: Bitte klicke zuerst auf die Seite" + "   ⋙   " + e.message)

            setTimeout(function () {
                messageBox.classList.remove('show');
                warnungAktiv = false;
            }, 5000);
        }
    });
}