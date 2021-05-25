$.getJSON("../json/cuadros.json", (response, status) => {
    if (status === "success") {
        misProductos = response
        for (let producto of misProductos) {
            let div = `
            <div class="row products__list--item">
            <div class="col products__list__item--image mb-3">
              <div class="card" style="width: 18rem;">
                <img src="${producto.img}" class="card-img-top" alt="...">
              </div>
            </div>
            <div class="col products__list__item--description mb-3">
              <div class="card border-0" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title mb-3">${producto.nombre}</h5>
                  <h6 class="card-subtitle mb-3">$ ${producto.precio}</h6>
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
                </div>
                  <a href="https://api.whatsapp.com/send?phone=541169957849"><button type="button" class="btn mt-3 btn-whatsapp justify-content-center">Pedilo por Whatsapp</button></a>
                </div>
              </div>
            </div>
          </div>
          `
                        $('#contenedorProductos').append(div)      
        }
    }
  }
)
