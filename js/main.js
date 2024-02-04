(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);


    // Initiate the wowjs
    new WOW().init();


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1300, 'easeInOutExpo');
        return false;
    });


    // Blog carousel
    //$(".blog-carousel").owlCarousel({
    //    autoplay: true,
    //    smartSpeed: 1200,
    //    center: false,
    //    dots: false,
    //    loop: true,
    //    margin: 50,
    //    nav: true,
    //    navText: [
    //        '<i class="bi bi-arrow-left"></i>',
    //        '<i class="bi bi-arrow-right"></i>'
    //    ],
    //    responsiveClass: true,
    //    responsive: {
    //        0: {
    //            items: 1
    //        },
    //        768: {
    //            items: 2
    //        },
    //        992: {
    //            items: 2
    //        },
    //        1200: {
    //            items: 3
    //        }
    //    }
    //});
//
//
    //// Testimonial carousel
    //$(".testimonial-carousel").owlCarousel({
    //    autoplay: true,
    //    smartSpeed: 1500,
    //    center: true,
    //    dots: true,
    //    loop: true,
    //    margin: 50,
    //    nav: true,
    //    navText: [
    //        '<i class="bi bi-arrow-left"></i>',
    //        '<i class="bi bi-arrow-right"></i>'
    //    ],
    //    responsiveClass: true,
    //    responsive: {
    //        0: {
    //            items: 1
    //        },
    //        576: {
    //            items: 1
    //        },
    //        768: {
    //            items: 2
    //        },
    //        992: {
    //            items: 2
    //        },
    //        1200: {
    //            items: 3
    //        }
    //    }
    //});

})(jQuery);

new WOW().init();

function showDetails(serviceName, serviceDetails) {


    // Get the details container and placeholder
    var detailsContainer = document.getElementById('details-container');
    var detailsPlaceholder = document.getElementById('details-placeholder');
    var detailsHeader = document.getElementById('details-header');

    // Hide all service items
    var allServiceItems = document.querySelectorAll(".services-item");
    allServiceItems.forEach(function (item) {
        item.style.display = "none";
        item.hidden = true;
        // item.style.margin = '0';
        // item.style.padding = '0';
        // item.style.border = '0';
    });

    var specificElement = document.querySelector(".container .specific-class");
    if (specificElement) {
        specificElement.style.display = "none";
        specificElement.hidden = true;
    }

    var element = document.querySelector(".targetElement");
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }

    if (detailsContainer) {
        detailsContainer.hidden = false;
        //detailsContainer.scrollIntoView({behavior: 'smooth' });
    }
    // Replace the placeholder text with service-specific details
    detailsPlaceholder.innerHTML = serviceDetails;
    detailsHeader.innerHTML = serviceName;

    // Show the details container
    detailsContainer.style.display = 'block';

    var moreFromindex = document.getElementById('morefromindex')
    if (moreFromindex) {
        moreFromindex.hidden = true
    }
}

function hideDetails(elementId) {
    location.reload();
}

var form = document.getElementById("my-form");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("result");
    status.innerHTML = "Please wait..."
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.status == 200) {
            status.innerHTML = responsePostsubmit;
            alert(alertPostSubmit);
            form.reset()
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                } else {
                    status.innerHTML = "There was a problem submitting your form"
                }
            })
        }
    }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
    });
}
form.addEventListener("submit", handleSubmit)

// Function for each service
function generalService() {
    var serviceTitle = document.getElementById('general-service-hdr').innerHTML;
    var serviceDescription = document.getElementById('general-service-dec').innerHTML;
    showDetails(serviceTitle, serviceDescription);
}

function spiderService() {
    var serviceTitle = document.getElementById('spider-service-hdr').innerHTML;
    var serviceDescription = document.getElementById('spider-service-dec').innerHTML;
    showDetails(serviceTitle, serviceDescription);
}

function mosquitoService() {
    var serviceTitle = document.getElementById('mosquito-service-hdr').innerHTML;
    var serviceDescription = document.getElementById('mosquito-service-dec').innerHTML;
    showDetails(serviceTitle, serviceDescription);
}

