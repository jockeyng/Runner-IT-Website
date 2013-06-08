isBW = false;
/* =================================================================================================
Desktop - Handle external link
================================================================================================= */
function externallinks() { 
 if (!document.getElementsByTagName) return; 
 var anchors = document.getElementsByTagName("a"); 
 for (var i=0; i<anchors.length; i++) { 
   var anchor = anchors[i]; 
   if (anchor.getAttribute("href") && 
       anchor.getAttribute("rel") == "external") 
     anchor.target = "_blank"; 
 } 
} 
window.onload = externallinks;
/* =================================================================================================
	Desktop - Mobile Transaction
================================================================================================= */

function gotoMobileVersion(){
		var w = window.location + "";
		var index = w.indexOf('#');
		if ( index>= 0){	
		 w=w.substring(0,index);
		}

	if (w.match("www0")){

		w = w.replace(".htm", ".shtml");
		w = w.replace("www0.", "m.www0.");
		
		if(w.indexOf('.php') != -1){
			w = w.replace(".php", ".lin.php");
		} else {
			w = w.replace(".htm", ".shtml");
			
			var index2 = w.indexOf('.shtml');
			if ( index2 == -1){	
				var index3 = w.lastIndexOf('/');
				if ( index3 == -1){	
					w = w + "/index.shtml";
				}else{
					w = w + "index.shtml";
				}
			}
		}
		window.location = w;
		} else if (w.match("www")){
		w = w.replace(".htm", ".shtml");
		w = w.replace("www.", "m.www.");
		
		if(w.indexOf('.php') != -1){
			w = w.replace(".php", ".lin.php");
		} else {
			w = w.replace(".htm", ".shtml");
			
			var index2 = w.indexOf('.shtml');
			if ( index2 == -1){	
				var index3 = w.lastIndexOf('/');
				if ( index3 == -1){	
					w = w + "/index.shtml";
				}else{
					w = w + "index.shtml";
				}
			}
		}
		window.location = w;	
		
		
		
		
		}
	
}
function gotoDesktopVersion(){
	var w = window.location + "";
	var index = w.indexOf('#');
	if ( index>= 0){	
	 w=w.substring(0,index);
	}
	
	if (w.match("www0")){
	
		w = w.replace(".shtml", ".htm");
		w = w.replace("m.www0.", "www0.");
		if(w.indexOf('.php') != -1){		
			w = w.replace(".lin.php", ".php");
		}
		else{
			w = w.replace(".shtml", ".htm");
			
			var index2 = w.indexOf('.htm');
			if ( index2 == -1){	
				var index3 = w.lastIndexOf('/');
				if ( index3 == -1){	
					w = w + "/index.htm";
				}else{
					w = w + "index.htm";
				}
			}
		}
		window.location = w;
	} else if (w.match("www")){
		w = w.replace(".shtml", ".htm");
		w = w.replace("m.www.", "www.");
		if(w.indexOf('.php') != -1){		
			w = w.replace(".lin.php", ".php");
		}
		else{
			w = w.replace(".shtml", ".htm");
			
			var index2 = w.indexOf('.htm');
			if ( index2 == -1){	
				var index3 = w.lastIndexOf('/');
				if ( index3 == -1){	
					w = w + "/index.htm";
				}else{
					w = w + "index.htm";
				}
			}
		}
		window.location = w;			
	}
}

function changePho(checkbox) {
     
    document.getElementById("kkk").src = "/common/images/adv/page_s2.png";
    document.getElementById("jjj").src = "/common/images/adv/page_s2.png";
}

function changePho1(checkbox) {
  
    document.getElementById("kkk").src = "/common/images/adv/page_s2.png";
    document.getElementById("jjj").src = "/common/images/adv/page_s2.png";
}

if (window.name == '')	window.name = 'isdWin';
var cdomain = (location.domain) ? location.domain : null;

 function addLoadEvent(func) {  

   var oldonload = window.onload;   
   if (typeof window.onload != 'function') {   
     window.onload = func;   
   } else {   
     window.onload = function() {   
       if (oldonload) {   
         oldonload();   
       }   
       func();   
     }   
   }   
 }     


/* =================================================================================================
	Swap Images
================================================================================================= */


<!--
		function MM_jumpMenu(targ,selObj,restore){ //v3.0
			eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
			if (restore) selObj.selectedIndex=0;
		}
        function MM_preloadImages() { //v3.0
            var d = document; if (d.images) {
                if (!d.MM_p) d.MM_p = new Array();
                var i, j = d.MM_p.length, a = MM_preloadImages.arguments; for (i = 0; i < a.length; i++)
                    if (a[i].indexOf("#") != 0) { d.MM_p[j] = new Image; d.MM_p[j++].src = a[i]; }
            }
        }

        function MM_swapImgRestore() { //v3.0
            var i, x, a = document.MM_sr; for (i = 0; a && i < a.length && (x = a[i]) && x.oSrc; i++) x.src = x.oSrc;
        }

        function MM_findObj(n, d) { //v4.01
            var p, i, x; if (!d) d = document; if ((p = n.indexOf("?")) > 0 && parent.frames.length) {
                d = parent.frames[n.substring(p + 1)].document; n = n.substring(0, p);
            }
            if (!(x = d[n]) && d.all) x = d.all[n]; for (i = 0; !x && i < d.forms.length; i++) x = d.forms[i][n];
            for (i = 0; !x && d.layers && i < d.layers.length; i++) x = MM_findObj(n, d.layers[i].document);
            if (!x && d.getElementById) x = d.getElementById(n); return x;
        }

        function MM_swapImage() { //v3.0
            var i, j = 0, x, a = MM_swapImage.arguments; document.MM_sr = new Array; for (i = 0; i < (a.length - 2); i += 3)
                if ((x = MM_findObj(a[i])) != null) { document.MM_sr[j++] = x; if (!x.oSrc) x.oSrc = x.src; x.src = a[i + 2]; }
        }

        function openwin(url) {
            newWindow = window.open(url, "popup", "toolbar=no,width=400,height=150,left=0,top=0;,directories=no,status=no,scrollbars=no,resizable=0,top=370,left=370,menubar=no");
        }

        function openwap(url) {
            newWindow = window.open(url, "popup", "toolbar=no,width=460,height=20,left=0,top=0;,directories=no,status=no,scrollbars=no,resizable=0,top=370,left=370,menubar=no");
        }


        function MM_openBrWindow(theURL, winName, features) { //v2.0
            window.open(theURL, winName, features);
        }

//-->


/* =================================================================================================
	Change Font Size with Cookies
================================================================================================= */


function changeFontSize(fs)
{
	set_cookie('fontsize',fs,2110,12,12,"/",cdomain);

	if(fs=="0")
	{
		fs="62.5%";
	} 
	if(fs=="1")
	{
		fs="75%";
	}
	if(fs=="2")
	{
		fs="87.5%";
	}
	
	$('<style type="text/css">body {font-size:' + fs + ';}</style>').appendTo($('head'));

}
function get_cookie ( cookie_name )
{
	var results = document.cookie.match('(^|;)?' + cookie_name + '=([^;]*)(;|$)');
	if ( results )
    		return ( unescape ( results[2] ) );
  	else
    		return null;
}
function set_cookie ( name, value, exp_y, exp_m, exp_d, path, domain, secure )
{
  var cookie_string = name + "=" + escape ( value );

  if ( exp_y )
  {
    var expires = new Date ( exp_y, exp_m, exp_d );
    cookie_string += "; expires=" + expires.toGMTString();
  }

  if ( path )
        cookie_string += "; path=" + escape ( path );

  if ( domain )
        cookie_string += "; domain=" + escape ( domain );
  
  if ( secure )
        cookie_string += "; secure";
  
  document.cookie = cookie_string;
}


