import React from 'react'
import DrawFactoryLogo from '../Pics/Logo DrawFactory.png'

const loadingImage = () => 
{
    return (
        <div className="loader">
            <img src={DrawFactoryLogo} width="150" alt="Loading Drawstagram..." />
        </div>
    )
}

window.addEventListener("load", function ()
{
    const loader = document.querySelector(".loader");
    if(loader) //if the div loader exists
    {
        loader.className += " hidden"; // class "loader hidden"
    }
}
);

export default loadingImage