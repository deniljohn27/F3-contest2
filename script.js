let info=document.getElementsByTagName("input");
let signbtn=document.getElementById("signupBtn");
let probtn=document.getElementById("iprofile");;
signbtn.addEventListener("click",gatherInfo);
probtn.addEventListener("click",gotoProfile);


function gatherInfo(){
    document.getElementById("success").style.display="none";
    document.getElementById("failure").style.display="none";
    if(validate(info)){
        document.getElementById("success").style.display="block";
    for(let i=0;i<info.length;i++){
        localStorage.setItem(info[i].name,info[i].value);
    }
    localStorage.setItem("accessKey",generateString())
    window.location.href="http://127.0.0.1:5500/profile.html"
    }else{
        document.getElementById("failure").style.display="block";
    }
    
}
function validate(info){
    let count=0;
    for(let i=0;i<info.length;i++){
        if(info[i].value && info[i].value!=" "){
            count++;
        }
    }
    return count==info.length; 
}
function generateString() {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < 16; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

function gotoProfile(){
    if(localStorage.getItem("accessKey")){
        window.location.href="http://127.0.0.1:5500/profile.html"
    }
}