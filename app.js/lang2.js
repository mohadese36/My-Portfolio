
// let currentLanguage = 'en'; // زبان پیش‌فرض فارسی





// const loadLanguage = (lang) => {
//   fetch(`lang/${lang}.json`)
//     .then(response => response.json())
//     .then(data => {
//       // بارگذاری متن‌ها برای زبان جدید
//       document.querySelector("#nav-about").innerHTML = data.header.menuContainer.menuLinks.about;
//       document.querySelector("#nav-work").innerHTML = data.header.menuContainer.menuLinks.work;
//       document.querySelector("#nav-services").innerHTML = data.header.menuContainer.menuLinks.services;
//       document.querySelector("#nav-contact").innerHTML = data.header.menuContainer.menuLinks.contact;

//       // به روز رسانی لینک رزومه
//       document.querySelector(".resume-link").textContent = data.header.menuContainer.resume;

//          // بارگذاری متن‌ها برای بخش info
//          document.querySelector("#intro-text").innerHTML = data.infoSection.introText;
//          document.querySelector("#name").innerHTML = data.infoSection.name;
//          document.querySelector("#job-title").innerHTML = data.infoSection.jobTitle;
//          document.querySelector("#description").innerHTML = data.infoSection.description;
//          document.querySelector("#projects-btn").innerHTML = data.infoSection.projectsButton;
   
//          // به روز رسانی لینک Next.js
//          document.querySelector("#nextjs-link").textContent = 'Next.js'; // برای حفظ لینک 


//         // بارگذاری عنوان About
//         // document.querySelector("#about-title").innerHTML = `<span>◆</span> ${data.workSection.titleSymbol} <span class="line"></span>`;
//         document.querySelector("#about-title").innerHTML = ` <span>◆</span> ${data.aboutSection.title} <span class="line"></span>`;
//         document.querySelector("#about-text-1").innerHTML = data.aboutSection.text1;
//         document.querySelector("#about-text-2").innerHTML = data.aboutSection.text2;
//         document.querySelector("#about-text-3").innerHTML = data.aboutSection.text3;
//         document.querySelector("#about-text-4").innerHTML = data.aboutSection.text4;
        
//         const techList = document.querySelector("#tech-list");
//         techList.innerHTML = '';
//         data.aboutSection.techList.forEach(tech => {
//           const li = document.createElement('li');
//           li.textContent = tech;
//           techList.appendChild(li);
//         });


// // ///////////////////
// document.getElementById('work-title').innerHTML = `<span>◆</span> ${data.work.title} <span class="line"></span>`;

// document.getElementById('btn-web-development').textContent = data.work.buttons.webDevelopment;
// document.getElementById('btn-freelance-work').textContent = data.work.buttons.freelanceWork;
// document.getElementById('btn-design-editing').textContent = data.work.buttons.designEditing;
// document.getElementById('btn-wordpress').textContent = data.work.buttons.wordpress;
// document.getElementById('btn-seo').textContent = data.work.buttons.seo;
// document.getElementById('btn-tools-technologies').textContent = data.work.buttons.toolsTechnologies;

// const jobs = data.work.jobs;
// jobs.forEach((job, index) => {
//   document.getElementById(`${job.id}-title`).textContent = job.title;
//   document.getElementById(`${job.id}-date`).textContent = job.date;
//   const tasksList = document.getElementById(`${job.id}-tasks`);
//   tasksList.innerHTML = '';
//   job.tasks.forEach(task => {
//     const li = document.createElement('li');
//     li.textContent = task;
//     tasksList.appendChild(li);
//   });
// });

// // services
// document.getElementById('services-title').textContent = data.services.title;

// data.services.items.forEach(item => {
//   document.getElementById(`${item.id}-title`).textContent = item.title;
//   document.getElementById(`${item.id}-description`).textContent = item.description;
// });

// // contact
// document.getElementById('contact-title').textContent = data.contact.title;
// document.getElementById('contact-description-1').textContent = data.contact.description1;
// document.getElementById('contact-description-2').textContent = data.contact.description2;
// document.getElementById('contact-link').textContent = data.contact.link;      

//       // به روز رسانی دکمه بستن منو
//       document.querySelector("#closeButton").textContent = data.header.menuContainer.closeButton;
      