function RingOnLoad()
{         

var url=window.location.toString(); 
var str=""; 
var arr = url.split("//");
var arr1 = arr[1].split("/");
var arr2 = arr1[1].split("/");

var yoururl =arr1[0]; 
 
var changeLang=arr2[0];
if(changeLang != ""){
if (window.name == '')	window.name = 'isdWin';
var cdomain = (location.domain) ? location.domain : null; 
     set_cookie('language',changeLang,2110,12,12,"/",cdomain); 
     }


	var cookieEnabled = navigator.cookieEnabled
    
	if(cookieEnabled == true)
	{ 
       var themeCookie = get_cookie('themeCookie'); 
	   
		if (isBW){
			//setTheme('/common/css/Theme/bw');
			cssdetect('/common/css/Theme/bw');
		}
		else{
			if(themeCookie == null)	{
				setTheme('/common/css/Theme/blue');
			}else{
				getCookies(themeCookie);
			}
		}
    }
	else 
    {
	  
	 var newCss=d.getElementById('theme');
	 var newHighlights=d.getElementById('highlights');
	 var newVideo=d.getElementById('video');
	
	
	
	 var newMoreContainer = $('.moreImgContainer');
	 if(!newMoreContainer[0]) newMoreContainer = $('.moreImgContainer_purple');
	 if(!newMoreContainer[0]) newMoreContainer = $('.moreImgContainer_green');
	 if(!newMoreContainer[0]) newMoreContainer = $('.moreImgContainer_black');

	for (i = 1; i < 20 ; i++){
		more_au[i] = d.getElementById('more_au' + i);
		more_np[i] =d.getElementById('more_np' + i);
	}

	
	 var more_pc1=d.getElementById('more_pc1');
	 var more_pc2=d.getElementById('more_pc2');
	 var more_pc3=d.getElementById('more_pc3');
	
	 var more_pr1=d.getElementById('more_pr1');
	 var more_pr2=d.getElementById('more_pr2');
	 var more_pr3=d.getElementById('more_pr3');
	 var more_pr4=d.getElementById('more_pr4');
     var more_pr5=d.getElementById('more_pr5');
	 var more_pr6=d.getElementById('more_pr6');
	 var more_pr7=d.getElementById('more_pr7');
	 var more_pr8=d.getElementById('more_pr8');
	
	
	
	 var blue=d.getElementById('blue');
	 var green=d.getElementById('green');
	 var black=d.getElementById('black');
	 var purple=d.getElementById('purple');
	 
	 var enquiry_more1=d.getElementById('enquiry_more1');
	 var enquiry_more2=d.getElementById('enquiry_more2');
	 var enquiry_more3=d.getElementById('enquiry_more3');
	 var enquiry_more4=d.getElementById('enquiry_more4');
	 var enquiry_more5=d.getElementById('enquiry_more5');
	 
	 var more_rl1=d.getElementById('more_rl1');
	 var more_rl2=d.getElementById('more_rl2');
	 var more_rl3=d.getElementById('more_rl3');
	 var more_rl4=d.getElementById('more_rl4');
	 var more_rl5=d.getElementById('more_rl5');
	
      newCss.href="/common/css/Theme/blue.css";
	  
	  blue.src="/common/images/mycolor/blue1.png";

	  purple.src="/common/images/mycolor/purple2.png";

	  green.src="/common/images/mycolor/green2.png";
	
	  black.src="/common/images/mycolor/black2.png";
	  if(newHighlights!=null)
      {newHighlights.src="/en/images/title/title_highlights.png";}
	 
	  if(newVideo!=null)
	  {newVideo.src="/en/images/title/title_video.png";}
	
	  for(var cc=0;cc<newMoreContainer.length;cc++){
		if(newMoreContainer[cc]!=null){
			newMoreContainer[cc].className='moreImgContainer';
		}
	 }
	   
	 
	   if(enquiry_more1!=null)
	  {enquiry_more1.src="/en/images/highlight/more.png";}
	  if(enquiry_more2!=null)
	  {enquiry_more2.src="/en/images/highlight/more.png";}
	  if(enquiry_more3!=null)
	  {enquiry_more3.src="/en/images/highlight/more.png";}
	  if(enquiry_more4!=null)
	  {enquiry_more4.src="/en/images/highlight/more.png";}
	  if(enquiry_more5!=null)
	  {enquiry_more5.src="/en/images/highlight/more.png";}	
	
	  
	  if(more_pc1!=null)
	  {more_pc1.src="/en/images/highlight/more.png";}
	  if(more_pc2!=null)
	  {more_pc2.src="/en/images/highlight/more.png";}
	  if(more_pc3!=null)
	  {more_pc3.src="/en/images/highlight/more.png";}
	  
	  if(more_pr1!=null)
	  {more_pr1.src="/en/images/highlight/more.png";}
	  if(more_pr2!=null)
	  {more_pr2.src="/en/images/highlight/more.png";}
	  if(more_pr3!=null)
	  {more_pr3.src="/en/images/highlight/more.png";}
	  if(more_pr4!=null)
	  {more_pr4.src="/en/images/highlight/more.png";}
	  if(more_pr5!=null)
	  {more_pr5.src="/en/images/highlight/more.png";}
	  if(more_pr6!=null)
	  {more_pr6.src="/en/images/highlight/more.png";}
	  if(more_pr7!=null)
	  {more_pr7.src="/en/images/highlight/more.png";}
	  if(more_pr8!=null)
	  {more_pr8.src="/en/images/highlight/more.png";}

		for (i = 1; i < 20 ; i++){
		  if(more_au[i]!=null)
		  {more_au[i].src="/en/images/highlight/more.png";}
		  if(more_np[i]!=null)
		  {more_np[i].src="/en/images/highlight/more.png";}
		}
	  

	  if(more_rl1!=null)
	  {more_rl1.src="/en/images/highlight/more.png";}
	  if(more_rl2!=null)
	  {more_rl2.src="/en/images/highlight/more.png";}
	  if(more_rl3!=null)
	  {more_rl3.src="/en/images/highlight/more.png";}
	  if(more_rl4!=null)
	  {more_rl4.src="/en/images/highlight/more.png";}
	  if(more_rl5!=null)
	  {more_rl5.src="/en/images/highlight/more.png";}
	  }
	  
	

	 
	
	 
	 
	 
	 var x = document.getElementById('highlight');
		if(!x == null && x.value != ""){
			var count = x.getElementsByTagName('li').length;
		   if (count < 4){
						$('#scrollercontrol').RemoveScroller();
					};
		}
	

}
var mobile = $('meta[name=MobileOptimized]').attr("content");
if(!mobile){
addLoadEvent(RingOnLoad);

/* =================================================================================================
	Redirect website
================================================================================================= */

/*
     var wap = "/en/index.html";
	 var uagent = navigator.userAgent.toLowerCase();
	
	 if (
       uagent.search("iphone")>-1||
       uagent.search("ipod")>-1 ||
	   uagent.search("ipad")>-1 ||
       uagent.search("android")>-1||
	   uagent.search("ipad")>-1 ||
	   uagent.search("blackberry")>-1 ||
	   uagent.search("symbian")>-1
	   )
	   
	   { 
	   window.location=wap;
	   
	   }
*/	  
   

}


/* =================================================================================================
	Change Language
================================================================================================= */
function comChangeLanguage(target)
{

	var url = window.top.location.href;
	var isFail = 0;
	
	var index = url.indexOf('#');
	if ( index>= 0){	
	 url=url.substring(0,index);
	}

	
	if (target=='sc'){
		url=url.replace('/en/', '/sc/');
		url=url.replace('/tc/', '/sc/');
	}else if (target=='tc'){
		url=url.replace('/en/', '/tc/');
		url=url.replace('/sc/', '/tc/');
	}else if (target=='en'){
		url=url.replace('/tc/', '/en/');
		url=url.replace('/sc/', '/en/');
	}
	
	if (checkURLexist(url)){
		window.top.location.href = url;
	}else {
		var link = window.top.location.href;
		if(link.indexOf('/en/')>=0){
			alert('English Version Only');
		}else if(link.indexOf('/tc/')>=0){
			alert('只有中文版');
		}else {
			alert('只有中文版');
		}
	}
}	


