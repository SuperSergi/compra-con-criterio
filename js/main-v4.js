document.addEventListener("DOMContentLoaded", () => {

  const button = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#main-nav");

  if (!nav) return;

  const base =
    "https://supersergi.github.io/compra-con-criterio/";

  const submenuData = [
    {
      label: "Gatos hidráulicos",
      guide: base + "herramientas/gatos-hidraulicos/",
      comparison:
        base +
        "herramientas/gatos-hidraulicos/mejores-gatos-hidraulicos-para-coche/"
    },
    {
      label: "Taladros a batería",
      guide: base + "herramientas/taladros-a-bateria/",
      comparison:
        base +
        "herramientas/taladros-a-bateria/mejores-taladros-a-bateria/"
    },
    {
      label: "Impresoras 3D",
      guide: base + "impresion-3d/impresoras-3d/",
      comparison:
        base +
        "impresion-3d/impresoras-3d/mejores-impresoras-3d/"
    }
  ];

  const normalize = value =>
    value
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();

  const dropdownLinks =
    nav.querySelectorAll(".dropdown > a");

  submenuData.forEach(item => {

    const targetLink =
      Array.from(dropdownLinks)
        .find(link =>
          normalize(link.textContent) ===
          normalize(item.label)
        );

    if (!targetLink) return;

    if (
      targetLink.parentElement
        ?.classList.contains("dropdown-subgroup")
    ) {
      return;
    }

    const wrapper =
      document.createElement("div");

    wrapper.className =
      "dropdown-subgroup";

    const parent =
      targetLink.parentNode;

    parent.insertBefore(wrapper, targetLink);

    wrapper.appendChild(targetLink);

    targetLink.classList.add(
      "dropdown-parent"
    );

    const toggle =
      document.createElement("button");

    toggle.type = "button";
    toggle.className = "submenu-toggle";
    toggle.setAttribute(
      "aria-label",
      "Abrir opciones de " + item.label
    );
    toggle.setAttribute(
      "aria-expanded",
      "false"
    );

    toggle.innerHTML =
      '<span aria-hidden="true">›</span>';

    const submenu =
      document.createElement("div");

    submenu.className =
      "dropdown-submenu";

    submenu.innerHTML =
      '<a href="' +
      item.guide +
      '">Guía de compra</a>' +
      '<a href="' +
      item.comparison +
      '">Comparativa</a>';

    wrapper.appendChild(toggle);
    wrapper.appendChild(submenu);

    const setOpen = open => {
      wrapper.classList.toggle(
        "open",
        open
      );

      toggle.setAttribute(
        "aria-expanded",
        String(open)
      );
    };

    toggle.addEventListener(
      "click",
      event => {
        event.preventDefault();
        event.stopPropagation();

        setOpen(
          !wrapper.classList.contains(
            "open"
          )
        );
      }
    );

    wrapper.addEventListener(
      "mouseenter",
      () => {
        if (window.innerWidth > 760) {
          setOpen(true);
        }
      }
    );

    wrapper.addEventListener(
      "mouseleave",
      () => {
        if (window.innerWidth > 760) {
          setOpen(false);
        }
      }
    );
  });

  if (button) {

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

    nav
      .querySelectorAll("a")
      .forEach(link => {

        link.addEventListener(
          "click",
          () => {

            if (
              window.innerWidth <= 760
            ) {

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

      });

  }

  document.addEventListener(
    "click",
    event => {

      if (
        !event.target.closest(
          ".dropdown-subgroup"
        )
      ) {

        nav
          .querySelectorAll(
            ".dropdown-subgroup.open"
          )
          .forEach(group => {

            group
              .classList
              .remove("open");

            const toggle =
              group.querySelector(
                ".submenu-toggle"
              );

            if (toggle) {
              toggle.setAttribute(
                "aria-expanded",
                "false"
              );
            }

          });

      }

    }
  );

  window.addEventListener(
    "resize",
    () => {

      if (
        window.innerWidth > 760
      ) {

        nav
          .classList
          .remove("open");

        if (button) {
          button.setAttribute(
            "aria-expanded",
            "false"
          );
        }

      }

      nav
        .querySelectorAll(
          ".dropdown-subgroup.open"
        )
        .forEach(group => {

          group
            .classList
            .remove("open");

          const toggle =
            group.querySelector(
              ".submenu-toggle"
            );

          if (toggle) {
            toggle.setAttribute(
              "aria-expanded",
              "false"
            );
          }

        });

    }
  );

});
