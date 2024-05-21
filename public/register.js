document.addEventListener('DOMContentLoaded', function () {
    var emailInput = document.getElementById('inputAddress');
    var emailError = document.getElementById('emailError');

    emailInput.addEventListener('input', function () {
        if (!validateEmail(emailInput.value)) {
            emailInput.classList.add('is-invalid');
            emailError.style.display = 'block';
        } else {
            emailInput.classList.remove('is-invalid');
            emailError.style.display = 'none';
        }
    });

    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
});