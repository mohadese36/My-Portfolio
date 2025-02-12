



// // تغییر زبان

// let currentLanguage = 'en'; // زبان پیش‌فرض

// const loadLanguage = (lang) => {
//   fetch(`lang/${lang}.json`)
//     .then(response => response.json())
//     .then(data => {
//       // فقط متن‌ها را تغییر بده، بدون حذف کردن کل ساختار HTML
//       document.getElementById('name').textContent = data.header.name;
//       document.getElementById('position').textContent = data.header.position;
//       document.getElementById('description').textContent = data.header.description;

//       document.getElementById('nav-about').textContent = data.nav.about;
//       document.getElementById('nav-experience').textContent = data.nav.experience;
//       document.getElementById('nav-projects').textContent = data.nav.projects;

//       document.getElementById('social-github').href = data.social.github;
//       document.getElementById('social-linkedin').href = data.social.linkedin;
//       document.getElementById('social-instagram').href = data.social.instagram;

//       document.getElementById('about-first-paragraph').textContent = data.about.firstParagraph;
//       document.getElementById('about-second-paragraph').textContent = data.about.secondParagraph;
//       document.getElementById('about-third-paragraph').textContent = data.about.thirdParagraph;
//       document.getElementById('about-fourth-paragraph').textContent = data.about.fourthParagraph;


//       document.getElementById('experience-title').textContent = data.experience.title;

//       const experienceCards = document.querySelectorAll('.experience-card');
//       experienceCards.forEach((card, index) => {
//         if (index < data.experience.cards.length) {
//           card.querySelector('h3').textContent = data.experience.cards[index].title;
//           const subtitles = card.querySelectorAll('.experience-card-title p');
//           if (subtitles.length > 0) {
//             subtitles[0].textContent = data.experience.cards[index].subtitle1;
//           }
//           if (subtitles.length > 1) {
//             subtitles[1].textContent = data.experience.cards[index].subtitle2;
//           }
//           card.querySelector('p[id="card-description"]').textContent = data.experience.cards[index].description;
//         }
//       });
      
//       document.getElementById('resume-link').textContent = data.experience.viewResume;


//       document.getElementById('projects-title').textContent = data.projects.title;

//       const projectCards = document.querySelectorAll('.project-box');
//       projectCards.forEach((card, index) => {
//         if (index < data.projects.cards.length) {
//           card.querySelector('h3').textContent = data.projects.cards[index].title;
//           card.querySelector('p').textContent = data.projects.cards[index].description;
//           card.querySelector('.project-stats span').textContent = data.projects.cards[index].stats;
//         }
//       });

//       document.querySelector('.archive-project-container a').textContent = data.projects.moreInfo;


//       document.getElementById('footer-text').innerHTML = data.footer.text;
//       // تغییر زبان و جهت متن
//       document.body.classList.toggle('rtl', lang === 'fa');
//       document.body.classList.toggle('ltr', lang === 'en');
//     })
//     .catch(error => console.error('Error loading language:', error));
// };

// // تغییر زبان هنگام کلیک روی دکمه
// document.getElementById('change-language').addEventListener('click', () => {
//   currentLanguage = (currentLanguage === 'en') ? 'fa' : 'en';  
//   loadLanguage(currentLanguage);  
// });

// // بارگذاری زبان پیش‌فرض
// document.addEventListener('DOMContentLoaded', () => {
//   loadLanguage(currentLanguage);
// });




/////////////////////////////

// تغییر زبان



// let currentLanguage = 'en'; // زبان پیش‌فرض




// const loadLanguage = (lang) => {
//   fetch(`lang/${lang}.json`)
//     .then(response => response.json())
//     .then(data => {
//       // فقط متن‌ها را تغییر بده، بدون حذف کردن کل ساختار HTML
//       document.getElementById('name').textContent = data.sidebar.name;
//       document.getElementById('position').innerHTML = data.sidebar.position;
//       document.getElementById('description').innerHTML = data.sidebar.description;

//       // اضافه کردن <span> درون هر لینک منو برای حالت‌های مختلف زبان
//       const navLinks = ['about', 'experience', 'projects'];
//       navLinks.forEach(linkId => {
//         const navLink = document.getElementById(`nav-${linkId}`);
//         const span = navLink.querySelector('span') || document.createElement('span');
//         navLink.innerHTML = `<span></span>${data.nav[linkId]}`; // اضافه کردن <span> در داخل متن
//       });