function checkURLexist(targetFile){
		targetFile = targetFile.replace('#top' , '' );

		if (window.XMLHttpRequest){
			xhttp = new XMLHttpRequest();
			xhttp.open("POST", targetFile, false);
			
			xhttp.send(null);
			if (xhttp.status == 200) { /* the request has been returned */
			  return true;
			}else {
				return false
			}
		} else{
			xhttp = new ActiveXObject("Microsoft.XMLHTTP");
			xhttp.open("GET", targetFile, false);
			
			xhttp.send(null);
			if (xhttp.status == 200) { /* the request has been returned */
			  return true;
			}else {
				return false
			}
		}
	return true ; 
	
}


/* =================================================================================================
	Socialbookmarking Share Functions
================================================================================================= */


var currentPath = escape(document.URL);

function shareFacebook()
{
	var currentPath = escape(document.URL);
	var extLink = 'http://www.facebook.com/share.php?u=';
	var pageTitle = document.title;
	window.open(extLink + currentPath + '&t=' + pageTitle);
}
function shareMyspace()
{
	var extLink = 'http://www.myspace.com/Modules/PostTo/Pages/?u=';
	var pageTitle = encodeURI(document.title);
	window.open(extLink + currentPath + '&t=' + pageTitle + '&c=%3Ca+href%3D%22' + currentPath + '%22%3E' + pageTitle + '%3C%2Fa%3E');
}
	
function shareTwitter()
{
	var currentPath = escape(document.URL);
	var extLink = 'http://twitter.com/home?status=';
	var pageTitle = encodeURI(document.title);
	window.open(extLink + pageTitle + '%3A+' + currentPath);
}
	
function emailFriend()
{
	NewWindow('/football/english/email-a-friend_popup.aspx?url='+currentPath+'&title='+escape(d.title), 'emailPop', 540, 610, 'yes', 'yes');
}

function shareYahoo()
{
	var currentPath = escape(document.URL);
	var extLink = "http://bookmarks.yahoo.com/toolbar/savebm?opener=tb&u=";
	var pageTitle = document.title;
	window.open(extLink + currentPath + '&t=' + pageTitle);
}

function shareGoogle()
{
	var currentPath = escape(document.URL);
	var extLink = "https://www.google.com/accounts/ServiceLogin?hl=en&continue=https://www.google.com/bookmarks/mark%3Fop%3Dedit%26bkmk%3D";
	var pageTitle = document.title;
	window.open(extLink + currentPath + '&title=' + pageTitle + '&nui=1&service=bookmarks');
}

function shareWeibo()
{
	var currentPath = escape(document.URL);
	var extLink = "http://v.t.sina.com.cn/share/share.php?title=";
	var pageTitle = encodeURI(document.title);
	window.open(extLink + pageTitle + '&url=' + currentPath + '&source=bookmark');
}

/*
function shareXanga()
{
	var currentPath = escape(document.URL);
	var extLink = "http://www.xanga.com/private/editorx.aspx?t=";
	var pageTitle = document.title;
	window.open(extLink + pageTitle + '&u=' + currentPath);
}

function shareDelicious()
{
	var currentPath = escape(document.URL);
	var extLink = "http://delicious.com/save?v=5&noui&jump=close&url=";
	var pageTitle = document.title;
	window.open(extLink + currentPath + '&title=' + pageTitle);
}
*/

function emailForm(){

var currentPath = escape(document.URL);
var pageTitle = document.title;
var mailto_link = 'mailto:?subject='+pageTitle+'&body='+currentPath;

window.open(mailto_link);
}




/* =================================================================================================
	Decoration Functions
================================================================================================= */
function text_underline(id){
  
	$('#'+id).css('text-decoration','underline');

}

function remove_underline(id){
  
	$('#'+id).css('text-decoration','none');

}

function img_border(id){

    $('#'+id).css('border','1px solid black');
}

function remove_border(id){

    $('#'+id).css('border','none');
}



/* =================================================================================================
	Set MyColor Functions
================================================================================================= */

var isIE = (navigator.appName.indexOf("Microsoft") > -1);
var isIE6 = false /*@cc_on || @_jscript_version < 5.7 @*/;
var d = document;
if (window.name == '')	window.name = 'isdWin';
var cdomain = (location.domain) ? location.domain : null;
var cpath = "/";
var deflag = false;
var nd= new Date();
nd.setTime(nd.getTime()+(60*24*60*60*1000));

