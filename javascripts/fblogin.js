
window.fbAsyncInit = function() {
  FB.init({
	appId      : 'YOUR_APP_ID',
	status     : true, 
	cookie     : true,
	xfbml      : true,
	oauth      : true,
  });
};
(function(d){
   var js, id = 'facebook-jssdk'; if (d.getElementById(id)) {return;}
   js = d.createElement('script'); js.id = id; js.async = true;
   js.src = "http://connect.facebook.net/en_US/all.js";
   d.getElementsByTagName('head')[0].appendChild(js);
 }(document));