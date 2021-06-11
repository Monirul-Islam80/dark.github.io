
function addStyle(){
    document.querySelector('#ull').classList.toggle("show");
}
window.onclick = function(e) {
    if (!e.target.matches('.btn')) {
    var myDropdown = document.getElementById("ull");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }
  