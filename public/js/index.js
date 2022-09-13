let open = true;
let count = 1;

function openNav() {
    if (open) {
        open = false;
        return (document.getElementById("mySidepanel").style.width = "70%");
    } else {
        open = true;
        return (document.getElementById("mySidepanel").style.width = "0px");
    }
}