const buttons = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.content-block');
    const mainImage = document.getElementById('main-image');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active class from all buttons
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const targetId = btn.getAttribute('data-target');
        const newImage = btn.getAttribute('data-img');

        // Hide/show correct content
        contents.forEach(c => c.classList.remove('active'));
        document.getElementById(targetId).classList.add('active');

        // Update image
        mainImage.src = newImage;
      });
    });

   

  // for div7 second conatiner fulid start from here 

      const sections = document.querySelectorAll('.text > div');
  const imageBoxes = document.querySelectorAll('.image-box');

  // Show first image and highlight first block by default
  imageBoxes[0].classList.add('active');
  sections[0].classList.add('highlighted');

  sections.forEach(section => {
    section.addEventListener('mouseenter', () => {
      const index = section.getAttribute('data-index');

      // Remove active class from all images
      imageBoxes.forEach(box => box.classList.remove('active'));
      imageBoxes[index].classList.add('active');

      // Remove 'highlighted' from all text blocks
      sections.forEach(sec => sec.classList.remove('highlighted'));
      section.classList.add('highlighted');
    });
  });

  // for div7 second conatiner fulid start from here 

// for div8 start from here

   let currentIndex = 0;

    function moveSlide(direction) {
      const slider = document.getElementById('slider');
      const card = slider.querySelector('.card');
      const cardStyle = getComputedStyle(card);
      const cardWidth = card.offsetWidth + parseInt(cardStyle.marginRight);

      const totalCards = slider.children.length;

      currentIndex += direction;

      if (currentIndex < 0) currentIndex = 0;
      if (currentIndex > totalCards - 1) currentIndex = totalCards - 1;

      slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    // for div8 end from here 
