// script.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#contact-form");
  const status = document.querySelector("#form-status");

  if (form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();

      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: formData,
          headers: {
            Accept: "application/json",
          },
        });

        if (response.ok) {
          status.innerHTML =
            "<p class='success'>✅ Gracias, tu mensaje ha sido enviado.</p>";
          form.reset();
        } else {
          status.innerHTML =
            "<p class='error'>❌ Ocurrió un problema, inténtalo de nuevo.</p>";
        }
      } catch (error) {
        status.innerHTML =
          "<p class='error'>⚠️ Error de red, por favor revisa tu conexión.</p>";
      }
    });
  }
});
