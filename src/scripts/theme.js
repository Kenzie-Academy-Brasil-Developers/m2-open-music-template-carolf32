/* Desenvolva sua lógica aqui ... */

export const changeTheme = () => {
    const button = document.querySelector(".header__btn");
    const html=document.querySelector("html")
    let darkmode=false;

    darkmode = !darkmode
    html.classList.toggle("dark-mode")
    button.classList.toggle("header__btn--dark-mode")
    localStorage.setItem("theme", JSON.stringify(darkmode))

    button.addEventListener("click", changeTheme)
}


export const themePreferences = () => {
    darkmode = JSON.parse(localStorage.getItem("theme"))

    if(darkmode){
        body.classList.add("dark-mode")
        button.classList.add("header__btn--dark-mode")
    }
}