function setTheme(value)
{	
	var langId=1;
	if(!deflag){
	
		setCookie('themeCookie',value.replace(/(^\"*)|(\"*$)/g, ""), nd, cpath, cdomain);
		
	}
	else
	{
	
		var bluePath = "/common/css/Theme/blue";	
		setCookie('blueCookie',bluePath, nd, cpath, cdomain);
		
	}

	cssdetect(value);

	
}
 

function cssdetect(value)
{
	
	var newCss=d.getElementById('theme');
	var newHighlights=d.getElementById('highlights');
	var newVideo=d.getElementById('video');
	var newHotKeyWord=d.getElementById('HotKeyWord');

	
	
	
	var newMoreContainer = $('.moreImgContainer');
	if(!newMoreContainer[0]) newMoreContainer = $('.moreImgContainer_purple');
	if(!newMoreContainer[0]) newMoreContainer = $('.moreImgContainer_green');
	if(!newMoreContainer[0]) newMoreContainer = $('.moreImgContainer_black');

	
	var i = 1;
	var more_au = new Array();
	var more_np = new Array();
		for (i = 1; i < 20 ; i++){
			more_au[i]=d.getElementById('more_au' + i);
			more_np[i]=d.getElementById('more_np' + i);
		}
	
	var more_pc1=d.getElementById('more_pc1');
	var more_pc2=d.getElementById('more_pc2');
	var more_pc3=d.getElementById('more_pc3');
	
	var more_pr1=d.getElementById('more_pr1');
	var more_pr2=d.getElementById('more_pr2');
	var more_pr3=d.getElementById('more_pr3');
	var more_pr4=d.getElementById('more_pr4');
    var more_pr5=d.getElementById('more_pr5');
	var more_pr6=d.getElementById('more_pr6');
	var more_pr7=d.getElementById('more_pr7');
	var more_pr8=d.getElementById('more_pr8');
	
	
	
	var purple=d.getElementById('purple');
	var blue=d.getElementById('blue');
	var green=d.getElementById('green');
	var black=d.getElementById('black');
	
	var enquiry_more1=d.getElementById('enquiry_more1');
	var enquiry_more2=d.getElementById('enquiry_more2');
	var enquiry_more3=d.getElementById('enquiry_more3');
	var enquiry_more4=d.getElementById('enquiry_more4');
	var enquiry_more5=d.getElementById('enquiry_more5');
	
	var more_rl1=d.getElementById('more_rl1');
	var more_rl2=d.getElementById('more_rl2');
	var more_rl3=d.getElementById('more_rl3');
	var more_rl4=d.getElementById('more_rl4');
	var more_rl5=d.getElementById('more_rl5');
	
	var temp = new Array();
	var cssPath = "";
	if(!deflag)
	{	
		
		if(getCookie ('themeCookie')!=null)
		cssPath = getCookie ('themeCookie').replace(/(^\"*)|(\"*$)/g, "");
		
		if(cssPath == null || cssPath == "")
		{
			cssPath = "/common/css/Theme/blue";
			setCookie('themeCookie',cssPath,nd, cpath, cdomain);
			blue.src="/common/images/mycolor/blue2.png";
			
		}
	}
	else
	{
		var cssPath = getCookie ('blueCookie');
		if(cssPath == null || cssPath == "")
		{
			cssPath = "/common/css/Theme/blue";
			setCookie('blueCookie',cssPath,nd, cpath, cdomain);
			blue.src="/common/images/mycolor/blue2.png";
		}
	}
	
  if(value=="/common/css/Theme/blue")
    { newCss.href="/common/css/Theme/blue.css";
	  blue.src="/common/images/mycolor/blue1.png";

	  purple.src="/common/images/mycolor/purple2.png";

	  green.src="/common/images/mycolor/green2.png";
	
	  black.src="/common/images/mycolor/black2.png";
	  if(newHighlights!=null)
   {newHighlights.src="/en/images/title/title_highlights.png";}
	 
	  if(newVideo!=null)
	  {newVideo.src="/en/images/title/title_video.png";}
	  
	  if(newHotKeyWord!=null)
	  {newHotKeyWord.src="/en/images/title/title_video.png";}
	  
	  
	 
	  

	  for(var cc=0;cc<newMoreContainer.length;cc++){
		if(newMoreContainer[cc]!=null){
			newMoreContainer[cc].className='moreImgContainer';
		}
	}
	  
	  
	   if(enquiry_more1!=null)
	  {enquiry_more1.src="/en/images/highlight/more.png";}
	  if(enquiry_more2!=null)
	  {enquiry_more2.src="/en/images/highlight/more.png";}
	  if(enquiry_more3!=null)
	  {enquiry_more3.src="/en/images/highlight/more.png";}
	  if(enquiry_more4!=null)
	  {enquiry_more4.src="/en/images/highlight/more.png";}
	  if(enquiry_more5!=null)
	  {enquiry_more5.src="/en/images/highlight/more.png";}	
	
	  
	  if(more_pc1!=null)
	  {more_pc1.src="/en/images/highlight/more.png";}
	  if(more_pc2!=null)
	  {more_pc2.src="/en/images/highlight/more.png";}
	  if(more_pc3!=null)
	  {more_pc3.src="/en/images/highlight/more.png";}
	  
	  if(more_pr1!=null)
	  {more_pr1.src="/en/images/highlight/more.png";}
	  if(more_pr2!=null)
	  {more_pr2.src="/en/images/highlight/more.png";}
	  if(more_pr3!=null)
	  {more_pr3.src="/en/images/highlight/more.png";}
	  if(more_pr4!=null)
	  {more_pr4.src="/en/images/highlight/more.png";}
	  if(more_pr5!=null)
	  {more_pr5.src="/en/images/highlight/more.png";}
	  if(more_pr6!=null)
	  {more_pr6.src="/en/images/highlight/more.png";}
	  if(more_pr7!=null)
	  {more_pr7.src="/en/images/highlight/more.png";}
	  if(more_pr8!=null)
	  {more_pr8.src="/en/images/highlight/more.png";}

		for (i = 1; i < 20 ; i++){
		  if(more_au[i]!=null)
		  {more_au[i].src="/en/images/highlight/more.png";}
		  if(more_np[i]!=null)
		  {more_np[i].src="/en/images/highlight/more.png";}
		}
	  

	  if(more_rl1!=null)
	  {more_rl1.src="/en/images/highlight/more.png";}
	  if(more_rl2!=null)
	  {more_rl2.src="/en/images/highlight/more.png";}
	  if(more_rl3!=null)
	  {more_rl3.src="/en/images/highlight/more.png";}
	  if(more_rl4!=null)
	  {more_rl4.src="/en/images/highlight/more.png";}
	  if(more_rl5!=null)
	  {more_rl5.src="/en/images/highlight/more.png";}
	
	
	}
	
  else if (value=="/common/css/Theme/purple")
   {newCss.href="/common/css/Theme/purple.css";
    purple.src="/common/images/mycolor/purple1.png";
    blue.src="/common/images/mycolor/blue2.png";
	green.src="/common/images/mycolor/green2.png";
	black.src="/common/images/mycolor/black2.png";
   if(newHighlights!=null)
   {newHighlights.src="/en/images/title/title_highlights_purple.png";}
   if(newVideo!=null)
   {newVideo.src="/en/images/title/title_video_purple.png";}
     if(newHotKeyWord!=null)
   {newHotKeyWord.src="/en/images/title/title_video_purple.png";}
   
   
    

	for(var cc=0;cc<newMoreContainer.length;cc++){
		if(newMoreContainer[cc]!=null){
			newMoreContainer[cc].className='moreImgContainer_purple';
		}
	}
	
   
    if(enquiry_more1!=null)
	  {enquiry_more1.src="/en/images/highlight/more_purple.png";}
	  if(enquiry_more2!=null)
	  {enquiry_more2.src="/en/images/highlight/more_purple.png";}
	  if(enquiry_more3!=null)
	  {enquiry_more3.src="/en/images/highlight/more_purple.png";}
	  if(enquiry_more4!=null)
	  {enquiry_more4.src="/en/images/highlight/more_purple.png";}
	  if(enquiry_more5!=null)
	  {enquiry_more5.src="/en/images/highlight/more_purple.png";}	
   
       if(more_pc1!=null)
	  {more_pc1.src="/en/images/highlight/more_purple.png";}
	  if(more_pc2!=null)
	  {more_pc2.src="/en/images/highlight/more_purple.png";}
	  if(more_pc3!=null)
	  {more_pc3.src="/en/images/highlight/more_purple.png";}
	  
	  if(more_pr1!=null)
	  {more_pr1.src="/en/images/highlight/more_purple.png";}
	  if(more_pr2!=null)
	  {more_pr2.src="/en/images/highlight/more_purple.png";}
	  if(more_pr3!=null)
	  {more_pr3.src="/en/images/highlight/more_purple.png";}
	  if(more_pr4!=null)
	  {more_pr4.src="/en/images/highlight/more_purple.png";}
	  if(more_pr5!=null)
	  {more_pr5.src="/en/images/highlight/more_purple.png";}
	  if(more_pr6!=null)
	  {more_pr6.src="/en/images/highlight/more_purple.png";}
	  if(more_pr7!=null)
	  {more_pr7.src="/en/images/highlight/more_purple.png";}
	  if(more_pr8!=null)
	  {more_pr8.src="/en/images/highlight/more_purple.png";}
 
		for (i = 1; i < 20 ; i++){
      if(more_au[i]!=null)
	  {more_au[i].src="/en/images/highlight/more_purple.png";}
   	  if(more_np[i]!=null)
	  {more_np[i].src="/en/images/highlight/more_purple.png";}
		}
	  
	   if(more_rl1!=null)
	  {more_rl1.src="/en/images/highlight/more_purple.png";}
	  if(more_rl2!=null)
	  {more_rl2.src="/en/images/highlight/more_purple.png";}
	  if(more_rl3!=null)
	  {more_rl3.src="/en/images/highlight/more_purple.png";}
	  if(more_rl4!=null)
	  {more_rl4.src="/en/images/highlight/more_purple.png";}
	  if(more_rl5!=null)
	  {more_rl5.src="/en/images/highlight/more_purple.png";}
   }
   else if (value=="/common/css/Theme/green")
   {newCss.href="/common/css/Theme/green.css";
    green.src="/common/images/mycolor/green1.png";
    purple.src="/common/images/mycolor/purple2.png";
	blue.src="/common/images/mycolor/blue2.png";
	black.src="/common/images/mycolor/black2.png";
   if(newHighlights!=null)
   {newHighlights.src="/en/images/title/title_highlights_green.png";}
   if(newVideo!=null)
   {newVideo.src="/en/images/title/title_video_green.png";}
    if(newHotKeyWord!=null)
   {newHotKeyWord.src="/en/images/title/title_video_green.png";}
   
   
   for(var cc=0;cc<newMoreContainer.length;cc++){
		if(newMoreContainer[cc]!=null){
			newMoreContainer[cc].className='moreImgContainer_green';
		}
	}
   
    if(enquiry_more1!=null)
	  {enquiry_more1.src="/en/images/highlight/more_green.png";}
	  if(enquiry_more2!=null)
	  {enquiry_more2.src="/en/images/highlight/more_green.png";}
	  if(enquiry_more3!=null)
	  {enquiry_more3.src="/en/images/highlight/more_green.png";}
	  if(enquiry_more4!=null)
	  {enquiry_more4.src="/en/images/highlight/more_green.png";}
	  if(enquiry_more5!=null)
	  {enquiry_more5.src="/en/images/highlight/more_green.png";}	
   
       if(more_pc1!=null)
	  {more_pc1.src="/en/images/highlight/more_green.png";}
	  if(more_pc2!=null)
	  {more_pc2.src="/en/images/highlight/more_green.png";}
	  if(more_pc3!=null)
	  {more_pc3.src="/en/images/highlight/more_green.png";}
	  
	  if(more_pr1!=null)
	  {more_pr1.src="/en/images/highlight/more_green.png";}
	  if(more_pr2!=null)
	  {more_pr2.src="/en/images/highlight/more_green.png";}
	  if(more_pr3!=null)
	  {more_pr3.src="/en/images/highlight/more_green.png";}
	  if(more_pr4!=null)
	  {more_pr4.src="/en/images/highlight/more_green.png";}
	  if(more_pr5!=null)
	  {more_pr5.src="/en/images/highlight/more_green.png";}
	  if(more_pr6!=null)
	  {more_pr6.src="/en/images/highlight/more_green.png";}
	  if(more_pr7!=null)
	  {more_pr7.src="/en/images/highlight/more_green.png";}
	  if(more_pr8!=null)
	  {more_pr8.src="/en/images/highlight/more_green.png";}
  
   
		for (i = 1; i < 20 ; i++){
         if(more_au[i]!=null)
	  {more_au[i].src="/en/images/highlight/more_green.png";}
     	  if(more_np[i]!=null)
	  {more_np[i].src="/en/images/highlight/more_green.png";}
		}
	
	  
	   if(more_rl1!=null)
	  {more_rl1.src="/en/images/highlight/more_green.png";}
	  if(more_rl2!=null)
	  {more_rl2.src="/en/images/highlight/more_green.png";}
	  if(more_rl3!=null)
	  {more_rl3.src="/en/images/highlight/more_green.png";}
	  if(more_rl4!=null)
	  {more_rl4.src="/en/images/highlight/more_green.png";}
	  if(more_rl5!=null)
	  {more_rl5.src="/en/images/highlight/more_green.png";}
  
   }
   else 
   {newCss.href="/common/css/Theme/bw.css";
   	black.src="/common/images/mycolor/black1.png";
	purple.src="/common/images/mycolor/purple2.png";
	green.src="/common/images/mycolor/green2.png";
	blue.src="/common/images/mycolor/blue2.png";
	  if(newHighlights!=null)
   {newHighlights.src="/en/images/title/title_highlights_black.png";}
  
   if(newVideo!=null)
   {newVideo.src="/en/images/title/title_video_black.png";}
    if(newHotKeyWord!=null)
   {newHotKeyWord.src="/en/images/title/title_video_black.png";}
   
   
   
		for (i = 1; i < 20 ; i++){
         if(more_au[i]!=null)
		 {more_au[i].src="/en/images/highlight/more_black.png";}
         if(more_np[i]!=null)
		 {more_np[i].src="/en/images/highlight/more_black.png";}
		}
   
   
	 for(var cc=0;cc<newMoreContainer.length;cc++){
		if(newMoreContainer[cc]!=null){
			newMoreContainer[cc].className='moreImgContainer_black';
		}
	}
	 
	  if(enquiry_more1!=null)
	  {enquiry_more1.src="/en/images/highlight/more_black.png";}
	  if(enquiry_more2!=null)
	  {enquiry_more2.src="/en/images/highlight/more_black.png";}
	  if(enquiry_more3!=null)
	  {enquiry_more3.src="/en/images/highlight/more_black.png";}
	  if(enquiry_more4!=null)
	  {enquiry_more4.src="/en/images/highlight/more_black.png";}
	  if(enquiry_more5!=null)
	  {enquiry_more5.src="/en/images/highlight/more_black.png";}
	 
	  if(more_pc1!=null)
	  {more_pc1.src="/en/images/highlight/more_black.png";}
	  if(more_pc2!=null)
	  {more_pc2.src="/en/images/highlight/more_black.png";}
	  if(more_pc3!=null)
	  {more_pc3.src="/en/images/highlight/more_black.png";}
	  
	  if(more_pr1!=null)
	  {more_pr1.src="/en/images/highlight/more_black.png";}
	  if(more_pr2!=null)
	  {more_pr2.src="/en/images/highlight/more_black.png";}
	  if(more_pr3!=null)
	  {more_pr3.src="/en/images/highlight/more_black.png";}
	  if(more_pr4!=null)
	  {more_pr4.src="/en/images/highlight/more_black.png";}
	  if(more_pr5!=null)
	  {more_pr5.src="/en/images/highlight/more_black.png";}
	  if(more_pr6!=null)
	  {more_pr6.src="/en/images/highlight/more_black.png";}
	  if(more_pr7!=null)
	  {more_pr7.src="/en/images/highlight/more_black.png";}
	  if(more_pr8!=null)
	  {more_pr8.src="/en/images/highlight/more_black.png";}
	 
	
	  
	   if(more_rl1!=null)
	  {more_rl1.src="/en/images/highlight/more_black.png";}
	  if(more_rl2!=null)
	  {more_rl2.src="/en/images/highlight/more_black.png";}
	  if(more_rl3!=null)
	  {more_rl3.src="/en/images/highlight/more_black.png";}
	  if(more_rl4!=null)
	  {more_rl4.src="/en/images/highlight/more_black.png";}
	  if(more_rl5!=null)
	  {more_rl5.src="/en/images/highlight/more_black.png";}
	 
	
	

	}
}

function setCookie(name, value, expires, path, domain, secure)
{
  var curCookie = name + "=" + escape(value) +
		((expires) ? "; expires=" + expires.toGMTString() : "") +
		((path) ? "; path=" + path : "") +
		((domain) ? "; domain=" + domain : "") +
		((secure) ? "; secure" : "");

  d.cookie = curCookie;
}

function getCookie(name)
{
	if (d.cookie.indexOf(name) < 0)
	{	//alert("ac"+name)	;
		return null;
	}
	else
	{	
		var startStr = d.cookie.indexOf(name) + name.length + 1;
		var endStr = d.cookie.indexOf(";", startStr);
		if (endStr == -1)	endStr = d.cookie.length;
		//alert("aa"+d.cookie.substring(startStr, endStr));
		return decodeURI(d.cookie.substring(startStr, endStr));
	}
}

function getCookies(name)
{
var strCookie=document.cookie; 

var arrCookie=strCookie.split("; "); 
if(name=null)
{themeCookie="blue";}


for(var i=0;i<arrCookie.length;i++){ 
         var arr=arrCookie[i].split("="); 
        
         if("themeCookie"==arr[0]){ 
                name=arr[1]; 
                break; 
         } 
}
cssdetect(name);
} 


/* =================================================================================================
	Highlights Button Vars
================================================================================================= */

//<![CDATA[
var fpssPlayText = "Play";
var fpssPauseText = "Pause";
var navTrigger = "click";
var crossFadeDelay = 5000;
var crossFadeSpeed = 1000;
var fpssLoaderDelay = 800;
var autoslide = true;
var CTRtext_effect = false;
var CTRtransitionText = 1000;
//]]>


/* =================================================================================================
	Left Menu Function
================================================================================================= */

/*
 * Superfish v1.4.8 - jQuery menu widget
 * Copyright (c) 2008 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 * 	http://www.opensource.org/licenses/mit-license.php
 * 	http://www.gnu.org/licenses/gpl.html
 *
 * CHANGELOG: http://users.tpg.com.au/j_birch/plugins/superfish/changelog.txt
 */

;(function($){
	
	$.fn.superfish = function(op){

		var sf = $.fn.superfish,
			c = sf.c,
			$arrow = $(['<span class="',c.arrowClass,'"> &#187;</span>'].join('')),
			over = function(){
				var $$ = $(this), menu = getMenu($$);
				clearTimeout(menu.sfTimer);
				$$.showSuperfishUl().siblings().hideSuperfishUl();
				
			},
			out = function(){
				var $$ = $(this), menu = getMenu($$), o = sf.op;
				clearTimeout(menu.sfTimer);
				menu.sfTimer=setTimeout(function(){
					o.retainPath=($.inArray($$[0],o.$path)>-1);
					$$.hideSuperfishUl();
					if (o.$path.length && $$.parents(['li.',o.hoverClass].join('')).length<1){over.call(o.$path);}
				},o.delay);	
			},
			getMenu = function($menu){
				var menu = $menu.parents(['ul.',c.menuClass,':first'].join(''))[0];
				sf.op = sf.o[menu.serial];
				return menu;
			},
			addArrow = function($a){ $a.addClass(c.anchorClass).append($arrow.clone()); };
			
		return this.each(function() {
			var s = this.serial = sf.o.length;
			var o = $.extend({},sf.defaults,op);
			o.$path = $('li.'+o.pathClass,this).slice(0,o.pathLevels).each(function(){
				$(this).addClass([o.hoverClass,c.bcClass].join(' '))
					.filter('li:has(ul)').removeClass(o.pathClass);
			});
			sf.o[s] = sf.op = o;
			
			$('li:has(ul)',this)[($.fn.hoverIntent && !o.disableHI) ? 'hoverIntent' : 'hover'](over,out).each(function() {
				if (o.autoArrows) addArrow( $('>a:first-child',this) );
			})
			.not('.'+c.bcClass)
				.hideSuperfishUl();
			
			var $a = $('a',this);
			$a.each(function(i){
				var $li = $a.eq(i).parents('li');
				$a.eq(i).focus(function(){over.call($li);}).blur(function(){out.call($li);});
			});
			o.onInit.call(this);
			
		}).each(function() {
			var menuClasses = [c.menuClass];
			if (sf.op.dropShadows  && !($.browser.msie && $.browser.version < 7)) menuClasses.push(c.shadowClass);
			$(this).addClass(menuClasses.join(' '));
		});
	};

	var sf = $.fn.superfish;
	sf.o = [];
	sf.op = {};
	sf.IE7fix = function(){
		var o = sf.op;
		if ($.browser.msie && $.browser.version > 6 && o.dropShadows && o.animation.opacity!=undefined)
			this.toggleClass(sf.c.shadowClass+'-off');
		};
	sf.c = {
		bcClass     : 'sf-breadcrumb',
		menuClass   : 'sf-js-enabled',
		anchorClass : 'sf-with-ul',
		arrowClass  : 'sf-sub-indicator',
		shadowClass : 'sf-shadow'
	};
	sf.defaults = {
		hoverClass	: 'sfHover',
		pathClass	: 'overideThisToUse',
		pathLevels	: 1,
		delay		: 800,
		animation	: {opacity:'show'},
		speed		: 'normal',

		autoArrows	: true,
		dropShadows : true,
		disableHI	: false,		// true disables hoverIntent detection
		onInit		: function(){}, // callback functions
		onBeforeShow: function(){},
		onShow		: function(){},
		onHide		: function(){}
	};
	$.fn.extend({
		hideSuperfishUl : function(){
			var o = sf.op,
				not = (o.retainPath===true) ? o.$path : '';
			o.retainPath = false;
			var $ul = $(['li.',o.hoverClass].join(''),this).add(this).not(not).removeClass(o.hoverClass)
					.find('>ul').hide().css('visibility','hidden');
			o.onHide.call($ul);
			return this;
		},
		showSuperfishUl : function(){
			var o = sf.op,
				sh = sf.c.shadowClass+'-off',
				$ul = this.addClass(o.hoverClass)
					.find('>ul:hidden').css('visibility','visible');
			sf.IE7fix.call($ul);
			o.onBeforeShow.call($ul);
			$ul.animate(o.animation,o.speed,function(){ sf.IE7fix.call($ul); o.onShow.call($ul); });
			return this;
		}
	});
	
	


})(jQuery);


/* =================================================================================================
			New Images
================================================================================================= */
function chnage_sorting_image(sortingClass,colID)
{
	switch(sortingClass)
	{
		case "sorting":
		chnage_sorting_nosort(sortingClass,colID);
		break;
		
		case "sorting_asc":
		chnage_sorting_asc(sortingClass,colID);
		break;
		
		case "sorting_desc":
		chnage_sorting_dasc(sortingClass,colID);
		break;
		
		default:
		break;
	}

}

function chnage_sorting_asc(sortingClass,colID)
{
	var imgs = document.getElementById("col"+colID);
	imgs.src ="/common/images/table-sorter/sort_asc.png";

}

function chnage_sorting_dasc(sortingClass,colID)
{
	var imgs = document.getElementById("col"+colID);
	imgs.src ="/common/images/table-sorter/sort_desc.png";

}

function chnage_sorting_nosort(sortingClass,colID)
{
	var imgs = document.getElementById("col"+colID);
	imgs.src ="/common/images/table-sorter/sort_both.png";

}

/* =================================================================================================
			fadeSlideShow
================================================================================================= */

/*
 * fadeSlideShow
 * v.2.0.0
 *
 * Copyright (c) 2010 Pascal Bajorat (http://www.pascal-bajorat.com)
 * Dual licensed under the MIT (below)
 * and GPL (http://www.gnu.org/licenses/gpl.txt) licenses.
 *
 *
 * http://plugins.jquery.com/project/fadeslideshow
 * http://www.pascal-bajorat.com

MIT License

Copyright (c) 2010 Pascal Bajorat

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

jQuery.fn.fadeSlideShow = function(options) {
	return this.each(function(){
		settings = jQuery.extend({
     		width: 162, // default width of the slideshow
     		height: 350, // default height of the slideshow
			speed: 'slow', // default animation transition speed
			interval: 3000, // default interval between image change
			PlayPauseElement: false, // default css id for the play / pause element
			PlayText: 'Play', // default play text
			PauseText: 'Pause', // default pause text
			NextElement: 'fssNext', // default id for next button
			NextElementText: '&nbsp', // default text for next button
			PrevElement: 'fssPrev', // default id for prev button
			PrevElementText: '&nbsp;', // default text for prev button
			ListElement: 'fssList', // default id for image / content controll list
			ListLi: 'fssLi', // default class for li's in the image / content controll 
			ListLiActive: 'fssActive', // default class for active state in the controll list
			addListToId: false, // add the controll list to special id in your code - default false
			allowKeyboardCtrl: false, // allow keyboard controlls left / right / space
			autoplay: false // autoplay the slideshow
	 	}, options);
		
		// set style for wrapper element
		jQuery(this).css({
			width: settings.width,
			height: settings.height,
			position: 'relative',
			overflow: 'hidden',
			background : '#EFEFF1'
		});
		
		// set styles for child element
		jQuery('> *',this).css({
			position: 'absolute',
			background: '#EFEFF1',
			width: settings.width,
			height: settings.height
		});
		
		// count number of slides
		Slides = jQuery('> *', this).length;
		Slides = Slides - 1;
		ActSlide = Slides;
		// Set jQuery Slide short var
		jQslide = jQuery('> *', this);
		// save this
		fssThis = this;
		
		autoplay = function(){
			intval = setInterval(function(){
				jQslide.eq(ActSlide).fadeOut(settings.speed);
				
				// if list is on change the active class
				if(settings.ListElement){
					setActLi = (Slides - ActSlide) + 1;
					if(setActLi > Slides){setActLi=0;}
					jQuery('#'+settings.ListElement+' li').removeClass(settings.ListLiActive);
					jQuery('#'+settings.ListElement+' li').eq(setActLi).addClass(settings.ListLiActive);
				}
				
				if(ActSlide <= 0){
					jQslide.fadeIn(settings.speed);
					ActSlide = Slides;
				}else{
					ActSlide = ActSlide - 1;	
				}
			}, settings.interval);
			
			if(settings.PlayPauseElement){
				jQuery('#'+settings.PlayPauseElement).html(settings.PauseText);
			}
		}
		
		stopAutoplay = function(){
			clearInterval(intval);
			intval = false;
			if(settings.PlayPauseElement){
				jQuery('#'+settings.PlayPauseElement).html(settings.PlayText);

			}
		}
		
		jumpTo = function(newIndex){
			if(newIndex < 0){newIndex = Slides;}
			else if(newIndex > Slides){newIndex = 0;}
			if( newIndex >= ActSlide ){
				jQuery('> *:lt('+(newIndex+1)+')', fssThis).fadeIn(settings.speed);
			}else if(newIndex <= ActSlide){
				jQuery('> *:gt('+newIndex+')', fssThis).fadeOut(settings.speed);
			}
			
			// set the active slide
			ActSlide = newIndex;

			if(settings.ListElement){
				// set active
				jQuery('#'+settings.ListElement+' li').removeClass(settings.ListLiActive);
				jQuery('#'+settings.ListElement+' li').eq((Slides-newIndex)).addClass(settings.ListLiActive);
			}
		}
		
		// if list is on render it
		if(settings.ListElement){
			i=0;
			li = '';
			
			while(i<=Slides){
				if(i==0){
				/*	li = li+'<li class="'+settings.ListLi+i+' '+settings.ListLiActive+'"><a href="#">'+(i+1)+'<\/a><\/li>';*/
				li = li+'<li class="'+settings.ListLi+i+' '+settings.ListLiActive+'"><a href="#">&nbsp;&nbsp;&nbsp;&nbsp;<\/a><\/li>';
				
				}else{
					/*li = li+'<li class="'+settings.ListLi+i+'"><a href="#">'+(i+1)+'<\/a><\/li>';*/
					li = li+'<li class="'+settings.ListLi+i+'"><a href="#">&nbsp;&nbsp;&nbsp;&nbsp;<\/a><\/li>';
				}
				i++;
			}
		 
			List = '<ul id="'+settings.ListElement+'">'+li+'<\/ul>';
			
			// add list to a special id or append after the slideshow
			if(settings.addListToId){
				jQuery('#'+settings.addListToId).append(List);
			}else{
				jQuery(this).after(List);
			}
			
			jQuery('#'+settings.ListElement+' a').bind('click', function(){
				index = jQuery('#'+settings.ListElement+' a').index(this);
				stopAutoplay();
				ReverseIndex = Slides-index+1;
				
				jumpTo(ReverseIndex);
				
				return false;
			});
		}
		
		if(settings.PlayPauseElement){
			if(!jQuery('#'+settings.PlayPauseElement).css('display')){
				jQuery(this).after('<a href="#" id="'+settings.PlayPauseElement+'"><\/a>');
			}
			
			if(settings.autoplay){
				jQuery('#'+settings.PlayPauseElement).html(settings.PauseText);
			}else{
				jQuery('#'+settings.PlayPauseElement).html(settings.PlayText);
			}
			
			jQuery('#'+settings.PlayPauseElement).bind('click', function(){
				if(intval){
					stopAutoplay();
				}else{
					autoplay();
				}
				return false;
			});
		}
		
		if(settings.NextElement){
			if(!jQuery('#'+settings.NextElement).css('display')){
				/*jQuery(this).after('<a href="#" id="'+settings.NextElement+'">'+settings.NextElementText+'<\/a>');
				$('#ae1:last-child').after('<a href="#" id="'+settings.NextElement+'">'+settings.NextElementText+'<\/a>');*/
					$('#fssList').each(function(){
					$(this).find('li:last').after('<a href="#" id="'+settings.NextElement+'">'+settings.NextElementText+'<\/a>');
					});	
			}
			
			jQuery('#'+settings.NextElement).bind('click', function(){
				nextSlide = ActSlide-1;
				stopAutoplay();
				jumpTo(nextSlide);
				return false;
			});
		}
		
		if(settings.PrevElement){
			if(!jQuery('#'+settings.PrevElement).css('display')){
				/*jQuery(this).after('<a href="#" id="'+settings.PrevElement+'">'+settings.PrevElementText+'<\/a>');
					$('#ae1').before('<a href="#" id="'+settings.PrevElement+'">'+settings.PrevElementText+'<\/a>');*/
					$('#fssList').each(function(){	
					$(this).find('li:first').before('<a href="#" id="'+settings.PrevElement+'">'+settings.PrevElementText+'<\/a>');
					});	
			}
			
			jQuery('#'+settings.PrevElement).bind('click', function(){
				prevSlide = ActSlide+1;
				stopAutoplay();
				jumpTo(prevSlide);
				return false;
			});
		}
		
		if(settings.allowKeyboardCtrl){
			jQuery(document).bind('keydown', function(e){
				if(e.which==39){
					nextSlide = ActSlide-1;
					stopAutoplay();
					jumpTo(nextSlide);
				}else if(e.which==37){
					prevSlide = ActSlide+1;
					stopAutoplay();
					jumpTo(prevSlide);
				}else if(e.which==32){
					if(intval){stopAutoplay();}
					else{autoplay();}
					return false;
				}
			});
		}
		
		// start autoplay or set it to false
		if(settings.autoplay){autoplay();}else{intval=false;}
	});
};

