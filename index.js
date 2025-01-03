
// Доробити валідацію для надсилання повідомлення з використанням регулярних виразів:
// Поля:
// Name - обов'язкове текстове поле
// Message - текстове поле не менше 5 символів
// Phone number - обов'язкове поле типу phone. З початком на +380
// Email - email обов'язково повинен мати @ та крапку
// Після відправки, в консоль відображаємо дані, які ввів користувач.
// Під час помилки показувати її під полем.



document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let isValid = true;
    const form = event.target;
    const formData = new FormData(form);

    const name = formData.get('name').trim();
    const message = formData.get('message').trim();
    const phone = formData.get('phone').trim();
    const email = formData.get('email').trim();


    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        isValid = false;
    } else {
        document.getElementById('nameError').textContent = '';
    }

    if (message.length < 5) {
        document.getElementById('messageError').textContent = 'Message must be at least 5 characters';
        isValid = false;
    } else {
        document.getElementById('messageError').textContent = '';
    }

    const phonePattern = /^\+380[0-9]{9}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById('phoneError').textContent = 'Phone starts: +380 and plus 9 digits';
        isValid = false;
    } else {
        document.getElementById('phoneError').textContent = '';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Wrong email format';
        isValid = false;
    } else {
        document.getElementById('emailError').textContent = '';
    }

    if (isValid) {
        console.log('Name:', name);
        console.log('Message:', message);
        console.log('Phone number:', phone);
        console.log('Email:', email);
    }
});