function rodentService() {
    var serviceTitle = document.getElementById('rodent-service-hdr').innerHTML;
    var serviceDescription = document.getElementById('rodent-service-dec').innerHTML;
    showDetails(serviceTitle, serviceDescription);
}

function antService() {
    var serviceTitle = document.getElementById('ant-service-hdr').innerHTML;
    var serviceDescription = document.getElementById('ant-service-dec').innerHTML;
    showDetails(serviceTitle, serviceDescription);
}

function borerService() {
    var serviceTitle = document.getElementById('borer-service-hdr').innerHTML;
    var serviceDescription = document.getElementById('borer-service-dec').innerHTML;
    showDetails(serviceTitle, serviceDescription);
}

function bedbugService() {
    var serviceTitle = document.getElementById('bedbug-service-hdr').innerHTML;
    var serviceDescription = document.getElementById('bedbug-service-dec').innerHTML;
    showDetails(serviceTitle, serviceDescription);
}

function termiteService() {
    var serviceTitle = document.getElementById('termite-service-hdr').innerHTML;
    var serviceDescription = document.getElementById('termite-service-dec').innerHTML;
    showDetails(serviceTitle, serviceDescription);
}

function flyService() {
    var serviceTitle = document.getElementById('fly-service-hdr').innerHTML;
    var serviceDescription = document.getElementById('fly-service-dec').innerHTML;
    showDetails(serviceTitle, serviceDescription);
}

function cockroachService() {
    var serviceTitle = document.getElementById('cockroach-service-hdr').innerHTML;
    var serviceDescription = document.getElementById('cockroach-service-dec').innerHTML;
    showDetails(serviceTitle, serviceDescription);
}

function lizardService() {
    var serviceTitle = document.getElementById('lizard-service-hdr').innerHTML;
    var serviceDescription = document.getElementById('lizard-service-dec').innerHTML;
    showDetails(serviceTitle, serviceDescription);
}

function waspService() {
    var serviceTitle = document.getElementById('wasp-service-hdr').innerHTML;
    var serviceDescription = document.getElementById('wasp-service-dec').innerHTML;
    showDetails(serviceTitle, serviceDescription);
}


const form = document.getElementById('myForm');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  var alertPostSubmit = "Your message is in good hands! As guardians against pests, we'll swiftly address your concerns.";
  var responsePostsubmit = "Form submitted successfully. We'll handle the rest!"
  result.innerHTML = "Please wait...";

    fetch('https://formspree.io/f/xyyrezwz', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = responsePostsubmit;
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
            alert(alertPostSubmit);
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});


function validateForm() {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var phoneInput = document.getElementById("phone");
    var name = nameInput.value;
    var email = emailInput.value;
    var phone = phoneInput.value;
    var nameErrorSpan = document.getElementById("nameError");
    var emailErrorSpan = document.getElementById("emailError");
    var phoneErrorSpan = document.getElementById("phoneError");
    var isValid = true;

    // Validate name
    if (!name) {
        nameErrorSpan.textContent = "Name is required.";
        isValid = false;
    } else {
        nameErrorSpan.textContent = "";
    }

    // Validate email
    if (!email) {
        emailErrorSpan.textContent = "Email is required.";
        isValid = false;
    } else if (!isValidEmail(email)) {
        emailErrorSpan.textContent = "Please enter a valid email address.";
        isValid = false;
    } else {
        emailErrorSpan.textContent = "";
    }

    // Validate phone number
    if (!phone) {
        phoneErrorSpan.textContent = "Phone number is required.";
        isValid = false;
    } else if (!isValidPhoneNumber(phone)) {
        phoneErrorSpan.textContent = "Please enter a valid phone number.";
        isValid = false;
    } else {
        phoneErrorSpan.textContent = "";
    }

    return isValid;
}

function isValidEmail(email) {
    // Regular expression for email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function isValidPhoneNumber(phone) {
    // Regular expression for phone number validation
    var phonePattern = /^\d{10}$/;
    return phonePattern.test(phone);
}
