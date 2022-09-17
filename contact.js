$(function() {
	var callback = function(event) {
		event.preventDefault();
		var name = $('input[type=text][name=name]');
		var last = $('input[type=text][name=last]');
		var age = $('input[type=text][name=Age]');
		var address = $('input[type=text][name=Address]');
		var email = $('input[type=text][name=Email]');
		var contact = $('input[type=text][name=Contact]');
		
		var	value1 = name.val();
		var	value2 = last.val();
		var	value3 = age.val();
		var	value4 = address.val();
		var	value5 = email.val();
		var	value6 = contact.val();

		item = $('<li>Name: '+ value1 +'</li><li>Last Name: '+value2+'</li><li>Age: '+ value3 +'</li><li>Address: '+value4+ '</li><li>Email: '
				+ value5 +'</li><li>Contact: '+value6+'</li><br><br>'),
		list = $('ul').last();
		
		name.val("");
		name.focus();
		last.val("");
		last.focus();
		age.val("");
		age.focus();
		address.val("");
		address.focus();
		email.val("");
		email.focus();
		contact.val("");
		contact.focus();

		if (value1 === "" && value2 === "" && value3 === "" && value4 === "" && value5 === "" && value6 === "") return;
		item.appendTo(list);
	}

	$('#Submit').click(callback);
	
	$('ul').on('click', 'li a', function(event){
		$(event.target).parent('li').remove();
	});
});
