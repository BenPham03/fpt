
function signup(x){
    
    event.preventDefault();
    var username = document.getElementById("UserName").value;
    var email = document.getElementById("Email").value;
    var password = document.getElementById("Password").value;
    var confirmPassword =document.getElementById("confirmPassword").value;
    if(password != confirmPassword){
        document.getElementById("confirmPassword").style.border="1px solid red"
        document.getElementById("unmatch").style.visibility="visible"
    }
    else if(String(username) == ""){
        document.getElementById("Usererror").style.visibility="visible"
        document.getElementById("UserName").style.border="1px solid red"

    }
    // else if(String(username) != ""){
    //     document.getElementById("Usererror").style.visibility="hidden"
    //     document.getElementById("UserName").style.border="1px solid green"
    // }
    else if(String(email) == ""){
        document.getElementById("Emailerror").style.visibility="visible"
        document.getElementById("Email").style.border="1px solid red"

    }
    // else if(String(email) != ""){
    //     document.getElementById("Emailerror").style.visibility="hidden"
    //     document.getElementById("Email").style.border="1px solid green"
    // }
    else if(String(password) == ""){
        document.getElementById("Passwornerror").style.visibility="visible"
        document.getElementById("Passworn").style.border="1px solid red"

    }
    else if(String(confirmPassword) == ""){
        document.getElementById("Confirmerror").style.visibility="visible"
        document.getElementById("confirmPassword").style.border="1px solid red"

    }
    else{
        add(username,email,password)
    }
}
function signin(x){
    event.preventDefault();
    var username = document.getElementById("UserName").value;
    var email = document.getElementById("Email").value;
    var password = document.getElementById("Password").value;
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    if(username==""){
        document.getElementById("Usererror").style.visibility="visible"
        document.getElementById("UserName").style.border="1px solid red"
    }
    else if(
        username=="ha"&&
        email=="ha@gmail.com" &&
        password=="ha2003"
    ){
        alert("Đăng nhập thành công")
        window.location.href="index.html"
    }
    else if(email==""){
        document.getElementById("Emailerror").style.visibility="visible"
        document.getElementById("Email").style.border="1px solid red"
    }
    else if(password==""){
        document.getElementById("Passworderror").style.visibility="visible"
        document.getElementById("Password").style.border="1px solid red"
    }
    else if(
        username ==data.username &&
        email==data.email &&
        password== data.password
    ){
        alert("Đăng nhập thành công")
        window.location.href="index.html"
    }
    else{
        alert("Đăng nhập thất bại")
    }
}
function add(username,email,password){
    var user = {
        username :username,
        email:email,
        password: password,
    };
    var json = JSON.stringify(user);
    localStorage.setItem(username,json);
    alert("Đăng ký thành công");
}

