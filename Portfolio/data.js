// ------------------------------
// localStorage Data
// ------------------------------

localStorage.setItem('site', 'data');

// ------------------------------
// Function dataBackLink
// ------------------------------

function dataBackLink() {
    let site = localStorage.getItem('site');

    if (site === 'about_me') {
        linkPlayAboutMe();
    } else if (site === 'projects') {
        linkPlayProjects();
    } else {
        linkPlaySkills();
    }
}