let slideIndex = 0;
const slides = document.querySelectorAll('.slide'),
      dots = document.querySelectorAll('.dot');

function showSlide(n) {
  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length -1;
  slides.forEach(s => s.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));
  slides[slideIndex].classList.add('active');
  dots[slideIndex].classList.add('active');
  document.querySelector('.slides').style.transform = `translateX(-${slideIndex*100}%)`;
}
dots.forEach(dot => {
  dot.addEventListener('click', () => {
    slideIndex = parseInt(dot.dataset.slide);
    showSlide(slideIndex);
  });
});
setInterval(() => { slideIndex++; showSlide(slideIndex); }, 5000);

document.querySelector('.chat-header .cerrar').addEventListener('click', () => {
  document.querySelector('.chat-flotante').style.display = 'none';
});

document.addEventListener("DOMContentLoaded", function () {
  let slides = document.querySelectorAll(".slide");
  let dots = document.querySelectorAll(".dot");
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
      dots[i].classList.toggle("active", i === index);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  let interval = setInterval(nextSlide, 5000);

  dots.forEach(dot => {
    dot.addEventListener("click", function () {
      clearInterval(interval);
      currentIndex = parseInt(this.dataset.slide);
      showSlide(currentIndex);
      interval = setInterval(nextSlide, 5000);
    });
  });
});


// Por ejemplo, mostrar u ocultar la contraseña (si agregas un icono de ojo)
document.addEventListener("DOMContentLoaded", () => {
  // funcionalidades futuras aquí si deseas
});



// buscador

document.addEventListener('DOMContentLoaded', () => {
  const search = document.querySelector('.search');
  const input = document.querySelector('.input');
  const btn = document.querySelector('.btn');

  btn.addEventListener('click', () => {
    search.classList.toggle('active');
    input.focus();
  });
});

