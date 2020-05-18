window.onload = function () {
    var selected = {};
    console.log("isthishere");
    $('INPUT:checkbox').change(function () {
    if ($(this).is(':checked')) {
      selected[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete selected[($(this).attr('data-id'))];
    }
    var amenlist = $.map(selected, function (v, k) {
      return v;
    });
    let output = '';
    for (let i = 0; i < amenlist.length; i++) {
      output += amenlist[i];
      if (i < amenlist.length - 1) {
        output += ', ';
      }
    }
    output += '\xa0';
    $('DIV.amenities H4').html(output);
  });
// 2-hbnb added
    $.ajax({
	url: "'127.0.0.1:5001/api/v1/status/' + cache_id"
    }).done(function (data, textStatus, jqXHR) {
	if (textStatus === 'success') {
	    $('DIV#api_status').addClass('available');
	}
    }).fail(function (jqXHR, textStatus, errorThrown) {
	$('DIV#api_status').removeClass('available');
    });

};
$('#api_status')
