<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="description" content="Runner Consulting (Asia) Ltd providing several services: IT consulting, system maintainance, system integration, office surveillance, website development, skill transfer & training and system development." />
<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,600,700|Lato|Kaushan+Script|Oxygen|Arimo:400,700' rel='stylesheet' type='text/css'>
<title>Runner Consulting (Asia) Ltd - Our Services: Skill Transfer and Training</title>
<link rel="STYLESHEET" type="text/css" href="/popup-contact.css">
<link href="/css/css-Runner.css" rel="stylesheet" type="text/css" />
<link href="/js/facefiles/facebox.css" media="screen" rel="stylesheet" type="text/css" />

<script src="/js/facefiles/jquery.js" type="text/javascript"></script>

<script type="text/javascript" src="/common/js/jquery-1.10.1.min.js"></script>

<script src="/js/facefiles/facebox.js" type="text/javascript"></script>

<!-- global -->

<script type="text/javascript" src="/common/js/global.js"></script>     


<script type="text/javascript">

    jQuery(document).ready(function($) {

      $('a[rel*=facebox]').facebox()

    })

</script>
<style type="text/css">
.customer {
	height: 100px;
	width: 440px;
	border: 1px #999999 dashed;
	padding: 5px;
	margin-bottom: 10px;
}

.customer-logo {
	width:160px; 
	text-align:center; 
	float:left;
}
.customer-txt {
	float:left; 
	width: 250px; 
	font-size: 11px;
	padding-left: 12px;
	border-left: 1px #999999 dashed;
}
.customer-pop {
	text-align:right; 
	width:150px;
	margin-top:5px;
}
</style>
</head>

<body onload="javascript:fg_hideform('fg_formContainer','fg_backgroundpopup');"><!--mainframe start -->
<div id="mainframe">
<!-- top frame start -->

<?
include_once($_SERVER["DOCUMENT_ROOT"].'/include/topframe.php');
?>

<!-- header start -->
<div id="header">
<div id="header-txt">Service
</div>
</div>
<!-- header end -->
<!-- top frame end-->
<!-- contentframe start -->
<div id="contentframe">
<!-- content left start -->
<div id="content-left">
	<!-- description start -->
	
<?
include_once($_SERVER["DOCUMENT_ROOT"].'/include/services-description.php');
?>
    
    <!-- discription end -->
    <!-- service area layer start -->
    <div id="service-layer">
    	<div id="service-header">
        	<div id="service-header-txt">Document Management System (DMS)</div>
         </div>
    	<div id="service-bg-layer">
        <div id="serivce-left">
        	<div id="service-left-txt">
       	  <p><img src="../images/services/dms.jpg" width="173" height="164" style="float:right; margin-bottom: 10px;" />
       	    
       	    Runner's DMS combines business consulting and technologies.
       	    With our DMS consulting services, we help you meet your:
       	    </p>
       	  <ul>
       	    <li>Centralized document storage for information sharing.</li>
       	    <li>Versioning &amp; check-in/out function for the integrity of documents.ccess control for documents</li>
       	    <li>Supports document life cycle management</li>
       	    <li>Enhances dissemination of corporate news and events.</li>
       	    <li>Useful information located easier and faster than ever.</li>
       	    <li>Boost sense of belonging to staffs.</li>
     	    </ul>
       	  <p>Need more information? Send us a Request. 
       	    
       	    <!--
          <a href='javascript:fg_popup_form("fg_formContainer","fg_form_InnerContainer","fg_backgroundpopup");'
><img src="images/btn/request.png" border="0" align="middle" /></a>
-->
       	    
</p>
          </div>
        </div>
        <!-- service right start -->
       
<?
include_once($_SERVER["DOCUMENT_ROOT"].'/include/services-section.php');
?>
       
        <!-- service right end -->
        <div class="clear">
        </div>
        
        </div>
    </div>
    <!-- service area end -->
</div>
<!-- content left end -->
<!-- content right start -->

<?
include_once($_SERVER["DOCUMENT_ROOT"].'/include/content-right.php');
?>

<!-- content right end -->
<!-- footer start -->

<?
include_once($_SERVER["DOCUMENT_ROOT"].'/include/footer.php');
?>

<!-- footer end -->
</div>
<!-- mainframe end -->

<?
include_once($_SERVER["DOCUMENT_ROOT"].'/include/javascript.php');
?>

</body>
</html>