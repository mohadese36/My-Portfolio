// work
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".inner-work-content-btns button");
    const jobs = document.querySelectorAll(".inner-work-content-job");
    const highlight = document.querySelector(".jobs__StyledHighlight");

    jobs.forEach((job, index) => {
        job.style.display = index === 0 ? "block" : "none";
    });


    buttons.forEach((button, index) => {
        button.addEventListener("click", function () {

            jobs.forEach(job => job.style.display = "none");

            jobs[index].style.display = "block";


            highlight.style.top = `${button.offsetTop}px`;
            highlight.style.height = `${button.offsetHeight}px`;
        });
    });
});



// // // hamburger
// document.addEventListener('DOMContentLoaded', function() {
//     const menuContainer = document.querySelector('.menu-container');
//     const hamburger = document.querySelector('.hamburger');
//     const closeButton = document.querySelector('#closeButton');
//     const body = document.body;

//     hamburger.addEventListener('click', function() {
//         if (body.classList.contains('rtl')) {
//             menuContainer.style.left = '0';
//             menuContainer.style.right = 'auto';
//         } else {
//             menuContainer.style.right = '0';
//             menuContainer.style.left = 'auto';
//         }
//         menuContainer.classList.add('open');
//     });

//     closeButton.addEventListener('click', function() {
//         if (body.classList.contains('rtl')) {
//             menuContainer.style.left = '-100%';
//             menuContainer.style.right = 'auto';
//         } else {
//             menuContainer.style.right = '-100%';
//             menuContainer.style.left = 'auto';
//         }
//         menuContainer.classList.remove('open');
//     });
// });








// document.addEventListener('DOMContentLoaded', function() {
//     const menuContainer = document.querySelector('.menu-container');
//     const hamburger = document.querySelector('.hamburger');
//     const closeButton = document.querySelector('#closeButton');
//     const body = document.body;
//     const menuLinks = document.querySelectorAll('.menu-container a');  // لینک‌های منو
//     const overlay = document.querySelector('.overlay'); // دیو مات

//     hamburger.addEventListener('click', function() {
//         if (body.classList.contains('rtl')) {
//             menuContainer.style.left = '0';
//             menuContainer.style.right = 'auto';
//         } else {
//             menuContainer.style.right = '0';
//             menuContainer.style.left = 'auto';
//         }
//         menuContainer.classList.add('open');
//         overlay.style.display = 'block'; // نمایش دیو مات
//     });

//     closeButton.addEventListener('click', function() {
//         if (body.classList.contains('rtl')) {
//             menuContainer.style.left = '-100%';
//             menuContainer.style.right = 'auto';
//         } else {
//             menuContainer.style.right = '-100%';
//             menuContainer.style.left = 'auto';
//         }
//         menuContainer.classList.remove('open');
//         overlay.style.display = 'none'; // مخفی کردن دیو مات
//     });

//     // بستن منو پس از کلیک روی لینک‌ها
//     menuLinks.forEach(function(link) {
//         link.addEventListener('click', function() {
//             if (body.classList.contains('rtl')) {
//                 menuContainer.style.left = '-100%';
//                 menuContainer.style.right = 'auto';
//             } else {
//                 menuContainer.style.right = '-100%';
//                 menuContainer.style.left = 'auto';
//             }
//             menuContainer.classList.remove('open');
//             overlay.style.display = 'none'; // مخفی کردن دیو مات
//         });
//     });
// });



document.addEventListener('DOMContentLoaded', function() {
    const menuContainer = document.querySelector('.menu-container');
    const hamburger = document.querySelector('.hamburger');
    const closeButton = document.querySelector('#closeButton');
    const body = document.body;
    const menuLinks = document.querySelectorAll('.menu-container a');
    const overlay = document.querySelector('.overlay');

    // هنگام تغییر زبان (فارسی به انگلیسی یا بالعکس)
    const changeLanguageBtn = document.querySelector('#change-language');
    changeLanguageBtn.addEventListener('click', function() {
        // منو را ببندیم و انیمیشن‌های قبلی را ری‌ست کنیم
        menuContainer.classList.remove('open');
        overlay.style.display = 'none';
        if (body.classList.contains('rtl')) {
            menuContainer.style.left = '-100%';
            menuContainer.style.right = 'auto';
        } else {
            menuContainer.style.right = '-100%';
            menuContainer.style.left = 'auto';
        }
    });

    // هنگام کلیک روی همبرگر، وضعیت منو تغییر می‌کند
    hamburger.addEventListener('click', function() {
        // اگر منو باز باشد، آن را ببند
        if (menuContainer.classList.contains('open')) {
            if (body.classList.contains('rtl')) {
                menuContainer.style.left = '-100%';
                menuContainer.style.right = 'auto';
            } else {
                menuContainer.style.right = '-100%';
                menuContainer.style.left = 'auto';
            }
            menuContainer.classList.remove('open');
            overlay.style.display = 'none'; // مخفی کردن دیو مات
        } else {
            // اگر منو بسته باشد، آن را باز کن
            if (body.classList.contains('rtl')) {
                menuContainer.style.left = '0';
                menuContainer.style.right = 'auto';
            } else {
                menuContainer.style.right = '0';
                menuContainer.style.left = 'auto';
            }
            menuContainer.classList.add('open');
            overlay.style.display = 'block'; // نمایش دیو مات
        }
    });

    closeButton.addEventListener('click', function() {
        if (body.classList.contains('rtl')) {
            menuContainer.style.left = '-100%';
            menuContainer.style.right = 'auto';
        } else {
            menuContainer.style.right = '-100%';
            menuContainer.style.left = 'auto';
        }
        menuContainer.classList.remove('open');
        overlay.style.display = 'none'; // مخفی کردن دیو مات
    });

    // بستن منو پس از کلیک روی لینک‌ها
    menuLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (body.classList.contains('rtl')) {
                menuContainer.style.left = '-100%';
                menuContainer.style.right = 'auto';
            } else {
                menuContainer.style.right = '-100%';
                menuContainer.style.left = 'auto';
            }
            menuContainer.classList.remove('open');
            overlay.style.display = 'none'; // مخفی کردن دیو مات
        });
    });
});


