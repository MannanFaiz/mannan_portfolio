(function() {
  emailjs.init("Uhk1w9IARS9QNjyU_");
})();

document.getElementById("feedbackForm").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.send("service_o3vtyhp", "template_3y44m4s", {
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    message: document.getElementById("message").value
  })
  .then(() => {
    Swal.fire("Thank You!", "Your feedback has been sent successfully!", "success");
    document.getElementById("feedbackForm").reset();
  }, (err) => {
    Swal.fire("Oops!", "Something went wrong. Try again.", "error");
  });
});
