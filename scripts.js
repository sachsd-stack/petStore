$(function() {
    var selectedClass = "";
    $(".filter").click(function()   {
        selectedClass = $(this).attr("data-rel");
        $("#gallery").fadeTo(100, 0.1);
        $("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
        setTimeout(function() {
          $("."+selectedClass).fadeIn().addClass('animation');
          $("#gallery").fadeTo(300, 1);
        }, 300);
    });
});

$( document ).ready(function(){
  $('.carousel').carousel({
    interval: 5000
  })
});

// $('.navbar-nav li').click(function(){
//   $('.navbar-nav li').removeClass('active');
//   $(this).addClass('active');
// })


// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  // Close the Modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }

  var slideIndex = 1;

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var altText = document.getElementsByClassName("img-fluid hover-shadow");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    // for (i = 0; i < dots.length; i++) {
    //   dots[i].className = dots[i].className.replace(" active", "");
    // }
    slides[slideIndex-1].style.display = "block";
    // dots[slideIndex-1].className += " active";
    captionText.innerHTML = altText[slideIndex-1].alt;
  }


// PARALLAX RESIZE 
///////////////////////////////////////////////////
// /* resize the image(s) on page load */
// $(document).ready(function() {
//   resize_all_parallax();
// });

// /* resize the image(s) on page resize */
// $(window).on('resize', function(){
//   resize_all_parallax();
// });

// /* keep all of your resize function calls in one place so you don't have to edit them twice (on page load and resize) */
// function resize_all_parallax() {
//   var div_class = 'carousel-item'; /* the class of the div that you're resizing */
//   var img_w = 1000; /* the width of your image, in pixels */
//   var img_h = 864; /* the height of your image, in pixels */
//   resize_parallax(div_class,img_w,img_h);
// }

// /* this resizes the parallax image down to an appropriate size for the viewport */
// function resize_parallax(div_class,img_w,img_h) {
//   var div = $('.' + div_class);
//   var divwidth = div.width();
//   if (divwidth < 769) { 
//     var pct = (img_h/img_w) * 105; 
//   } /* show full image, plus a little padding, if on static mobile view */
//   else { 
//     var pct = 60; 
//   } /* this is the HEIGHT as percentage of the current div WIDTH. you can change it to show more (or less) of your image */
//   var newheight = Math.round(divwidth * (pct/100));
//   newheight = newheight  + 'px';
//   div.height(newheight);
// }  

// Adds HTML content to gallery and modal
var shop = [
    {
      title: 'Stu, 5',
      image: './img/cat.jpg',
      price: '7,500-15,000',
      filter: '2'
    },
    {
      title: 'Polly, 1',
      image: './img/parrot.jpg',
      price: '7,500-15,000',
      filter: '3'
    },
    {
      title: 'Tiny, 1',
      image: './img/cat2.jpg',
      price: '7,500-15,000',
      filter: '2'
    },
    {
      title: 'Rover, 2',
      image: './img/dog3.jpg',
      price: '7,500-15,000',
      filter: '1'
    },
    {
      title: 'Sam and Ella, 6 months',
      image: './img/cat3.jpg',
      price: '7,500-15,000',
      filter: '2'
    },
    {
      title: 'Lucius, 6',
      image: './img/cat4.jpg',
      price: '7,500-15,000',
      filter: '2'
    },
    {
      title: 'Buster, Cluster, and Mustard, 4',
      image: './img/dog5.jpg',
      price: '7,500-15,000',
      filter: '1'
    },
    {
      title: 'Tucker, 2',
      image: './img/dog4.jpg',
      price: '7,500-15,000',
      filter: '1'
    },
    {
      title: 'Sadie, 3',
      image: './img/dog2.jpg',
      price: '7,500-15,000',
      filter: '1'
    },
    {
      title: 'William, 4',
      image: './img/duck.jpg',
      price: '7,500-15,000',
      filter: '3'
    },
    {
      title: 'Unnamed Sparkling Violetear, ?',
      image: './img/bird.jpg',
      price: '7,500-15,000',
      filter: '3'
    },
    {
      title: 'Mozart, 3',
      image: './img/dog.jpg',
      price: '7,500-15,000',
      filter: '1'
    },
    {
      title: 'Samuel, 4',
      image: './img/toucan.jpg',
      price: '7,500-15,000',
      filter: '3'
    }
]
  
  var galleryHTML = "";
  var slidesHTML = "";


  for (var i=0; i < shop.length; i++){
      var heading = '<div class="mb-3 pics animation all ' + shop[i].filter + '">' + '<span><h5>' + shop[i].title + '</h5>';
      var image = '<img class ="img-fluid hover-shadow" onclick="openModal();currentSlide(' + (i+1) + ')" src="' + shop[i].image + '" alt = "' + shop[i].title + '">';
      var price = '<p> $' + shop[i].price + '</p></span>';
      var addToCart = '<div class="addToCart"><button type="button" class="btn btn-warning">Add to Cart</button></div></div>';
      var concatThis = heading + image + price + addToCart;
      galleryHTML = galleryHTML + concatThis;

      var slides = '<div class="mySlides"><img class="img-fluid" src="' + shop[i].image + '"></div>';
      slidesHTML = slidesHTML + slides;
  }
  var modalHTML = " ";
  modalHTML = '<span class="close cursor" onclick="closeModal()">&times;</span><div class="modal-content">' + slidesHTML + '<div class="caption-container"><p id="caption"></p></div></div>';

  document.getElementById('gallery').innerHTML = galleryHTML;
  document.getElementById('myModal').innerHTML = modalHTML;