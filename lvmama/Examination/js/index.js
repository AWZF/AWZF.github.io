$(function(){

  
    window.mySwipe = Swipe(document.querySelector('#slide3'),{
        startSlide:1,
        speed:200,
        auto:2000,
        continuous :true,
        callback:function(index){
            // console.log(index)
        }
    });

})