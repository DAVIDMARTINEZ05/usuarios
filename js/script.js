const cuerpo = document.getElementById("listaUsuarios");
const urlDAtos = `https://jsonplaceholder.typicode.com/users`;
const imagenes = [
  "./assets/img/1.jpeg",
  "./assets/img/2.jpeg",
  "./assets/img/3.jpeg",
  "./assets/img/4.jpeg",
  "./assets/img/5.jpeg",
  "./assets/img/6.jpeg",
  "./assets/img/7.jpeg",
  "./assets/img/8.jpeg",
  "./assets/img/9.jpeg",
  "./assets/img/10.jpeg",
];

function usuarios() {
  fetch(urlDAtos)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Algo ha salido mal");
      }
      return response.json();
    })
    .then((users) => {
        cuerpo.innerHTML = "";
    
        users.forEach((usuario, index) => {
          
            const { name, username, phone, email, ...otrosDatos } = usuario;
    
            // Generar valores adicionales
            const imagenSrc = imagenes[index % imagenes.length];
            const edad = Math.floor(Math.random() * (60 - 25 + 1)) + 20;
    
            
            const usuarioExtendido = {
                name,
                username,
                phone,
                email,
                edad,
                imagenSrc,
                ...otrosDatos, 
            };
    
          
            const userDiv = document.createElement("div");
            userDiv.innerHTML = `
                <div id="tarjeta">
                    <div class="cuadrado">
                        <div>
                            <img src="${usuarioExtendido.imagenSrc}" alt="${usuarioExtendido.name}">
                        </div>
                        <div>
                            <h2><b>Nombre:</b> ${usuarioExtendido.name}</h2>
                            <p><b>Edad:</b> ${usuarioExtendido.edad}</p>
                            <p><b>Username:</b> ${usuarioExtendido.username}</p>
                            <p><b>Teléfono:</b> ${usuarioExtendido.phone}</p>
                            <p><b>Email:</b> ${usuarioExtendido.email}</p>
                        </div>
                        
                    </div>
                     <div class="otroCuadrado">
                            <p><b>Compañia:</b> ${usuarioExtendido.company.name}</p> 
                            <p><b>Ciudad:</b> ${usuarioExtendido.address.stret}, ${usuarioExtendido.address.suit}, ${usuarioExtendido.address.city}</p> 
                        </div
                </div>
            `;
    
        
            cuerpo.appendChild(userDiv);
        });
    address?.cit
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

usuarios();
