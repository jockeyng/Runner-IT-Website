
<?
    $title = "Human Resource Information System (HRIS)";
    include($_SERVER["DOCUMENT_ROOT"].'/include/header.php');
?>

<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,600,700|Lato|Kaushan+Script|Oxygen|Arimo:400,700' rel='stylesheet' type='text/css'>

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
        	<div id="service-header-txt">Human Resource Information System (HRIS)</div>
         </div>
    	<div id="service-bg-layer">
        <div id="serivce-left">
        	<div id="service-left-txt">
       	  <p><img src="../images/services/Functionality-of-HR-Software-Applications-Table.png" width="199" height="145" style="float:right; margin-bottom: 10px;" />
       	    
       	    Runner's HRIS combines business consulting and technologies.
       	    With our HRIS consulting services, we help you meet your:
       	    </p>
       	  <ul>
       	    <li>Complete Employee Attendance Management</li>
       	    <li>Up to 24 Customized Leave Categories</li>
       	    <li>Handle Complex Accrual Rules</li>
       	    <li>Intuitive Drag and Drop Interface</li>
       	    <li>Schedule Absences</li>
       	    <li>Supports a “Points” System</li>
       	    <li>Vacation Buy Back Option</li>
       	    <li>Employee Login and Leave Request Module</li>
       	    <li>Emailable Reports</li>
       	    <li>Seasonal Tracking and Reporting</li>
       	    <li>Available in SQL</li>
       	    <li>Paperless Production - Go Green</li>
       	    <li>Accruals, Carry Over Time, Base Allowances</li>
       	    <li>Adjustment Override for Administrators </li>
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