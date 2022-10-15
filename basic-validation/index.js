const validateEmail = (email) => {
    if(email === ""){
        console.log("Email is required")
    }else if(email.trim() === ""){
        console.log("Email can't be just spaces")
    }else if(email.indexOf("@") === -1){
        console.log("Email must contain @")
    }else if(email.length < 8){
        console.log("Email can't be less than 8 characters")
    }else{
        console.log("Email is valid")
    }
}

validateEmail("")
validateEmail("     ")
validateEmail("ahmed")
validateEmail("ahmed@")
validateEmail("ahmed0saber33@gmail.com")










const validateForm = (isNameValid, isEmailValid) => {
    const errors = []
    let isFormValid = true
    if(!isNameValid){
        isFormValid = false
        errors.push("Name is not valid")
    }
    if(!isEmailValid){
        isFormValid = false
        errors.push("Email is not valid")
    }
    return {errors, isFormValid}
}

const firstFormValidation = validateForm(false, false)
if(firstFormValidation.isFormValid){
    console.log("This form is valid")
}else{
    console.log("This form is not valid, errors:", firstFormValidation.errors)
}










const validateFormTheBadWay = (isNameValid, isEmailValid) => {
    const errors = []
    let isFormValid = true
    if(!isNameValid && isEmailValid){
        isFormValid = false
        errors.push("Name is not valid")
    }else if(isNameValid && !isEmailValid){
        isFormValid = false
        errors.push("Email is not valid")
    }else if(!isNameValid && !isEmailValid){
        isFormValid = false
        errors.push("Name is not valid")
        errors.push("Email is not valid")
    }
    return {errors, isFormValid}
}