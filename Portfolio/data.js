

// ------------------------------
// Function Link(About Me)
// ------------------------------

function linkPlaySkills() {
    themeFinish();
    link.volume = 0.5;

    setTimeout(function () {
        link.pause();
        link.currentTime = 0;
        window.location.href = 'skills.html';
    }, 2500);

    link.play().catch(showError);
}

// ------------------------------
// Function Link(About Me)
// ------------------------------

function linkPlayAboutMe() {
    themeFinish();
    link.volume = 0.5;

    setTimeout(function () {
        link.pause();
        link.currentTime = 0;
        window.location.href = 'about_me.html';
    }, 2500);

    link.play().catch(showError);
}

// ------------------------------
// Function Link(Projects)
// ------------------------------

function linkPlayProjects() {
    themeFinish();
    link.volume = 0.5;

    setTimeout(function () {
        link.pause();
        link.currentTime = 0;
        window.location.href = 'projects.html';
    }, 2500);

    link.play().catch(showError);
}

// ------------------------------
// Function Page
// ------------------------------

function dataBackLink() {
    let number = localStorage.getItem('siteNumber');

    if (number === '1') {
        window.location.href = 'about_me.html';
    } else if (number === '2') {
        window.location.href = 'projects.html';
    } else {
        window.location.href = 'skills.html';
    }
}