$(document).ready(function() {

 /* =================================================================================================
HandleGlobalTable
================================================================================================= */
  
  
  
TableInNewsContentDivHandle();

  $('.menu_lv1').each(function (i) {
if($(this).text().length > 26){
$(this).addClass('menu_lv1B');
/*$(this).css('background','red');*/
        }
      });
 
 });


$(window).load(function() {/*
$('.simply-scroll-clip').attr('id','before_scroller');*/
CCLItableHandle();
});

function CCLItableHandle(){
var Div = $(".CCLItable");
var Tab = $(Div).find('table');
var WhatClass2 = Tab.attr('class');
/*
$(Tab).each(function (){
	
		$(this).attr('style','table-layout:auto;width:100%;');
	
		if($(this).attr('class')==undefined && $(this).attr('id')==undefined){
		$(this).addClass('staticdisplay_KeyTable');
		$(this).find('th').addClass("nosort");
		$(this).find('tr:odd').css("background-color", "#ECF2F6");
		$(this).find('tr:even').css("background-color", "#FFFFFF");
		$(this).find('tr').css("border-color", "transparent");
		$(this).find('td').css("border-color", "#c6d5e1");
		}else if($(this).attr('class').length == 0  && $(this).attr('id').length == 0 ){
		$(this).addClass('staticdisplay_KeyTable');
		$(this).find('th').addClass("nosort");
		$(this).find('tr:odd').css("background-color", "#ECF2F6");
		$(this).find('tr:even').css("background-color", "#FFFFFF");
		$(this).find('tr').css("border-color", "transparent");
		$(this).find('td').css("border-color", "#c6d5e1");
		}
		
	});*/
	$(Tab).each(function (){ 
        
                $(this).attr('style','table-layout:auto;width:100%;'); 
        
                if($(this).attr('class')==undefined && $(this).attr('id')==undefined){ 
                $(this).addClass('staticdisplay_KeyTable'); 
                $(this).attr('border', '1'); 
                $(this).find('th').addClass("nosort"); 
                $(this).find('tr:odd').css("background-color", "#ECF2F6"); 
                $(this).find('tr:even').css("background-color", "#FFFFFF"); 
                $(this).find('tr').css("border-color", "transparent"); 
                $(this).find('td').css("border-color", "transparent"); 
                $(this).find('td').css("border-bottom-color", "#C6D5E1"); 
                $(this).find('td').css("border-right-color", "#C6D5E1"); 
                }else if($(this).attr('class').length == 0  && $(this).attr('id').length == 0 ){ 
                $(this).addClass('staticdisplay_KeyTable'); 
                $(this).attr('border', '1'); 
                $(this).find('th').addClass("nosort"); 
                $(this).find('tr:odd').css("background-color", "#ECF2F6"); 
                $(this).find('tr:even').css("background-color", "#FFFFFF"); 
                $(this).find('tr').css("border-color", "transparent"); 
                $(this).find('td').css("border-color", "transparent"); 
                $(this).find('td').css("border-bottom-color", "#C6D5E1"); 
                $(this).find('td').css("border-right-color", "#C6D5E1"); 
                } 
                
	}); 

}
 
  function TableInNewsContentDivHandle(){
var HasDiv = $("#newsStaticContent");
var DivInTable = $(HasDiv).find('table');
var WhatClass = DivInTable.attr('class');

$(DivInTable).each(function (){

		$(this).attr('style','table-layout:auto;width:100%;');

		if($(this).attr('class')==undefined && $(this).attr('id')==undefined){
		$(this).addClass('staticdisplay_KeyTable');
		$(this).find('th').addClass("nosort");
		$(this).find('td:eq(1)').addClass("date");
		$(this).find('tr:odd').css("background-color", "#ECF2F6");
		$(this).find('tr:even').css("background-color", "#FFFFFF");
		$(this).find('tr').css("border-color", "transparent");
		}else if($(this).attr('class').length == 0  && $(this).attr('id').length == 0 ){
		$(this).addClass('staticdisplay_KeyTable');
		$(this).find('th').addClass("nosort");
		$(this).find('td:eq(1)').addClass("date");
		$(this).find('tr:odd').css("background-color", "#ECF2F6");
		$(this).find('tr:even').css("background-color", "#FFFFFF");
		$(this).find('tr').css("border-color", "transparent");
		}

});
 }

  /* =================================================================================================
 IE6 lv2 menu 
================================================================================================= */
  
  $(document).ready(function () { 
    
    if ($.browser.msie && ($.browser.version.substr(0,1)<7 && !($.browser.version.substr(0,2)>=10))) {
        $("ul.sf-menu li").find("ul").empty();    
    }
	

});

  /* =================================================================================================
 Handle General DataTable
================================================================================================= */
$(window).load(function() {

	DataTableHandler();
});

