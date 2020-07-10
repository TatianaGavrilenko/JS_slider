
function slider(){

    let slider_img = document.querySelector('.img_slide');
    let images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'];
    let i = 0;


    let prev = function(){
        if(i <= 0) i = images.length;
        i --;
        return changeSlide();
    }
    
    let next  = function(){
        if (i >=images.length - 1) i = -1;
        i++;
        return changeSlide();
    }

    let changeSlide = function() {
        return slider_img.setAttribute('src', 'images/' + images[i]);
    }

    let buttonPrev = document.querySelector('.prev'),
        buttonNext = document.querySelector('.next');
    buttonPrev.addEventListener('click', prev);
    buttonNext.addEventListener('click', next);
    
}

slider();