const medicamentos = [
  {
    nombre: "PARACETAMOL",
    descripcion: "Alivia el dolor y la fiebre.",
    imagen: "https://cdn-icons-png.flaticon.com/512/2936/2936884.png",
    link: "med/paracetamol.html"
  },
  {
    nombre: "IBUPROFENO",
    descripcion: "Antiinflamatorio y analgésico.",
    imagen: "https://www.notilogia.com/wp-content/uploads/2023/07/ibuprofeno-para-que-sirve.jpg",
    link: "med/ibuprofeno.html"
  },
    
  {
    nombre: "AMOXICILINA",
    descripcion: "Combate infecciones bacterianas. Comunmente usado para infecciones respiratorias e infecciones. ",
    imagen: "https://www.lasanteca.com/userfiles/2018/12/AMOXICILINA-250MG-5ML-SUSPENCI%E2%80%A1N-100ML-INCLINADO.jpg",
    link: "med/amoxicilina.html"
  },
  {
    nombre: "METFORMINA",
    descripcion: "La metformina es un medicamento utilizado principalmente para tratar la diabetes tipo 2. También se utiliza en el tratamiento del síndrome de ovario poliquístico. ",
    imagen: "https://tse4.mm.bing.net/th/id/OIP.6MgDEhydPUSXciIGJCUZKQHaGe?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    link: "med/metmorfin.html"
  },
 
  {
    nombre: "DICLOFENACO",
    descripcion: "El diclofenaco es un medicamento antiinflamatorio no esteroide (AINE) que se utiliza para tratar diversas condiciones como: Artritis reumatoide y osteoartrosis, Dismenorrea (cólico menstrual), Migrañas y dolores de cabeza.",
    imagen: "https://quefarmacia.com/wp-content/uploads/2017/03/Diclofenaco.jpg",
    link: "med/diclofenaco.html"
  },
  {
    nombre: "LORATADINA",
    descripcion: "La loratadina es un antihistamínico que se utiliza para aliviar los síntomas de alergias, tales como: Rinitis alérgica, Síntomas de resfriados.",
    imagen: "https://quefarmacia.com/wp-content/uploads/2017/04/209-1024x993.jpg",
    link: "med/loratadina.html"
  },
  {
    nombre: "CETRIZINA",
    descripcion: "La cetirizina es un antihistamínico que se utiliza para Aliviar los síntomas de alergias, Tratar alergias estacionales, Controlar alergias en la piel, Reducir la producción de histamina. ",
    imagen: "https://tse2.mm.bing.net/th/id/OIP.fMH3UbIazXZwQAyvoOt_ogHaE3?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    link: "med/cetirizina.html"
  },
  {
    nombre: "AZITROMICINA",
    descripcion: "La azitromicina es un antibiótico macrólido que se utiliza para tratar diversas infecciones bacterianas, incluyendo: Infecciones respiratorias, Enfermedades de transmisión sexual, Infecciones de la piel y Otras infecciones.",
    imagen: "https://th.bing.com/th/id/R.15baf090760d2f864810cd97a1897f95?rik=PbPJXAEln9Gsbg&riu=http%3a%2f%2fquefarmacia.com%2fwp-content%2fuploads%2f2017%2f05%2f7502223708921.jpg&ehk=%2bi7zsZapLI%2bzjENlF0XuR%2bCfNVq7or8ftBjCFIHsQRA%3d&risl=&pid=ImgRaw&r=0",
    link: "med/azitromicina.html"
  },
  {
    nombre: "CLORFENAMINA",
    descripcion: "La clorfenamina se utiliza para aliviar los síntomas de diversas afecciones alérgicas y del resfriado común, como: Alergias, estornudos, secreción nasal, ojos llorosos, picazón en la nariz o garganta. ",
    imagen: "https://www.laboratoriochile.cl/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2015/09/Clorfenamina_4MG_20C_BE_HD.jpg.webp",
    link: "med/clorfenamina.html"
  },
  {
    nombre: "ACETAZOLAMIDA",
    descripcion: "La acetazolamida se utiliza para tratar una variedad de afecciones, entre las que se incluyen: Glaucoma, Epilepsia, Mal de altura (enfermedad aguda de la montaña), Edema (retención de líquidos).",
    imagen: "https://www.laboratoriochile.cl/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2015/08/perfil-web.png.webp",
    link: "med/acetazolamida.html"
  },
  {
    nombre: "ACIDO FOLICO",
    descripcion: "El ácido fólico, también conocido como vitamina B9, es una vitamina esencial para el correcto funcionamiento del organismo. Sus funciones y beneficios son vitales en varias etapas de la vida, pero es especialmente importante para las mujeres en edad fértil y durante el embarazo.",
    imagen: "https://www.fahorro.com/media/catalog/product/7/5/7506472803161_1.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=502&width=502&canvas=502:502&format=jpeg&dpr=1%201x",
    link: "med/acidofolico.html"
  },
  {
    nombre: "AGUA DESTILADA",
    descripcion: "El agua destilada es agua que ha pasado por un proceso de destilación, lo que implica hervirla y luego condensar el vapor para recolectarlo en otro recipiente. Este proceso elimina casi por completo minerales, sales, impurezas y microorganismos que se encuentran en el agua del grifo.",
    imagen: "https://www.labfinlay.com/wp-content/uploads/2016/08/Agua-Destilada-250ml-1-768x1152.jpg",
    link: "med/aguadesti.html"
  },
  {
    nombre: "ALOPURINOL",
    descripcion: "El alopurinol es un medicamento que se utiliza principalmente para reducir la producción de ácido úrico en el organismo. Los niveles elevados de ácido úrico en la sangre pueden causar diversas afecciones, y el alopurinol está indicado para su prevención y tratamiento.",
    imagen: "https://benessilabs.com/wp-content/uploads/2021/11/Alopurinol-768x768.jpg",
    link: "med/alopurinol.html"
  },
  {
    nombre: "ADENOSINA",
    descripcion: " La adenosina se administra por vía intravenosa para revertir rápidamente ciertos tipos de arritmias cardíacas, como la taquicardia supraventricular paroxística (TSVP). ",
    imagen: "https://prixz.com/salud/wp-content/uploads/2020/10/adenosina.jpg",
    link: "med/adenosina.html"
  },
  {
    nombre: "AMITRIPTILINA",
    descripcion: "La amitriptilina es un medicamento que pertenece a la clase de los antidepresivos tricíclicos. A pesar de que su uso principal fue para tratar la depresión, hoy en día se utiliza para una variedad de condiciones médicas, a menudo en dosis más bajas que las usadas para la depresión.",
    imagen: "https://medicamentosmk.com/static/images/amitriptilina-mk.webp",
    link: "med/amitriptilina.html"
  },
  {
    nombre: "AMIODARONA",
    descripcion: "La amiodarona es un medicamento antiarrítmico que se utiliza para tratar y prevenir ciertos tipos graves de arritmias (ritmos cardíacos anormales). Pertenece a la clase III de antiarrítmicos y es un fármaco complejo y potente que se usa cuando otros medicamentos no han sido efectivos o no se toleran.",
    imagen: "https://medicamentosmk.com/static/images/amiodarona-mk.webp",
    link: "med/amiodarona.html"
  },
  {
    nombre: "AMLODIPINO",
    descripcion: "El amlodipino es un medicamento que pertenece a la clase de los bloqueadores de los canales de calcio. Su función principal es relajar los vasos sanguíneos para que el corazón no tenga que esforzarse tanto para bombear la sangre.",
    imagen: "https://resources.claroshop.com/imagenes-sanborns-ii/1200/7502216793675.jpg?scale=500&qlty=75",
    link: "med/amlodipino.html"
  },
  {
    nombre: "BACLOFENO",
    descripcion: "El baclofeno es un medicamento que pertenece a la clase de los relajantes del músculo esquelético. Su principal uso es para tratar el dolor y la espasticidad, que es la rigidez y el endurecimiento de los músculos.",
    imagen: "https://www.reutter.cl/imagenes/productos/baclofeno-10-mg.jpg",
    link: "med/baclofeno.html"
  },
  {
    nombre: "BIPERIDENO",
    descripcion: "El biperideno es un medicamento anticolinérgico que se usa principalmente para tratar los síntomas del Parkinson y los efectos secundarios de otros medicamentos.",
    imagen: "https://medicamentosmk.com/static/images/biperideno-hcl-mk.webp",
    link: "med/biperideno.html"
  },
  {
    nombre: "CETRIZINA",
    descripcion: "La cetirizina es un medicamento antihistamínico que se utiliza para aliviar los síntomas de las alergias. Funciona bloqueando la acción de la histamina, una sustancia en el cuerpo que causa los síntomas alérgicos.",
    imagen: "https://www.lasanteca.com/userfiles/2018/12/CETIRIZINA-10MG-CAJA-POR-10-TABLETAS-CON-BLISTER.jpg",
    link: "med/cetirizina.html"
  },
  
 
  {
    nombre: "CARBIDOPA",
    descripcion: "La carbidopa es un medicamento que se utiliza principalmente en combinación con la levodopa para tratar los síntomas de la enfermedad de Parkinson y otras afecciones similares.",
    imagen: "https://d2d21jw8en5l3a.cloudfront.net/vendty2_db_36949_drog2020/imagenes_productos/2113_carbidopa_levodopa_x_30_tabletas_genfar_imagen.png",
    link: "med/carbidopa.html"
  },
  
];

