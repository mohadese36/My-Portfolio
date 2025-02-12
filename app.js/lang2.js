

console.log("p");


// let currentLanguage = localStorage.getItem('lang') || 'en';
// const changeLanguageButton = document.getElementById('change-language');

// defineLanguageAttributes(currentLanguage);

// document.addEventListener('DOMContentLoaded', () => loadLanguage(currentLanguage));
// changeLanguageButton.addEventListener('click', toggleLanguage);

// function defineLanguageAttributes(lang) {
//     document.documentElement.setAttribute('lang', lang);
//     document.body.classList.toggle('rtl', lang === 'fa');
//     document.body.classList.toggle('ltr', lang === 'en');
//     changeLanguageButton.innerHTML = `<img src="images/lang-btn.png" alt="lang-btn"><span>${lang === 'fa' ? 'English' : 'Persian'}</span>`;
// }

// function toggleLanguage() {
//     currentLanguage = currentLanguage === 'fa' ? 'en' : 'fa';
//     localStorage.setItem('lang', currentLanguage);
//     defineLanguageAttributes(currentLanguage);
//     loadLanguage(currentLanguage);
// }

// function loadLanguage(lang) {
//     fetch(`lang/${lang}.json`)
//         .then(response => response.json())
//         .then(data => {
//             updateTextContent({
//                 "#nav-about a": data.header.menuContainer.menuLinks.about,
//                 "#nav-work a": data.header.menuContainer.menuLinks.work,
//                 "#nav-services a": data.header.menuContainer.menuLinks.services,
//                 "#nav-contact a": data.header.menuContainer.menuLinks.contact,
//                 ".resume-link": data.header.menuContainer.resume,
//                 "#intro-text": data.infoSection.introText,
//                 "#name": data.infoSection.name,
//                 "#job-title": data.infoSection.jobTitle,
//                 "#description": data.infoSection.description,
//                 "#projects-btn": data.infoSection.projectsButton,
//                 "#nextjs-link": 'Next.js',
//                 "#about-title": `<span>◆</span> ${data.aboutSection.title} <span class="line"></span>`,
//                 "#about-text-1": data.aboutSection.text1,
//                 "#about-text-2": data.aboutSection.text2,
//                 "#about-text-3": data.aboutSection.text3,
//                 "#about-text-4": data.aboutSection.text4,
//                 "#work-title": `<span>◆</span> ${data.work.title} <span class="line"></span>`,
//                 "#services-title": data.services.title,
//                 "#contact-title": data.contact.title,
//                 "#contact-description-1": data.contact.description1,
//                 "#contact-description-2": data.contact.description2,
//                 "#contact-link": data.contact.link,
//                 "#closeButton": data.header.menuContainer.closeButton,

//                 // اضافه کردن دکمه‌ها
//                 "#btn-web-development": data.work.buttons.webDevelopment,
//                 "#btn-freelance-work": data.work.buttons.freelanceWork,
//                 "#btn-design-editing": data.work.buttons.designEditing,
//                 "#btn-wordpress": data.work.buttons.wordpress,
//                 "#btn-seo": data.work.buttons.seo,
//                 "#btn-tools-technologies": data.work.buttons.toolsTechnologies
//             });
            
//             updateListContent("#tech-list", data.aboutSection.techList);
//             updateWorkSections(data.work.jobs);
//             updateServiceSections(data.services.items);
//         })
//         .catch(error => console.error('Error loading language:', error));
// }


// function updateTextContent(elements) {
//     for (const [selector, text] of Object.entries(elements)) {
//         const element = document.querySelector(selector);
//         if (element) element.innerHTML = text;
//     }
// }

// function updateListContent(selector, items) {
//     const list = document.querySelector(selector);
//     if (list) {
//         list.innerHTML = '';
//         items.forEach(item => {
//             const li = document.createElement('li');
//             li.textContent = item;
//             list.appendChild(li);
//         });
//     }
// }

// function updateWorkSections(jobs) {
//     jobs.forEach(job => {
//         updateTextContent({
//             [`#${job.id}-title`]: job.title,
//             [`#${job.id}-date`]: job.date
//         });
//         updateListContent(`#${job.id}-tasks`, job.tasks);
//     });
// }

// function updateServiceSections(services) {
//     services.forEach(service => {
//         updateTextContent({
//             [`#${service.id}-title`]: service.title,
//             [`#${service.id}-description`]: service.description
//         });
//     });
// }

////////////////////////////////










document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".inner-work-content-btns button");
    const jobs = document.querySelectorAll(".inner-work-content-job");
    const highlight = document.querySelector(".jobs__StyledHighlight");

    // مخفی کردن تمام کارها و نمایش اولین کار
    jobs.forEach((job, index) => {
        job.style.display = index === 0 ? "block" : "none";
    });

    // افزودن رویداد کلیک به دکمه‌ها
    buttons.forEach((button, index) => {
        button.addEventListener("click", function () {
            jobs.forEach(job => job.style.display = "none");
            jobs[index].style.display = "block";

            highlight.style.top = `${button.offsetTop}px`;
            highlight.style.height = `${button.offsetHeight}px`;
        });
    });

    setupMenuToggle();
    setupScrollMenu();
});

function setupMenuToggle() {
    const menuContainer = document.querySelector('.menu-container');
    const hamburger = document.querySelector('.hamburger');
    const closeButton = document.querySelector('#closeButton');
    const body = document.body;
    const menuLinks = document.querySelectorAll('.menu-container a');
    const overlay = document.querySelector('.overlay');

    // تغییر زبان (فارسی به انگلیسی یا بالعکس)
    const changeLanguageBtn = document.querySelector('#change-language');
    changeLanguageBtn.addEventListener('click', function () {
        menuContainer.classList.remove('open');
        overlay.style.display = 'none';
        adjustMenuPosition(body, menuContainer);
    });

    hamburger.addEventListener('click', function () {
        toggleMenu(menuContainer, overlay, body);
    });

    closeButton.addEventListener('click', function () {
        closeMenu(menuContainer, overlay, body);
    });

    menuLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            closeMenu(menuContainer, overlay, body);
        });
    });
}

function adjustMenuPosition(body, menuContainer) {
    if (body.classList.contains('rtl')) {
        menuContainer.style.left = '-100%';
        menuContainer.style.right = 'auto';
    } else {
        menuContainer.style.right = '-100%';
        menuContainer.style.left = 'auto';
    }
}

function toggleMenu(menuContainer, overlay, body) {
    if (menuContainer.classList.contains('open')) {
        closeMenu(menuContainer, overlay, body);
    } else {
        openMenu(menuContainer, overlay, body);
    }
}

function openMenu(menuContainer, overlay, body) {
    if (body.classList.contains('rtl')) {
        menuContainer.style.left = '0';
        menuContainer.style.right = 'auto';
    } else {
        menuContainer.style.right = '0';
        menuContainer.style.left = 'auto';
    }
    menuContainer.classList.add('open');
    overlay.style.display = 'block';
}

function closeMenu(menuContainer, overlay, body) {
    adjustMenuPosition(body, menuContainer);
    menuContainer.classList.remove('open');
    overlay.style.display = 'none';
}

function setupScrollMenu() {
    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // جلوگیری از بارگذاری پیش‌فرض لینک

            const targetId = this.getAttribute('href').substring(1); // حذف # از آدرس
            const targetElement = document.getElementById(targetId);

            // اسکرول به عنصر هدف
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
}
