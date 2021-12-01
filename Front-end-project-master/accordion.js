

//ACCORDION***********

const faqs = document.querySelectorAll(".faq");
console.log(faqs);
faqs.forEach(faq => {
  faq.querySelectorAll(".toggleBtn").forEach(toggleButton => {
    toggleButton.addEventListener("click", () => {
      faq.classList.toggle("active");
      const toggleBtn = faq.querySelectorAll(".toggleBtn")
      toggleBtn.forEach(btn => {
        btn.classList.toggle("hide");
      })
    });
  })

});


//FOOTER********************

const footerSections = document.querySelectorAll(".footerSection");
footerSections.forEach(section => {
  section.addEventListener("click", () => {
    section.classList.toggle("active");
    const toggleBtn = section.querySelectorAll(".toggleBtn")
    toggleBtn.forEach(btn => {
      btn.classList.toggle("hide")
    })
  });
});

