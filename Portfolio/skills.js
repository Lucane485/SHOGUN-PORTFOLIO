// ------------------------------
// localStorage Skills
// ------------------------------

localStorage.setItem('site', 'skills');

// ------------------------------
// Const Text
// ------------------------------

const text0 = document.getElementById('text0');
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');
const text4 = document.getElementById('text4');
const text5 = document.getElementById('text5');
const text6 = document.getElementById('text6');
const text7 = document.getElementById('text7');
const text8 = document.getElementById('text8');

// Const Slot

const slot1 = document.getElementById('slot1');
const slot2 = document.getElementById('slot2');
const slot3 = document.getElementById('slot3');
const slot4 = document.getElementById('slot4');
const slot5 = document.getElementById('slot5');
const slot6 = document.getElementById('slot6');
const slot7 = document.getElementById('slot7');
const slot8 = document.getElementById('slot8');

// Let Active

let active = 0;

// ------------------------------
// Slot.EventListener
// ------------------------------

slot1.addEventListener("click", function () {
    if (active === 1) {
        active = 0;
        console.log("HTML Closed");
    } else {
        active = 1;
        console.log("HTML Opened");
    }
    Update();
})

slot2.addEventListener("click", function () {
    if (active === 2) {
        active = 0;
        console.log("WORD Closed");
    } else {
        active = 2;
        console.log("WORD Opened");
    }
    Update();
})

slot3.addEventListener("click", function () {
    if (active === 3) {
        active = 0;
        console.log("CSS Closed");
    } else {
        active = 3;
        console.log("CSS Opened");
    }
    Update();
})

slot4.addEventListener("click", function () {
    if (active === 4) {
        active = 0;
        console.log("PPT Closed");
    } else {
        active = 4;
        console.log("PPT Opened");
    }
    Update();
})

slot5.addEventListener("click", function () {
    if (active === 5) {
        active = 0;
        console.log("JS Closed");
    } else {
        active = 5;
        console.log("JS Opened");
    }
    Update();
})

slot6.addEventListener("click", function () {
    if (active === 6) {
        active = 0;
        console.log("EXCLE Closed");
    } else {
        active = 6;
        console.log("EXCLE Opened");
    }
    Update();
})

slot7.addEventListener("click", function () {
    if (active === 7) {
        active = 0;
        console.log("MDL Closed");
    } else {
        active = 7;
        console.log("MDL Opened");
    }
    Update();
})

slot8.addEventListener("click", function () {
    if (active === 8) {
        active = 0;
        console.log("BLENDER Closed");
    } else {
        active = 8;
        console.log("BLENDER Opened");
    }
    Update();
})

// ------------------------------
// Funktion Update
// ------------------------------

function Update() {
    if (active === 0) {
        text0.style.opacity = 1;
    } else {
        text0.style.opacity = 0;
    }

    if (active === 1) {
        text1.style.opacity = 1;
    } else {
        text1.style.opacity = 0;
    }

    if (active === 2) {
        text2.style.opacity = 1;
    } else {
        text2.style.opacity = 0;
    }

    if (active === 3) {
        text3.style.opacity = 1;
    } else {
        text3.style.opacity = 0;
    }

    if (active === 4) {
        text4.style.opacity = 1;
    } else {
        text4.style.opacity = 0;
    }

    if (active === 5) {
        text5.style.opacity = 1;
    } else {
        text5.style.opacity = 0;
    }

    if (active === 6) {
        text6.style.opacity = 1;
    } else {
        text6.style.opacity = 0;
    }

    if (active === 7) {
        text7.style.opacity = 1;
    } else {
        text7.style.opacity = 0;
    }

    if (active === 8) {
        text8.style.opacity = 1;
    } else {
        text8.style.opacity = 0;
    }
}

// ------------------------------
// Varablen
// ------------------------------

let info = 0;
const p = document.getElementById('text_open');
const arrowInfo = document.getElementById('arrow_down');
const arrowRight = document.getElementById('arrow_right');

// ------------------------------
// Arrow.EventListener
// ------------------------------

arrowInfo.addEventListener("click", function () {
    Info();
})

// ------------------------------
// Funktion Info
// ------------------------------

function Info() {
    if (info === 0) {
        p.innerHTML = `Ich bin <b>Dennis Staral¹</b> und habe diese Internetseite geschaffen. 
                        Auf dieser Seite können Sie die 8 verschiedenen <b>Icons</b> anklicken, um kleine Infotexte zu erhalten. 
                        Alle Texte sind unterschiedlich, da sie von Programmen handeln, die <b>ich</b> beherrsche. 
                        <br><br><br>
                        <small><span style="color:#be0000">¹</span>Wenn du nicht weißt, wer ich bin 
                        <span class="arrow_right" id="rrow_right" style="margin-right: 10px;">⤦</span>
                        <br>
                        <span class="item" style="color:#b30000; cursor:pointer; margin-left: 5px;"
                             onclick="window.location.href='about_me.html#know'"
                             onmouseenter="exitPlay()">ABOUT ME</span>
                       </small>`;
        arrowInfo.innerHTML = "🢁";
        info = 1;
        console.log("Info Text Opened");
    } else {
        p.innerHTML = "Wähle eines der <b>Icons</b> und clicke auf ihn, um einen kurzen Text darüber zu sehen.";
        arrowInfo.innerHTML = "🢃";
        info = 0;
        console.log("Info Text Closed");
    }
}