// adress link menus

document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.menu a');

    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // جلوگیری از بارگذاری پیش‌فرض لینک

            console.log("clicked");

            // پیدا کردن آیتم هدف از روی href
            const targetId = this.getAttribute('href').substring(1); // حذف # از آدرس

            // پیدا کردن عنصر هدف
            const targetElement = document.getElementById(targetId);

            // اسکرول به عنصر هدف
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start' // تنظیم مکان قرارگیری در بالا
            });
        });
    });
});


console.log("p");

// document.addEventListener('DOMContentLoaded', function() {
//     const menuContainer = document.querySelector('.menu-container');
//     const hamburger = document.querySelector('.hamburger');
//     const closeButton = document.querySelector('#closeButton');
//     const body = document.body;

//     console.log(hamburger);
//     console.log(menuContainer);

//     hamburger.addEventListener('click', function() {
//         console.log('Hamburger clicked');
//         if (body.classList.contains('rtl')) {
//             menuContainer.style.left = '0';
//             menuContainer.style.right = 'auto';
//         } else {
//             menuContainer.style.right = '0';
//             menuContainer.style.left = 'auto';
//         }
//         menuContainer.classList.add('open');
//         console.log('Menu open: ', menuContainer.classList.contains('open'));
//     });

//     closeButton.addEventListener('click', function() {
//         console.log('Close button clicked');
//         if (body.classList.contains('rtl')) {
//             menuContainer.style.left = '-100%';
//             menuContainer.style.right = 'auto';
//         } else {
//             menuContainer.style.right = '-100%';
//             menuContainer.style.left = 'auto';
//         }
//         menuContainer.classList.remove('open');
//         console.log('Menu open: ', menuContainer.classList.contains('open'));
//     });
// });








/////////////

// document.addEventListener('DOMContentLoaded', function() {
//     const hamburger = document.getElementById('hamburger');
//     const menuContainer = document.querySelector('.menu-container');
//     const closeButton = document.getElementById('closeButton');
//     const overlay = document.querySelector('.overlay');
//     const body = document.body;

//     // بررسی جهت زبان صفحه
//     const isRtl = document.documentElement.getAttribute('dir') === 'rtl';

//     // باز کردن منو
//     hamburger.addEventListener('click', function() {
//         menuContainer.classList.add('open');
//         overlay.style.display = 'block';
//         body.classList.add('menu-open'); 

//         // اگر rtl هست، منو از سمت چپ وارد شود
//         if (isRtl) {
//             menuContainer.style.transform = 'translateX(0)';
//         } else {
//             menuContainer.style.transform = 'translateX(0)';
//         }
//     });

//     // بستن منو
//     function closeMenu() {
//         menuContainer.classList.remove('open');
//         overlay.style.display = 'none';
//         body.classList.remove('menu-open'); 

//         // اگر rtl هست، منو از سمت چپ خارج شود
//         if (isRtl) {
//             menuContainer.style.transform = 'translateX(-100%)';
//         } else {
//             menuContainer.style.transform = 'translateX(100%)';
//         }
//     }

//     closeButton.addEventListener('click', closeMenu);
//     overlay.addEventListener('click', closeMenu);

//     // حرکت به آدرس مورد نظر در منو
//     document.querySelectorAll('.menu a').forEach(link => {
//         link.addEventListener('click', function(e) {
//             e.preventDefault();
//             const targetId = this.getAttribute('href');
//             const targetElement = document.querySelector(targetId);

//             if (targetElement) {
//                 closeMenu();
//                 window.scrollTo({
//                     top: targetElement.offsetTop - 50,
//                     behavior: 'smooth'
//                 });
//             }
//         });
//     });
// });







    //افکت موس

    const colors = [
        "rgba(0, 255, 255, 0.1)",   // آبی نئونی
        // "rgba(180, 0, 255, 0.7)",   // بنفش نئونی
        // "rgba(255, 0, 150, 0.7)",   // صورتی نئونی
        // "rgba(255, 215, 0, 0.1)",   // طلایی نئونی
        // "rgba(0, 255, 100, 0.7)",
        // "rgba(128, 0, 128, 0.8)" ,    //بنفش سلطنتی 👑
        //  "rgba(70, 130, 180, 0.3)" ,       // آبی یاقوتی 🔷
        // "rgba(80, 200, 120, 0.8)",  //سبز زمردی 💎
        // "rgba(192, 192, 192, 0.8)",     //نقره‌ای متالیک 
        // "rgba(255, 185, 0, 0.8)",       //طلایی متالیک 💛	
    
    ];
    
    document.addEventListener("mousemove", (e) => {
        let trail = document.createElement("div");
        trail.classList.add("trail");
        document.body.appendChild(trail);
    
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        trail.style.background = randomColor;
        trail.style.filter = `drop-shadow(0 0 10px ${randomColor})`;
    
        trail.style.left = `${e.pageX}px`;
        trail.style.top = `${e.pageY}px`;
    
        setTimeout(() => {
            trail.style.transform = "scale(2)";
            trail.style.opacity = "0";
        }, 10);
    
        setTimeout(() => {
            trail.remove();
        }, 500);
    });
