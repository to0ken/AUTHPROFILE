
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
        window.location.href ="/dashboard";
    }
    if (data.status === "error"){
        window.location.href ="/error"
    }

}

async function password() {
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
      window.location.href = "/error";
    }

}
