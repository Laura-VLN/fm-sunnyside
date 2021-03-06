let width = window.innerWidth;
var mobileSources = [];
var desktopSources = [
    "assets/images/desktop/image-transform.jpg", 
    "assets/images/desktop/image-stand-out.jpg",
    "assets/images/desktop/image-gallery-milkbottles.jpg",
    "assets/images/desktop/image-gallery-orange.jpg",
    "assets/images/desktop/image-gallery-cone.jpg",
    "assets/images/desktop/image-gallery-sugarcubes.jpg"
];

function displayWindowSize() {
    width = window.innerWidth;
};

function displayImg() {
    desktopSources.forEach(element => {
        if (width < 1440) {
            array = element.split("/");
            array[2] = "mobile";
            element = array.join("/");
            mobileSources.push(element);
        }
    });
    
    if (width >= 1440) {
        for (let i = 1; i < 7; i++) {
            document.getElementById("split-card-"+i).src = desktopSources[i-1];
        }
    } else {
        for (let i = 1; i < 7; i++) {
            document.getElementById("split-card-"+i).src = mobileSources[i-1];
        }
    }
};

window.addEventListener('load', () => {
    displayWindowSize();
    displayImg();
});

window.addEventListener('resize', () => {
    displayWindowSize();
    displayImg();
});