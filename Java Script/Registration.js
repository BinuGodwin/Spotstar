function sign(){
    var username = document.getElementById("Username").value;
    var username_flag = false
    if(username=='null' || username==''){
          alert("username is required")
        }
        else{
            username_flag = true;
        }
    
    var email = document.getElementById("Email").value;
    var email_flag = false;
    var flag1 = true;
    var flag2 = false;
    for(var i=0; i<email.length; i++)
        {
            if((email[i]>'A')&&(email[i]<'Z'))
                {
                    flag1 = false;
                }
             if(email[i]=='@')
                {
                    flag2 = true;
                }
        }
     if((flag1==true) && (flag2==true))
        {
            email_flag = true;
        }
    else{
            alert("Invalid email")
        }

    var password = document.getElementById("Password").value;
    var password_flag = false;
    var size = 0;
    var lower = 0;
    var upper = 0;
    var number = 0;
    var special = 0;
    for (var i=0; i<password.length; i++)
        {
            size++;
    if((password[i]>='A') && (password[i]<="Z"))
        {
            upper++;
        }
    else if((password[i]>='a')&&(password[i]<='z'))
        {
            lower++;
        }
    else if((password[i]>='0') && (password[i]<='9'))
        {
            number++;
        }
    else
        {
        special++;
        }
    }
    if((size>=8) && (size<=16) && (upper>=1) && (lower>=1) && (number>=1) && (special>=1))
        {
            password_flag = true;
        }
    else
    {
        alert("Create a strong password(Examole : Binu@1234)")
    }

   var ConfirmPassword = document.getElementById("Confirm").value;
   var ConfirmPassword_flag = false;
   if(password==ConfirmPassword)
    {
        ConfirmPassword_flag = true;
    }
    else
    {
        alert("Password doesn't match")
    }

    if(( username_flag == true) && (email_flag == true) && (password_flag == true) && ( ConfirmPassword_flag == true))
        {
            window.open("Verify.html");
        }
}

function back(){
    window.open("index.html")
}