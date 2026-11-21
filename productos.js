/* LISTADO DE PRODUCTOS DE LA TIENDA (EJEMPLO)
   Cada producto va entre llaves { }. Para agregar uno, copiá un bloque entero y cambiá los datos.
   categoria: Guitarras, Bajos, Amplificadores, Pedales y efectos, Micrófonos, Accesorios o Audio y estudio.
   estado: Outlet, Vintage, Usado, Discontinuado, Nuevo o Consignación.
   precio: número sin puntos (null = 'Consultar').
   foto: ruta a la imagen dentro de la carpeta fotos-productos. Si es null se muestra un dibujo. */

window.PRODUCTOS = [
    {
        "nombre":  "Controlador MIDI 49 notas Yamaha KX49",
        "marca":  "Yamaha",
        "categoria":  "Audio y estudio",
        "estado":  "Outlet",
        "precio":  564800,
        "stock":  1,
        "foto":  "fotos-productos/p-01.jpg"
    },
    {
        "nombre":  "Amplificador para auriculares Proel HAP10",
        "marca":  "Proel",
        "categoria":  "Amplificadores",
        "estado":  "Outlet",
        "precio":  529500,
        "stock":  1,
        "foto":  "fotos-productos/p-02.jpg"
    },
    {
        "nombre":  "Amplificador para bajo 20W Dean Markley KV-20B",
        "marca":  "Dean Markley",
        "categoria":  "Amplificadores",
        "estado":  "Outlet",
        "precio":  388300,
        "stock":  1,
        "foto":  "fotos-productos/p-03.jpg"
    },
    {
        "nombre":  "Amplificador para bajo 30W Trace Elliot Boxer 30",
        "marca":  "Trace Elliot",
        "categoria":  "Amplificadores",
        "estado":  "Outlet",
        "precio":  847200,
        "stock":  1,
        "foto":  "fotos-productos/p-04.jpg"
    },
    {
        "nombre":  "Amplificador para bajo 60W Laney HCM60B",
        "marca":  "Laney",
        "categoria":  "Amplificadores",
        "estado":  "Outlet",
        "precio":  794250,
        "stock":  1,
        "foto":  "fotos-productos/p-05.jpg"
    },
    {
        "nombre":  "Amplificador para bajo 80W Xpression BP80",
        "marca":  "Xpression",
        "categoria":  "Amplificadores",
        "estado":  "Outlet",
        "precio":  617750,
        "stock":  1,
        "foto":  "fotos-productos/p-06.jpg"
    },
    {
        "nombre":  "Amplificador para eléctrica 15W Crate Flexawave 15",
        "marca":  "Crate",
        "categoria":  "Amplificadores",
        "estado":  "Discontinuado",
        "precio":  344175,
        "stock":  2,
        "foto":  "fotos-productos/p-07.jpg"
    },
    {
        "nombre":  "Amplificador para eléctrica 15W Randall Big Dog 15T",
        "marca":  "Randall",
        "categoria":  "Amplificadores",
        "estado":  "Outlet",
        "precio":  247100,
        "stock":  1,
        "foto":  "fotos-productos/p-08.jpg"
    },
    {
        "nombre":  "Amplificador para eléctrica 20W Hiwatt G20",
        "marca":  "Hiwatt",
        "categoria":  "Amplificadores",
        "estado":  "Outlet",
        "precio":  458900,
        "stock":  1,
        "foto":  "fotos-productos/p-09.jpg"
    },
    {
        "nombre":  "Amplificador para eléctrica 25W Tube Works Tube Drive 6025",
        "marca":  "Tube Works",
        "categoria":  "Amplificadores",
        "estado":  "Outlet",
        "precio":  882500,
        "stock":  1,
        "foto":  "fotos-productos/p-10.jpg"
    },
    {
        "nombre":  "Simulador de Gabinete Marshall SE100",
        "marca":  "Marshall",
        "categoria":  "Amplificadores",
        "estado":  "Outlet",
        "precio":  1588500,
        "stock":  1,
        "foto":  "fotos-productos/p-11.jpg"
    },
    {
        "nombre":  "Amplificador para bajo 65W Trace Elliot Commando 10",
        "marca":  "Trace",
        "categoria":  "Amplificadores",
        "estado":  "Discontinuado",
        "precio":  2029750,
        "stock":  1,
        "foto":  "fotos-productos/p-12.jpg"
    },
    {
        "nombre":  "Amplificador para bajo Trace Elliot Boxer 65",
        "marca":  "Trace",
        "categoria":  "Amplificadores",
        "estado":  "Discontinuado",
        "precio":  1853250,
        "stock":  1,
        "foto":  "fotos-productos/p-13.jpg"
    },
    {
        "nombre":  "Bafle portátil Senon Bluetooth/Radio FM/USB",
        "marca":  "Senon",
        "categoria":  "Audio y estudio",
        "estado":  "Outlet",
        "precio":  39000,
        "stock":  5,
        "foto":  "fotos-productos/p-14.webp"
    },
    {
        "nombre":  "Bafle pasivo ZKX MK1535",
        "marca":  "Zkx",
        "categoria":  "Audio y estudio",
        "estado":  "Outlet",
        "precio":  706000,
        "stock":  2,
        "foto":  "fotos-productos/p-15.jpg"
    },
    {
        "nombre":  "Pedal Zoom guitarra PD-01",
        "marca":  "Zoom",
        "categoria":  "Guitarras",
        "estado":  "Outlet",
        "precio":  176500,
        "stock":  1,
        "foto":  "fotos-productos/p-16.jpg"
    },
    {
        "nombre":  "Secuenciador Kawai Q80",
        "marca":  "Kawai",
        "categoria":  "Audio y estudio",
        "estado":  "Outlet",
        "precio":  264750,
        "stock":  1,
        "foto":  "fotos-productos/p-17.jpg"
    },
    {
        "nombre":  "Encordado bajo D’Addario ESXL170",
        "marca":  "Daddario",
        "categoria":  "Accesorios",
        "estado":  "Outlet",
        "precio":  91341,
        "stock":  1,
        "foto":  "fotos-productos/p-18.jpg"
    },
    {
        "nombre":  "Encordado bajo Elixir Nanoweb 14002",
        "marca":  "Elixir",
        "categoria":  "Accesorios",
        "estado":  "Outlet",
        "precio":  52950,
        "stock":  1,
        "foto":  "fotos-productos/p-19.jpg"
    },
    {
        "nombre":  "Estuche semi rígido para eléctrica SKB SC-66",
        "marca":  "Skb",
        "categoria":  "Accesorios",
        "estado":  "Outlet",
        "precio":  194150,
        "stock":  1,
        "foto":  "fotos-productos/p-20.jpg"
    },
    {
        "nombre":  "Grabadora digital 8 canales Boss BR8",
        "marca":  "Boss",
        "categoria":  "Audio y estudio",
        "estado":  "Outlet",
        "precio":  617750,
        "stock":  1,
        "foto":  "fotos-productos/p-21.webp"
    },
    {
        "nombre":  "Guitarra clásica Aurelio y Jose Fernandez",
        "marca":  "Luthier",
        "categoria":  "Guitarras",
        "estado":  "Outlet",
        "precio":  469116,
        "stock":  1,
        "foto":  "fotos-productos/p-22.jpg"
    },
    {
        "nombre":  "Guitarra electrocriolla Alhambra 5P-CW-E2",
        "marca":  "Alhambra",
        "categoria":  "Guitarras",
        "estado":  "Outlet",
        "precio":  3453184,
        "stock":  1,
        "foto":  "fotos-productos/p-23.jpg"
    },
    {
        "nombre":  "Guitarra clásica Gracia -Usada- D",
        "marca":  "Gracia",
        "categoria":  "Guitarras",
        "estado":  "Usado",
        "precio":  600100,
        "stock":  1,
        "foto":  "fotos-productos/p-24.jpg"
    },
    {
        "nombre":  "Guitarra clásica Gracia -Usada- F",
        "marca":  "Gracia",
        "categoria":  "Guitarras",
        "estado":  "Usado",
        "precio":  670700,
        "stock":  1,
        "foto":  "fotos-productos/p-25.jpg"
    },
    {
        "nombre":  "Micrófono dinámico podio AKG D542 ST-S",
        "marca":  "Akg",
        "categoria":  "Micrófonos",
        "estado":  "Outlet",
        "precio":  405950,
        "stock":  2,
        "foto":  "fotos-productos/p-26.jpg"
    },
    {
        "nombre":  "Micrófono Condenser audio-Technica mano AT2010",
        "marca":  "Audio Technica",
        "categoria":  "Micrófonos",
        "estado":  "Discontinuado",
        "precio":  273575,
        "stock":  1,
        "foto":  "fotos-productos/p-27.jpg"
    },
    {
        "nombre":  "Micrófono Condenser Røde Broadcaster",
        "marca":  "Rode",
        "categoria":  "Micrófonos",
        "estado":  "Outlet",
        "precio":  1588500,
        "stock":  1,
        "foto":  "fotos-productos/p-28.jpg"
    },
    {
        "nombre":  "Micrófono Condenser Samson MTR101",
        "marca":  "Samson",
        "categoria":  "Micrófonos",
        "estado":  "Outlet",
        "precio":  308875,
        "stock":  2,
        "foto":  "fotos-productos/p-29.webp"
    },
    {
        "nombre":  "Micrófono dinámico audio-Technica ATM410",
        "marca":  "Audio Technica",
        "categoria":  "Micrófonos",
        "estado":  "Outlet",
        "precio":  282400,
        "stock":  1,
        "foto":  "fotos-productos/p-30.jpg"
    },
    {
        "nombre":  "Micrófono dinámico Audix CD11",
        "marca":  "Audix",
        "categoria":  "Micrófonos",
        "estado":  "Outlet",
        "precio":  158850,
        "stock":  1,
        "foto":  "fotos-productos/p-31.jpg"
    },
    {
        "nombre":  "Micrófono dinámico Samson Csmic",
        "marca":  "Samson",
        "categoria":  "Micrófonos",
        "estado":  "Outlet",
        "precio":  194150,
        "stock":  1,
        "foto":  "fotos-productos/p-32.jpg"
    },
    {
        "nombre":  "Micrófono dinámico Shure BG1.1",
        "marca":  "Shure",
        "categoria":  "Micrófonos",
        "estado":  "Outlet",
        "precio":  308875,
        "stock":  1,
        "foto":  "fotos-productos/p-33.jpg"
    },
    {
        "nombre":  "Micrófono dinámico Shure BG2.1",
        "marca":  "Shure",
        "categoria":  "Micrófonos",
        "estado":  "Outlet",
        "precio":  345940,
        "stock":  2,
        "foto":  "fotos-productos/p-34.jpg"
    },
    {
        "nombre":  "Micrófono dinámico Shure SM58-X2U",
        "marca":  "Shure",
        "categoria":  "Micrófonos",
        "estado":  "Outlet",
        "precio":  873675,
        "stock":  1,
        "foto":  "fotos-productos/p-35.jpg"
    },
    {
        "nombre":  "Micrófono dinámico Sony F-710",
        "marca":  "Sony",
        "categoria":  "Micrófonos",
        "estado":  "Outlet",
        "precio":  134140,
        "stock":  1,
        "foto":  "fotos-productos/p-36.webp"
    },
    {
        "nombre":  "Micrófono dinámico Technical Pro I-57",
        "marca":  "Technical Pro",
        "categoria":  "Micrófonos",
        "estado":  "Outlet",
        "precio":  188855,
        "stock":  1,
        "foto":  "fotos-productos/p-37.jpg"
    },
    {
        "nombre":  "Set micrófono de mano JTS NXB-8V",
        "marca":  "Jts",
        "categoria":  "Micrófonos",
        "estado":  "Outlet",
        "precio":  1147250,
        "stock":  1,
        "foto":  "fotos-productos/p-38.jpg"
    },
    {
        "nombre":  "Micrófono Condenser para batería JTS CX505",
        "marca":  "Jts",
        "categoria":  "Micrófonos",
        "estado":  "Outlet",
        "precio":  166687,
        "stock":  2,
        "foto":  "fotos-productos/p-39.jpg"
    },
    {
        "nombre":  "Micrófono Condenser para instrumento JTS CX-500",
        "marca":  "Jts",
        "categoria":  "Micrófonos",
        "estado":  "Outlet",
        "precio":  282400,
        "stock":  1,
        "foto":  "fotos-productos/p-40.jpg"
    },
    {
        "nombre":  "Micrófono Condenser para vientos JTS CX-508",
        "marca":  "Jts",
        "categoria":  "Micrófonos",
        "estado":  "Outlet",
        "precio":  220625,
        "stock":  1,
        "foto":  "fotos-productos/p-41.jpg"
    },
    {
        "nombre":  "Micrófono dinámico para armónica Nady VHM-7",
        "marca":  "Nady",
        "categoria":  "Micrófonos",
        "estado":  "Outlet",
        "precio":  264750,
        "stock":  1,
        "foto":  "fotos-productos/p-42.jpg"
    },
    {
        "nombre":  "Micrófono dinámico para bombo Nady DM90",
        "marca":  "Nady",
        "categoria":  "Micrófonos",
        "estado":  "Outlet",
        "precio":  211800,
        "stock":  1,
        "foto":  "fotos-productos/p-43.jpg"
    },
    {
        "nombre":  "Micrófono Condenser Cad U39 USB",
        "marca":  "Cad",
        "categoria":  "Audio y estudio",
        "estado":  "Outlet",
        "precio":  247100,
        "stock":  1,
        "foto":  "fotos-productos/p-44.jpg"
    },
    {
        "nombre":  "Micrófono Condenser Cad Zoe USB",
        "marca":  "Cad",
        "categoria":  "Audio y estudio",
        "estado":  "Outlet",
        "precio":  176500,
        "stock":  1,
        "foto":  "fotos-productos/p-45.jpg"
    },
    {
        "nombre":  "Micrófono Condenser Superficie AKG C 400 BL",
        "marca":  "Akg",
        "categoria":  "Micrófonos",
        "estado":  "Outlet",
        "precio":  264750,
        "stock":  2,
        "foto":  "fotos-productos/p-46.jpg"
    },
    {
        "nombre":  "Micrófono set Condenser Cad GXL1800SP",
        "marca":  "Cad",
        "categoria":  "Micrófonos",
        "estado":  "Outlet",
        "precio":  282400,
        "stock":  1,
        "foto":  "fotos-productos/p-47.jpg"
    },
    {
        "nombre":  "Micrófono Condenser instrumentos JTS TX9",
        "marca":  "Jts",
        "categoria":  "Micrófonos",
        "estado":  "Discontinuado",
        "precio":  211800,
        "stock":  3,
        "foto":  "fotos-productos/p-48.jpg"
    },
    {
        "nombre":  "Micrófono Condenser JTS NX9",
        "marca":  "Jts",
        "categoria":  "Micrófonos",
        "estado":  "Discontinuado",
        "precio":  155320,
        "stock":  4,
        "foto":  "fotos-productos/p-49.jpg"
    },
    {
        "nombre":  "Micrófono dinámico audio-Technica mano MB 3K/C",
        "marca":  "Audio Technica",
        "categoria":  "Micrófonos",
        "estado":  "Outlet",
        "precio":  211800,
        "stock":  1,
        "foto":  "fotos-productos/p-50.jpg"
    },
    {
        "nombre":  "Micrófono dinámico de mano AKG D44",
        "marca":  "Akg",
        "categoria":  "Micrófonos",
        "estado":  "Outlet",
        "precio":  61775,
        "stock":  2,
        "foto":  "fotos-productos/p-51.jpg"
    },
    {
        "nombre":  "Micrófono dinámico JTS mano NX7",
        "marca":  "Jts",
        "categoria":  "Micrófonos",
        "estado":  "Discontinuado",
        "precio":  264750,
        "stock":  2,
        "foto":  "fotos-productos/p-52.jpg"
    },
    {
        "nombre":  "Mixer 8 canales Inter-M SMX-812",
        "marca":  "Interm",
        "categoria":  "Audio y estudio",
        "estado":  "Outlet",
        "precio":  264750,
        "stock":  1,
        "foto":  "fotos-productos/p-53.jpg"
    },
    {
        "nombre":  "Pedal Line 6 Crunchtone Tone Core",
        "marca":  "Line 6",
        "categoria":  "Pedales y efectos",
        "estado":  "Outlet",
        "precio":  202975,
        "stock":  1,
        "foto":  "fotos-productos/p-54.jpg"
    },
    {
        "nombre":  "Pedal Overdrive para guitarra Dod Mystic Blues",
        "marca":  "Dod",
        "categoria":  "Guitarras",
        "estado":  "Outlet",
        "precio":  264750,
        "stock":  1,
        "foto":  "fotos-productos/p-55.jpg"
    },
    {
        "nombre":  "Pedal Overdrive Tube Works Tube Driver 910",
        "marca":  "Tube Works",
        "categoria":  "Pedales y efectos",
        "estado":  "Outlet",
        "precio":  441250,
        "stock":  1,
        "foto":  "fotos-productos/p-56.jpg"
    },
    {
        "nombre":  "Pedalera multiefecto Korg AX5B",
        "marca":  "Korg",
        "categoria":  "Pedales y efectos",
        "estado":  "Outlet",
        "precio":  405950,
        "stock":  2,
        "foto":  "fotos-productos/p-57.jpg"
    },
    {
        "nombre":  "Pedalera multiefecto para bajo Line 6 Bass Floor POD",
        "marca":  "Line 6",
        "categoria":  "Pedales y efectos",
        "estado":  "Outlet",
        "precio":  405950,
        "stock":  1,
        "foto":  "fotos-productos/p-58.jpg"
    },
    {
        "nombre":  "Pedalera Multiefectos Korg AX3B",
        "marca":  "Korg",
        "categoria":  "Pedales y efectos",
        "estado":  "Outlet",
        "precio":  176500,
        "stock":  4,
        "foto":  "fotos-productos/p-59.jpg"
    },
    {
        "nombre":  "Crossover 2 vías dbx 223XL",
        "marca":  "Dbx",
        "categoria":  "Pedales y efectos",
        "estado":  "Outlet",
        "precio":  617750,
        "stock":  1,
        "foto":  "fotos-productos/p-60.jpg"
    },
    {
        "nombre":  "Crossover 2/3/4 vías dbx 234",
        "marca":  "Dbx",
        "categoria":  "Pedales y efectos",
        "estado":  "Outlet",
        "precio":  617750,
        "stock":  1,
        "foto":  "fotos-productos/p-61.jpg"
    },
    {
        "nombre":  "Ecualizador 15 bandas SKP EQ215F",
        "marca":  "Skp",
        "categoria":  "Pedales y efectos",
        "estado":  "Outlet",
        "precio":  434190,
        "stock":  1,
        "foto":  "fotos-productos/p-62.jpg"
    },
    {
        "nombre":  "Sistema de sonido Soundbarrier Journey 8.0",
        "marca":  "Soundbarrier",
        "categoria":  "Audio y estudio",
        "estado":  "Outlet",
        "precio":  1765000,
        "stock":  1,
        "foto":  "fotos-productos/p-63.jpg"
    },
    {
        "nombre":  "Sistema inalámbrico Samson Stage 5",
        "marca":  "Samson",
        "categoria":  "Micrófonos",
        "estado":  "Outlet",
        "precio":  441250,
        "stock":  1,
        "foto":  "fotos-productos/p-64.jpg"
    },
    {
        "nombre":  "Guitarra eléctrica Strato Riverhead RST",
        "marca":  "Riverhead",
        "categoria":  "Guitarras",
        "estado":  "Outlet",
        "precio":  1059000,
        "stock":  1,
        "foto":  "fotos-productos/p-65.jpg"
    },
    {
        "nombre":  "Pad Trigger electrónico MS2",
        "marca":  "",
        "categoria":  "Audio y estudio",
        "estado":  "Outlet",
        "precio":  35300,
        "stock":  1,
        "foto":  "fotos-productos/p-66.jpg"
    },
    {
        "nombre":  "Xilofón Yamaha YX-500F",
        "marca":  "Yamaha",
        "categoria":  "Audio y estudio",
        "estado":  "Discontinuado",
        "precio":  9107400,
        "stock":  1,
        "foto":  "fotos-productos/p-67.jpg"
    },
    {
        "nombre":  "Mixer Yamaha 20 canales MG206C-USB",
        "marca":  "Yamaha",
        "categoria":  "Audio y estudio",
        "estado":  "Discontinuado",
        "precio":  1747350,
        "stock":  2,
        "foto":  "fotos-productos/p-68.jpg"
    },
    {
        "nombre":  "Cabezal para bajo 300W/4 Ampeg B1-RE",
        "marca":  "Ampeg",
        "categoria":  "Amplificadores",
        "estado":  "Discontinuado",
        "precio":  1412000,
        "stock":  1,
        "foto":  "fotos-productos/p-69.webp"
    },
    {
        "nombre":  "Caja para bajo 300W Ashdown ABM-115H",
        "marca":  "Ashdown",
        "categoria":  "Amplificadores",
        "estado":  "Discontinuado",
        "precio":  1588500,
        "stock":  1,
        "foto":  "fotos-productos/p-70.jpg"
    },
    {
        "nombre":  "Bajo eléctrico Fender 4 cuerdas American Standard",
        "marca":  "Fender",
        "categoria":  "Bajos",
        "estado":  "Discontinuado",
        "precio":  7060000,
        "stock":  1,
        "foto":  "fotos-productos/p-71.jpg"
    },
    {
        "nombre":  "Bajo eléctrico Fender 4 cuerdas American Standard",
        "marca":  "Fender",
        "categoria":  "Bajos",
        "estado":  "Discontinuado",
        "precio":  7060000,
        "stock":  1,
        "foto":  "fotos-productos/p-72.jpg"
    },
    {
        "nombre":  "Bajo eléctrico Rockbass 4 cuerdas Corvette",
        "marca":  "Rockbass",
        "categoria":  "Bajos",
        "estado":  "Discontinuado",
        "precio":  3530000,
        "stock":  2,
        "foto":  "fotos-productos/p-73.jpg"
    },
    {
        "nombre":  "Guitarra eléctrica Fender Stratocaster Yngwie Malmsteen",
        "marca":  "Fender",
        "categoria":  "Guitarras",
        "estado":  "Discontinuado",
        "precio":  6177500,
        "stock":  1,
        "foto":  "fotos-productos/p-74.jpg"
    },
    {
        "nombre":  "Guitarra acústica con ecualizador Taylor 320E Baritone",
        "marca":  "Taylor",
        "categoria":  "Guitarras",
        "estado":  "Discontinuado",
        "precio":  6707000,
        "stock":  1,
        "foto":  "fotos-productos/p-75.jpg"
    },
    {
        "nombre":  "Guitarra eléctrica Gibson Les Paul Classic",
        "marca":  "Gibson",
        "categoria":  "Guitarras",
        "estado":  "Discontinuado",
        "precio":  6177500,
        "stock":  1,
        "foto":  "fotos-productos/p-76.jpg"
    },
    {
        "nombre":  "Guitarra eléctrica Gibson Les Paul Studio 60s Tribute T",
        "marca":  "Gibson",
        "categoria":  "Guitarras",
        "estado":  "Discontinuado",
        "precio":  5295000,
        "stock":  1,
        "foto":  "fotos-productos/p-77.jpg"
    },
    {
        "nombre":  "Guitarra eléctrica Fender Stratocaster American Standard",
        "marca":  "Fender",
        "categoria":  "Guitarras",
        "estado":  "Discontinuado",
        "precio":  5824500,
        "stock":  1,
        "foto":  "fotos-productos/p-78.jpg"
    },
    {
        "nombre":  "Guitarra eléctrica Fender Telecaster American Standard -Segunda mano-",
        "marca":  "Fender",
        "categoria":  "Guitarras",
        "estado":  "Discontinuado",
        "precio":  5824500,
        "stock":  1,
        "foto":  "fotos-productos/p-79.webp"
    },
    {
        "nombre":  "Guitarra eléctrica Epiphone Les Paul Special SC Limited Edition",
        "marca":  "Epiphone",
        "categoria":  "Guitarras",
        "estado":  "Discontinuado",
        "precio":  2640000,
        "stock":  1,
        "foto":  "fotos-productos/p-80.jpg"
    },
    {
        "nombre":  "Trincheta Planet Waves para cables PW-CCT",
        "marca":  "Daddario,Planet Waves",
        "categoria":  "Accesorios",
        "estado":  "Discontinuado",
        "precio":  62161,
        "stock":  4,
        "foto":  "fotos-productos/p-81.jpg"
    },
    {
        "nombre":  "Bajo eléctrico LTD 4 cuerdas VINTAGE214R-3TB",
        "marca":  "Ltd",
        "categoria":  "Bajos",
        "estado":  "Vintage",
        "precio":  1588500,
        "stock":  2,
        "foto":  "fotos-productos/p-82.jpg"
    },
    {
        "nombre":  "Bajo Squier precisión Bass Vintage Modified Fretless",
        "marca":  "Squier",
        "categoria":  "Bajos",
        "estado":  "Vintage",
        "precio":  1941500,
        "stock":  3,
        "foto":  "fotos-productos/p-83.jpg"
    },
    {
        "nombre":  "Bordona Vintage 14″ 19 hilos Puresound",
        "marca":  "Puresound",
        "categoria":  "Accesorios",
        "estado":  "Vintage",
        "precio":  75970,
        "stock":  2,
        "foto":  "fotos-productos/p-84.jpg"
    },
    {
        "nombre":  "Encordado acústica GHS Vintage Bronze (VNUL – VNXL)",
        "marca":  "Ghs",
        "categoria":  "Accesorios",
        "estado":  "Vintage",
        "precio":  21381,
        "stock":  120,
        "foto":  "fotos-productos/p-85.jpg"
    },
    {
        "nombre":  "Guitarra eléctrica Squier Telecaster Vintage Modified ’72 Thinline",
        "marca":  "Squier",
        "categoria":  "Guitarras",
        "estado":  "Vintage",
        "precio":  2118000,
        "stock":  1,
        "foto":  "fotos-productos/p-86.jpg"
    },
    {
        "nombre":  "Micrófono para bajo Seymour Duncan Vintage Jazz Bass",
        "marca":  "Seymour Duncan",
        "categoria":  "Accesorios",
        "estado":  "Vintage",
        "precio":  282400,
        "stock":  1,
        "foto":  "fotos-productos/p-87.jpg"
    },
    {
        "nombre":  "Micrófono para guitarra Fender Stratocaster Vintage Noiseless – Puente –",
        "marca":  "Fender",
        "categoria":  "Accesorios",
        "estado":  "Vintage",
        "precio":  353000,
        "stock":  1,
        "foto":  "fotos-productos/p-88.jpg"
    },
    {
        "nombre":  "Micrófono para guitarra Seymour Duncan Vintage P90",
        "marca":  "Seymour Duncan",
        "categoria":  "Accesorios",
        "estado":  "Vintage",
        "precio":  300050,
        "stock":  1,
        "foto":  "fotos-productos/p-89.jpg"
    },
    {
        "nombre":  "Parche Remo Emperor Vintage Clear 10′",
        "marca":  "Remo",
        "categoria":  "Accesorios",
        "estado":  "Vintage",
        "precio":  47226,
        "stock":  1,
        "foto":  "fotos-productos/p-90.jpg"
    },
    {
        "nombre":  "Puente guitarra Redtone tremolo Vintage",
        "marca":  "Redtone",
        "categoria":  "Accesorios",
        "estado":  "Vintage",
        "precio":  58248,
        "stock":  8,
        "foto":  "fotos-productos/p-91.webp"
    },
    {
        "nombre":  "Guitarra eléctrica Squier Stratocaster HSS Vintage Modified",
        "marca":  "Squier",
        "categoria":  "Guitarras",
        "estado":  "Vintage",
        "precio":  1765000,
        "stock":  1,
        "foto":  "fotos-productos/p-92.jpg"
    }
];
