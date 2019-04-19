/*

class Carousel {
    constructor(carousel){
        this.element= carousel;
        this.leftButton = document.querySelector('.left-button');
        this.rightButton = document.querySelector('.right-button');
        this.carouselImgs = document.querySelector('.carousel img');

        this.carouselImgs = Array.from(this.carouselImgs).map( carouselImg => new CarouselImgs(carouselImg));

        this.leftButton.addEventListener('click', () => {this.goLeft();});

        this.rightButton.addEventListener('click', () => {this.goRight();});
    }


    }


let carousel = document.querySelector('.carousel');
carousel = Array.from(carousel).map( carousel => new Carousel(carousel));

carousel[0].displayCarouselImg();

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/