//       // تغییر جهت متن
//       document.body.classList.toggle('rtl', lang === 'fa');
//       document.body.classList.toggle('ltr', lang === 'en');
//     })
//     .catch(error => console.error('Error loading language:', error));
// };

// // تغییر زبان هنگام کلیک روی دکمه
// document.getElementById('change-language').addEventListener('click', () => {
//   currentLanguage = (currentLanguage === 'en') ? 'fa' : 'en';  // تغییر زبان بین انگلیسی و فارسی
//   loadLanguage(currentLanguage);  // بارگذاری زبان جدید
// });

// // بارگذاری زبان پیش‌فرض
// document.addEventListener('DOMContentLoaded', () => {
//   loadLanguage(currentLanguage);
// });

//////////////////

// درسنه
// let currentLanguage = localStorage.getItem('lang') || 'en'; // بارگذاری زبان از localStorage یا زبان پیش‌فرض (انگلیسی)

// // تابع بارگذاری زبان
// const loadLanguage = (lang) => {
//   fetch(`lang/${lang}.json`)
//     .then(response => response.json())
//     .then(data => {
//       // بارگذاری متن‌ها برای زبان جدید
//       document.querySelector("#nav-about").innerHTML = data.header.menuContainer.menuLinks.about;
//       document.querySelector("#nav-work").innerHTML = data.header.menuContainer.menuLinks.work;
//       document.querySelector("#nav-services").innerHTML = data.header.menuContainer.menuLinks.services;
//       document.querySelector("#nav-contact").innerHTML = data.header.menuContainer.menuLinks.contact;

//       // به روز رسانی لینک رزومه
//       document.querySelector(".resume-link").textContent = data.header.menuContainer.resume;

//       // بارگذاری متن‌ها برای بخش info
//       document.querySelector("#intro-text").innerHTML = data.infoSection.introText;
//       document.querySelector("#name").innerHTML = data.infoSection.name;
//       document.querySelector("#job-title").innerHTML = data.infoSection.jobTitle;
//       document.querySelector("#description").innerHTML = data.infoSection.description;
//       document.querySelector("#projects-btn").innerHTML = data.infoSection.projectsButton;

//       // به روز رسانی لینک Next.js
//       document.querySelector("#nextjs-link").textContent = 'Next.js'; // برای حفظ لینک

//       // بارگذاری عنوان About
//       document.querySelector("#about-title").innerHTML = ` <span>◆</span> ${data.aboutSection.title} <span class="line"></span>`;
//       document.querySelector("#about-text-1").innerHTML = data.aboutSection.text1;
//       document.querySelector("#about-text-2").innerHTML = data.aboutSection.text2;
//       document.querySelector("#about-text-3").innerHTML = data.aboutSection.text3;
//       document.querySelector("#about-text-4").innerHTML = data.aboutSection.text4;
      
//       const techList = document.querySelector("#tech-list");
//       techList.innerHTML = '';
//       data.aboutSection.techList.forEach(tech => {
//         const li = document.createElement('li');
//         li.textContent = tech;
//         techList.appendChild(li);
//       });

//       // بارگذاری بخش‌های کار
//       document.getElementById('work-title').innerHTML = `<span>◆</span> ${data.work.title} <span class="line"></span>`;
//       document.getElementById('btn-web-development').textContent = data.work.buttons.webDevelopment;
//       document.getElementById('btn-freelance-work').textContent = data.work.buttons.freelanceWork;
//       document.getElementById('btn-design-editing').textContent = data.work.buttons.designEditing;
//       document.getElementById('btn-wordpress').textContent = data.work.buttons.wordpress;
//       document.getElementById('btn-seo').textContent = data.work.buttons.seo;
//       document.getElementById('btn-tools-technologies').textContent = data.work.buttons.toolsTechnologies;

//       const jobs = data.work.jobs;
//       jobs.forEach((job, index) => {
//         document.getElementById(`${job.id}-title`).textContent = job.title;
//         document.getElementById(`${job.id}-date`).textContent = job.date;
//         const tasksList = document.getElementById(`${job.id}-tasks`);
//         tasksList.innerHTML = '';
//         job.tasks.forEach(task => {
//           const li = document.createElement('li');
//           li.textContent = task;
//           tasksList.appendChild(li);
//         });
//       });