function DataTableHandler(){
		var DataTable = $("#newsContent").find("table");
		
$(DataTable).each(function (){
			if($(this).attr('border')==1){
                $(this).attr('style','table-layout:auto;width:100%;'); 
        
                if($(this).attr('class')==undefined && $(this).attr('id')==undefined){ 
                $(this).addClass('staticdisplay_KeyTable'); 
                
                $(this).find('th').addClass("nosort"); 
                $(this).find('tr:odd').css("background-color", "#ECF2F6"); 
                $(this).find('tr:even').css("background-color", "#FFFFFF"); 
                $(this).find('tr').css("border-color", "transparent"); 
                $(this).find('td').css("border-color", "transparent"); 
                $(this).find('td').css("border-bottom-color", "#C6D5E1"); 
                $(this).find('td').css("border-right-color", "#C6D5E1"); 
                }else if($(this).attr('class').length == 0  && $(this).attr('id').length == 0 ){ 
                $(this).addClass('staticdisplay_KeyTable'); 
               
                $(this).find('th').addClass("nosort"); 
                $(this).find('tr:odd').css("background-color", "#ECF2F6"); 
                $(this).find('tr:even').css("background-color", "#FFFFFF"); 
                $(this).find('tr').css("border-color", "transparent"); 
                $(this).find('td').css("border-color", "transparent"); 
                $(this).find('td').css("border-bottom-color", "#C6D5E1"); 
                $(this).find('td').css("border-right-color", "#C6D5E1"); 
                } 
	 }
});


}
  /* =================================================================================================

 Handle Decentralize DataTable
================================================================================================= */







