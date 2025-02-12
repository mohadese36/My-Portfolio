    // // افزودن افکت فعال شدن لینک منو هنگام اسکرول
    // const sections = document.querySelectorAll("section");
    // const navLinks = document.querySelectorAll(".nav-link");

    // window.addEventListener("scroll", () => {
    //   let current = "";

    //   sections.forEach((section) => {
    //     const sectionTop = section.offsetTop - 50;
    //     if (window.scrollY >= sectionTop) {
    //       current = section.getAttribute("id");
    //     }
    //   });

    //   navLinks.forEach((link) => {
    //     link.classList.remove("active");
    //     if (link.getAttribute("href") === `#${current}`) {
    //       link.classList.add("active");
    //     }
    //   });
    // });
    document.addEventListener("DOMContentLoaded", function () {
      const sections = document.querySelectorAll("section"); // گرفتن تمام سکشن‌ها
      const navLinks = document.querySelectorAll(".nav-link"); // لینک‌های منو
    
      function updateActiveLink() {
        let index = sections.length;
    
        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
    
        navLinks.forEach((link) => link.classList.remove("active")); // حذف کلاس از همه لینک‌ها
        navLinks[index]?.classList.add("active"); // افزودن کلاس به لینک مرتبط
      }
    
      updateActiveLink();
      window.addEventListener("scroll", updateActiveLink);
    });
    
    



    // رویداد هاور برای تاچ ها

    const experienceCard = document.querySelectorAll('.experience-card');
    const projectBox = document.querySelectorAll('.project-box');
    
    // اضافه کردن کلاس touch-hover هنگام لمس
    const addTouchHover = (element) => {
      element.classList.add('touch-hover');
    };
    
    // حذف کلاس touch-hover هنگام برداشتن انگشت
    const removeTouchHover = (element) => {
      element.classList.remove('touch-hover');
    };
    
    // برای شبیه‌سازی حالت hover در دستگاه‌های لمسی
    experienceCard.forEach(card => {
      card.addEventListener('touchstart', () => addTouchHover(card)); // لمس برای شروع
      card.addEventListener('touchend', () => removeTouchHover(card)); // لمس برای پایان
    });
    
    projectBox.forEach(box => {
      box.addEventListener('touchstart', () => addTouchHover(box)); // لمس برای شروع
      box.addEventListener('touchend', () => removeTouchHover(box)); // لمس برای پایان
    });
    

    


    //افکت موس

    const colors = [
      "rgba(0, 255, 255, 0.3)",   // آبی نئونی
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
