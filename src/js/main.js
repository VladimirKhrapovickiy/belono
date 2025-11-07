$(document).ready(function() {
    //попапы
    const $callPopup = $(".call-popup");
    if($callPopup.length>0){
        $callPopup.each(function(){
            const $item = $(this);
            $item.on("click", function(){
                $(`#${$item.data("popup-id")}`).fadeIn();
                console.log($(`#${$item.data("popup-id")}`))
            })
        })
        $(".popup").each(function(){
            const $item = $(this);
            $item .find(".popup__close").on("click", function(){
                $item.fadeOut();
            })
        })
    }
    //слайдеры
    const swiperCats = new Swiper('.categories__list-mobile', {
        slidesPerView: "auto",
        centeredSlides: true,
        pagination: {
            el: '.categories__swiper-pagination',
        },
        breakpoints: {
            460: {
                slidesPerView: 2,
                centeredSlides: false,
            },
        },
    });
    const swiperRec = new Swiper('.swiper-recomended', {
        slidesPerView: "auto",
        centeredSlides: true,
        breakpoints: {
            460: {
                slidesPerView: 2,
                centeredSlides: false,
            },
        },
    });
    const swiperGal = new Swiper('.swiper-gallary', {
        slidesPerView: "auto",
        centeredSlides: true,
        breakpoints: {
            460: {
                slidesPerView: 2,
                centeredSlides: false,
            },
        },
        pagination: {
            el: '.swiper-gallary__swiper-pagination',
        },
    });
    //скролл слайдов (секций) на главной
    const $slideshow  = $(".slideshow");
    if($slideshow.length  > 0){
        window.scrollTo(0, 0)
        const $slides = $('.slide-section');
        const coordinates =[0 , 100 , 200 , 300 , 400 , 500]
        function slideDown(){
            coordinates.forEach(function(el, i){
                if(el > 0 ){
                    coordinates[i] = el - 100;
                } 
            })
            $slides.each(function(index){
                $(this).css("top", `${coordinates[index]}vh`);
                
            })
            addDelay();

        }
        var isSlide = 1;
        function addDelay(){
            isSlide = 0;
            setTimeout(function(){
                isSlide = 1;
            },2000)
        }
        function slideUp(){
            var isSlided = 0;
            coordinates.slice().reverse().forEach(function(el, i){
                if(coordinates[coordinates.length -1 - i] < (coordinates.length -1 - i)*100 && !isSlided){
                    if(el == 0){
                        isSlided = 1;
                    }
                    coordinates[coordinates.length -1 - i] = el + 100;
                } 
            })
            $slides.each(function(index){
                $(this).css("top", `${coordinates[index]}vh`);
                
            })
            addDelay();
        }
        $(window).on('wheel', function(event) {
            if (event.originalEvent.deltaY < 0 && isSlide == 1) {
                slideUp();
            } else if (event.originalEvent.deltaY > 0 && isSlide == 1) {
                slideDown();
            }
        });
        let touchstartY = 0;
        let touchendY = 0;
        $(document).on('touchstart', function(e) {
            touchstartY = e.originalEvent.touches[0].clientY;
        });
        $(document).on('touchmove', function(e) {
        touchendY = e.originalEvent.touches[0].clientY;
            if (touchendY < touchstartY && isSlide == 1) {
                slideDown();
            } else if (touchendY > touchstartY && isSlide == 1) {
                slideUp();
            }
        });
    }


    //точки на главном экране
    const $dots = $(".main-screen__product-dot");
    if($dots.length > 0){
        $dots.each(function(){
            const $item = $(this);
            $item.on("mouseenter", function(){
                $dots.each(function(){
                    if($(this) !==  $item){
                        $(this).css("z-index", 0)
                    }
                })
            })
            $item.on("mouseleave", function(){
                $dots.each(function(){
                    if($(this) !==  $item){
                        $(this).css("z-index", 2)
                    }
                })
            })
        })
    }

    //куки
    const $cookie = $(".cookie");
    if($cookie.length > 0){
        const $cookieBtn = $(".cookie__btn")
        setTimeout(() => {
            if(!$cookie.hasClass("cookie-active")){
                $cookie.addClass("cookie-active");
            }
        }, 2500);
        $cookieBtn.on("click", function(){
             $cookie.removeClass("cookie-active");
        })
    }

    //бургер меню 
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    hamburgerMenu.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('open');
        $(".header__menu").toggleClass("header__menu-active")
    });

    //блок категорий на главной
    const $categories = $(".category");
    if($categories.length > 0){
        $categories.each(function(){
            const $cat = $(this);
            $cat.on("mouseover", function(){
                $categories.each(function(){
                    $(this).removeClass("category_active");
                })
                $cat.addClass("category_active");
            })
        })
    }
    
    //блок со схемой горшка на главной
    const $advantages = $(".shema__adv-item");
    if($advantages.length > 0){
        $advantages.each(function(){
            const $adv = $(this);
            $adv.on("mouseenter", function(){
                $adv.addClass("shema__adv-item_active");
            })
            $adv.on("mouseleave", function(){
                $adv.removeClass("shema__adv-item_active");
            })
        })
    }

    //блок галерея на главной
    const $gallaryItems = $(".gallary__item-info");
    if($gallaryItems.length > 0){
        $gallaryItems.each(function(){
            const $item = $(this);
            $item.on("mouseenter", function(){
                $item.addClass("gallary__item-info_active");
            })
            $item.on("mouseleave", function(){
                $item.removeClass("gallary__item-info_active");
            })
        })
    }
    //блок faq на главной
    const $faqQuestions = $(".faq__item");
    if($faqQuestions.length > 0){
        $faqQuestions.each(function(){
            const $item = $(this);
            $item.on("click", function(){
                if(!$item.hasClass("faq__item-active")){
                    $faqQuestions.each(function(){
                        $(this).removeClass("faq__item-active");
                    })
                    $item.addClass("faq__item-active");
                }
            })
        })
    }
})