//       document.getElementById('social-github').href = data.social.github;
//       document.getElementById('social-linkedin').href = data.social.linkedin;
//       document.getElementById('social-instagram').href = data.social.instagram;

//       document.getElementById('about-first-paragraph').textContent = data.about.firstParagraph;
//       document.getElementById('about-second-paragraph').textContent = data.about.secondParagraph;
//       document.getElementById('about-third-paragraph').textContent = data.about.thirdParagraph;
//       document.getElementById('about-fourth-paragraph').textContent = data.about.fourthParagraph;

//       document.getElementById('experience-title').textContent = data.experience.title;

//       const experienceCards = document.querySelectorAll('.experience-card');
//       experienceCards.forEach((card, index) => {
//         if (index < data.experience.cards.length) {
//           card.querySelector('h3').textContent = data.experience.cards[index].title;


//     // افزودن آیکون به h3
//     const iconSpan = document.createElement('span');
//     iconSpan.classList.add('material-symbols-outlined', 'arrow');
//     iconSpan.textContent = data.experience.cards[index].icon;
//     card.querySelector('h3').appendChild(iconSpan);


//           const subtitles = card.querySelectorAll('.experience-card-title p');
//           if (subtitles.length > 0) {
//             subtitles[0].textContent = data.experience.cards[index].subtitle1;
//           }
//           if (subtitles.length > 1) {
//             subtitles[1].textContent = data.experience.cards[index].subtitle2;
//           }
//           card.querySelector('p[id="card-description"]').textContent = data.experience.cards[index].description;
//         }
//       });

//       document.getElementById('resume-link').innerHTML = data.experience.viewResume;
//       // document.getElementById('resume-container').innerHTML = data.viewResume;



//       document.getElementById('projects-title').textContent = data.projects.title;

//       const projectCards = document.querySelectorAll('.project-box');
//       projectCards.forEach((card, index) => {
//         if (index < data.projects.cards.length) {
//           card.querySelector('h3').innerHTML = data.projects.cards[index].title;
//           card.querySelector('p').innerHTML = data.projects.cards[index].description;
//           card.querySelector('.project-stats span').innerHTML = data.projects.cards[index].stats;
//         }
//       });

//       document.querySelector('.archive-project-container a').innerHTML = data.projects.moreInfo;

//       document.getElementById('footer-text').innerHTML = data.footer.text;

//       // تغییر زبان و جهت متن
//       document.body.classList.toggle('rtl', lang === 'fa');
//       document.body.classList.toggle('ltr', lang === 'en');
//     })
//     // .catch(error => console.error('Error loading language:', error));
// };

// // تغییر زبان هنگام کلیک روی دکمه


// // تغییر زبان هنگام کلیک روی دکمه
// document.getElementById('change-language').addEventListener('click', () => {
//   currentLanguage = (currentLanguage === 'en') ? 'fa' : 'en';  
//   loadLanguage(currentLanguage);  
// });

// // بارگذاری زبان پیش‌فرض
// document.addEventListener('DOMContentLoaded', () => {
//   loadLanguage(currentLanguage);
// });




///////////////////////////
// درسته 
// let currentLanguage = localStorage.getItem('lang') || 'en'; // بارگذاری زبان از localStorage یا زبان پیش‌فرض

// const loadLanguage = (lang) => {
//   fetch(`lang/${lang}.json`)
//     .then(response => response.json())
//     .then(data => {
//       // فقط متن‌ها را تغییر بده، بدون حذف کردن کل ساختار HTML
//       document.getElementById('name').textContent = data.sidebar.name;
//       document.getElementById('position').innerHTML = data.sidebar.position;
//       document.getElementById('description').innerHTML = data.sidebar.description;

//       // اضافه کردن <span> درون هر لینک منو برای حالت‌های مختلف زبان
//       const navLinks = ['about', 'experience', 'projects'];
//       navLinks.forEach(linkId => {
//         const navLink = document.getElementById(`nav-${linkId}`);
//         const span = navLink.querySelector('span') || document.createElement('span');
//         navLink.innerHTML = `<span></span>${data.nav[linkId]}`; // اضافه کردن <span> در داخل متن
//       });

//       document.getElementById('social-github').href = data.social.github;
//       document.getElementById('social-linkedin').href = data.social.linkedin;
//       document.getElementById('social-instagram').href = data.social.instagram;

