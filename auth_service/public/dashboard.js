const user_info = document.getElementById('user_info')
const user_info = document.getElementById('profil_form')

async function loadProfile(id){
    user_info.innerHTML = '<button id ="create-btn" onclick="showformProfil()">Создать профиль</button>'
    await fetch(`http://localhost:3001/api/profile/`,{
        user_id:id
    })
    
    displayProfile()
}

function displayProfile(){

}
// ет профидя
function notProfile(){
    // отриовывать кнопку срздай профиль
}

async function saveProfile(){
    const id = localStorage.getItem('user_id')
    const full_name = document.getElementById("full_name").value
    const bio = document.getElementById("bio").value
    const email = document.getElementById("email").value

    const data = {
        user_id: id,
        full_name: full_name,
        bio:bio,
        email:email,
    }
    await fetch(`http://localhost:3001/api/profile`,{
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({data})
    })

}

function showformProfil(){
    // отриовывать кнопку срздай профиль
    user_info.style.display = "none"
    profil_info.style.display = "block"
}

function displayUserInfo(id,name){
    const user_info = 
    user_info.innerHTML = '' + 
    `<p>id: ${id}</p>`+
    `<p>name: ${name}</p>`;

}

function exit(){
    localStorage.clear();
    window.location.href ="/index.html"
}

window.onload =()=>{
    const user_id = localStorage.getItem('user_id')
    const user_name = localStorage.getItem('user_name')
    displayUserInfo(user_id,user_name)
    loadProfile()
}
