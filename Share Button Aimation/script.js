document.addEventListener('DOMContentLoaded', function() {
    const shareButton = document.querySelector('.share-button');
    const shareIcons = document.querySelector('.share-icons');
    const icons = document.querySelectorAll('.icon');
  
    shareButton.addEventListener('click', function() {
      shareIcons.classList.toggle('show');

    });

  
    icons.forEach(icon => {
      icon.addEventListener('mouseover', function() {
        const description = icon.getAttribute('data-description');
        const descriptionElement = icon.parentElement.querySelector('.description');
        descriptionElement.textContent = description;
        descriptionElement.style.opacity = 1;
        descriptionElement.style.transform = 'translateX(-50%) translateY(-10px)';
      });
  
      icon.addEventListener('mouseout', function() {
        const descriptionElement = icon.parentElement.querySelector('.description');
        descriptionElement.style.opacity = 0;
        descriptionElement.style.transform = 'translateX(-50%) translateY(0)';
      });
    });
  });
  