//       document.getElementById('about-first-paragraph').textContent = data.about.firstParagraph;
//       document.getElementById('about-second-paragraph').textContent = data.about.secondParagraph;
//       document.getElementById('about-third-paragraph').textContent = data.about.thirdParagraph;
//       document.getElementById('about-fourth-paragraph').textContent = data.about.fourthParagraph;

//       document.getElementById('experience-title').textContent = data.experience.title;

//       const experienceCards = document.querySelectorAll('.experience-card');
//       experienceCards.forEach((card, index) => {
//         if (index < data.experience.cards.length) {
//           card.querySelector('h3').textContent = data.experience.cards[index].title;

//           // افزودن آیکون به h3
//           const iconSpan = document.createElement('span');
//           iconSpan.classList.add('material-symbols-outlined', 'arrow');
//           iconSpan.textContent = data.experience.cards[index].icon;
//           card.querySelector('h3').appendChild(iconSpan);

//           const subtitles = card.querySelectorAll('.experience-card-title p');
//           if (subtitles.length > 0) {
//             subtitles[0].textContent = data.experience.cards[index].subtitle1;
//           }
//           if (subtitles.length > 1) {
//             subtitles[1].textContent = data.experience.cards[index].subtitle2;
//           }
//           card.querySelector('p[id="card-description"]').textContent = data.experience.cards[index].description;
//         }
//       });

//       document.getElementById('resume-link').innerHTML = data.experience.viewResume;
//       document.getElementById('projects-title').textContent = data.projects.title;

//       const projectCards = document.querySelectorAll('.project-box');
//       projectCards.forEach((card, index) => {
//         if (index < data.projects.cards.length) {
//           card.querySelector('h3').innerHTML = data.projects.cards[index].title;
//           card.querySelector('p').innerHTML = data.projects.cards[index].description;
//           card.querySelector('.project-stats span').innerHTML = data.projects.cards[index].stats;
//         }
//       });

//       document.querySelector('.archive-project-container a').innerHTML = data.projects.moreInfo;

//       document.getElementById('footer-text').innerHTML = data.footer.text;

//       // تغییر زبان و جهت متن
//       document.body.classList.toggle('rtl', lang === 'fa');
//       document.body.classList.toggle('ltr', lang === 'en');
//     })
//     // .catch(error => console.error('Error loading language:', error));
// };

// // تغییر زبان هنگام کلیک روی دکمه
// document.getElementById('change-language').addEventListener('click', () => {
//   currentLanguage = (currentLanguage === 'en') ? 'fa' : 'en';  
//   localStorage.setItem('lang', currentLanguage); // ذخیره زبان جدید در localStorage
//   loadLanguage(currentLanguage);  
// });

// // بارگذاری زبان پیش‌فرض یا زبان ذخیره‌شده در localStorage
// document.addEventListener('DOMContentLoaded', () => {
//   loadLanguage(currentLanguage);
// });

///////////////////////////
// let currentLanguage = localStorage.getItem('lang') || 'en'; // بارگذاری زبان از localStorage یا زبان پیش‌فرض


// function defineLanguageAttributes(lang) {
//   document.documentElement.setAttribute('lang', lang);
//   document.body.classList.toggle('rtl', lang === 'fa');
//   document.body.classList.toggle('ltr', lang === 'en');
//   changeLanguageButton.innerHTML = `<img src="images/lang-btn.png" alt="lang-btn"><span>${lang === 'fa' ? 'English' : 'Persian'}</span>`;
// }



// // یک تابع برای بارگذاری محتوای زبان از فایل JSON
// const loadLanguage = (lang) => {
//   fetch(`lang/${lang}.json`)
//     .then(response => response.json())
//     .then(data => {
//       // تغییر محتوای متن‌ها
//       document.getElementById('name').textContent = data.sidebar.name;
//       document.getElementById('position').innerHTML = data.sidebar.position;
//       document.getElementById('description').innerHTML = data.sidebar.description;

//       // تغییر لینک‌های منو با استفاده از داده‌های فایل JSON
//       const navLinks = ['about', 'experience', 'projects'];
//       navLinks.forEach(linkId => {
//         const navLink = document.getElementById(`nav-${linkId}`);
//         navLink.innerHTML = `<span></span>${data.nav[linkId]}`; // اضافه کردن <span> در داخل متن
//       });

//       // تغییر لینک‌های شبکه‌های اجتماعی
//       document.getElementById('social-github').href = data.social.github;
//       document.getElementById('social-linkedin').href = data.social.linkedin;
//       document.getElementById('social-instagram').href = data.social.instagram;

