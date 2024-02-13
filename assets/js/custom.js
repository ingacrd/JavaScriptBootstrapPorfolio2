function validate_fName() {
        let fName = document.getElementById('inputFirstName'); 
        let fNameMessage = document.getElementById('fName-feedback');

        if (fName.value == ""){
            fNameMessage.classList.remove("error-txt");
        }
        else {
            fNameMessage.classList.add("error-txt");
        }
}

function validate_lName() {
        let lName = document.getElementById('inputLastName'); 
        let lNameMessage = document.getElementById('lName-feedback');

        if (lName.value == ""){
            lNameMessage.classList.remove("error-txt");
        }
        else {
            lNameMessage.classList.add("error-txt");
        }
}

function validate_email(){
    console.log("validating email");
    let inputEmail = document.getElementById('inputEmail'); 
    let email_feedback = document.getElementById('email-feedback');
    if (inputEmail.value == ""){
        email_feedback.classList.remove("error-txt");
        email_feedback.innerText="email can not be empty";
    } else {
        email_feedback.classList.add("error-txt");
    }
}

function validate_msg(){
    let message = document.getElementById('message'); 
    let msg_feedback = document.getElementById('msg-feedback');

    if (message.value == ""){
        msg_feedback.classList.remove("error-txt");
    } else {
        msg_feedback.classList.add("error-txt");
    }
}

function checkInputs() {
    var valid = true;
    const email_regex = /[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    let fName = document.getElementById('inputFirstName'); 
    let fNameMessage = document.getElementById('fName-feedback');

    let lName = document.getElementById('inputLastName'); 
    let lNameMessage = document.getElementById('lName-feedback');

    let inputEmail = document.getElementById('inputEmail'); 
    let email_feedback = document.getElementById('email-feedback');
    
    let message = document.getElementById('message'); 
    let msg_feedback = document.getElementById('msg-feedback');

    if (fName.value == ""){
        fNameMessage.classList.remove("error-txt");
        valid = false;
    }
    if (lName.value == ""){
        lNameMessage.classList.remove("error-txt");
        valid = false;
    }
    if (inputEmail.value == ""){
        console.log("email empty");
        email_feedback.classList.remove("error-txt");
        email_feedback.innerText="email can not be empty";
        valid = false;
        
    } else {
        console.log("email tiene algo");
        if(!inputEmail.value.match(email_regex)){
            email_feedback.classList.remove("error-txt");
            console.log("email no cuadra");
            email_feedback.innerText="email not valid";
            valid = false;
        }
        else {
            email_feedback.classList.add("error-txt");
            console.log("email VALID0!");
        }
        
    }
    if (message.value == ""){
        msg_feedback.classList.remove("error-txt");
        valid = false;
    }
    
    

    return valid;
}


function sendEmail() {
    // checkInputs();
    if(checkInputs()){
        let firstName = document.getElementById("inputFirstName").value;
        let lastName = document.getElementById("inputLastName").value
        var params = {
            from_name: firstName + " " + lastName,
            email_id: document.getElementById("inputEmail").value,
            message: document.getElementById("message").value
        }

        emailjs.send("service_tz90wy8","template_8ow4z4a", params).then(function(res) {
            
            if (res.status == 200){
                Swal.fire({
                    title: "Message sent!",
                    text: "Thanks for your message, I'll be in touch soon.",
                    icon: "success"
                    });
            }
        });

    }
    
}

function changeColor(color) {
    //change-color
    var elements = document.querySelectorAll('.change-color');
    var elementsHover = document.querySelectorAll('.change-hover');
    var elementsColor = document.querySelectorAll('.change-primary-color');
    var elementsBoxShadow = document.querySelectorAll('.change-boxshadow-color');
    
    //var menu = document.getElementById('menu');

    if(color == 'green'){
        elements.forEach(function(element) {
            element.classList.remove('custom-background-indigo');
            element.classList.toggle('custom-background-green');
        });
        elementsHover.forEach(function(element) {
            element.classList.remove('custom-hover-indigo');
            element.classList.toggle('custom-hover-green');
        });
        elementsColor.forEach(function(element){
            element.classList.toggle('custom-primary-green');
            element.classList.remove('custom-primary-indigo');
        });
        elementsBoxShadow.forEach(function(element){
            element.classList.toggle('custom-boxshadow-green');
            element.classList.remove('custom-boxshadow-indigo');
        })
 
        
    }
    else if(color == 'indigo') {
        elements.forEach(function(element) {
            element.classList.remove('custom-background-green');
            element.classList.toggle('custom-background-indigo');
        });
        elementsHover.forEach(function(element) {
            element.classList.remove('custom-hover-green');
            element.classList.toggle('custom-hover-indigo');
        });
        elementsColor.forEach(function(element){
            element.classList.toggle('custom-primary-indigo');
            element.classList.remove('custom-primary-green');
        });
        elementsBoxShadow.forEach(function(element){
            element.classList.toggle('custom-boxshadow-indigo');
            element.classList.remove('custom-boxshadow-green');
        })

    }
    else{
        elements.forEach(function(element) {
            element.classList.remove('custom-background-green');    
            element.classList.remove('custom-background-indigo');  
            element.classList.remove('custom-background-red');
        });
        elementsHover.forEach(function(element) {
            element.classList.remove('custom-hover-green');
            element.classList.remove('custom-hover-indigo');
        });
        elementsColor.forEach(function(element){
            element.classList.remove('custom-primary-indigo');
            element.classList.remove('custom-primary-green');
        });
        elementsBoxShadow.forEach(function(element){
            element.classList.remove('custom-boxshadow-indigo');
            element.classList.remove('custom-boxshadow-green');
        })

    }
 

}

