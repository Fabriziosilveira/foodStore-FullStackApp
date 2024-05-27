document.addEventListener('DOMContentLoaded', function () {
    var emailInput = document.getElementById('email');
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

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', async (Event) => {
        Event.preventDefault();

        const formData = new FormData(form);
        const fullName = formData.get('fullName');
        const password = formData.get('password');
        const email = formData.get('email');

        const user = {
            fullName,
            password,
            email
        };

        try {
            const response = await fetch('http://localhost:3100/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ fullName, email, password })
            });

            const result = await response.json();
            console.log('Usuário Cadastrado com sucesso:', result);

            window.location.href = '../loginPage/login.html';
        } catch (error) {

        }
    });
});
