 // import { $ } from 'jquery';
var $ = require('jquery/dist/jquery.min');

export const initAnalystics = function () {
  $(document).on("click", "[data-analytics]", function(e) {
    const el = $(this);
    const analyticsData = el.data('analytics');

    console.log("Analytics Data - ", analyticsData);
    // ga('send', 'event', category, action, label, value );
  });
}
