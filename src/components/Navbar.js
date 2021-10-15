import React from 'react'
import {Navbar,Nav} from 'react-bootstrap';
import DrawFactoryLogo from '../Pics/Logo DrawFactory.png'
import DrawFactory from '../Pics/Drawstagram.png'
import ProfileLogo from '../Pics/Profile.png'
import Magnifier from '../Pics/magnifier.png'
import DarkTheme from './darktheme'

// const styles = {
//   span: {
//     color:'#727272'
//   }
// };

const navbar = () => 
{
    return (
      <div>
        <Navbar expand="lg" className="fixed-top">
          <Navbar.Brand href="/"><img src={DrawFactoryLogo} width="50" alt="Draw-factory logo"/><span className="movingPartLogo" style={{color: "#727272"}}>| </span><img src={DrawFactory} className="movingPartLogo" width="120" alt="Draw-factory"/></Navbar.Brand>
          <Nav.Item>
          <form className="form-inline"  style={{flex: 1}}>
            <div className="container FormContainer h-100">
              <div className="d-flex justify-content-center">
                <div className="searchbar">
                  <input className="search_input" type="text" name="" placeholder="Rechercher"/>
                  <a href="/" className="search_icon"><img src={Magnifier} width="15" alt="magnifier"/></a>
                </div>
              </div>
            </div>
          </form>
          </Nav.Item>
          <Nav.Item className="position-fixed">
            <a className="profile" href="/profile"><img src={ProfileLogo} width="60" alt="profile"/></a>
          </Nav.Item>
          <Nav.Item className="position-fixed">
            <button onClick={DropdownFct} aria-haspopup="true" className="dropbtn">...</button>
            <div id="myDropdown" className="dropdown-content" onClick={Stop}>
              <div id="darkThemeSection">
                Theme sombre
                <div className="dropdownContainer">
                  <div className="toggle-btn active" onClick={DarkTheme}>
                      <div className="inner-circle"></div>                            
                  </div>
                </div>
              </div>
              <div>
                <a className="messages" href="/messages" style={{color: "#fff"}}>Mes messages</a>
              </div>
              <div>
                <a className="deconnect" href="/signIn" style={{color: "#fff"}}>Déconnexion</a>
              </div>
            </div>
          </Nav.Item>
        </Navbar>
        <div style={{marginTop: "100px"}}></div>
      </div>
    )
}

///////////////////////////////////////////  JS Scripts for Navbar ////////////////////////////////////////////////

/////////////////////////////////////// Navbar shrinking when scrolling ///////////////////////////////////////////

window.onscroll = function() {scrollFunction()};

function scrollFunction() 
{
  if(document.getElementsByClassName("navbar")[0]) //scroll function is only functionnal if the navbar component exist
  {
    if(!window.matchMedia("(max-width: 991px)").matches) //scroll function is disabled if the media query is active
    {
      if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) 
      {
          
          document.getElementsByClassName("navbar")[0].style.height = "50px";
          document.getElementsByClassName("navbar")[0].style.transition = "height 0.2s linear";
          document.getElementsByClassName("searchbar")[0].style.marginLeft = "130px";

          // document.getElementsByClassName('movingPartLogo')[0].style.display = "none";
          // document.getElementsByClassName('movingPartLogo')[1].style.display = "none";

          var elements = document.getElementsByClassName("movingPartLogo");
          var dropdown = document.getElementsByClassName("dropdown-content")[0];
          dropdown.style.marginTop = "11px";
          dropdown.style.transition = "height 0.2s linear";

          for (var i = 0; i < elements.length; i++) 
          {
              elements[i].style.display = "none";
          }
      } 
      else 
      {
          document.getElementsByClassName("navbar")[0].style.height = "60px";
          document.getElementsByClassName("searchbar")[0].style.marginLeft = "0px";

          elements = document.getElementsByClassName("movingPartLogo");
          dropdown = document.getElementsByClassName("dropdown-content")[0];
          dropdown.style.marginTop = "16.5px";

          for (i = 0; i < elements.length; i++) 
          {
              elements[i].style.display = "inline";
          }
      }
    }
  }
}

 //show the menu when clicking on the 3 dots button
 function DropdownFct() 
 {
     document.getElementById("myDropdown").classList.toggle("show");
     document.getElementsByClassName("dropbtn")[0].style.outline = "none";
 }
   
 // prevent from closing the dropdown menu when clicking in it 

  function Stop(event) 
  {
    event.stopPropagation();
  }

   //Close the dropdown menu if the user clicks outside of it

  window.onclick = function(event) 
  {
    if (!event.target.matches('.dropbtn')) 
    {

      var dropdowns = document.getElementsByClassName("dropdown-content");
      
      for (var i = 0; i < dropdowns.length; i++) 
      {
        var openDropdown = dropdowns[i];
        openDropdown.classList.remove('show');
      }
    }
  }
 
 // prevent from closing the dropdown menu when clicking in it 

// $("dropdown-content").click(function(event)
// {
//     event.stopPropagation();
// });

export default navbar
