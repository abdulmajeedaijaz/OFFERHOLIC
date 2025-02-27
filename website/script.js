const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");

      let getMode = localStorage.getItem("mode");
          if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
          }

// js code to toggle dark and light mode
      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

        // js code to keep user selected mode even page refresh or file reopen
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
      });

//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});

//subscribe section
/*
document.getElementById("subscribe-container").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    let email = document.getElementById("email").value;
    let message = document.getElementById("message");

    if (!validateEmail(email)) {
        message.style.color = "red";
        message.textContent = "Please enter a valid email address.";
        return;
    }

    // Send data to PHP for backend processing
    fetch("subscribe.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `email=${email}`
    })
    .then(response => response.text())
    .then(data => {
        message.style.color = "green";
        message.textContent = data; // Display success or error message
        document.getElementById("email").value = "";
    })
    .catch(error => {
        message.style.color = "red";
        message.textContent = "Something went wrong. Try again.";
    });
});*/

// Email validation function
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


//faq section
document.querySelectorAll(".faq-question").forEach((question) => {
    question.addEventListener("click", function () {
      const faqItem = this.parentElement;
      
      // Close other open items
      document.querySelectorAll(".faq-item").forEach((item) => {
        if (item !== faqItem) item.classList.remove("active");
      });
  
      // Toggle current item
      faqItem.classList.toggle("active");
    });
  });
  
//subscribe

document.getElementById("subscribe-container").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let message = document.getElementById("message");

    fetch("<?php echo get_template_directory_uri(); ?>/subscribe-handler.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `email=${email}`
    })
    .then(response => response.text())
    .then(data => {
        message.style.color = "green";
        message.textContent = data;
        document.getElementById("email").value = "";
    })
    .catch(error => {
        message.style.color = "red";
        message.textContent = "Something went wrong!";
    });
});