//       // تغییر متون بخش "درباره"
//       document.getElementById('about-first-paragraph').textContent = data.about.firstParagraph;
//       document.getElementById('about-second-paragraph').textContent = data.about.secondParagraph;
//       document.getElementById('about-third-paragraph').textContent = data.about.thirdParagraph;
//       document.getElementById('about-fourth-paragraph').textContent = data.about.fourthParagraph;

//       // تغییر عنوان بخش "تجربه"
//       document.getElementById('experience-title').textContent = data.experience.title;

//       // تغییر محتوای کارت‌های تجربه
//       const experienceCards = document.querySelectorAll('.experience-card');
//       experienceCards.forEach((card, index) => {
//         if (index < data.experience.cards.length) {
//           card.querySelector('h3').textContent = data.experience.cards[index].title;

//           // افزودن آیکون به h3
//           const iconSpan = document.createElement('span');
//           iconSpan.classList.add('material-symbols-outlined', 'arrow');
//           iconSpan.textContent = data.experience.cards[index].icon;
//           card.querySelector('h3').appendChild(iconSpan);

//           const subtitles = card.querySelectorAll('.experience-card-title p');
//           if (subtitles.length > 0) {
//             subtitles[0].textContent = data.experience.cards[index].subtitle1;
//           }
//           if (subtitles.length > 1) {
//             subtitles[1].textContent = data.experience.cards[index].subtitle2;
//           }
//           card.querySelector('p[id="card-description"]').textContent = data.experience.cards[index].description;
//         }
//       });

//       document.getElementById('resume-link').innerHTML = data.experience.viewResume;

//       // تغییر عنوان بخش "پروژه‌ها"
//       document.getElementById('projects-title').textContent = data.projects.title;

//       // تغییر محتوای کارت‌های پروژه‌ها
//       const projectCards = document.querySelectorAll('.project-box');
//       projectCards.forEach((card, index) => {
//         if (index < data.projects.cards.length) {
//           card.querySelector('h3').innerHTML = data.projects.cards[index].title;
//           card.querySelector('p').innerHTML = data.projects.cards[index].description;
//           card.querySelector('.project-stats span').innerHTML = data.projects.cards[index].stats;
//         }
//       });

//       document.querySelector('.archive-project-container a').innerHTML = data.projects.moreInfo;

//       // تغییر متن فوتر
//       document.getElementById('footer-text').innerHTML = data.footer.text;

//       // تغییر زبان و جهت متن
//       document.body.classList.toggle('rtl', lang === 'fa');
//       document.body.classList.toggle('ltr', lang === 'en');
//     })
//     .catch(error => console.error('Error loading language:', error));
// };

// // تغییر زبان هنگام کلیک روی دکمه
// document.getElementById('change-language').addEventListener('click', () => {
//   currentLanguage = (currentLanguage === 'en') ? 'fa' : 'en';  
//   localStorage.setItem('lang', currentLanguage); // ذخیره زبان جدید در localStorage
//   loadLanguage(currentLanguage);  
// });

// // بارگذاری زبان پیش‌فرض یا زبان ذخیره‌شده در localStorage
// document.addEventListener('DOMContentLoaded', () => {
//   loadLanguage(currentLanguage);
// });

/////////////////////





let currentLanguage = localStorage.getItem('lang') || 'en'; // بارگذاری زبان از localStorage یا زبان پیش‌فرض

// دسترسی به دکمه تغییر زبان
const changeLanguageButton = document.getElementById('change-language');

function defineLanguageAttributes(lang) {
  // تغییر ویژگی‌های زبان
  document.documentElement.setAttribute('lang', lang);
  document.body.classList.toggle('rtl', lang === 'fa');
  document.body.classList.toggle('ltr', lang === 'en');
  
  // تغییر متن داخل دکمه با توجه به زبان انتخابی
  if (changeLanguageButton) {
    changeLanguageButton.innerHTML = `<img src="images/lang-btn.png" alt="lang-btn"><span>${lang === 'fa' ? 'English' : 'Persian'}</span>`;
  } else {
    console.warn("دکمه تغییر زبان پیدا نشد!");
  }
}


// تابع برای تغییر زبان و ویژگی‌های آن
// function defineLanguageAttributes(lang) {
//   document.documentElement.setAttribute('lang', lang);
//   document.body.classList.toggle('rtl', lang === 'fa');
//   document.body.classList.toggle('ltr', lang === 'en');
//   changeLanguageButton.innerHTML = `<img src="images/lang-btn.png" alt="lang-btn"><span>${lang === 'fa' ? 'English' : 'Persian'}</span>`;
// }

