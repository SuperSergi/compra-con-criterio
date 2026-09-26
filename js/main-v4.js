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
    },
    {
      label: "Aspiradoras",
      guide: base + "hogar/aspiradoras/",
      comparison:
        base +
        "hogar/aspiradoras/mejores-robots-aspiradores/"
    }
  ];

  const normalize = value =>
    value
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();

  const directHogarLink =
    Array.from(nav.children)
      .find(element =>
        element.tagName === "A" &&
        normalize(element.textContent) === "hogar"
      );

  if (directHogarLink) {

    const hogarGroup =
      document.createElement("div");

    hogarGroup.className =
      "nav-group";

    const hogarMain =
      document.createElement("a");

    hogarMain.href =
      base + "hogar/";

    if (
      directHogarLink.classList.contains(
        "active"
      )
    ) {
      hogarMain.classList.add("active");
    }

    hogarMain.innerHTML =
      'Hogar <span aria-hidden="true">⌄</span>';

    const hogarDropdown =
      document.createElement("div");

    hogarDropdown.className =
      "dropdown";

    hogarDropdown.innerHTML =
      '<a href="' +
      base +
      'hogar/aspiradoras/">Aspiradoras</a>';

    nav.replaceChild(
      hogarGroup,
      directHogarLink
    );

    hogarGroup.appendChild(hogarMain);
    hogarGroup.appendChild(hogarDropdown);

  }

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


/* =========================================================
   MEDICIÓN V1 · CLICS DE AFILIACIÓN
   No envía datos por sí sola.
   Prepara eventos para GA4/dataLayer cuando exista una capa
   de analítica habilitada con el consentimiento correspondiente.
   ========================================================= */

document.addEventListener("click", event => {

  const link =
    event.target.closest(
      'a[href*="amazon.es"], a[href*="amzn.to"]'
    );

  if (!link) return;

  let url;

  try {
    url = new URL(
      link.href,
      window.location.href
    );
  } catch {
    return;
  }

  const asinMatch =
    url.pathname.match(
      /\/(?:dp|gp\/product)\/([A-Z0-9]{10})/i
    );

  const container =
    link.closest(
      "article, .product-card, .robot-card, .comparison-card, .guide-card"
    );

  const heading =
    container?.querySelector(
      "h1, h2, h3"
    );

  const product =
    link.dataset.product ||
    heading?.textContent
      ?.replace(/\s+/g, " ")
      .trim() ||
    link.textContent
      .replace(/\s+/g, " ")
      .trim();

  const payload = {
    event: "amazon_click",
    page_path:
      window.location.pathname,
    page_title:
      document.title,
    product_name:
      product || "Producto Amazon",
    asin:
      asinMatch?.[1] || "",
    affiliate_tag:
      url.searchParams.get("tag") || "",
    link_url:
      url.href
  };

  window.dataLayer =
    window.dataLayer || [];

  window.dataLayer.push(payload);

  if (
    typeof window.gtag ===
    "function"
  ) {
    window.gtag(
      "event",
      "amazon_click",
      {
        page_path:
          payload.page_path,
        product_name:
          payload.product_name,
        asin:
          payload.asin,
        affiliate_tag:
          payload.affiliate_tag,
        link_url:
          payload.link_url
      }
    );
  }

});