//       // خدمات
//       document.getElementById('services-title').textContent = data.services.title;
//       data.services.items.forEach(item => {
//         document.getElementById(`${item.id}-title`).textContent = item.title;
//         document.getElementById(`${item.id}-description`).textContent = item.description;
//       });

//       // تماس
//       document.getElementById('contact-title').textContent = data.contact.title;
//       document.getElementById('contact-description-1').textContent = data.contact.description1;
//       document.getElementById('contact-description-2').textContent = data.contact.description2;
//       document.getElementById('contact-link').textContent = data.contact.link;      

//       // به روز رسانی دکمه بستن منو
//       document.querySelector("#closeButton").textContent = data.header.menuContainer.closeButton;

//       // تغییر جهت متن
//       document.body.classList.toggle('rtl', lang === 'fa');
//       document.body.classList.toggle('ltr', lang === 'en');
//     })
//     .catch(error => console.error('Error loading language:', error));
// };

// // تغییر زبان هنگام کلیک روی دکمه
// document.getElementById('change-language').addEventListener('click', () => {
//   currentLanguage = (currentLanguage === 'en') ? 'fa' : 'en';  // تغییر زبان بین انگلیسی و فارسی
//   localStorage.setItem('lang', currentLanguage); // ذخیره زبان جدید در localStorage
//   loadLanguage(currentLanguage);  // بارگذاری زبان جدید
// });

// // بارگذاری زبان پیش‌فرض یا زبان ذخیره‌شده در localStorage
// document.addEventListener('DOMContentLoaded', () => {
//   loadLanguage(currentLanguage);
// });

////////////////






//////////////

console.log("p");


let currentLanguage = localStorage.getItem('lang') || 'en';
const changeLanguageButton = document.getElementById('change-language');

defineLanguageAttributes(currentLanguage);

document.addEventListener('DOMContentLoaded', () => loadLanguage(currentLanguage));
changeLanguageButton.addEventListener('click', toggleLanguage);

function defineLanguageAttributes(lang) {
    document.documentElement.setAttribute('lang', lang);
    document.body.classList.toggle('rtl', lang === 'fa');
    document.body.classList.toggle('ltr', lang === 'en');
    changeLanguageButton.innerHTML = `<img src="images/lang-btn.png" alt="lang-btn"><span>${lang === 'fa' ? 'English' : 'Persian'}</span>`;
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'fa' ? 'en' : 'fa';
    localStorage.setItem('lang', currentLanguage);
    defineLanguageAttributes(currentLanguage);
    loadLanguage(currentLanguage);
}

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
//                 "#closeButton": data.header.menuContainer.closeButton

//             });
            
//             updateListContent("#tech-list", data.aboutSection.techList);
//             updateWorkSections(data.work.jobs);
//             updateServiceSections(data.services.items);
//         })
//         .catch(error => console.error('Error loading language:', error));
// }
function loadLanguage(lang) {
    fetch(`lang/${lang}.json`)
        .then(response => response.json())
        .then(data => {
            updateTextContent({
                "#nav-about a": data.header.menuContainer.menuLinks.about,
                "#nav-work a": data.header.menuContainer.menuLinks.work,
                "#nav-services a": data.header.menuContainer.menuLinks.services,
                "#nav-contact a": data.header.menuContainer.menuLinks.contact,
                ".resume-link": data.header.menuContainer.resume,
                "#intro-text": data.infoSection.introText,
                "#name": data.infoSection.name,
                "#job-title": data.infoSection.jobTitle,
                "#description": data.infoSection.description,
                "#projects-btn": data.infoSection.projectsButton,
                "#nextjs-link": 'Next.js',
                "#about-title": `<span>◆</span> ${data.aboutSection.title} <span class="line"></span>`,
                "#about-text-1": data.aboutSection.text1,
                "#about-text-2": data.aboutSection.text2,
                "#about-text-3": data.aboutSection.text3,
                "#about-text-4": data.aboutSection.text4,
                "#work-title": `<span>◆</span> ${data.work.title} <span class="line"></span>`,
                "#services-title": data.services.title,
                "#contact-title": data.contact.title,
                "#contact-description-1": data.contact.description1,
                "#contact-description-2": data.contact.description2,
                "#contact-link": data.contact.link,
                "#closeButton": data.header.menuContainer.closeButton,

                // اضافه کردن دکمه‌ها
                "#btn-web-development": data.work.buttons.webDevelopment,
                "#btn-freelance-work": data.work.buttons.freelanceWork,
                "#btn-design-editing": data.work.buttons.designEditing,
                "#btn-wordpress": data.work.buttons.wordpress,
                "#btn-seo": data.work.buttons.seo,
                "#btn-tools-technologies": data.work.buttons.toolsTechnologies
            });
            
            updateListContent("#tech-list", data.aboutSection.techList);
            updateWorkSections(data.work.jobs);
            updateServiceSections(data.services.items);
        })
        .catch(error => console.error('Error loading language:', error));
}


