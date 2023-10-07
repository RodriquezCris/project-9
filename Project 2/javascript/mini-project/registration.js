const form =  document.getElementById('form');
const username =  document.getElementById('username');
const email =  document.getElementById('email');
const password =  document.getElementById('password');
const password2 =  document.getElementById('password2');

FormData.addEventListener('submit', e => {
    e.preventDefault();
    
    validateInputs();
});
const setError = (Element, message) =>{
    const inputControl = Element.parentElement;
    const errorDisplay = inputControl.querySelector ('.error');


    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('sucess');

}
const setSuccess = () =>{
    const inputControl = element.parentElement;
    const errorDisplay =  inputControl.querySelector ('error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('sucess');


};

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2alue = password2.value.trim();

    if(usernameValue ==='') {
  setError(username, 'username is required');
    }else{
setSuccess(username);
    }
    if(emailValue === '') {
        setError(email,'Email is required') ;
    } else if (!isValidEmail(emailValue)){
        setError(email,"Provide a valid email address");
    }else{
        setSuccess(email);
    }
    if(passwordValue === ''){
        setError(password, 'password is required');}
        else if (passwordValue.length < 8){
            setError(password , "Password must be at least eight characters long")
    }else{
            setSuccess(password);
        }
    }

    if (password2Value === ''){
        setError(password2 ,'Please confirm your password');
    }else if (password2Value !== passwordValue) {
        setError(password2 ,"passwords don't match!");
    }else{

    };


