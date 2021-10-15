<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="css/Style.css">
<link rel="icon" type="image/png" href="Pics/newfavicon-32x32.png" sizes="32x32" />
<link rel="icon" type="image/png" href="Pics/newfavicon-16x16.png" sizes="16x16" />

<!-- Picture while loading page -->

<div class="loader">
	<img src="Pics/Logo DrawFactory.png" width="150" alt="Loading Drawstagram..." />
</div>
	
<script>
	window.addEventListener("load", function ()
	{
		const loader = document.querySelector(".loader");
		loader.className += " hidden"; // class "loader hidden"
	}
	);
</script>