$(window).load(function() {



















	DecentralizeDataTableHandler();
});


function DecentralizeDataTableHandler(){
		var DataTable = $("div.editContent").find("table");
		
$(DataTable).each(function (){
			if($(this).attr('border')==1){
			
                $(this).attr('style','table-layout:auto;width:100%;'); 		
                $(this).addClass('staticdisplay_KeyTable');            
                $(this).find('th').addClass("nosort"); 
                $(this).find('tr:odd').css("background-color", "#ECF2F6"); 
                $(this).find('tr:even').css("background-color", "#FFFFFF"); 
                $(this).find('tr').css("border-color", "transparent"); 
                $(this).find('td').css("border-color", "transparent"); 
                $(this).find('td').css("border-bottom-color", "#C6D5E1"); 
                $(this).find('td').css("border-right-color", "#C6D5E1"); 
             } else if($(this).attr('border')==0){
			    $(this).find('tr:odd').css("background-color", "#FFFFFF"); 
                $(this).find('tr:even').css("background-color", "#FFFFFF"); 
				$(this).find('tr').css("border-color", "transparent"); 
                $(this).find('td').css("border-color", "transparent"); 
	 }
});
 
} 




  /* =================================================================================================
 Handle PDF Image
================================================================================================= */
$(window).load(function() {
	PDFImageHandler();
});

