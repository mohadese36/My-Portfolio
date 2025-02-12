// // work
// document.addEventListener("DOMContentLoaded", function () {
//     const buttons = document.querySelectorAll(".inner-work-content-btns button");
//     const jobs = document.querySelectorAll(".inner-work-content-job");
//     const highlight = document.querySelector(".jobs__StyledHighlight");

//     jobs.forEach((job, index) => {
//         job.style.display = index === 0 ? "block" : "none";
//     });


//     buttons.forEach((button, index) => {
//         button.addEventListener("click", function () {

//             jobs.forEach(job => job.style.display = "none");

//             jobs[index].style.display = "block";


//             highlight.style.top = `${button.offsetTop}px`;
//             highlight.style.height = `${button.offsetHeight}px`;
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

document.addEventListener("DOMContentLoaded", function () {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      document.getElementById('intro-text').textContent = data.introText;
      document.getElementById('name').textContent = data.name;
      document.getElementById('job-title').textContent = data.jobTitle;
      document.getElementById('description').textContent = data.description;
      document.getElementById('about-title').textContent = data.aboutTitle;
      document.getElementById('about-text-1').textContent = data.aboutText1;
      document.getElementById('about-text-2').textContent = data.aboutText2;
      document.getElementById('about-text-3').textContent = data.aboutText3;
      document.getElementById('about-text-4').textContent = data.aboutText4;
      document.getElementById('tech-list').innerHTML = data.techList.map(tech => `<li>${tech}</li>`).join('');
      document.getElementById('work-title').textContent = data.workTitle;
      document.getElementById('web-development-title').textContent = data.webDevelopmentTitle;
      document.getElementById('web-development-date').textContent = data.webDevelopmentDate;
      document.getElementById('web-development-tasks').innerHTML = data.webDevelopmentTasks.map(task => `<li>${task}</li>`).join('');
      document.getElementById('freelance-work-title').textContent = data.freelanceWorkTitle;
      document.getElementById('freelance-work-date').textContent = data.freelanceWorkDate;
      document.getElementById('freelance-work-tasks').innerHTML = data.freelanceWorkTasks.map(task => `<li>${task}</li>`).join('');
      document.getElementById('design-editing-title').textContent = data.designEditingTitle;
      document.getElementById('design-editing-date').textContent = data.designEditingDate;
      document.getElementById('design-editing-tasks').innerHTML = data.designEditingTasks.map(task => `<li>${task}</li>`).join('');
      document.getElementById('wordpress-title').textContent = data.wordpressTitle;
      document.getElementById('wordpress-date').textContent = data.wordpressDate;
      document.getElementById('wordpress-tasks').innerHTML = data.wordpressTasks.map(task => `<li>${task}</li>`).join('');
      document.getElementById('seo-title').textContent = data.seoTitle;
      document.getElementById('seo-date').textContent = data.seoDate;
      document.getElementById('seo-tasks').innerHTML = data.seoTasks.map(task => `<li>${task}</li>`).join('');
      document.getElementById('tools-technologies-title').textContent = data.toolsTechnologiesTitle;
      document.getElementById('tools-technologies-date').textContent = data.toolsTechnologiesDate;
      document.getElementById('tools-technologies-tasks').innerHTML = data.toolsTechnologiesTasks.map(task => `<li>${task}</li>`).join('');
      document.getElementById('services-title').textContent = data.servicesTitle;
      document.getElementById('frontend-development-title').textContent = data.frontendDevelopmentTitle;
      document.getElementById('frontend-development-description').textContent = data.frontendDevelopmentDescription;
      document.getElementById('javascript-mastery-title').textContent = data.javascriptMasteryTitle;
      document.getElementById('javascript-mastery-description').textContent = data.javascriptMasteryDescription;
      document.getElementById('responsive-web-design-title').textContent = data.responsiveWebDesignTitle;
      document.getElementById('responsive-web-design-description').textContent = data.responsiveWebDesignDescription;
      document.getElementById('code-optimization-title').textContent = data.codeOptimizationTitle;
      document.getElementById('code-optimization-description').textContent = data.codeOptimizationDescription;
      document.getElementById('contact-title').textContent = data.contactTitle;
      document.getElementById('contact-description-1').textContent = data.contactDescription1;
      document.getElementById('contact-description-2').textContent = data.contactDescription2;
      document.getElementById('contact-link').textContent = data.contactLinkText;
      document.getElementById('contact-link').href = data.contactLinkHref;
    })
    .catch(error => console.error('Error loading JSON data:', error));
});


const colors = [
    "rgba(0, 255, 255, 0.1)",   // آبی نئونی
    "rgba(180, 0, 255, 0.7)",   // بنفش نئونی
    "rgba(255, 0, 150, 0.7)",   // صورتی نئونی
    "rgba(255, 215, 0, 0.1)",   // طلایی نئونی
    "rgba(0, 255, 100, 0.7)",   // سبز نئونی
    "rgba(128, 0, 128, 0.8)",   // بنفش سلطنتی
    "rgba(70, 130, 180, 0.3)", // آبی یاقوتی
    "rgba(80, 200, 120, 0.8)", // سبز زمردی
    "rgba(192, 192, 192, 0.8)", // نقره‌ای متالیک
    "rgba(255, 185, 0, 0.8)"    // طلایی متالیک
];

document.addEventListener("mousemove", (e) => {
    createMouseTrail(e);
});

function createMouseTrail(e) {
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
}


