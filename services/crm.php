
<?
    $title = "Customer Relationship Management";
    include($_SERVER["DOCUMENT_ROOT"].'/include/header.php');
?>


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
        	<div id="service-header-txt">Customer Relationship Management</div>
         </div>
    	<div id="service-bg-layer">
        <div id="serivce-left">
        	<div id="service-left-txt">
       	  <p><img src="../images/services/crm.png" width="125" height="78" style="float:right; margin-bottom: 10px;" />
       	    
       	    Runner's CRM combines business consulting and technologies to help you identify and manage customer segments, foster customer-satisfying behavior and implement customer-centric strategies, supporting processes and tools.
       	    With our CRM consulting services, we help you meet your:
       	    </p>
       	  <br/><strong>Business Objectives</strong><br/>
       	  <ul>
       	    <li>Acquire new customers       	    </li>
       	    <li>Develop customers' long term value       	    </li>
       	    <li>Optimize and monitor the cost of marketing, sales, and customer services </li>
     	    </ul>
       	  <br/><strong>IT Objectives</strong><br/>
       	  <ul>
       	    <li>Ensure complete customer view       	    </li>
       	    <li>Optimize IT investments       	    </li>
       	    <li>Reduce implementation times </li>
     	    </ul>
            
            <br />
       	  Our Enterprise CRM Strategy Solutions comprise four strategy solutions:       	    <br/>
       	  <ul>
       	    <li>Channel Strategy and Design </li>
       	    <li>Customer Retention       	    </li>
       	    <li>New Customer Acquisition       	    </li>
       	    <li>Organization Design and Transformation </li>
       	    <li>Enhances client profile management</li>
       	    <li>Connects to back-end databases to retrieve client information</li>
       	    <li>Centralized monitoring of cases</li>
       	    <li>Supports case handling by multiple officers</li>
       	    <li>Streamlines follow-ups and escalation processes</li>
       	    <li>Case details can be easily filed and searched</li>
       	    <li>Secure public access</li>
       	    <li>Customized reports to provide at-a-glance summary</li>
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