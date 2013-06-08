

<?
    $title = "About Runner";
    include($_SERVER["DOCUMENT_ROOT"].'/include/header.php');
?>



<body onload="javascript:fg_hideform('fg_formContainer','fg_backgroundpopup');">
<!--mainframe start -->
<div id="mainframe">
<!-- top frame start -->

<?
include_once($_SERVER["DOCUMENT_ROOT"].'include/topframe.php');
?>

<!-- header start -->
<div id="header">
<div id="header-txt">About Us
</div>
</div>
<!-- header end -->
<!-- top frame end-->

<!-- contentframe start -->
<div id="contentframe">
<!-- content left start -->
<div id="content-left">
<div id="description" style="background: url(images/other/aboutus.png) no-repeat right top;">
<div id="description-txt" style="margin-right: 250px;">
Runner IT Consulting  with a mission of increasing our clients' productivity and profitability through value added solutions and services. Most of the technical personnel are certified system engineers, including:
   <ul>
<li>Project Management Professional(PMP)</li>
<li>Certified Information Systems Security Professional (CISSP)</li>
<li>Certified Information Systems Auditor (CISA)</li>
<li>Microsoft Certified Systems Engineers (MCSE)</li>
<li>Microsoft Certified Professionals (MCP)</li>
<li>Certified NetWare Engineers (CNE)</li>
<li>IBM Professional Systems Engineers (PSE)</li>
<li>Cisco Certified Network Associate (CCNA)</li>
</ul>
Runner aims at delivering quick, reliable and professional services to HKSAR Government and large corporations in Hong Kong, anytime, anywhere. Runner provides a large variety of
<ul>
<li>Internet Solutions</li>
<li>Customized Applications</li>
<li>Maintenance Services</li>
<li>Networking Products and Designs</li>
<li>Hardware and Software</li>
<li>Training</li>
</ul>
With qualified technical staff, Runner delivers professional and reliable services to clients and has gained a good reputation in this field. Throughout these years, Runner built up good relationship with many renowned computer vendors which provide a bigger bargaining power, in turn, clients can also get a better price.
</div>
</div>
</div>
<!-- content left end -->
<!-- content right start -->

<?
include_once('include/content-right.php');
?>

<!-- content right end -->
<!-- footer start -->

<?
include_once('include/footer.php');
?>

<!-- footer end -->
</div>
<!-- mainframe end -->

<?
include_once('include/javascript.php');
?>

</body>
</html>