function updateTextContent(elements) {
    for (const [selector, text] of Object.entries(elements)) {
        const element = document.querySelector(selector);
        if (element) element.innerHTML = text;
    }
}

function updateListContent(selector, items) {
    const list = document.querySelector(selector);
    if (list) {
        list.innerHTML = '';
        items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            list.appendChild(li);
        });
    }
}

function updateWorkSections(jobs) {
    jobs.forEach(job => {
        updateTextContent({
            [`#${job.id}-title`]: job.title,
            [`#${job.id}-date`]: job.date
        });
        updateListContent(`#${job.id}-tasks`, job.tasks);
    });
}

function updateServiceSections(services) {
    services.forEach(service => {
        updateTextContent({
            [`#${service.id}-title`]: service.title,
            [`#${service.id}-description`]: service.description
        });
    });
}







// اسکرول به بخش مورد نظر بر اساس URL








///////////////////////////















// const scrollToSection = () => {
//   const targetSection = document.querySelector(window.location.hash);
//   if (targetSection) {
//     targetSection.scrollIntoView({
//       behavior: 'smooth',
//       block: 'start',
//     });
//   }
// };




// let currentLanguage = localStorage.getItem('lang') || 'en'; // بارگذاری زبان از localStorage یا زبان پیش‌فرض (انگلیسی)



// // انتخاب دکمه تغییر زبان
// const changeLanguageButton = document.getElementById('change-language');

// // تغییر زبان صفحه به فارسی
// function changeToFarsi() {
//     document.documentElement.setAttribute('lang', 'fa');
//     changeLanguageButton.innerHTML =  `<img src="images/lang-btn.png" alt="lang-btn"><span>English</span>`;  
//     // changeLanguageButton.innerHTML = "English";  // تغییر محتوای دکمه به انگلیسی
// }

// // تغییر زبان صفحه به انگلیسی
// function changeToEnglish() {
//     document.documentElement.setAttribute('lang', 'en');
//     changeLanguageButton.innerHTML =  `<img src="images/lang-btn.png" alt="lang-btn"><span>Persian</span>`;
//     // changeLanguageButton.innerHTML = "Persian";  // تغییر محتوای دکمه به فارسی
// }

// // تغییر زبان صفحه و ذخیره در localStorage
// const loadLanguage = (lang) => {
//   fetch(`lang/${lang}.json`)
//     .then(response => response.json())
//     .then(data => {
//       // بارگذاری متن‌ها برای زبان جدید
//       document.querySelector("#nav-about").innerHTML = data.header.menuContainer.menuLinks.about;
//       document.querySelector("#nav-work").innerHTML = data.header.menuContainer.menuLinks.work;
//       document.querySelector("#nav-services").innerHTML = data.header.menuContainer.menuLinks.services;
//       document.querySelector("#nav-contact").innerHTML = data.header.menuContainer.menuLinks.contact;

//       // به روز رسانی لینک رزومه
//       document.querySelector(".resume-link").textContent = data.header.menuContainer.resume;

//       // بارگذاری متن‌ها برای بخش info
//       document.querySelector("#intro-text").innerHTML = data.infoSection.introText;
//       document.querySelector("#name").innerHTML = data.infoSection.name;
//       document.querySelector("#job-title").innerHTML = data.infoSection.jobTitle;
//       document.querySelector("#description").innerHTML = data.infoSection.description;
//       document.querySelector("#projects-btn").innerHTML = data.infoSection.projectsButton;

//       // به روز رسانی لینک Next.js
//       document.querySelector("#nextjs-link").textContent = 'Next.js'; // برای حفظ لینک

