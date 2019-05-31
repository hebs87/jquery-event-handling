$(document).ready(function() {
    /*effect or animation
    $("#stream1_btn").on(function() {
        $(".stream1").show();
        $(".stream1").show(1000); //1000 milliseconds
        $(".stream1").show('slow'); //slow
        $(".stream1").show('medium'); //medium
        $(".stream1").show('fast'); //fast
   });*/
    
    $("#stream1_btn").click(function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream1").addClass('highlight_stream');
   });
   $("#stream2_btn").click(function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
   });
   $("#stream3_btn").click(function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
   });
   
   //When a <p> tag is clicked and will change the color of all <p> tags to red
   $("p").click(function() {
       $("p").addClass("p_click");
   });
   
   //When a <h2> is hovered over, the background of all <h2>s are changed to the colour lightblue
   $("h2").hover(function() {
       $("h2").addClass("h2_hover");
   });
   
   //When a <h2> is hovered over its font size increases, but only for that particular <h2>
   $("#hr_html").hover(function() {
       $("#hr_mysql").removeClass("h2_hover_font");
       $("#hr_python").removeClass("h2_hover_font");
       $("#hr_jquery").removeClass("h2_hover_font");
       $("#hr_django").removeClass("h2_hover_font");
       $("#hr_css").removeClass("h2_hover_font");
       $("#hr_html").addClass("h2_hover_font");
   });
   
   $("#hr_mysql").hover(function() {
       $("#hr_html").removeClass("h2_hover_font");
       $("#hr_python").removeClass("h2_hover_font");
       $("#hr_jquery").removeClass("h2_hover_font");
       $("#hr_django").removeClass("h2_hover_font");
       $("#hr_css").removeClass("h2_hover_font");
       $("#hr_mysql").addClass("h2_hover_font");
   });
   
   $("#hr_python").hover(function() {
       $("#hr_html").removeClass("h2_hover_font");
       $("#hr_mysql").removeClass("h2_hover_font");
       $("#hr_jquery").removeClass("h2_hover_font");
       $("#hr_django").removeClass("h2_hover_font");
       $("#hr_css").removeClass("h2_hover_font");
       $("#hr_python").addClass("h2_hover_font");
   });
   
   $("#hr_jquery").hover(function() {
       $("#hr_html").removeClass("h2_hover_font");
       $("#hr_mysql").removeClass("h2_hover_font");
       $("#hr_python").removeClass("h2_hover_font");
       $("#hr_django").removeClass("h2_hover_font");
       $("#hr_css").removeClass("h2_hover_font");
       $("#hr_jquery").addClass("h2_hover_font");
   });
   
   $("#hr_django").hover(function() {
       $("#hr_html").removeClass("h2_hover_font");
       $("#hr_mysql").removeClass("h2_hover_font");
       $("#hr_python").removeClass("h2_hover_font");
       $("#hr_jquery").removeClass("h2_hover_font");
       $("#hr_css").removeClass("h2_hover_font");
       $("#hr_django").addClass("h2_hover_font");
   });
   
   $("#hr_css").hover(function() {
       $("#hr_html").removeClass("h2_hover_font");
       $("#hr_mysql").removeClass("h2_hover_font");
       $("#hr_python").removeClass("h2_hover_font");
       $("#hr_jquery").removeClass("h2_hover_font");
       $("#hr_django").removeClass("h2_hover_font");
       $("#hr_css").addClass("h2_hover_font");
   });
   
   //When a button is hovered, the background color of the page turns black
   $(".bottom_button").mouseenter(function() {
       $("body").css("background-color","black");
   });
   
   //When a button is no longer hovered, the background color of the page turns grey
   $(".bottom_button").mouseleave(function() {
       $("body").css("background-color","grey");
   });
   
   //Effects challenge 1 - Make the first button hide when clicked.On the same button, try the slow, medium, fast, and a number in milliseconds.
   $("#btn_1").click(function() {
       $("#btn_1").hide('slow');
   });
   
   /*Effects challenge 2 - Use toggle to alter the buttons behaviour.
   When the button is clicked, the paragraph above vanishes.
   When the button is clicked again, the paragraph reappears.*/
   $("#btn_2").click(function() {
       $("#para_2").toggle('slow');
   });
   
   //Effects challenge 3 - Use slideToggle instead of toggle (from the last Challenge) to show or hide the paragraph.
   $("#btn_3").click(function() {
       $("#para_3").slideToggle('slow');
   });
   
   /*Effects challenge 4 - Use fadeTo in conjunction with mouseenter and mouseleave to modify the button.
   Fade to 50% opacity on mouseenter and fade back to 100% on mouseleave.*/
   $("#btn_4").mouseenter(function() {
       $("#btn_4").fadeTo(1000, 0.5);
   });
   $("#btn_4").mouseleave(function() {
       $("#btn_4").fadeTo(1000, 1);
   });
   
   /*Method chaining
   $("#myButton").removeClass("blueBox").addClass("border");
   $("p").css("color","blue").slideUp(2000).slideDown(2000);
   $("a").attr("href","http://www.example.com");*/
   
   /*Method chaining challenge 1
   Create a CSS class (makeRed, add it to style.css) which gives the Button a red color, apply this class to the button Element.
   Create another class (makeBorder, add it to style.css) which gives the Button a border of 2px, do not apply to the HTML.
   On mouseenter remove the red class and add the border class.
   On mouseleave reverse the above.
   Use method chaining to achieve the above.*/
   $("#btn_5").mousenter(function() {
       $("#btn_5").removeClass("makeRed").addClass("makeBorder");
   });
   
   $("#btn_5").mouseleave(function() {
       $("#btn_5").removeClass("makeBorder").addClass("makeRed");
   });
   
   //Method chaining challenge 2 - When the button is clicked, make the paragraph slide up. When clicked again, make it slide down.
   //Same as Effects challenge 3
   
   //Method chaining challenge 3 - 
});