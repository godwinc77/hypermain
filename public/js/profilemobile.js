const home = document.getElementsByClassName("home")[0]
const nav_item = document.getElementsByClassName("nav-list-item")[0]
const cancel = document.getElementById("cancle")
function open_nav_list(){
    nav_item.style.display ="block"
}
function close_nav_list(){
    nav_item.style.display ="none"
}
home.addEventListener("click", open_nav_list),
cancel.addEventListener("click", close_nav_list)