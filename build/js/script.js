


$(document).on("input", ".search_form_input", function(){
       if ($(this).val().length == 0) {
        // Hide the element
        $(".search_form_hidden_div").removeClass("open");
        $(".search_form_btn").removeClass("open");
     } else {
        // Otherwise show it
        $(".search_form_hidden_div").addClass("open");
        $(".search_form_btn").addClass("open");
     }
    
})



   $(document).on("click", ".switch input",function(){
      if($(this).is(":checked")){
          $(this).parent().parent().parent().addClass("open");
       } else{
         $(this).parent().parent().parent().removeClass("open");
       }
   })
  

   // $(document).on("click", ".objects_on_the_map_wrapper", function(){
   //     $(this).toggleClass("open");
   // })



   



   $(document).on("change", ".popup3_check_input_field",function(){
      if($(this).prop("checked") == true){
          $(this).parent().addClass("active");
      } else if($(this).prop("checked") == false){
         $(this).parent().removeClass("active");
      }
      
   })



   $(".popup3_check_input_box").hover(function (){
      $(".popup3_check_input_box").removeClass("active");
      $(this).addClass("active");
   })

   
   const swiper = new Swiper('#popup_pictures_swiper', {
      // Optional parameters
      direction: 'horizontal',
      slidesPerView: 1,
      loop: true,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.popup_swiper_next_btn',
        prevEl: '.popup_swiper_prev_btn',
      },
    
     
    });


    const swiper2 = new Swiper('#popup_pictures_swiper2', {
      // Optional parameters
      direction: 'horizontal',
      slidesPerView: 1,
      loop: true,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.popup7_swiper_prev_btn',
        prevEl: '.popup7_swiper_next_btn',
      },
    
     
    });

    const swiper3 = new Swiper('#popup_pictures_swiper3', {
      // Optional parameters
      direction: 'horizontal',
      slidesPerView: 1,
      loop: true,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.popup8_swiper_prev_btn',
        prevEl: '.popup8_swiper_next_btn',
      },
    
     
    });
        
    $(document).on("click", ".popup6_tab_item_title_parent", function(){

      var data_id = $(this).data("id");
      $(".popup6_tab_item_title_parent").removeClass("active");
      $(this).addClass("active");
    
    
       $(".popup6_tab_item").hide();
        $("#open_div1").removeClass("open");
      $("#" + data_id).fadeIn(0.5);
    })  
    


          
    $(document).on("click", ".popup7_tab_item_title_parent", function(){

      var data_id = $(this).data("id");
      $(".popup7_tab_item_title_parent").removeClass("active");
      $(this).addClass("active");
    
    
       $(".popup7_tab_item").hide();
        $("#open_div3").removeClass("open");
      $("#" + data_id).fadeIn(0.5);
    })  
    

            
    $(document).on("click", ".popup8_tab_item_title_parent", function(){

      var data_id = $(this).data("id");
      $(".popup8_tab_item_title_parent").removeClass("active");
      $(this).addClass("active");
    
    
       $(".popup8_tab_item").hide();
        $("#open_div6").removeClass("open");
      $("#" + data_id).fadeIn(0.5);
    })  
    