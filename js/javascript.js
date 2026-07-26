
$('.featured_slider').slick({
    centerMode: true,
    slidesToShow: 2,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 600,
    centerPadding: '0px',

    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                centerMode: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                centerMode: true
            }
        }
    ]
});



<script>
document.addEventListener("DOMContentLoaded", function () {

    const featuredForm = document.getElementById("featured_form");
    const featuredModalElement = document.getElementById("featured_modal");

    featuredForm.addEventListener("submit", function (event) {

        // HTML5 validation check
        if (!featuredForm.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();

            // Browser validation messages show karega
            featuredForm.reportValidity();

            return;
        }

        // Default form submission stop
        event.preventDefault();

        // Form values
        const name = document.getElementById("featured_name").value;
        const email = document.getElementById("featured_email").value;
        const message = document.getElementById("featured_message").value;

        // Data console mein check karne ke liye
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);

        // Success message
        alert("Thank you! Your message has been submitted successfully.");

        // Form reset
        featuredForm.reset();

        // Bootstrap modal close
        const featuredModal = bootstrap.Modal.getInstance(featuredModalElement);

        if (featuredModal) {
            featuredModal.hide();
        }

    });

});
</script>