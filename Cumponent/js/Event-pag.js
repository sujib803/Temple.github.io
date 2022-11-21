/* <!-- -------------------------------------------------------< header-section >------------------------------------------------------ --> */
function opensubmenu1() {
    document.getElementById("submenu").classList.toggle("open");
}
/* <!-- -------------------------------------------------------< Event-section >------------------------------------------------------ --> */
function openpastevent() {
    document.getElementById("past-event").classList.toggle("openPa");
    document.getElementById("present-event").classList.toggle("openPr");
    document.getElementById("future-event").classList.toggle("openFu");

}
function openpresentevent() {
    document.getElementById("past-event").classList.toggle("openPa2");
    // document.getElementById("present-event").classList.toggle("openPr2");
    document.getElementById("future-event").classList.toggle("openFu2");

}
function openfutureevent() {
    document.getElementById("past-event").classList.toggle("openPa3");
    document.getElementById("present-event").classList.toggle("openPr3");
    document.getElementById("future-event").classList.toggle("openFu3");

}