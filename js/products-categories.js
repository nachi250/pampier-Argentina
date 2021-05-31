$(window).on('load', function () {

  let hashCode = location.hash.split("#")[1];
  let pageHeader;
  let categoryContent;

  if (hashCode == "decoracion") {

    pageHeader = "Decoración";
    $(".navbar").addClass("navbar-deco-background")
    
  } else if (hashCode == "cuadros") {

    pageHeader = "Cuadros";
    $(".navbar").addClass("navbar-cuadros-background")

  } else if (hashCode == "cases") {

    pageHeader = "Cases"
    $(".navbar").addClass("navbar-cases-background")
  }
  categoryContent = getContent(hashCode);


  titleCategory()

  function titleCategory() {
    $("#titleCategory").html(pageHeader);
  };
  
  
  function getContent(filter) {
    $.getJSON("assets/data/category-data.json", (response, status) => {
      if (status === "success") {
        misProductos = response
        let content = "";
        for (let producto of misProductos) {
          if(producto.category == filter){
            content +=
            `<div class="products__categories__row">
              <a href=${producto.url}><img class="" src=${producto.src} alt=""
              width="300" height="300"></a>
              </div>
              `
          }
        }
        $("#category-main-content").html(content);
      }
    })
  }
});






