const formElement = document.querySelector('.login-form')
//  console.dir(formElement);

// test@gmail.com
// 123456asd

formElement.addEventListener('submit', onSubmit)

function onSubmit(event) {
    event.preventDefault()

    const { email, password } = event.currentTarget.elements;
    // console.log(`Email: ${email.value}`);
    // console.log(`Password: ${password.value}`);
    const info = {
        email:`${email.value}`,
        password: `${password.value}`,
    }
    
    if (!email.value || !password.value) {
        alert('Всі поля мають бути засіяні!🤣')
    }
    else if (email.value && password.value) {
        console.log(info);
        formElement.reset()
    }

}