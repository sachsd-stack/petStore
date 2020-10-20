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
    interval: 4000
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