//create a function
window.onscroll = function () {
    logoClr()
};
//play the function
function logoClr() {
    if (window.pageYOffset > 300) {
        document.getElementById("logo").style.color = "#c44536";

    } else {
        document.getElementById("logo").style.color = "#1c1c1c";

    }

};