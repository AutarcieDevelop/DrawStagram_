
const darktheme = () => 
{
    var toggleButton = document.getElementsByClassName("toggle-btn")[0];
     toggleButton.classList.toggle('active');
 
     if(toggleButton.classList.contains('active'))
     {
         document.body.style.backgroundColor = "#1d1f20";
         document.body.style.color = "#fff";
         document.getElementsByClassName("searchbar")[0].style.backgroundColor = "#2f2f2f";
         document.getElementsByClassName("search_input")[0].style.color = "#fff";
     }
     else
     {
         document.body.style.backgroundColor = "#d1d1d1";
         document.body.style.color = "black";
         document.getElementsByClassName("searchbar")[0].style.backgroundColor = "#ececec";
         document.getElementsByClassName("search_input")[0].style.color = "black";
 
     }
}

export default darktheme