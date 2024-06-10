function login(){
    var username = document.getElementById("Username").value;
    var username_flag = false
    if(username=='null' || username==''){
        alert("Username is required")
    }
    else{
    username_flag = true;
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
            alert("Create a strong password -> example(Binu@1234)");
        }

        if(password_flag == true && username_flag == true){ 
               window.open("Welcome.html");
        }
}
