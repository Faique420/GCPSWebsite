/* GCPS: progressive enhancement for navigation, gallery and WhatsApp enquiries.
   No libraries, analytics, cookies, local storage, or background form requests. */
"use strict";

(() => {
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".site-nav");

  if (menuButton && navigation) {
    const setMenu = (open) => {
      menuButton.setAttribute("aria-expanded", String(open));
      navigation.classList.toggle("is-open", open);
      menuButton.querySelector(".menu-label").textContent = open ? "Close" : "Menu";
    };
    document.documentElement.classList.add("nav-ready");
    menuButton.addEventListener("click", () => {
      setMenu(menuButton.getAttribute("aria-expanded") !== "true");
    });
    navigation.addEventListener("click", (event) => {
      if (event.target.closest("a")) setMenu(false);
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
        setMenu(false);
        menuButton.focus();
      }
    });
    document.addEventListener("click", (event) => {
      if (!event.target.closest(".site-header")) setMenu(false);
    });
    const desktop = window.matchMedia("(min-width: 801px)");
    desktop.addEventListener("change", () => setMenu(false));
  }

  // Native links still open the full images when JavaScript is unavailable.
  const dialog = document.querySelector("#gallery-dialog");
  const galleryLinks = Array.from(document.querySelectorAll("[data-gallery]"));
  if (dialog && typeof dialog.showModal === "function" && galleryLinks.length) {
    const image = dialog.querySelector("#lightbox-image");
    const title = dialog.querySelector("#lightbox-title");
    const caption = dialog.querySelector("#lightbox-caption");
    let currentIndex = 0;
    let opener = null;

    const showImage = (index) => {
      currentIndex = (index + galleryLinks.length) % galleryLinks.length;
      const link = galleryLinks[currentIndex];
      image.src = link.href;
      image.alt = link.querySelector("img").alt;
      title.textContent = link.dataset.title;
      caption.textContent = `${currentIndex + 1} of ${galleryLinks.length} — ${link.dataset.caption}`;
    };

    galleryLinks.forEach((link, index) => {
      link.addEventListener("click", (event) => {
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        opener = link;
        showImage(index);
        dialog.showModal();
        document.body.classList.add("modal-open");
        dialog.querySelector("[data-close]").focus();
      });
    });
    dialog.querySelector("[data-close]").addEventListener("click", () => dialog.close());
    dialog.querySelector("[data-previous]").addEventListener("click", () => showImage(currentIndex - 1));
    dialog.querySelector("[data-next]").addEventListener("click", () => showImage(currentIndex + 1));
    dialog.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        showImage(currentIndex + (event.key === "ArrowRight" ? 1 : -1));
      }
    });
    dialog.addEventListener("click", (event) => {
      const box = dialog.getBoundingClientRect();
      if (event.target === dialog && (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom)) {
        dialog.close();
      }
    });
    dialog.addEventListener("close", () => {
      document.body.classList.remove("modal-open");
      opener?.focus();
    });
  }

  const form = document.querySelector("#enquiry-form");
  if (form) {
    const number = form.dataset.whatsapp;
    if (!/^\d{10,15}$/.test(number)) return;
    // Use the number on this form AND update the static contact links if it changes.
    form.hidden = false;
    for (const field of form.querySelectorAll("[required]")) {
      field.addEventListener("input", () => field.setCustomValidity(""));
    }
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      for (const field of form.querySelectorAll("[required]")) {
        field.setCustomValidity(field.value.trim() ? "" : "Please complete this field.");
      }
      if (!form.reportValidity()) return;
      const values = new FormData(form);
      const read = (key) => String(values.get(key) || "").trim();
      const lines = ["Hello GCPS, I would like to discuss your services.", "", `Name: ${read("name")}`];
      if (read("company")) lines.push(`Company: ${read("company")}`);
      if (read("email")) lines.push(`Email: ${read("email")}`);
      lines.push(`Service: ${read("service")}`, "", read("message"));
      const url = new URL(`https://wa.me/${number}`);
      url.searchParams.set("text", lines.join("\n"));
      // Opens WhatsApp in this tab. The visitor reviews and sends the message there.
      window.location.assign(url.href);
    });
  }
})();
