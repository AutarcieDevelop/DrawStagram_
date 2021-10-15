
<nav class="navbar navbar-expand-lg fixed-top" id="navbar">
    <a class="navbar-brand" href="HomePage.php"><img src="Pics/Logo DrawFactory.png" width="50" alt="Logo Drawstagram"/><span class="movingPartLogo" style="color:#727272;">| </span><img src="Pics/Drawstagram.png" class="movingPartLogo" width="120" alt="Drawstagram"/></a>
    <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button> -->
    <!-- <div style="flex: 1">

	</div> -->
    <form class="form-inline"  style="flex: 1">
        <div class="container FormContainer h-100">
            <div class="d-flex justify-content-center">
                <div class="searchbar">
                    <input class="search_input" type="text" name="" placeholder="Rechercher">
                    <a href="#" class="search_icon"><img src="Pics/magnifier.png" width="15"/></a>
                </div>
            </div>
        </div>
    </form>
    <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a id="profile" href="Profile.php" tabindex="-1" aria-disabled="true"><img src="Pics/Profile.png" width="60" alt="profile"/></a>
            </li>
            <li class="nav-item">
                <div class="dropdown">
                    <button onclick="DropdownFct()" aria-haspopup="true" class="dropbtn">...</button>
                    <div id="myDropdown" class="dropdown-content">
                        <span>Theme sombre</span>
                        <div class="dropdownContainer">
                            <div class="toggle-btn active" onclick="DarkTheme()">
                                <div class="inner-circle"></div>                            
                            </div>
                        </div>
                    </div>
                </div> 
            </li>
        </ul>
    </div>
</nav>
<div style="margin-top: 70px">
			
</div>