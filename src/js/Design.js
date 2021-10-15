
/////////////////////////////////////// Navbar shrinking when scrolling ///////////////////////////////////////////

window.onscroll = function() {scrollFunction()};

function scrollFunction() 
{
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) 
    {
        
        document.getElementById("navbar").style.height = "50px";
        document.getElementById("navbar").style.transition = "height 0.2s linear";
        document.getElementsByClassName("searchbar")[0].style.marginLeft = "130px";

        // document.getElementsByClassName('movingPartLogo')[0].style.display = "none";
        // document.getElementsByClassName('movingPartLogo')[1].style.display = "none";

        var elements = document.getElementsByClassName("movingPartLogo");
        var dropdown = document.getElementsByClassName("dropdown-content");

        for (var i = 0; i < elements.length; i++) 
        {
            elements[i].style.display = "none";
            dropdown[i].style.marginTop = "20px";
            dropdown[i].style.transition = "height 0.2s linear";
        }
    } 
    else 
    {
        document.getElementById("navbar").style.height = "60px";
        document.getElementsByClassName("searchbar")[0].style.marginLeft = "0px";

        var elements = document.getElementsByClassName("movingPartLogo");
        var dropdown = document.getElementsByClassName("dropdown-content");

        for (var i = 0; i < elements.length; i++) 
        {
            elements[i].style.display = "inline";
            dropdown[i].style.marginTop = "25px";
        }
    }
}

 ////////////////////////////////// Show or hide dropdown-menu ////////////////////////////////////////////////

 //show the menu when clicking on the 3 dots button
function DropdownFct() 
{
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementsByClassName("dropbtn")[0].style.outline = "none";
}
  
//Close the dropdown menu if the user clicks outside of it

window.onclick = function(event) 
{
    if (!event.target.matches('.dropbtn')) 
    {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;

        for (i = 0; i < dropdowns.length; i++) 
        {
            var openDropdown = dropdowns[i];
            openDropdown.classList.remove('show');
        }
    }
}

// prevent from closing the dropdown menu when clicking in it 
$(".dropdown-content").click(function(event)
{
    event.stopPropagation();
});

//////////////////////////////////////////////// Dark theme /////////////////////////////////////////////////////////////

function DarkTheme() 
{
    var toggleButton = document.getElementsByClassName("toggle-btn")[0];
    toggleButton.classList.toggle('active');

    if(toggleButton.classList.contains('active'))
    {
        document.body.style.backgroundColor = "#1d1f20";
        document.getElementsByClassName("searchbar")[0].style.backgroundColor = "#2f2f2f";
        document.getElementsByClassName("search_input")[0].style.color = "#fff";
    }
    else
    {
        document.body.style.backgroundColor = "#d1d1d1";
        document.getElementsByClassName("searchbar")[0].style.backgroundColor = "#ececec";
        document.getElementsByClassName("search_input")[0].style.color = "black";

    }
}