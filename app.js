// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("demo");
//   var captionText = document.getElementById("caption");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
//   captionText.innerHTML = dots[slideIndex-1].alt;
// }













var shop = [
    {
      title: 'Dogs',
      image: './puppy for sale.jpg',
      price: '199.99',
      description: 'Our puppies are rescues from the local SPCA '
    },

    {
      title: 'Dog food',
      image: './purina dog food.jpg',
      price: '39.99 & under',
      description: 'Premium brands for all walks of life'
    },



    {
      title: 'Cats',
      image: './kitten for sale.jfif',
      price: "89.99",
      description: "Our kittens are rescues from the local SPCA"
    },
    
    {
      title: 'Cat food',
      image: './cat food for sale.jpg',
      price: "29.99",
      description: "Quality food for all stages"
    },


    {
      title: 'Birds',
      image: './parakeet for sale.jpg',
      price: "39.99",
      description: "We have a beautiful selection of parakeets & more!"
    },



    {
      title: 'Bird feed',
      image: './bird food for sale.jpg',
      price: "8.99",
      description: "Varieties for all species"
    },

    {
      title: 'Small Pet',
      image: './small pet food for sale.jpg',
      price: "5.99-$11.99",
      description: "Select from an array of varieties"
    },

    {
      title: 'Dog accessories',
      image: './dog accessories.jpg',
      price: "2.99-$19.99",
      description: "Collars, leashes, toys and more!"
    },
    
    {
      title: 'Cat accessories',
      image: './cat accessories.jpg',
      price: "1.99-$10.99",
      description: "A cats paradise!"
    },

    {
      title: 'Small pet accessories',
      image: './small pet supplies.jpg',
      price: "8.99",
      description: "Everything you need to care for your little one!"
    },
    
    {
      title: 'Deal of the Week',
      image: './dog shampoo.png',
      price: "BOGO @ $12.99",
      description: "Organic dog shampoo"
    },
    
    
    
    
  
    
    ]
    
    var postHTML = " "














    for (var i=0; i < shop.length; i++){
        var heading = '<div class="product"><span><h5>' + shop[i].title + '</h5>'
        var image = '<img src="' + shop[i].image + '" />'
        var price = '<p class="price"> $' + shop[i].price + '</p></span>'
        var description = '<div class="description"><p>'+ shop[i].description + '</p><button type="button" class="btn btn-warning">Shop Around!</button></div></div>'
        var concatThis = heading + image + price + description;
        postHTML = postHTML + concatThis
    }
    document.getElementById('shop').innerHTML = postHTML
  
  
  
  