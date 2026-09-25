document.addEventListener(
  "DOMContentLoaded",
  () => {


    const button =
      document.querySelector(".menu-toggle");


    const nav =
      document.querySelector("#main-nav");



    /*
      MENÚ MÓVIL
    */

    if (button && nav) {


      button.addEventListener(
        "click",
        () => {


          const open =
            nav.classList.toggle("open");


          button.setAttribute(
            "aria-expanded",
            String(open)
          );


        }
      );



      /*
        Al pulsar un enlace normal,
        cerramos el menú.
      */

      nav
        .querySelectorAll("a")
        .forEach(
          link => {


            link.addEventListener(
              "click",
              () => {


                if (
                  window.innerWidth <= 760
                ) {


                  /*
                    Si el enlace pertenece a un grupo
                    con submenú, permitimos navegar
                    normalmente.

                    Los submenús ya aparecen visibles
                    en móvil.
                  */

                  nav
                    .classList
                    .remove("open");


                  button
                    .setAttribute(
                      "aria-expanded",
                      "false"
                    );


                }


              }
            );


          }
        );


    }



    /*
      Si pasamos de móvil a escritorio
      con el menú abierto,
      eliminamos la clase open.
    */

    window.addEventListener(
      "resize",
      () => {


        if (
          window.innerWidth > 760 &&
          nav
        ) {


          nav
            .classList
            .remove("open");


          if (button) {


            button
              .setAttribute(
                "aria-expanded",
                "false"
              );


          }


        }


      }
    );


  }
);
