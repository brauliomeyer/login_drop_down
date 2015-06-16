function validateForm() {
    /* Loop through fields with the class of req */
    for(var i = 0; i < myForm.elements.length; i++) {
        if((myForm.elements[i].className == "reg") && (myForm.elements[i].value.length == 0) && (myForm.elements[i].value.length == null)) {
            alert('Please fill in all required fields');
            return false;
        } else { return true;}
    }
    
    /* Check if all fields are safe */
        var checkFields = document.getElementsByClassName('check').value;
        var goodFields = /^[a-zA-Z0-9.!? ]\d*$/;
        for(var x = 0; x< myForm.elements.length; x++) {
            if((myForm.elements[i].className == "check") && (myForm.elements[i].value.length == 0) && (myForm.elements[i].value.length == null)) {
            alert('Please fill in all required fields');
            return false;
                if(checkFields != goodFields) {
                    alert('Please do not use special characters!');
                    return false;
                }                
        } else { return true;}
        }
    
    /* Make sure the email value is a valid email address */
    var eMail = document.getElementById('eMail').value;
    var goodEmail = /\A[^@]+@([^@\.]+\.)+[^@\.]+\z/;
    var atPos = eMail.indexOf("@");
    var dotPos = eMail.lastIndexOf(".");
    
    if(atPos < 1 || dotPos < atPos+2 || dotPos+2 >= x.length) {
        alert('Please use only a valid emails address');
        return false;
        if(eMail != goodEmail) {
            alert('Please use only a valid emails address');
            return false;
        }
    }
}