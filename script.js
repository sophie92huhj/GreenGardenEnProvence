// Animation au scroll pour les sections
const sections = document.querySelectorAll("section");
const serviceItems = document.querySelectorAll(".service-item");

function checkVisible() {
  const triggerBottom = window.innerHeight * 0.85;
  
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < triggerBottom) {
      section.classList.add("visible");
    }
  });

  // Animation pour les service items
  serviceItems.forEach((item, index) => {
    const top = item.getBoundingClientRect().top;
    if (top < triggerBottom) {
      setTimeout(() => {
        item.classList.add("aos-animate");
      }, index * 100);
    }
  });
}

window.addEventListener("scroll", checkVisible);
window.addEventListener("load", checkVisible);

// Effet de parallaxe sur le header
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Gestion des tabs avec animations
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Retirer les classes active
    tabButtons.forEach(b => b.classList.remove("active"));
    tabContents.forEach(c => {
      c.classList.remove("active");
      c.style.opacity = "0";
    });

    // Ajouter la classe active au bouton cliqué
    btn.classList.add("active");
    
    // Animer l'apparition du contenu
    const target = btn.getAttribute("data-tab");
    const targetContent = document.getElementById(target);
    
    setTimeout(() => {
      targetContent.classList.add("active");
      setTimeout(() => {
        targetContent.style.opacity = "1";
      }, 50);
    }, 150);

    // Réanimer les service items
    const newServiceItems = targetContent.querySelectorAll(".service-item");
    newServiceItems.forEach((item, index) => {
      item.classList.remove("aos-animate");
      setTimeout(() => {
        item.classList.add("aos-animate");
      }, index * 100 + 200);
    });
  });
});

// Fonction pour le bouton CTA hero
function scrollToServices() {
  document.getElementById('services').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

// Navigation fluide
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    
    if (targetSection) {
      const offsetTop = targetSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Gestion du formulaire avec animations
function formEnvoye() {
  const form = document.querySelector('.contact-form');
  const confirmation = document.getElementById('confirmation');
  
  // Animation du formulaire
  form.style.transform = 'scale(0.95)';
  form.style.opacity = '0.7';
  
  setTimeout(() => {
    // Affiche le message de confirmation avec animation
    confirmation.style.display = 'block';
    confirmation.style.opacity = '0';
    confirmation.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      confirmation.style.transition = 'all 0.5s ease';
      confirmation.style.opacity = '1';
      confirmation.style.transform = 'translateY(0)';
    }, 100);

    // Réinitialise le formulaire
    form.reset();
    
    // Restaure l'apparence du formulaire
    form.style.transform = 'scale(1)';
    form.style.opacity = '1';

    // Cache le message après 5 secondes
    setTimeout(() => {
      confirmation.style.opacity = '0';
      confirmation.style.transform = 'translateY(-20px)';
      setTimeout(() => {
        confirmation.style.display = 'none';
      }, 500);
    }, 5000);
  }, 1000);
}

// Effets de particules sur le hero
function createParticles() {
  const heroSection = document.querySelector('.hero-section');
  const particleCount = 50;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = Math.random() * 4 + 1 + 'px';
    particle.style.height = particle.style.width;
    particle.style.background = 'rgba(255, 255, 255, 0.3)';
    particle.style.borderRadius = '50%';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animation = `floatParticle ${Math.random() * 10 + 10}s ease-in-out infinite`;
    particle.style.animationDelay = Math.random() * 5 + 's';
    heroSection.appendChild(particle);
  }
}

// Bouton scroll to top
function createScrollToTopButton() {
  const button = document.createElement('button');
  button.className = 'scroll-to-top';
  button.innerHTML = '<i class="fas fa-arrow-up"></i>';
  button.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  document.body.appendChild(button);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      button.classList.add('visible');
    } else {
      button.classList.remove('visible');
    }
  });
}

// Effet de typing pour le texte de présentation
function initTypingEffect() {
  const typingElement = document.querySelector('.typing-text');
  if (typingElement) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'typing 4s steps(100) 0.5s both, blink 1s infinite 4.5s';
        }
      });
    });
    observer.observe(typingElement);
  }
}

// Effet de hover sur les éléments de la galerie
function initGalleryEffects() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      // Ici vous pourriez ajouter un lightbox
      console.log('Ouverture de l\'image en grand');
    });
  });
}

// Animations des compteurs (si vous voulez ajouter des statistiques)
function animateCounters() {
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const target = parseInt(counter.dataset.target);
    const increment = target / 100;
    let current = 0;
    
    const updateCounter = () => {
      if (current < target) {
        current += increment;
        counter.textContent = Math.ceil(current);
        setTimeout(updateCounter, 20);
      } else {
        counter.textContent = target;
      }
    };
    
    updateCounter();
  });
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
  createParticles();
  createScrollToTopButton();
  initTypingEffect();
  initGalleryEffects();
  
  // Animation initiale des éléments visibles
  checkVisible();
  
  // Préchargement des images pour de meilleures performances
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    if (img.src) {
      const preloadImage = new Image();
      preloadImage.src = img.src;
    }
  });
});

// Gestion des erreurs de chargement d'images
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('error', function() {
    this.style.background = 'linear-gradient(45deg, #f0f0f0, #e0e0e0)';
    this.style.display = 'flex';
    this.style.alignItems = 'center';
    this.style.justifyContent = 'center';
    this.innerHTML = '<i class="fas fa-image" style="font-size: 3rem; color: #ccc;"></i>';
  });
});

// Animation CSS pour les particules
const style = document.createElement('style');
style.textContent = `
  @keyframes floatParticle {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
      opacity: 0.3;
    }
    50% {
      transform: translateY(-100px) rotate(180deg);
      opacity: 1;
    }
  }
`;
document.head.appendChild(style);