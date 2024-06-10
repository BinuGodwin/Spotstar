function forgot(){
    var Email=document.getElementById("mail").value 
            var email_flag=false
            var flag1=true
            var flag2=false
            for(var i=0;i<Email.length;i++){
                if((Email[i]>='A')&&(Email[i]<='Z')){
                    flag1=false
                }
                if(Email[i]=='@'){
                    flag2=true
                }
            }
            if((flag1==true)&&(flag2==true)){
                email_flag=true
            }else{
                document.getElementById("emailerror").innerHTML="Invalid Email"
            }

            var Password=document.getElementById("pass").value
            var password_flag=false
            var upper=0
            var lower=0
            var num=0
            var special=0
            for(var i=0;i<Password.length;i++){
                if((Password[i]>='A')&&(Password[i]<='Z')){
                    upper++
                }else if((Password[i]>='a')&&(Password[i])<='z'){
                    lower++
                }else if((Password[i]>='0')&&(Password[i]<='9')){
                    num++
                }else{
                    special++
                }
            }
            if((Password.length>=8)&&(Password.length<=16)&&(upper>=1)&&(lower>=1)&&(num>=1)&&(special>=1)){
                password_flag=true
            }else{
                document.getElementById("passerror").innerHTML="Not a Strong Password->(Example(Binu@1234)"
            }
    if(email_flag == true && password_flag == true){
        window.open("Otp-2.html");
    }
}