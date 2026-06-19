document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations when elements come into view
    const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.service-card, .experience-card, .skill-item').forEach(card => {
        animateOnScroll.observe(card);
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

// ======= Scroll Button =======
const scrollBtn = document.createElement('button');
scrollBtn.id = 'scrollBtn';
scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(scrollBtn);

scrollBtn.addEventListener('click', () => {
  if(window.scrollY === 0){
    window.scrollTo({top: document.body.scrollHeight, behavior:'smooth'});
  } else {
    window.scrollTo({top:0, behavior:'smooth'});
  }
});

// ===== Mobile Menu Toggle =====
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// بستن منو بعد از کلیک روی لینک
document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

// ======= Smooth Scroll Navbar =======
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});



    // Initialize all progress bars
    document.querySelectorAll('.skill-item .progress-bar').forEach(bar => {
        const value = bar.style.getPropertyValue('--value');
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = value;
        }, 100);
    });
});