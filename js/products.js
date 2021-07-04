$(window).on('load', function () {

  let subCategorias = ["constelacion","figuras","flores",
                       "iniciales","matisse","siluetas","biodegradable",
                       "transparente","digitales","planners"];

  let hashCode = location.hash.split("#")[1];
  let pageHeader = toTitleCase(hashCode);

  function titleCategory() {
    if(subCategorias.includes(pageHeader.toLowerCase())){
      $("#titleCategory").html(pageHeader);
    } else {
      $("#titleCategory").html("Resultado de búsqueda: " + hashCode);
    }
  };


  function toTitleCase(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }

  titleCategory()
  getContent(hashCode);


  function getContent(filter) {
    $.getJSON("assets/data/data.json", (response, status) => {
      if (status === "success") {
        misProductos = response

        for (let producto of misProductos) {

          if(subCategorias.includes(filter)){
            filtroProducto = producto.subcategoria == filter;
          } else {
            filtroProducto = producto.nombre.includes(toTitleCase(filter));
          }

          if (filtroProducto) {
            
            let divTemplate = ""

            switch (producto.categoria) {

              case "cuadro":
                divTemplate = divTemplateCuadros;
                $(".navbar").addClass("navbar-cuadros-background");
                break;

              case "fundas":

                if(producto.subcategoria == "transparente"){
                  divTemplate = divTemplateCaseRig;
                } else {
                  divTemplate = divTemplateCaseBio;
                }
                
                $(".navbar").addClass("navbar-cases-background");
                break;

              case "ilustraciones":
                divTemplate = divTemplateDeco;
                $(".navbar").addClass("navbar-deco-background");
                break;

              case "planners":
                divTemplate = divTemplateDeco;
                $(".navbar").addClass("navbar-deco-background");
                break;
            }
            
          let div = `
              <div class="row products__list--item align-items-center mb-3">
                <div class="col products__list__item--image">
                  <div class="card" style="width: 18rem;">
                    <img src="${producto.img}" class="card-img-top" alt="...">
                  </div>
                </div>
                <div class="col products__list__item--description">
                  <div class="card border-0" style="width: 18rem;">
                    <div class="card-body">
                      <h5 class="card-title mb-3">${producto.nombre}</h5>
                      <h6 class="card-subtitle mb-3">${producto.precio}</h6>

                  ${divTemplate}

                      <a href="https://api.whatsapp.com/send?phone=541155752497&text=Hola,%20me%20gustaría%20pedir%20este%20producto:%20${producto.nombre}"><button type="button" class="btn mt-3 btn-whatsapp justify-content-center">Pedilo por WhatsApp <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp ms-1" viewBox="0 0 16 16">
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                      </svg></button></a>
                    </div>
                  </div>
                </div>
              </div>
                      `
            $('#contenedorProductos').append(div);
          } else {

            divTemplate = divTemplateCuadros;
                $(".navbar").addClass("navbar-cuadros-background");
                if($('#contenedorProductos').text().trim() == ""){
                  $("#titleCategory").html("No hay resultado para su búsqueda: " + hashCode);
                } else {
                  $("#titleCategory").html("Resultado de búsqueda: " + hashCode);
                }
          }
        }
      }
    }
    )
  }

  $('#goBackBtn').click(function(){ window.history.back();; return false; });
});

let divTemplateCuadros = `
<div>
  <p class="d-inline">Color del marco</p>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#d9ab9e" class="bi bi-square-fill m-1" viewBox="0 0 16 16">
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z"/>
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#80918c" class="bi bi-square-fill m-1" viewBox="0 0 16 16">
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z"/>
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#b6c8b3" class="bi bi-square-fill m-1" viewBox="0 0 16 16">
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z"/>
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#643e31" class="bi bi-square-fill m-1" viewBox="0 0 16 16">
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z"/>
  </svg>
</div>
<div class="mt-3 mb-3">
  <p class="mt-4 d-inline">Tamaño</p>
  <select class="form-select d-inline" aria-label="Default select example">
  <option value="1">A2</option>
  <option value="2">A3</option>
  <option value="3">A4</option>
  </select>
</div> `

let divTemplateDeco = `
<div class="mt-3 mb-3">
  <p class="mt-4 d-inline me-2">Presentación</p>
  <select class="form-select d-inline" aria-label="Default select example">
    <option value="1">Digital</option>
    <option value="2">Impresa</option>
  </select>
</div>
<div class="mt-3 mb-3">
<p class="mt-4 d-inline me-4">Tamaño</p>
<select class="form-select d-inline" aria-label="Default select example">
  <option value="1">A5</option>
  <option value="2">A4</option>
  <option value="3">A3</option>
</select>
      ` 

let divTemplateCaseBio = `
<div>
  <p class="d-inline me-4">Celular</p>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#f2c94c" class="bi bi-square-fill m-1 ms-5" viewBox="0 0 16 16">
    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z"/>
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fffdfd" class="bi bi-square-fill m-1" viewBox="0 0 16 16">
    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z"/>
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#598797" class="bi bi-square-fill m-1" viewBox="0 0 16 16">
    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z"/>
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#d9ab9e" class="bi bi-square-fill m-1" viewBox="0 0 16 16">
    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z"/>
  </svg>
</div>
<div class="mt-3 mb-3">
  <p class="mt-4 d-inline me-4">Tamaño</p>
  <select class="form-select d-inline" aria-label="Default select example">
    <option value="1">Iphone 7/8</option>
    <option value="2">Iphone 7/8 Plus</option>
    <option value="3">Iphone X/XS</option>
    <option value="3">Iphone X/XS Max</option>
    <option value="3">Iphone XR</option>
  </select>
   ` 

let divTemplateCaseRig = `
              <div class="mt-3 mb-3">
                <p class="mt-4 d-inline me-4">Puntas</p>
                <select class="form-select d-inline" aria-label="Default select example">
                  <option value="1">Normales</option>
                  <option value="2">Reforzadas</option>
                </select>
              </div>

              <div class="mt-3 mb-3">
              <p class="mt-4 d-inline me-4">Tamaño</p>
              <select class="form-select d-inline" aria-label="Default select example">
                <option value="1">Iphone 7/8</option>
                <option value="2">Iphone 7/8 Plus</option>
                <option value="3">Iphone X/XS</option>
                <option value="3">Iphone X/XS Max</option>
                <option value="3">Iphone XR</option>
              </select>
               `




