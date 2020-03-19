  $(document).ready(function(){
    // Add scrollspy to <body>
    $('body').scrollspy({target: ".navbar", offset: 1 });   
  
    $("#myNavbar a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
  
        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 400, function(){
     
          window.location.hash = hash;
        });
      }
    });


    $("#back-to-top").on('click', function(event) {
        if (this.hash !== "") {
          event.preventDefault();
    
          var hash = this.hash;
    
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 300, function(){
       
            window.location.hash = hash;
          });
        } 
      });

    var amountScrolled = 500;

$(window).scroll(function() {
	if ( $(window).scrollTop() > amountScrolled ) {
		$('#back-to-top').fadeIn(300);
	} else {
		$('#back-to-top').fadeOut(300);
	}
});
  });