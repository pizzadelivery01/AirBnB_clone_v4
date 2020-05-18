window.onload = function () {
    const selected = {};
    console.log("isthishere");
    $('INPUT:checkbox').change(function () {
    if ($(this).is(':checked')) {
      selected[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete selected[($(this).attr('data-id'))];
    }
    let amenlist = $.map(selected, function (v, k) {
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
    $('DIV.amenities h4').html(output);
    });
// 2-hbnb added
    $.get("http://127.0.0.1:5001/api/v1/status/", function (data, textSuccess) {
      if (textSuccess === 'success') {
        if (data.status === 'OK') {
          $('#api_status').addClass('available');
        } else {
          $('#api_status').removeClass('available');
        }
      }
    });
// 3-hbnb added
    $.ajax({
    type: 'POST',
    url: '127.0.0.1:5000/api/v1/places_search',
    data: '{}',
    dataType: 'json',
    contentType: 'application/json',
    success: function (data) {
      $.each(data function (key, value) {
        $('section').html('<article>' + value + '</article>');
      }
    }
  });
}
