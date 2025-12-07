var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    loader.style.display = "none";
});

function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

var form = document.getElementById("form1");

form.addEventListener("submit", function(event){
    event.preventDefault();
    form.reset();
    alert("Form submitted successfully!");
    form.attributes.action = "mailto:gabzdeleon1001@gmail.com";
});