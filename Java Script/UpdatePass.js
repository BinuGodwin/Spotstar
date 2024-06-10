function update()
{
    var pass = document.getElementById("pass").value;
    var upper = 0;
    var lower = 0;
    var number = 0;
    var special = 0;
    var pass_flag = false;
    for (let i= 0; i < pass.length; i++) {
        if (pass[i]>='A' && pass[i]<='Z'){
            upper=upper+1;
        }
        else if (pass[i]>='a' && pass[i]<='z') {
            lower = lower+1;
        }
        else if (pass[i]>='0' && pass[i]<='9') {
            number = number+1;
        }
        else {
            special = special+1;
        }
    }

    if ((pass.length>=8 && pass.length<=16) && (upper>=1)&&(lower>=1)&&(number>=1)&&(special>=1)) {
        pass_flag = true;
    }
    else
    {
        document.getElementById("error").innerHTML="Not a strong password(Example(Binu@1234))"
    }

    var cpass = document.getElementById("cpass").value;
    var cpass_flag = false;
    if (pass==cpass) {
        cpass_flag = true;
    }
    else{
        document.getElementById("cerror").innerHTML="Password doen't Match";
    }

    if (pass_flag == true && cpass_flag == true) {
        window.open("Update.html");
    }
}

function cancel(){
    window.open("forgot.html");
}