

  var slideIndex = 0; // Initially set the index to 1
  var slides = JSON.parse(slide);
  var count = slides.length;

  function plusDivs(n) {
    showDivs(slideIndex += n);
  }


  function showDivs(n) {



    if (n >= count) {slideIndex = 0}
    if (n < 0) {slideIndex = count - 1}
    $(".slides").html('<img class="slide_image" src="' + slides[slideIndex].location + '"> <div class=\"slide_textbox\">"' + slides[slideIndex].text + '"</div>');
    $(".blur-background").css("background-image", "url('"+ slides[slideIndex].location + "') ") ;
    //x[slideIndex-1].style.display = "block";

  }
