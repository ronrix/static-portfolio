const sing = document.querySelector(".sing");
const bball = document.querySelector(".basketball");
const chess = document.querySelector(".chess");
const anime = document.querySelector(".anime");

const fullHeight = document.querySelector("body").getBoundingClientRect();
const currHeight = document.documentElement.clientHeight;

var observer = new IntersectionObserver(
    function (entries) {
        if (entries[0]["isIntersecting"] === true) {
            if (
                entries[0]["intersectionRatio"] === 1 ||
                entries[0]["intersectionRatio"] > 0.5
            )
                entries[0].target.classList.add("back");
        }
    },
    { threshold: [0, 0.5, 1] }
);

// Use the bserver to observe an element
observer.observe(sing);
observer.observe(bball);
observer.observe(chess);
observer.observe(anime);

// To stop observing:
if (sing.classList.contains == "back") {
    observer.unobserve(entry.target);
}

if (bball.classList.contains == "back") {
    observer.unobserve(entry.target);
}
if (chess.classList.contains == "back") {
    observer.unobserve(entry.target);
}
if (anime.classList.contains == "back") {
    observer.unobserve(entry.target);
}

// dark and light theme

const dnl = document.querySelector(".darknlight");
const icons = document.querySelectorAll(".icons");
const icon2 = document.querySelectorAll(".icons a i");
const lighty = document.querySelectorAll(".lighty");
const h4 = document.querySelectorAll("h4");
const info = document.querySelectorAll(".info");
const about = document.querySelector(".about");
const aboutp = document.querySelector(".about p");
const sun = document.querySelector(".darknlight i");

// render the saved theme
if (localStorage.getItem("theme") == "dark") {
    dnl.classList.add("moon");
    document.body.classList.add("dnl");
    icons.forEach((el) => el.classList.add("dnl"));
    icon2.forEach((el) => el.classList.add("dnl"));
    lighty.forEach((el) => el.classList.add("dnl"));
    h4.forEach((el) => el.classList.add("dnl"));
    info.forEach((el) => el.classList.add("dnl"));
    about.classList.add("dnl");
    aboutp.classList.add("dnl");

    if (dnl.classList.contains("moon")) {
        
        // change icon for dark
        sun.classList.remove('fa-moon');
        sun.classList.remove('moon');
        sun.classList.add('fa-sun');
        sun.classList.add('sun');

        localStorage.setItem("theme", "dark");
    } else {

        // change icon for light
        sun.classList.remove('fa-sun');
        sun.classList.remove('sun');
        sun.classList.add('fa-moon');
        sun.classList.add('moon');

        localStorage.setItem("theme", "light");
    }
}

dnl.addEventListener("click", () => {
    dnl.classList.toggle("moon");

    document.body.classList.toggle("dnl");
    icons.forEach((el) => el.classList.toggle("dnl"));
    icon2.forEach((el) => el.classList.toggle("dnl"));
    lighty.forEach((el) => el.classList.toggle("dnl"));
    h4.forEach((el) => el.classList.toggle("dnl"));
    info.forEach((el) => el.classList.toggle("dnl"));
    about.classList.toggle("dnl");
    aboutp.classList.toggle("dnl");

    // save and store the theme to local storage
    if (dnl.classList.contains("moon")) {
        
        // change icon for dark
        sun.classList.remove('fa-moon');
        sun.classList.remove('moon');
        sun.classList.add('fa-sun');
        sun.classList.add('sun');

        localStorage.setItem("theme", "dark");
    } else {

        // change icon for light
        sun.classList.remove('fa-sun');
        sun.classList.remove('sun');
        sun.classList.add('fa-moon');
        sun.classList.add('moon');

        localStorage.setItem("theme", "light");
    }
});
