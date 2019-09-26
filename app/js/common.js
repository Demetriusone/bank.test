
$(function() {
	$("#my-menu").mmenu({
		extensions: [
                  "position-back",
                  "position-right"
               ],
		navbar: {
			title: "Меню"
		}
	})
	// Custom JS
var api = $("#my-menu").data('mmenu');
api.bind('open:start',function(){
	$('.menu-btn').addClass("is-active")
}).bind('close:finish',function(){
	$('.menu-btn').removeClass('is-active')
})
 $('.has-popover').popover({
        container: 'body',
        html: true,
    });
	
});

var items_el = document.getElementById('table-items');
var btn = document.getElementsByClassName("btn")
var items = items_el.getElementsByClassName('table-item');
for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function(){
  for (var i=0; i<items.length; i++) {
  	if (items[i].classList.contains(this.value)) {
    	items[i].style.display = 'table-row';
    } else {
    	items[i].style.display = 'none';
    }
  }
   var current = document.getElementsByClassName("is-active");
    current[0].className = current[0].className.replace(" is-active", "");
    this.className += " is-active";
  });
}
var filter_select_el = document.getElementById('option');
filter_select_el.onchange = function() {
  for (var i=0; i<items.length; i++) {
  	if (items[i].classList.contains(this.value)) {
    	items[i].style.display = 'table-row';
    } else {
    	items[i].style.display = 'none';
    }
  }
};

