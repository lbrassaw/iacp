/**
* @file
* custom.js
*
* Provides general enhancements and fixes to iacpTheme.
*/

(function($){

     $(document).ready(function() {

          // Add classes to login dropdown buttons
          $(".drop-down-login-container a.login").addClass("btn custom-btn btn-not-filled");
          $(".drop-down-login-container a.login").removeClass("button");

          // Dropdown menu - change href in a tag for user's name
          $('.dropdown ul.menu li:first-child a').attr('href', '/dashboard');

          $('.dropdown #user-login-form ul li:first-child a').attr({'href': '/civicrm/profile/create?gid=20&reset=1', 'title': 'Join IACP'}).text('Join IACP');

          // If not logged in, hide dashboard link block on registration process
          if ($('body').hasClass('not-logged-in')) {
               $('#block-block-10').hide();
               $('.drop-down-login-container .form-actions').insertAfter($('.drop-down-login-container .form-item-pass'));
          }

          // Hide 'Resource' links depending on logged in/out
          if ($('body').hasClass('logged-in')) {
               $('#menu-805-1').show();
          }
          if ($('body').hasClass('not-logged-in')) {
               $('#menu-805-1').hide();
          }
          if ($('body').hasClass('not-logged-in')) {
               $('#menu-727-1').show();
          }
          if ($('body').hasClass('logged-in')) {
               $('#menu-727-1').hide();
          }

          // Remove member only content for non-member resource page
          $('.page-resources .drilldown-1 option:last-child').remove();

          // Remove download functionality from audio player
          $(".library-item audio").attr("controlslist", "nodownload");

          // Get value form search label and hide
          var $titleValue = $('#edit-field-title-value-wrapper label').text();
          $('#edit-field-title-value-wrapper label').hide();
          // Set value of label to input text
          $('#edit-field-title-value').attr('placeholder', $.trim($titleValue));

          // Edit resource page apply and submit buttons
          $('.page-resources #edit-submit-clone-of-library').removeClass('btn btn-info');
          $('.page-resources #edit-submit-clone-of-library').addClass('custom-btn');
          $('.page-resources #edit-reset').removeClass('btn btn-default');
          $('.page-resources #edit-reset').addClass('custom-btn btn-not-filled');

          // BREADCRUMBS 
          // 
          // Hide default breadcrumb on members pages where Easy Breadcrumb is used
          $('.page-members- ol.breadcrumb').hide();
          $('.page-resources ol.breadcrumb').hide();

          // Clone view header title to breadcrumb
          $('.page-members- span.easy-breadcrumb_segment-title').text('');
          var $pageMemberTitle = $('.page-members- .page-header p').text();
          $('.page-members- span.easy-breadcrumb_segment-title').text($pageMemberTitle);

          // Breadcrumb for trainer registration page
          if ($('body').hasClass('page-node-89')) {
               $('.breadcrumb li.active').before('<li>Learn</li>');
          }

          if ($('body').hasClass('node-type-event')) {
               $('.breadcrumb li.active').before('<li>Events</li>');
          }

          // META INFO
          // 
          // Set meta title for member name page
          if ($('body').hasClass('page-members-')) {
               $('title').text($pageMemberTitle + ' | IACP');    
          }
          // Set meta title for resources page
          var $pageResourcesTitle = $('.page-resources h1.page-header').text();
          if ($('body').hasClass('page-resources')) {
               $('title').text($pageResourcesTitle + ' | IACP');     
          }


          // Events page sidebar sticky on scroll down
          if ($('body').hasClass('page-node-24')) {
               var topPosition = $('#block-block-8').offset().top + 160;
               var floatingDivHeight = $('#block-block-8').outerHeight();
               var footerFromTop = $('footer').offset().top;
               var absPosition = footerFromTop - floatingDivHeight - 20;
               var win = $(window);
               var floatingDiv = $('#block-block-8');

               win.scroll(function() {
                    if (window.matchMedia('(min-width: 768px)').matches) {
                         if ((win.scrollTop() > topPosition) && (win.scrollTop() < absPosition)) {
                              floatingDiv.addClass('sticky');
                              floatingDiv.removeClass('abs');
                         } else if ((win.scrollTop() > topPosition) && (win.scrollTop() > absPosition)) {
                              floatingDiv.removeClass('sticky');
                              floatingDiv.addClass('abs');
                         } else {
                              floatingDiv.removeClass('sticky');
                              floatingDiv.removeClass('abs');
                         }
                    }
               });
          }

     });

     // Hide download link from audio files in resources
     $(document).ajaxComplete(function(event, req, settings) {
          $(".library-item audio").attr("controlslist", "nodownload");
     });

     var delay = 0;
     var offset = 150;

     document.addEventListener('invalid', function(e){
        $(e.target).addClass("invalid");
        $('html, body').animate({scrollTop: $($(".invalid")[0]).offset().top - offset }, delay);
     }, true);
     document.addEventListener('change', function(e){
        $(e.target).removeClass("invalid")
     }, true);
     

})(jQuery);