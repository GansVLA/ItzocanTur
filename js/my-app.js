// Initialize your app

var myApp = new Framework7({
    swipePanel: 'left'
});


// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('about', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});


 
var mySwiper = myApp.swiper('.swiper-container', {
  pagination: '.swiper-pagination',
  paginationHide: false,
  paginationClickable: true,
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
});    

// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
	mainView.router.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
	return;
}
$$('.num').on('click', function () {
    myApp.alert('<h3><span class="icon-phone"></span> (123) 4567890</h3>', '¡Llamanos!<hr>');
});

$$('.dire').on('click', function () {
    myApp.alert('<p><span class="icon-location"></span> Calle 3 poniente #12 Col Centro', 'Visitanos en:<hr>');
});

$$('.open-slider-modal').on('click', function () {
  var modal = myApp.modal({
    title: 'Awesome Photos?',
    text: 'What do you think about my photos?',
    afterText:  '<div class="swiper-container" style="width: auto; margin:5px -15px -15px">'+
                  '<div class="swiper-pagination"></div>'+
                  '<div class="swiper-wrapper">'+
                    '<div class="swiper-slide"><img src="http://i.stack.imgur.com/PXe2e.jpg" height="150" width="100%"" style="display:block"></div>' +
                    '<div class="swiper-slide"><img src="http://i.stack.imgur.com/PXe2e.jpg" height="150" width="100%"" style="display:block"></div>'+
                  '</div>'+
                '</div>',
    buttons: [
      {
        text: 'Bad :('
      },
      {
        text: 'Awesome!',
        bold: true,
        onClick: function () {
          myApp.alert('Thanks! I know you like it!')
        }
      },
    ]
  })
  myApp.swiper($$(modal).find('.swiper-container'), {pagination: '.swiper-pagination'});
});

function ocultar(){
document.getElementById('ver').style.display = 'none';}