function PDFImageHandler(){
		var PDFImage = $("#newsContent").find("img");
		
		$(PDFImage).each(function (){
			if($(this).attr('src')=="/common/images/pdf.gif"){
			
			 $(this).attr('style','vertical-align:middle; padding:5px'); 
			
             } 
		});
 
		var PDFImage_withEditContent = $(".editContent").find("img");
		
		$(PDFImage_withEditContent).each(function (){
			if($(this).attr('src')=="/common/images/pdf.gif"){
			
			 $(this).attr('style','vertical-align:middle; padding:5px'); 
			
             } else if($(this).attr('src')=="../../../../common/images/pdf.gif"){
			 
			 $(this).attr('style','vertical-align:middle; padding:5px'); 
			 } else if($(this).attr('src')=="../../../common/images/pdf.gif"){
			 
			 $(this).attr('style','vertical-align:middle; padding:5px'); 
			 } else if($(this).attr('src')=="../../common/images/pdf.gif"){
			 
			 $(this).attr('style','vertical-align:middle; padding:5px'); 
			 }
			 
		});
 
} 


  /* =================================================================================================
 Handle Mobile menu control
================================================================================================= */
function load()
{
  $(".icon").css('background-image','url(/common/images/mobile/arrow_right.png)');

  $(".show").css('display','none');

}
function menucontrol(id) 
{  

  var aarow= $('#'+id+' .icon');
  var block= $('#'+id+' .show');

  if (block.css('display')== 'none')
  {

    block.css('display','block');
	aarow.css('background-image','url(/common/images/mobile/arrow_down.png)');
  }
  else
  {
 
     block.css('display','none');
	 aarow.css('background-image','url(/common/images/mobile/arrow_right.png)');
  }

}
	var fs = get_cookie('fontsize');
	if(fs != null)
	{
		 if(fs=="0")
		  {
			  $("#fontSizeM").css("color","red");
			  $("#fontSizeL").css("color","black");
			  $("#fontSizeXL").css("color","black");
		  } 
		  if(fs=="1")
		  {
			  $("#fontSizeM").css("color","black");
			  $("#fontSizeL").css("color","red");
			  $("#fontSizeXL").css("color","black");
		  }
		  if(fs=="2")
		  {
			  $("#fontSizeM").css("color","black");
			  $("#fontSizeL").css("color","black");
			  $("#fontSizeXL").css("color","red");
		  }
		changeFontSize(fs);
	}else{
	  $("#fontSizeM").css("color","red");
	  $("#fontSizeL").css("color","black");
	  $("#fontSizeXL").css("color","black");
	}

  /* =================================================================================================
 Handle Feature Focus
================================================================================================= */
	 
function setStyle(x)
{
	var slider = $("#content-slider").data('royalSlider');
	slider.stopAutoPlay();
	var str = x.substring(1);
	slider.goTo(str);
}	

function removeStyle()
{
	var slider = $("#content-slider").data('royalSlider');
	slider.startAutoPlay();
}	
	