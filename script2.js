let arr=["FullName","Email","Password","ConPassword"];
console.log("hi");
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