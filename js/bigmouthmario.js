var sendGmail = function(opts) {
	var str = 'http://mail.google.com/mail/?view=cm&fs=1' + '&to=' + opts.to + '&su=' + opts.subject + '&body=' + opts.message + '&ui=1';
	location.href = str;
};

$(document).ready(function() {

	var fullLink = window.location.href;

	var linkidx = window.location.href.indexOf('?link=');
	var nameidx = window.location.href.indexOf(';name=');
	var linkurl = (linkidx > 0) ? window.location.href.slice(linkidx + 6, nameidx) : '';
	$('#link').val(linkurl);

	var descidx = window.location.href.indexOf(';desc=');

	var nameurl = (nameidx > 0) ? window.location.href.slice(nameidx + 6, descidx) : '';
	$('#name').val(nameurl.split('__').join(' '));

	var descurl = (descidx > 0) ? window.location.href.slice(descidx + 6) : '';
	$('#description').val(descurl.split('__').join(' '));

	$('#ask_submit_btn').click(function() {

		var txt_title = $('#name').val();

		var description = $('#description').val();

		var urlToShare = $('#link').val();
		
		if(txt_title == null || txt_title == "" || description == null || description == "" || urlToShare == null || urlToShare == "" ){
			return;
		}
		
		$('#ask_submit_btn').hide();

		$('#socialrow').html("<span id='share_facebook_button'></span><span id='share_googleplus_button'></span><span id='share_twitter_button'></span><span id='share_linkedin_button'></span><span id='share_reddit_button'></span><span id='share_email_button'></span><span id='share_sharethis_button'></span>");

		stWidget.addEntry({
			"service" : "facebook",
			"element" : document.getElementById('share_facebook_button'),
			"url" : urlToShare,
			"title" : txt_title,
			"type" : "large",
			"text" : txt_title,
			"summary" : description
		});

		stWidget.addEntry({
			"service" : "twitter",
			"element" : document.getElementById('share_twitter_button'),
			"url" : urlToShare,
			"title" : txt_title,
			"type" : "large",
			"text" : txt_title,
			"summary" : description
		});

		stWidget.addEntry({
			"service" : "linkedin",
			"element" : document.getElementById('share_linkedin_button'),
			"url" : urlToShare,
			"title" : txt_title,
			"type" : "large",
			"text" : txt_title,
			"summary" : description
		});

		stWidget.addEntry({
			"service" : "email",
			"element" : document.getElementById('share_email_button'),
			"url" : urlToShare,
			"title" : txt_title,
			"type" : "large",
			"text" : txt_title,
			"summary" : description
		});

		stWidget.addEntry({
			"service" : "googleplus",
			"element" : document.getElementById('share_googleplus_button'),
			"url" : urlToShare,
			"title" : txt_title,
			"type" : "large",
			"text" : txt_title,
			"summary" : description
		});

		stWidget.addEntry({
			"service" : "sharethis",
			"element" : document.getElementById('share_sharethis_button'),
			"url" : urlToShare,
			"title" : txt_title,
			"type" : "large",
			"text" : txt_title,
			"summary" : description
		});

		stWidget.addEntry({
			"service" : "reddit",
			"element" : document.getElementById('share_reddit_button'),
			"url" : urlToShare,
			"title" : txt_title,
			"type" : "large",
			"text" : txt_title,
			"summary" : description
		});

	});

	$('#passTheLinkButton').click(function() {
		

		var txt_email = $('#email').val();

		var message = $('#message').val();
		
		var txt_title = $('#name').val();

		var description = $('#description').val();

		var urlToShare = $('#link').val();
		
		
		if(txt_title == null || txt_title == "" || description == null || description == "" || urlToShare == null || urlToShare == "" ){
			alert("Please compile the link information section");
		}
		
		
		if(txt_email == null || txt_email == "" || message == null || message == "" ){
			return;
		}
		
		if(fullLink.indexOf('?link=') < 0){
			fullLink = fullLink + '?link=' + urlToShare + ';name=' + txt_title.split(' ').join('__')  + ';desc=' + description.split(' ').join('__');
			return;
		}
		 

		sendGmail({
			to : txt_email,
			subject : message,
			message : 'click here please : ' + fullLink
		});

	});

});
