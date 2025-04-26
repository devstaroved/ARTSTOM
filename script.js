document.querySelectorAll('.services__swiper_slide').forEach(slide => {
  slide.addEventListener('mouseover', () => {
    document.querySelector('.services__swiper_wrapper').style.height = '422px';
  });
  slide.addEventListener('mouseout', () => {
    document.querySelector('.services__swiper_wrapper').style.height = ''; // Сброс высоты
  });
});

// Initialize Swiper
document.addEventListener('DOMContentLoaded', function() {
    const servicesSwiper = new Swiper('.services-swiper', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: false,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });

    // Initialize Doctors Swiper
const doctorsSwiper = new Swiper('.doctors-swiper', {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: false,
        },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30
        }
    }
}); 
});

// Initialize Price Accordion
document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion__item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion__header');
        const content = item.querySelector('.accordion__content');
        
        // Set initial height to 0
        content.style.maxHeight = '0px';
        
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all accordion items
            accordionItems.forEach(accItem => {
                accItem.classList.remove('active');
                accItem.querySelector('.accordion__content').style.maxHeight = '0px';
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
});

// Initialize Reviews Swiper
document.addEventListener('DOMContentLoaded', function() {
    const reviewsSwiper = new Swiper('.reviews-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 53.79,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: false,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 'auto',
                spaceBetween: 53.79
            }
        }
    });
});

// Handle review text expansion
document.addEventListener('DOMContentLoaded', function() {
    const textContainers = document.querySelectorAll('.review-card__text-container');
    
    textContainers.forEach(container => {
        const text = container.querySelector('.review-card__text');
        const button = container.querySelector('.review-card__more-btn');
        const slide = container.closest('.reviews__swiper_slide');
        
        // Проверяем, нужна ли кнопка "Більше"
        if (text.scrollHeight > 60) {
            container.classList.add('has-more');
            
            if (button) {
                button.addEventListener('click', () => {
                    container.classList.toggle('expanded');
                    slide.classList.toggle('expanded');
                    button.textContent = container.classList.contains('expanded') ? 'Менше' : 'Більше';
                    
                    // Обновляем Swiper после изменения высоты
                    if (reviewsSwiper) {
                        reviewsSwiper.update();
                    }
                });
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuOverlay = document.querySelector('.menu-overlay');

    burgerMenu.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    menuOverlay.addEventListener('click', function() {
        burgerMenu.classList.remove('active');
        mobileMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Close menu when clicking on a link
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu__link');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            burgerMenu.classList.remove('active');
            mobileMenu.classList.remove('active');
            menuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
});

 