// تابع برای بارگذاری محتوای زبان از فایل JSON
const loadLanguage = (lang) => {
  fetch(`lang/${lang}.json`)
    .then(response => response.json())
    .then(data => {
      // بروزرسانی محتوا
      document.getElementById('name').textContent = data.sidebar.name;
      document.getElementById('position').textContent = data.sidebar.position;
      document.getElementById('description').innerHTML = data.sidebar.description;

      // // تغییر لینک‌های منو
      ['about', 'experience', 'projects'].forEach(linkID => {
        const navLink = document.getElementById(`navbar-${linkID}`);
        if (navLink) navLink.innerHTML = `${data.headerNav[linkID]}`;
      });
      // /       // تغییر لینک‌های منو با استفاده از داده‌های فایل JSON
            const navLinks = ['about', 'experience', 'projects'];
            navLinks.forEach(linkId => {
              const navLink = document.getElementById(`nav-${linkId}`);
              navLink.innerHTML = `<span></span>${data.nav[linkId]}`; // اضافه کردن <span> در داخل متن
            });
      
      // تغییر لینک‌های شبکه‌های اجتماعی
      document.getElementById('social-github').href = data.social.github;
      document.getElementById('social-linkedin').href = data.social.linkedin;
      document.getElementById('social-instagram').href = data.social.instagram;

      // تغییر متون بخش "درباره"
      document.getElementById('about-heading').textContent = data.about.title;
      document.getElementById('about-first-paragraph').textContent = data.about.firstParagraph;
      document.getElementById('about-second-paragraph').textContent = data.about.secondParagraph;
      document.getElementById('about-third-paragraph').textContent = data.about.thirdParagraph;
      document.getElementById('about-fourth-paragraph').textContent = data.about.fourthParagraph;

      // تغییر عنوان بخش "تجربه"
      document.getElementById('experience-title').textContent = data.experience.title;

      // تغییر محتوای کارت‌های تجربه
      const experienceCards = document.querySelectorAll('.experience-card');
      experienceCards.forEach((card, index) => {
        if (index < data.experience.cards.length) {
          card.querySelector('h3').textContent = data.experience.cards[index].title;

          const iconSpan = document.createElement('span');
          iconSpan.classList.add('material-symbols-outlined', 'arrow');
          iconSpan.textContent = data.experience.cards[index].icon;
          card.querySelector('h3').appendChild(iconSpan);

          const subtitles = card.querySelectorAll('.experience-card-title p');
          if (subtitles.length > 0) subtitles[0].textContent = data.experience.cards[index].subtitle1;
          if (subtitles.length > 1) subtitles[1].textContent = data.experience.cards[index].subtitle2;
          card.querySelector('p[id="card-description"]').textContent = data.experience.cards[index].description;
        }
      });

      document.getElementById('resume-link').innerHTML = data.experience.viewResume;

      // تغییر عنوان بخش "پروژه‌ها"
      document.getElementById('projects-title').textContent = data.projects.title;

      // تغییر محتوای کارت‌های پروژه‌ها
      const projectCards = document.querySelectorAll('.project-box');
      projectCards.forEach((card, index) => {
        if (index < data.projects.cards.length) {
          card.querySelector('h3').innerHTML = data.projects.cards[index].title;
          card.querySelector('p').innerHTML = data.projects.cards[index].description;
          card.querySelector('.project-stats span').innerHTML = data.projects.cards[index].stats;
        }
      });

      document.querySelector('.archive-project-container a').innerHTML = data.projects.moreInfo;

      // تغییر متن فوتر
      document.getElementById('footer-text').innerHTML = data.footer.text;

      // تغییر زبان و جهت متن
      defineLanguageAttributes(lang);
    })
    .catch(error => console.error('Error loading language:', error));
};

// تغییر زبان هنگام کلیک روی دکمه
document.getElementById('change-language').addEventListener('click', () => {
  currentLanguage = (currentLanguage === 'en') ? 'fa' : 'en';
  localStorage.setItem('lang', currentLanguage); // ذخیره زبان جدید در localStorage
  loadLanguage(currentLanguage);
});

// بارگذاری زبان پیش‌فرض یا زبان ذخیره‌شده در localStorage
document.addEventListener('DOMContentLoaded', () => {
  loadLanguage(currentLanguage);
});

