var generated_otp = Math.floor(Math.random()*999999);
alert(generated_otp);
function otpVerification(){
    var userOtp = document.getElementById("otp").value;
    if(generated_otp == userOtp){
        window.open("Verify.html");
    }
    else
    {
        document.getElementById("error").innerHTML("Invalid OTP!!!  Resend again");
    }
}

function resendOtp(){
    window.open("forgot.html");
}