function filtrarResultados() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const contenedor = document.getElementById("resultadoLista");
  contenedor.innerHTML = "";

  if (input === "") {
    contenedor.style.display = "none";
    return;
  }

  const resultados = medicamentos.filter(med =>
    med.nombre.toLowerCase().includes(input)
  );

  if (resultados.length === 0) {
    contenedor.innerHTML = "<div class='resultado-item'><div class='resultado-texto'><h4>Sin resultados</h4></div></div>";
  } else {
    resultados.forEach(med => {
      const item = document.createElement("div");
      item.classList.add("resultado-item");

      item.innerHTML = `
        <img src="${med.imagen}" alt="${med.nombre}" />
        <div class="resultado-texto">
          <h4>${med.nombre}</h4>
          <p>${med.descripcion}</p>
        </div>
      `;

      item.onclick = () => {
        window.location.href = med.link;
      };

      contenedor.appendChild(item);
    });
  }

  contenedor.style.display = "block";
}

// ABRIR búsqueda
document.getElementById("abrirBusqueda").addEventListener("click", () => {
  document.getElementById("cuadroBusqueda").classList.add("abierto");
  document.getElementById("searchInput").focus();
});

// CERRAR búsqueda
document.getElementById("cerrarBusqueda").addEventListener("click", () => {
  document.getElementById("cuadroBusqueda").classList.remove("abierto");
  document.getElementById("resultadoLista").style.display = "none";
});
