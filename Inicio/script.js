const body = document.querySelector("body"),
    dashboard = body.querySelector(".dashboard"),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".busqueda"),
    modeSwtich = body.querySelector(".toggle-switch"),
    navDashboard = document.getElementById("navDashboard");
    modeText = body.querySelector(".mode-text"),
    contenedorGrid = document.getElementById("contenedor-grid"),
    navBar = document.querySelector(".nav"); // Selecciona el elemento .nav


    contenedorGrid = document.getElementById("contenedor-grid");
    
    toggle.addEventListener("click", () =>{
        dashboard.classList.toggle("close");

        if(navDashboard.classList.contains("close")){
            contenedorGrid.classList.replace("contenedor-grid", "contenedor-grid-alternative");
            console.log("Reducido");
        }else{
            contenedorGrid.classList.replace("contenedor-grid-alternative", "contenedor-grid")
            console.log("ampliado");
        }
    });
    

    modeSwtich.addEventListener("click", () =>{
        body.classList.toggle("dark");
        
    });