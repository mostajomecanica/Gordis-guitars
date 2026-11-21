# Cómo publicar la web de Gordis Guitars

Son 4 pasos y no hace falta saber programar. Calculá unos 20 minutos la primera vez.

1. Crear la cuenta de GitHub, donde queda guardada la web.
2. Subir los archivos a GitHub, en 2 tandas.
3. Conectar Netlify, que publica la web en internet.
4. Ponerle un nombre lindo al link.

> 💡 Las cuentas las creás vos, con tu mail y tu contraseña. Tu contraseña no se la pases a nadie, tampoco a Claude.

**La carpeta de la web:** `E:\Taller\Trabajo Claude\Code\gordis-guitars`

Adentro tiene esto:

```
gordis-guitars
├─ fotos              ← foto de Lucas y galería
├─ fotos-productos    ← las 92 fotos de la tienda
├─ index.html         ← la portada
├─ tienda.html        ← la tienda
├─ config.js          ← WhatsApp, Instagram, zona y horario
├─ productos.js       ← la lista de productos y precios
├─ styles.css, main.js, tienda.js, logo.svg
└─ PASO-A-PASO.md     ← este archivo
```

---

## Paso 1 · Crear la cuenta de GitHub

1. Entrá a **https://github.com/signup**
2. Poné tu mail, una contraseña y un nombre de usuario (por ejemplo `gordisguitars`).
3. GitHub te manda un código al mail: copialo en la página.
4. Si te hace preguntas de bienvenida, tocá **Skip** (saltear).
5. Elegí el plan **Free** (gratis).

✅ Ya tenés la cuenta.

---

## Paso 2 · Subir los archivos a GitHub

> ⚠️ La página de GitHub deja subir **hasta 100 archivos por vez**, y la web tiene 111. Por eso se sube en **2 tandas**.

### 2.1 · Crear el repositorio (la "carpeta" en GitHub)

1. Entrá a **https://github.com/new**
2. En **Repository name** escribí `gordis-guitars`.
3. Dejá marcado **Public**.
4. Abajo de todo, tocá el botón verde **Create repository**.

### 2.2 · Primera tanda: todo menos las fotos de productos

1. En la página que aparece, tocá el link **uploading an existing file**.
2. En tu PC abrí la carpeta `gordis-guitars`.
3. Seleccioná **todo menos la carpeta `fotos-productos`**:
   - Apretá **Ctrl + A** para seleccionar todo.
   - Con **Ctrl** apretado, hacé un clic sobre `fotos-productos` para sacarla de la selección.
4. **Arrastrá** lo seleccionado a la página de GitHub, donde dice *Drag files here*.
5. Esperá a que aparezca la lista de archivos.
6. Abajo de todo, tocá el botón verde **Commit changes**, que es "guardar".

### 2.3 · Segunda tanda: las fotos de productos

1. Ya en tu repositorio, arriba tocá **Add file → Upload files**.
2. Arrastrá **la carpeta `fotos-productos` entera** a la página.
3. Esperá a que termine de cargar las 92 fotos. Puede tardar un minuto.
4. Tocá **Commit changes**.

✅ Fijate que en GitHub se vean las carpetas `fotos` y `fotos-productos`, y los archivos `index.html`, `tienda.html`, etc. Así la web ya está guardada.

> **Otra forma, con un programa:** si preferís, bajá **GitHub Desktop** de https://desktop.github.com, que no tiene límite de archivos. Entrá con tu cuenta, andá a **File → Add local repository**, elegí la carpeta `gordis-guitars` y tocá **create a repository**. Después tocá **Publish repository**, destildá *Keep this code private* y confirmá.

---

## Paso 3 · Publicar con Netlify

1. Entrá a **https://app.netlify.com/signup**
2. Tocá **Sign up with GitHub**, así no creás otra contraseña.
3. GitHub te pide permiso: tocá **Authorize Netlify**.
4. Si Netlify te hace preguntas de bienvenida, contestá cualquier cosa o tocá **Skip**.
5. Tocá **Add new project** (puede decir *Add new site*) y elegí **Import an existing project**.
6. Tocá **GitHub**.
7. Elegí **gordis-guitars** de la lista.
   - Si no aparece, tocá **Configure the Netlify app on GitHub**, elegí *All repositories*, guardá y volvé.
8. En la pantalla de configuración **no toques nada y dejá todo vacío**. La web no necesita nada más.
9. Tocá **Deploy gordis-guitars** (o *Deploy site*).
10. En menos de un minuto aparece arriba un link verde, tipo `https://algo-raro-123.netlify.app`.

✅ **¡La web ya está en internet!** Abrí el link y probala, también en el celular.

> Cada vez que cambies algo en GitHub, Netlify actualiza la web solo en un minuto.

---

## Paso 4 · Ponerle un nombre lindo al link

1. En Netlify, entrá a tu sitio.
2. Andá a **Project configuration** (o *Site configuration*).
3. En **Project details** tocá **Change project name** (o *Change site name*).
4. Escribí `gordis-guitars` y tocá **Save**.
   - Si ya está usado, probá con `gordisguitars` o `gordis-guitars-ar`.
5. Listo, la web queda en: **https://gordis-guitars.netlify.app** 🎸

> Si más adelante Lucas compra un dominio propio (por ejemplo `gordisguitars.com.ar`), se conecta en **Domain management → Add a domain**.

---

## Plan B: publicarla en 1 minuto, sin GitHub

Si solo querés mostrársela rápido a Lucas:

1. Entrá a **https://app.netlify.com/drop** (con tu cuenta de Netlify).
2. Arrastrá **la carpeta `gordis-guitars` entera** al recuadro.
3. Listo: te da un link al instante.

La contra es que, para cambiar algo, tenés que volver a arrastrar la carpeta. Con GitHub se actualiza solo.

---

## Cosas que se cambian fácil

| Qué querés cambiar | Dónde |
|---|---|
| WhatsApp, Instagram, zona, horario | archivo `config.js` (está explicado adentro) |
| Fotos de la galería | carpeta `fotos/galeria` → `foto-1.jpg` … `foto-8.jpg` |
| Foto de Lucas | `fotos/lucas.jpg` |
| Productos y precios de la tienda | archivo `productos.js` |
| Fotos de los productos | carpeta `fotos-productos` |

**Para cambiar un archivo directo en GitHub:** entrá al repositorio, tocá el archivo (por ejemplo `config.js`) y después el lápiz ✏️ de arriba a la derecha. Cambiá lo que quieras y tocá **Commit changes**.

**Para cambiar o agregar fotos:** entrá a la carpeta en GitHub (por ejemplo `fotos` → `galeria`), tocá **Add file → Upload files** y arrastrá las fotos. Si una tiene el mismo nombre que otra que ya estaba, la reemplaza.

Al minuto, la web ya muestra los cambios.
