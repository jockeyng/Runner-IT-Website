
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">

<head>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<meta name="description" content="Runer IT Consulting Ltd providing several services: IT consulting, system maintainance, system integration, office surveillance, website development, skill transfer & training and system development." />

<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,600,700|Lato|Kaushan+Script' rel='stylesheet' type='text/css'>

<title>Runner IT Consulting Ltd : IT consulting, system maintance, system integation, and more </title>



<link href="js/facefiles/facebox.css" media="screen" rel="stylesheet" type="text/css" />

<script src="js/facefiles/jquery.js" type="text/javascript"></script>



<script src="js/facefiles/facebox.js" type="text/javascript"></script>





<script type="text/javascript">



    jQuery(document).ready(function($) {



      $('a[rel*=facebox]').facebox()



    })



</script>

<link href="css/css-Runner.css" rel="stylesheet" type="text/css" />

<link href="css/nivo-slider.css" rel="stylesheet" />

<script type="text/javascript" src="js/jquery1.4.js"></script>

<script language="JavaScript" type="text/javascript" src="js/nivo-slider.js"></script>



</head>



<body>

<!--mainframe start -->

<div id="mainframe">

<!-- top frame start -->

<?
include_once('include/topframe.php');
?>

<!-- top frame end-->

<!-- contentframe start -->

<div id="contentframe">

<!-- banner start -->

<?
include_once('include/banner.php');
?>

<!--
<div id="banner">

<div class="jqueryslider1">

<div id="slider1">

        <a href="service.php"><img src="images/banner/slide-consultation.png" alt="consultation" /></a>

        <a href="package.php"><img src="images/banner/slide-package.png" alt="package" /></a>

        <a href="#"><img src="images/banner/slide-eshop.png" alt="eShop" /></a>

	</div>

    <script type="text/javascript">

	var j = jQuery.noConflict();

	j(window).load(function() {

		j('#slider1').nivoSlider();

	});

	</script>

    </div>

</div>
-->


<!-- banner end -->

<!-- main box start -->

<div id="main-news">

	<div id="main-news-header"></div>

    <div id="main-news-content">

    <div id="news">


<?php

$rss = simplexml_load_file('http://feeds.feedburner.com/security-awareness-tip-of-the-day?format=xml');

echo '<h2>'. $rss->channel->title . '</h2>';

foreach ($rss->channel->item as $item) {
   echo '<h2><a href="'. $item->link .'">' . $item->title . "</a></h2>";
   echo "<p>" . $item->pubDate . "</p>";
   echo "<p>" . $item->description . "</p>";
} 


?>


</div>

    </div>

    <div id="main-news-bottom"></div>

</div>

<!-- main box end -->

<div id="main-advbox1">

	<a href="package.php" title="Runner Package"></a>

</div>

<div id="main-advbox2">

	<a href="eshop.php" title="Runner eShop"></a>

</div>



</div>

<!-- content end -->

<!-- footer start -->

<!--
<div id="footer">

	<div id="footer-left">©Copyright 2013 Runner IT Consulting Ltd All rights reserved

    </div>

    <div id="footer-right" ><a href="privacy-policy.htm">Privacy policy</a> | <a href="disclaimer.htm">Disclaimer</a>

    </div>

</div>
-->


<?
include_once('include/footer.php');
?>

<!-- footer end -->

</div>

<!-- mainframe end -->





</body>

</html>