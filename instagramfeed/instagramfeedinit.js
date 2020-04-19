// Change the next line with your accountname and you're ready to go!!!
var accountname = 'luckzzzy';


(function($){
	$(window).on('load', function(){
		$.instagramFeed({
			'username': accountname,
			'get_data': true,
			'callback': function(data){
				console.log(data)
				for (i = 0; i < 6; i++) {
					var imageData = data.edge_owner_to_timeline_media.edges[i].node
					var imageUrl = imageData.thumbnail_resources[3].src;
					var linkImg = 'https://www.instagram.com/p/' + imageData.shortcode;
					var titleImg = imageData.edge_media_to_caption.edges[0].node.text
					var item = '<div class="instaItem" style="background-image: url(' + imageUrl + ')"><a href="' + linkImg + '" target="_blank" title="'+titleImg+'"></a></div>';

					$('#instafeed').append(item);
				}
			}
		});
	});
})(jQuery);


/*
 jquery.instagramFeed
 @version 1.2.5
 @author Javier Sanahuja Liebana <bannss1@gmail.com>
 @contributor csanahuja <csanahuja@gmail.com>
 https://github.com/jsanahuja/jquery.instagramFeed
*/ 
(function(g){function r(g){return g.replace(/[&<>"'`=\/]/g,function(a){return f[a]})}var m={host:"https://www.instagram.com/",username:"",tag:"",container:"",display_profile:!0,display_biography:!0,display_gallery:!0,display_igtv:!1,get_data:!1,callback:null,styling:!0,items:8,items_per_row:4,margin:.5,image_size:640},n={150:0,240:1,320:2,480:3,640:4},f={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};g.instagramFeed=function(f){var a=g.fn.extend({},
m,f);if(""==a.username&&""==a.tag)return console.error("Instagram Feed: Error, no username or tag found."),!1;"undefined"!==typeof a.get_raw_json&&(console.warn("Instagram Feed: get_raw_json is deprecated. See use get_data instead"),a.get_data=a.get_raw_json);if(!a.get_data&&""==a.container)return console.error("Instagram Feed: Error, no container found."),!1;if(a.get_data&&null==a.callback)return console.error("Instagram Feed: Error, no callback defined to get the raw json"),!1;var l=""==a.username;
g.get(l?a.host+"explore/tags/"+a.tag+"/":a.host+a.username+"/",function(b){b=b.split("window._sharedData = ")[1].split("\x3c/script>")[0];b=JSON.parse(b.substr(0,b.length-1));b=b.entry_data.ProfilePage||b.entry_data.TagPage;if("undefined"===typeof b)console.error("Instagram Feed: It looks like YOUR network has been temporary banned because of too many requests. See https://github.com/jsanahuja/jquery.instagramFeed/issues/25");else if(b=b[0].graphql.user||b[0].graphql.hashtag,a.get_data)a.callback(b);
else{var c="",h="",k="",e="",f="";a.styling&&(c=" style='text-align:center;'",h=" style='border-radius:10em;width:15%;max-width:125px;min-width:50px;'",k=" style='font-size:1.2em;'",e=" style='font-size:1em;'",f=" style='margin:"+a.margin+"% "+a.margin+"%;width:"+(100-2*a.margin*a.items_per_row)/a.items_per_row+"%;float:left;'");var d="";a.display_profile&&(d=d+("<div class='instagram_profile'"+c+">")+("<img class='instagram_profile_image' src='"+b.profile_pic_url+"' alt='"+(l?b.name+" tag pic":b.username+
" profile pic")+"'"+h+" />"),d=l?d+("<p class='instagram_tag'"+k+"><a href='https://www.instagram.com/explore/tags/"+a.tag+"' rel='noopener' target='_blank'>#"+a.tag+"</a></p>"):d+("<p class='instagram_username'"+k+">@"+b.full_name+" (<a href='https://www.instagram.com/"+a.username+"' rel='noopener' target='_blank'>@"+a.username+"</a>)</p>"),!l&&a.display_biography&&(d+="<p class='instagram_biography'"+e+">"+b.biography+"</p>"),d+="</div>");k="undefined"!==typeof n[a.image_size]?n[a.image_size]:n[640];
if(a.display_gallery)if("undefined"!==typeof b.is_private&&!0===b.is_private)d+="<p class='instagram_private'><strong>This profile is private</strong></p>";else{e=(b.edge_owner_to_timeline_media||b.edge_hashtag_to_media).edges;h=e.length>a.items?a.items:e.length;d+="<div class='instagram_gallery'>";for(c=0;c<h;c++){var m="https://www.instagram.com/p/"+e[c].node.shortcode;switch(e[c].node.__typename){case "GraphSidecar":var p="sidecar";var q=e[c].node.thumbnail_resources[k].src;break;case "GraphVideo":p=
"video";q=e[c].node.thumbnail_src;break;default:p="image",q=e[c].node.thumbnail_resources[k].src}var t="undefined"!==typeof e[c].node.edge_media_to_caption.edges[0]&&"undefined"!==typeof e[c].node.edge_media_to_caption.edges[0].node&&"undefined"!==typeof e[c].node.edge_media_to_caption.edges[0].node.text&&null!==e[c].node.edge_media_to_caption.edges[0].node.text?e[c].node.edge_media_to_caption.edges[0].node.text:"undefined"!==typeof e[c].node.accessibility_caption&&null!==e[c].node.accessibility_caption?
e[c].node.accessibility_caption:(l?b.name:b.username)+" image "+c;d+="<a href='"+m+"' class='instagram-"+p+"' rel='noopener' target='_blank'>";d+="<img src='"+q+"' alt='"+r(t)+"'"+f+" />";d+="</a>"}d+="</div>"}if(a.display_igtv&&"undefined"!==typeof b.edge_felix_video_timeline&&(b=b.edge_felix_video_timeline.edges,h=b.length>a.items?a.items:b.length,0<b.length)){d+="<div class='instagram_igtv'>";for(c=0;c<h;c++)d+="<a href='https://www.instagram.com/p/"+b[c].node.shortcode+"' rel='noopener' target='_blank'>",
d+="<img src='"+b[c].node.thumbnail_src+"' alt='"+a.username+" instagram image "+c+"'"+f+" />",d+="</a>";d+="</div>"}g(a.container).html(d)}}).fail(function(a){console.error("Instagram Feed: Unable to fetch the given user/tag. Instagram responded with the status code: ",a.status)});return!0}})(jQuery);


$(document).ready(function () {
        InstagramFeed(accountname);
});
