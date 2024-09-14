function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function setTypingHeader(text) {
    const typingHeader = document.getElementById("typing-header");
    typingHeader.textContent = text;
  }

  function animateTyping() {
    const text = "Hey, I'm Laila";
    let index = 0;

    function type() {
      if (index < text.length) {
        const currentText = text.slice(0, ++index);
        setTypingHeader(currentText);
        setTimeout(type, 100);
      }
    }

    type();
  }

  animateTyping();

  document.querySelectorAll('#sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });


  // JavaScript

// Function to open pop-up window with additional details
function togglePopup(popupId) {
  var popup = document.getElementById(popupId);
  var sectionContainer = document.getElementById('sectionContainer');

  if (popup.style.display === 'block') {
    popup.style.display = 'none';
    sectionContainer.classList.remove('popup-open');
  } else {
    // Close other popups before opening a new one
    var popups = document.querySelectorAll('.popup');
    popups.forEach(function (element) {
      element.style.display = 'none';
    });

    // Open the targeted popup
    popup.style.display = 'block';
    sectionContainer.classList.add('popup-open');
  }
}

var popupContainers = document.querySelectorAll('.details-container');

// Add event listeners to all project containers
popupContainers.forEach(function(container) {
  container.addEventListener('click', function(event) {
    var popup = container.querySelector('.popup');
    var openPopup = document.querySelector('.popup.open');

    if (openPopup && openPopup !== popup) {
      openPopup.style.display = 'none';
    }

    togglePopup(popup.id); // Call togglePopup function to handle display
  });

  container.addEventListener('mouseenter', function(event) {
    var popup = container.querySelector('.popup');
    var openPopup = document.querySelector('.popup.open');

    if (openPopup && openPopup !== popup) {
      openPopup.style.display = 'none';
    }

    popup.style.display = 'block';
  });

  container.addEventListener('mouseleave', function(event) {
    var popup = container.querySelector('.popup');
    var openPopup = document.querySelector('.popup.open');

    if (openPopup && openPopup !== popup) {
      openPopup.style.display = 'block';
    }

    popup.style.display = 'none';
  });
});




window.addEventListener('scroll', function() {
    const secondaryNav = document.getElementById('secondary-nav');
    const firstSection = document.querySelector('section');
    const firstSectionHeight = firstSection ? firstSection.offsetHeight : 0;
  
    if (window.scrollY > firstSectionHeight) {
      secondaryNav.classList.remove('hidden');
    } else {
      secondaryNav.classList.add('hidden');
    }
  });
  