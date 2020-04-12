$(document).ready(function () {
  $(".contact-form-btn").click(function (event) {
    if ($(this).closest("form")[0].checkValidity()) {
      let name = $("#name").val();
      let email = $("#email").val();
      let message = $("#message").val();

      console.log(email, name, message);
    } else {
      event.preventDefault();
    }
  });
});