//       // بارگذاری عنوان About
//       document.querySelector("#about-title").innerHTML = ` <span>◆</span> ${data.aboutSection.title} <span class="line"></span>`;
//       document.querySelector("#about-text-1").innerHTML = data.aboutSection.text1;
//       document.querySelector("#about-text-2").innerHTML = data.aboutSection.text2;
//       document.querySelector("#about-text-3").innerHTML = data.aboutSection.text3;
//       document.querySelector("#about-text-4").innerHTML = data.aboutSection.text4;
      
//       const techList = document.querySelector("#tech-list");
//       techList.innerHTML = '';
//       data.aboutSection.techList.forEach(tech => {
//         const li = document.createElement('li');
//         li.textContent = tech;
//         techList.appendChild(li);
//       });

//       // بارگذاری بخش‌های کار
//       document.getElementById('work-title').innerHTML = `<span>◆</span> ${data.work.title} <span class="line"></span>`;
//       document.getElementById('btn-web-development').textContent = data.work.buttons.webDevelopment;
//       document.getElementById('btn-freelance-work').textContent = data.work.buttons.freelanceWork;
//       document.getElementById('btn-design-editing').textContent = data.work.buttons.designEditing;
//       document.getElementById('btn-wordpress').textContent = data.work.buttons.wordpress;
//       document.getElementById('btn-seo').textContent = data.work.buttons.seo;
//       document.getElementById('btn-tools-technologies').textContent = data.work.buttons.toolsTechnologies;

//       const jobs = data.work.jobs;
//       jobs.forEach((job, index) => {
//         document.getElementById(`${job.id}-title`).textContent = job.title;
//         document.getElementById(`${job.id}-date`).textContent = job.date;
//         const tasksList = document.getElementById(`${job.id}-tasks`);
//         tasksList.innerHTML = '';
//         job.tasks.forEach(task => {
//           const li = document.createElement('li');
//           li.textContent = task;
//           tasksList.appendChild(li);
//         });
//       });

//       // خدمات
//       document.getElementById('services-title').textContent = data.services.title;
//       data.services.items.forEach(item => {
//         document.getElementById(`${item.id}-title`).textContent = item.title;
//         document.getElementById(`${item.id}-description`).textContent = item.description;
//       });

//       // تماس
//       document.getElementById('contact-title').textContent = data.contact.title;
//       document.getElementById('contact-description-1').textContent = data.contact.description1;
//       document.getElementById('contact-description-2').textContent = data.contact.description2;
//       document.getElementById('contact-link').textContent = data.contact.link;      

//       // به روز رسانی دکمه بستن منو
//       document.querySelector("#closeButton").textContent = data.header.menuContainer.closeButton;

//       // تغییر جهت متن
//       document.body.classList.toggle('rtl', lang === 'fa');
//       document.body.classList.toggle('ltr', lang === 'en');
//       scrollToSection();

//     })

    
//     // .catch(error => console.error('Error loading language:', error));
// };



// // تغییر زبان هنگام کلیک بر روی دکمه تغییر زبان
// changeLanguageButton.addEventListener('click', function() {
//   const currentLang = document.documentElement.getAttribute('lang');
//   if (currentLang === 'fa') {
//     changeToEnglish();
//     localStorage.setItem('lang', 'en');
//     loadLanguage('en');
//   } else {
//     changeToFarsi();
//     localStorage.setItem('lang', 'fa');
//     loadLanguage('fa');
//   }
// });

// // بارگذاری زبان پیش‌فرض یا ذخیره‌شده در localStorage هنگام بارگذاری صفحه
// document.addEventListener('DOMContentLoaded', () => {
//   loadLanguage(currentLanguage);
  
//   // پس از بارگذاری زبان، اسکرول به بخش مورد نظر
//   if (window.location.hash) {
//     // اگر URL دارای hash است، اسکرول به بخش مورد نظر انجام بشه
//     setTimeout(scrollToSection, 100); // تأخیر برای اطمینان از بارگذاری کامل
//   }
// });









// const menuItems = document.querySelectorAll('.menu a');
// menuItems.forEach(item => {
//   item.addEventListener('click', function(event) {
//     event.preventDefault(); // جلوگیری از اسکرول پیش‌فرض مرورگر
//     const targetId = this.getAttribute('href').substring(1); // گرفتن آی‌دی بخش هدف
//     const targetElement = document.getElementById(targetId);

//     if (targetElement) {
//       targetElement.scrollIntoView({ behavior: 'smooth' });
//     }
//   });
// });
