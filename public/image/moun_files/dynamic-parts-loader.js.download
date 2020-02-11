'use strict';

jQuery( function ( $ ) {

  var partsPlaces = {
    'body': [
      { part: 'adminbar', element: 'all' }
    ],
    '#dpl-navbar-right-buttons': [
      { part: 'navbar', element: 'right_buttons' }
    ],
    '#dpl-auth-modal': [
      { part: 'modals', element: 'auth' }
    ]
  };

  var parts = [];

  for (var place in partsPlaces) {

    if (partsPlaces.hasOwnProperty(place)) {

      parts = parts.concat(partsPlaces[place]);
    }
  }

  $.ajax({
    type: 'POST',
    url: '/wp-admin/admin-ajax.php?p=' + dynamic_parts_loader.page_id,
    data: {
      action: 'get_dynamic_parts',
      parts: parts
    }
  }).done( function ( response ) {

    response = JSON.parse(response);

    for (var place in partsPlaces) {

      if (partsPlaces.hasOwnProperty(place)) {

        var $place = $(place);
        var p = partsPlaces[place];
        p.forEach(function (part) {

          $place.append(response[part.part][part.element]);
        });
      }
    }

    var event = document.createEvent('Event');
    event.initEvent('dpl_loaded', true, true);
    document.dispatchEvent(event);
  }).fail(console.error);
});
