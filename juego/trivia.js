function submitted(e){
    e.preventDefault();

    let name = document.forms["id"]["name"].value;
    sessionStorage.setItem("name", name);
    
}