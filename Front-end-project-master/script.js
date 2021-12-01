



const data =
[
  { id: 1, title: "Typewriter", price: "$49.50", description: "Vintage typewriter to post awesome stories abot UI design and webdev", img: "./images/sliderTypeWriter.png" },
  { id: 2, title: "Typewriter2", price: "$45.35", description: "Vintage typewriter to post awesome stories abot UI design and webdev", img: "./images/sliderTypeWriter.png" },
  { id: 3, title: "Typewriter3", price: "$43.20", description: "Vintage typewriter to post awesome stories abot UI design and webdev", img: "./images/sliderTypeWriter.png" },
  { id: 3, title: "Typewriter4", price: "$40.00", description: "Vintage typewriter to post awesome stories abot UI design and webdev", img: "./images/sliderTypeWriter.png" }
]




!(function (d) {

  console.log(data);

  const addSlides = () => {
    const slider = document.getElementById("slider-wrapper");
    for (let i = 0; i < data.length; i++) {
      slider.innerHTML += `<img class="carousel__photo ${i == 0 ? 'initial' : ''}" src="${data[i].img}">`
    }
  }

  // Variables to target our base class,  get carousel items, count how many carousel items there are, set the slide to 0 (which is the number that tells us the frame we're on), and set motion to true which disables interactivity.
  var itemClassName = "carousel__photo";
  var items = [];
  var totalItems = 0;
  var slide = 0;
  var moving = false;

  // To initialise the carousel we'll want to update the DOM with our own classes
  function setInitialClasses() {

    // Target the last, initial, and next items and give them the relevant class.
    // This assumes there are three or more items.
    items[totalItems - 1].classList.add("prev");
    items[0].classList.add("active");
    items[1].classList.add("next");
  }

  // Set click events to navigation buttons

  function setEventListeners() {
    var next = d.getElementsByClassName('carousel__button--next')[0],
      prev = d.getElementsByClassName('carousel__button--prev')[0];

    next.addEventListener('click', moveNext);
    prev.addEventListener('click', movePrev);
  }

  // Disable interaction by setting 'moving' to true for the same duration as our transition (0.5s = 500ms)
  function disableInteraction() {
    moving = true;

    setTimeout(function () {
      moving = false
    }, 500);
  }

  function moveCarouselTo(slide) {

    // Check if carousel is moving, if not, allow interaction
    if (!moving) {
      // temporarily disable interactivity
      disableInteraction();

      // Preemptively set variables for the current next and previous slide, as well as the potential next or previous slide.
      var newPrevious = slide - 1,
        newNext = slide + 1,
        oldPrevious = slide - 2,
        oldNext = slide + 2;

      // Test if carousel has more than three items
      console.log(totalItems)
      if ((totalItems - 1) >= 3) {
        console.log('ITEMS', items);
        // Checks if the new potential slide is out of bounds and sets slide numbers
        if (newPrevious <= 0) {
          oldPrevious = (totalItems - 1);
        } else if (newNext >= (totalItems - 1)) {
          oldNext = 0;
        }

        // Check if current slide is at the beginning or end and sets slide numbers
        if (slide === 0) {
          newPrevious = (totalItems - 1);
          oldPrevious = (totalItems - 2);
          oldNext = (slide + 1);
        } else if (slide === (totalItems - 1)) {
          newPrevious = (slide - 1);
          newNext = 0;
          oldNext = 1;
        }

        // Now we've worked out where we are and where we're going, by adding and removing classes, we'll be triggering the carousel's transitions.

        // Based on the current slide, reset to default classes.
        items[oldPrevious].className = itemClassName;
        items[oldNext].className = itemClassName;

        // Add the new classes
        items[newPrevious].className = itemClassName + " prev";
        items[slide].className = itemClassName + " active";
        items[newNext].className = itemClassName + " next";

      }
    }
  }

  // Next navigation handler
  function moveNext() {
    // Check if moving
    if (!moving) {
      console.log('move Next', totalItems);
      // If it's the last slide, reset to 0, else +1
      if (slide === (totalItems - 1)) {
        slide = 0;
      } else {
        slide++;
      }

      // Move carousel to updated slide
      moveCarouselTo(slide);
      changeProduct(slide);
    }
  }

  // Previous navigation handler
  function movePrev() {
    // Check if moving
    if (!moving) {

      // If it's the first slide, set as the last slide, else -1
      if (slide === 0) {
        slide = (totalItems - 1);
      } else {
        slide--;
      }

      // Move carousel to updated slide
      moveCarouselTo(slide);
      changeProduct(slide);
    }
  }

  function changeProduct(slide) {
    const productTitle = document.getElementById('productTitle');
    const productPrice = document.getElementById('productPrice');
    const productDescription = document.getElementById('productDescription');

    productTitle.innerText = data[slide].title;
    productPrice.innerText = data[slide].price;
    productDescription.innerText = data[slide].description;

  }


  // Initialise carousel
  function initCarousel() {
    addSlides();
    console.log('TEST***********');
    // Variables to target our base class,  get carousel items, count how many carousel items there are, set the slide to 0 (which is the number that tells us the frame we're on), and set motion to true which disables interactivity.
    var itemClassName = "carousel__photo";
    items = d.getElementsByClassName(itemClassName),
      totalItems = items.length,
      slide = 0,
      moving = false;
    setInitialClasses();
    setEventListeners();
    // Set moving to false now that the carousel is ready
    moving = false;
  }

  // make it rain
  initCarousel();

}(document));




