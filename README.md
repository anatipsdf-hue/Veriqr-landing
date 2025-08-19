veriqr-landing/
<!DOC<img width="1536" height="1024" alt="logo-veriqr png" src="https://github.com/user-attachments/assets/d9cdc67e-f2ee-4f5b-ad74-f3aa0be0b557" />
TYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>VeriQR - Cumple con VeriFactu Fácilmente</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <img src="logo-veriqr.png" alt="Logo VeriQR" class="logo">
    <nav>
      <a href="#como-funciona">Cómo funciona</a>
      <a href="#contacto">Contacto</a>
    </nav>
  </header>

  <section class="hero">
    <h1>Cumple con <span>VeriFactu</span> sin complicaciones</h1>
    <p>Factura con QR obligatorio de forma rápida, segura y legal.</p>
    <a href="#contacto" class="btn">Apúntate Gratis</a>
  </section>

  <section id="como-funciona" class="features">
    <h2>¿Por qué elegir VeriQR?</h2>
    <div class="grid">
      <div class="card">
        <h3>✅ Cumplimiento Legal</h3>
        <p>Preparado para la nueva normativa de facturación con QR.</p>
      </div>
      <div class="card">
        <h3>⚡ Fácil de Usar</h3>
        <p>Sube tu factura y recibe el documento con su QR integrado.</p>
      </div>
      <div class="card">
        <h3>📊 Pensado para PYMES</h3>
        <p>Autónomos y empresas pequeñas podrán adaptarse sin líos.</p>
      </div>
    </div>
  </section>

  <section id="contacto" class="contact">
    <h2>Solicita Información</h2>
    <p>Déjanos tu correo y te avisaremos cuando VeriQR esté disponible.</p>
    <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
      <input type="email" name="email" placeholder="Tu correo electrónico" required>
      <button type="submit">Quiero estar informado</button>
    </form>
  </section>

  <footer>
    <p>© 2025 VeriQR.es - Todos los derechos reservados</p>
  </footer>
</body>
</html>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Arial", sans-serif;
}

body {
  color: #333;
  background: #f9f9f9;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: white;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

.logo {
  height: 50px;
}

nav a {
  margin-left: 20px;
  text-decoration: none;
  color: #333;
  font-weight: 500;
}

.hero {
  text-align: center;
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #007BFF, #00C896);
  color: white;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero h1 span {
  color: yellow;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.btn {
  background: yellow;
  color: #333;
  padding: 0.8rem 1.5rem;
  font-size: 1.1rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
}

.features {
  padding: 4rem 2rem;
  text-align: center;
}

.features h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 3px 8px rgba(0,0,0,0.1);
}

.contact {
  text-align: center;
  padding: 4rem 2rem;
  background: #f1f1f1;
}

.contact form {
  margin-top: 1rem;
}

.contact input {
  padding: 0.8rem;
  width: 250px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.contact button {
  padding: 0.8rem 1.5rem;
  margin-left: 10px;
  border: none;
  border-radius: 5px;
  background: #007BFF;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

footer {
  text-align: center;
  padding: 1rem;
  background: #222;
  color: white;
}
