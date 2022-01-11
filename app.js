var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}













var shop = [
    {
      title: 'Tigers',
      image: './img/gerbile.jpg',
      price: '$7,500-15,000'
      description
    },
    
  
    
    ]
    
    var postHTML = " "














    for (var i=0; i < 1; i++){
        var heading = '<div class="Tigers' + '"><span><h5>' + shop[i].title + '</h5>'
        var image = '<img src='/img/gerbile.jpg' + shop[i] + '"/'
        var price = '<p> $7,500-15,000' + .price + '</p></span>'
        var description = '<div class=""><p>'+ .description + '</p><button type="button" class="btn btn-warning"> add to cart</button></div></div>'
        var concatThis = heading + image + price + description;
        postHTML = postHTML + concatThis
    }
    document.getElementById('market').innerHTML = postHTML
  
  
  
  