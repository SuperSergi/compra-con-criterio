document.addEventListener("DOMContentLoaded", () => {

  const header =
    document.querySelector(".site-header");

  const menuButton =
    document.querySelector(".menu-toggle");

  const nav =
    document.querySelector("#main-nav");


  const updateHeader = () => {

    if (!header) {
      return;
    }

    header.classList.toggle(
      "scrolled",
      window.scrollY > 12
    );

  };


  updateHeader();


  window.addEventListener(
    "scroll",
    updateHeader,
    {
      passive:true
    }
  );


  if (menuButton && nav) {

    menuButton.addEventListener(
      "click",
      () => {

        const open =
          nav.classList.toggle("open");

        menuButton.setAttribute(
          "aria-expanded",
          String(open)
        );

      }
    );


    nav
      .querySelectorAll("a")
      .forEach(link => {

        link.addEventListener(
          "click",
          () => {

            nav.classList.remove("open");

            menuButton.setAttribute(
              "aria-expanded",
              "false"
            );

          }
        );

      });

  }


  const revealElements =
    document.querySelectorAll(".reveal");


  if ("IntersectionObserver" in window) {

    const observer =
      new IntersectionObserver(
        entries => {

          entries.forEach(entry => {

            if (entry.isIntersecting) {

              entry.target
                .classList
                .add("in-view");

              observer
                .unobserve(
                  entry.target
                );

            }

          });

        },
        {
          threshold:.14
        }
      );


    revealElements.forEach(el => {
      observer.observe(el);
    });

  }

  else {

    revealElements.forEach(el => {
      el.classList.add("in-view");
    });

  }

});
