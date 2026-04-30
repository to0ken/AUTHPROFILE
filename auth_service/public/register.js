
async function login(){
    const password = document.getElementById('password').value;
    const login = document.getElementById('login').value;

    const resp = await fetch("/api/login",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify({password, login}),
    })

    const data = await resp.json();

    if (data.status === "success"){
        localStorage.setItem('user_id', data.user_id)
        localStorage.setItem('user_name', data.user_name)
        window.location.href ="/dashboard";
    }
    if (data.status === "error"){
        const msg = 'Логин или пароль неверен'
        showMassage(msg)
    }

}

async function register() {
    const password = document.getElementById("password").value;
    const login = document.getElementById("login").value;

    const resp = await fetch("/api/register", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ password, login }),
    });

    const data = await resp.json();
    if (data.status === "success") {
      window.location.href = "/dashboard";
    }
    if (data.status === "error") {
        const msg = 'Лоштн или пароль неаерен'
        showMassage(msg)
      
    }
}

function showMassage(message){
   const div = document.getElementById('container-msg')
   div.innerHTML = `<p> ${message}</p>`

}
