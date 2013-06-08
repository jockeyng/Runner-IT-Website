
<script src="/js/facefiles/jquery.js" type="text/javascript"></script>

<script src="/js/facefiles/facebox.js" type="text/javascript"></script>


<script type="text/javascript">

    jQuery(document).ready(function($) {

      $('a[rel*=facebox]').facebox()

    })

</script>



<script type='text/javascript' src='scripts/gen_validatorv31.js'></script>
<script type='text/javascript' src='scripts/fg_ajax.js'></script>
<script type='text/javascript' src='scripts/fg_moveable_popup.js'></script>
<script type='text/javascript' src='scripts/fg_form_submitter.js'></script>
<div id='fg_formContainer' style="width:490PX;">

    <div id="fg_container_header" style="width:449px;">
      
        <div style="height:20px; text-align:right;"><a href="javascript:fg_hideform('fg_formContainer','fg_backgroundpopup');"><img src="js/facefiles/closelabel.gif" alt="" width="66" height="22" border="0"/></a></div>
    </div>

    <div id="fg_form_InnerContainer" style="width:449px; margin-top:20px;">
    <div style="background: url(images/bg/bg-quote.png) repeat-y; width: 449px; height: auto;">
<div style="width: 449px; height: 54px; padding-top: 25px;">
	<img src="images/header/contactus.png" />
</div>
    
    <form id='contactus' action='javascript:fg_submit_form()' method='post' accept-charset='UTF-8'>

    <input type='hidden' name='submitted' id='submitted' value='1'/>
    <input type='hidden' name='id3fcb5b9ec4e546f529c8' value='ae70b73e3d3226a75f99b7187ae21d87'/>
    <input type='text'  class='spmhidip' name='sp1f9668c2f557e5c9f8d9d2768d0c1352' />
    <div style="width: 400px; margin: 15px 25px; font-family: arial; font-size: 13px;">
      <table width="100%" cellpadding="8" cellspacing="0">
        <tr>
          <td class="right"><span style="font-size: 11px; color: red;">*</span>Company Name: </td>
          <td><input type="text" name="companyname" id="companyname" class="txt-box"/>
            <br /></td>
        </tr>
        <tr>
          <td class="right"><span style="font-size: 11px; color: red;">*</span>Name: </td>
          <td><input type="text" name="name" id="name" class="txt-box"/>
            <br />
            <span id='contactus_name_errorloc' class='error'></span></td>
        </tr>
        <tr>
          <td class="right"><span style="font-size: 11px; color: red;">*</span>Email: </td>
          <td><input type="text" name="email" id="email" class="txt-box"/>
            <br/>
            <span id='contactus_email_errorloc' class='error'></span></td>
        </tr>
        <tr>
          <td class="right">Phone: </td>
          <td><input type="text" name="phone" id="phone" class="txt-box"/></td>
        </tr>
        <tr>
          <td class="right"><span style="font-size: 11px; color: red;">*</span>Interested In: </td>
          <td><select name="interested" id="interested" class="txt-box" >
            <option value="Service-IT Consulting and Maintenance Service">Service-IT Consulting and Maintenance Service</option>
            <option value="Service-Software Development">Service-Software Development</option>
            <option value="Service-Website Development">Service-Website Development</option>
            <option value="Service-Office Surveillance">Service-Office Surveillance</option>
            <option value="Service-Skill Transfer and Training">Service-Skill Transfer and Training</option>
            <option value="Service-Staff Secondment">Service-Staff Secondment</option>
            <option value="Package-Computer and Server Maintenance Service">Package-Computer and Server Maintenance Service</option>
            <option value="Package-IT Technical Consultation Service">Package-IT Technical Consultation Service</option>
            <option value="Package-Other IT Service">Package-Other IT Service</option>
            <option value="Package-Purchase Order System Package">Package-Purchase Order System Package</option>
            <option value="Other">Other</option>
          </select>
            <br />
            <span id='contactus_name_errorloc' class='error'></span></td>
        </tr>
        <tr>
          <td class="right"><span style="font-size: 11px; color: red;">*</span>Message: </td>
          <td><span id='contactus_message_errorloc' class='error'></span>
            <textarea name="message" rows="5" class="txt-box" id="message"></textarea></td>
        </tr>
        <tr>
          <td class="right">&nbsp;</td>
          <td><div style="font-size: 10px;"><span style="font-size: 11px; color: red;">*</span> Required field</div>
            <div style="text-align:right;">
              <input type="image" src="images/btn/send.png" alt="Submit button" />
            </div></td>
        </tr>
      </table>
    </div>
    </form>
    </div>
    </div>

</div>
<!-- client-side Form Validations:
Uses the excellent form validation script from JavaScript-coder.com-->

<script type='text/javascript'>
// <![CDATA[

    var frmvalidator  = new Validator("contactus");
    frmvalidator.EnableOnPageErrorDisplay();
    frmvalidator.EnableMsgsTogether();
    frmvalidator.addValidation("name","req","Please provide your name");

    frmvalidator.addValidation("email","req","Please provide your email address");

    frmvalidator.addValidation("email","email","Please provide a valid email address");

    frmvalidator.addValidation("message","maxlen=2048","The message is too long!(more than 2KB!)");

    document.forms['contactus'].refresh_container=function()
    {
        var formpopup = document.getElementById('fg_formContainer');
        var innerdiv = document.getElementById('fg_form_InnerContainer');
        var b = innerdiv.offsetHeight+30+30;

        formpopup.style.height = b+"px";
    }

    document.forms['contactus'].form_val_onsubmit = document.forms['contactus'].onsubmit;


    document.forms['contactus'].onsubmit=function()
    {
        if(!this.form_val_onsubmit())
        {
            this.refresh_container();
            return false;
        }

        return true;
    }
    function fg_submit_form()
    {
        //alert('submiting form');
        var containerobj = document.getElementById('fg_form_InnerContainer');
        var sourceobj = document.getElementById('fg_submit_success_message');
        var error_div = document.getElementById('fg_server_errors');
        var formobj = document.forms['contactus']

        var submitter = new FG_FormSubmitter("popup-contactform.php",containerobj,sourceobj,error_div,formobj);
        var frm = document.forms['contactus'];

        submitter.submit_form(frm);
    }

// ]]>
</script>

<div id='fg_backgroundpopup'></div>

<div id='fg_submit_success_message'>
    <div style="background: url(images/bg/bg-quote.png) repeat-y; width: 449px; height: auto;">
  <div style="width: 449px; height: 54px; padding-top: 25px;"> <img src="images/header/contactus.png" alt="" /> </div>
  <div style="width: 449px; background:url(images/bg/submit.png) no-repeat bottom; height: 300px;">
    <div style="width: 370px; margin: 15px 25px; font-family: arial; font-size: 13px; text-align: center; background: url(images/bg/icon-thanks.png) right top no-repeat; padding: 25px 15px;">
      <p style="margin-bottom: 30px; font-size: 14px;"><b>Thank you for your request.</b></p>
      <p>You had submit your message to us successfully.</p>
      <p>We will get back to you as soon as possible.</p>
    </div>
  </div>
</div>

</div>