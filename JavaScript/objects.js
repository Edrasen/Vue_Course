const web = {
    nombre: "bluuweb",
    links: {
        enlace: "www.bluuweb.com"
    },
    redesSociales: {
        YouTube:{
            enlace: "youtube.com/bluuweb",
            nombre: "bluuweb YT"
        },
        Facebook:{
          enlace: "facebook.com/bluuweb",
          nombre: "bluuweb FB"
        }
    }
  }
  
  const enlaceYT = web.redesSociales.YouTube.enlace
  console.log(enlaceYT)
  
  const {enlace, nombre} = web.redesSociales.YouTube
  console.log(enlace)
  console.log(nombre)