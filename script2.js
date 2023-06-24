let arr=["FullName","Email","Password","ConPassword"];
let siBtn=document.getElementById("psignup");
siBtn.addEventListener("click",gotoSignup);
let namee=document.getElementById("fullName");
let emaill=document.getElementById("Email");
let passwordd=document.getElementById("password");
namee.innerText=namee.innerText+localStorage.getItem(arr[0]);
emaill.innerText=emaill.innerText+localStorage.getItem(arr[1]);
passwordd.innerText=passwordd.innerText+localStorage.getItem(arr[2]);

let logout=document.getElementById("logoutBtn");
logout.addEventListener("click",logOut)

function logOut(){
    window.location.href="http://127.0.0.1:5500/index.html";
    localStorage.clear();
}

function gotoSignup(){
    if(!localStorage.getItem("accessKey")){
        window.location.href="http://127.0.0.1:5500/index.html"
    }
}