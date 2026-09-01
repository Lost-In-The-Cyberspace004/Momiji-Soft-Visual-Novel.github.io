const BotonMusica = document.getElementById('Musica');
const MusicaJuego = document.getElementById('MusicaUno');

const ListaDeMusica = document.getElementById('ListaDeMusica');
const ListadoCompleto = document.createElement('ul');

const ImagenMomijiMOF = document.getElementById('ImagenMomijiMOF');
const ListaImagenMomiji = document.createElement('img');
const ImagenMomijiNotas = document.getElementById('MomijiNotas');
const MomijiNotas = document.createElement('img');

const BotonNotas = document.getElementById('BotonNotas');
const NotasDelDesarrollador = document.getElementById('NotasDelDesarrollador');
const NotasCreate = document.createElement('p');

let ControlDeNotas = 0;
let ControlDeMusica = 0;
let Dialogos = 0;
let cambioDeCapitulo = 1;

const BotonJugar = document.getElementById('BotonJugar');

BotonMusica.addEventListener('click', (event) => {
    ControlDeMusica += 1;
    if (ControlDeMusica == 1) {

        ListaDeMusica.style.display = "block";

        BotonMusica.textContent = "⭡ Musica ⭡"
        MusicaJuego.play();

        ListaImagenMomiji.src = "Imagenes/Momiji_My_Love.jpg";
        ListaImagenMomiji.style.width = "30%";
        ListaImagenMomiji.style.border = "2px solid white";
        ListaImagenMomiji.style.boxShadow = "2px 2px 8px black";
        ListaImagenMomiji.style.borderRadius = "22px";
        ImagenMomijiMOF.appendChild(ListaImagenMomiji);

        ListadoCompleto.innerHTML = "";

        const elementos = ["Love at First Sight - Hopping_Steps", "Love at First Sight - Missing_Love =========================> (sonando)", "Love at First Sight - One_Plus_Two_Equal", "Love at First Sight - Side_Statement ============> (De las que mas me gusta)", "Love at First Sight -  Wave_Of_The_Spell", "Touhou Mountain of faith - Fall of Fall ~ Autumnal Waterfall =====> (Mi favorita)"];
        elementos.forEach(function (ListaMusical) {
            const ItemsDeLista = document.createElement('li');
            ItemsDeLista.textContent = ListaMusical;
            ListadoCompleto.appendChild(ItemsDeLista);
        });

        ListaDeMusica.appendChild(ListadoCompleto);

    } else if (ControlDeMusica == 2) {
        //Detener musica
        MusicaJuego.pause();
        MusicaJuego.currentTime = 0;
        ControlDeMusica = 0;
        ListadoCompleto.remove();
        ListaImagenMomiji.remove();
        BotonMusica.textContent = "⭣ Musica ⭣"
        ListaDeMusica.style.display = "none";
    }
});

BotonNotas.addEventListener('click', (event) => {
    ControlDeNotas += 1;
    console.log(ControlDeNotas);

    MomijiNotas.src = "Imagenes/Momiji_My_Love_2.jpg";
    MomijiNotas.style.width = "30%";
    MomijiNotas.style.border = "2px solid black";
    MomijiNotas.style.boxShadow = "2px 2px 8px black";
    MomijiNotas.style.borderRadius = "22px";
    ImagenMomijiNotas.appendChild(MomijiNotas);

    if (ControlDeNotas == 1) {
        NotasCreate.textContent = "Un juego hecho con mucho amor hacia a mi personaje favorito del universo de touhou. Una proyectada mia basicamente JAJAJA!";
        NotasCreate.style.textAlign = "center";
        NotasCreate.style.fontSize = "20px";

        NotasDelDesarrollador.style.display = "block";
        NotasDelDesarrollador.appendChild(NotasCreate);

        BotonNotas.textContent = "⭡ Mis notas ⭡";


    } else if (ControlDeNotas == 2) {
        NotasDelDesarrollador.style.display = "none";
        ControlDeNotas = 0;
        BotonNotas.textContent = "⭣ Mis notas ⭣";
    }
});

const InterfazDos = document.getElementById('ContenedorInterfazDos');
const InterfazUno = document.getElementById('InterfazUno');

const ControladorDeDialogos = document.createElement('p');
const ControlDeBotones = document.createElement('button');

const NombreCaps = document.getElementById('NombreCaps');
const ContenedorTitulos = document.getElementById('ContenedorTitulos');

const ContenedorDeDialogos = document.getElementById('ContenedorDeDialogos');
const ContenedorDeBotones = document.getElementById('ContenedorDeBotones');

const ImagenMomiji = document.getElementById('ImagenMomiji');

const Titulo = document.getElementById('Titulo');
const Sonidos = document.getElementById('Sonidos');

BotonJugar.addEventListener('click', (event) => {
    Dialogos += 1;
    console.log(Dialogos);
    DialogosCap1();

    Titulo.textContent = "Capitulo 1";

    NombreCaps.style.textAlign = "center";
    NombreCaps.style.color = "white";
    NombreCaps.style.textShadow = "2px 2px 2px black";
    NombreCaps.textContent = "Hay que conocernos primero~";
    ContenedorTitulos.appendChild(NombreCaps);

    ControladorDeDialogos.style.textAlign = "center";
    ContenedorDeDialogos.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";
    ContenedorDeDialogos.style.margin = "1% auto 0 auto"; // Centra el contenedor horizontalmente
    ContenedorDeDialogos.style.overflowY = "auto";  // Si el texto supera los 120px, añade scroll vertical automático
    ContenedorDeDialogos.style.width = "80%";
    ContenedorDeDialogos.style.height = "100px";
    ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    ContenedorDeDialogos.style.padding = "2%";
    ContenedorDeDialogos.style.border = "2px solid white";
    ContenedorDeDialogos.style.borderRadius = "10px";
    ContenedorDeDialogos.style.boxShadow = "2px 2px 8px black";
    ContenedorDeDialogos.style.textShadow = "2px 2px 5px black";
    ContenedorDeDialogos.appendChild(ControladorDeDialogos);

    ControlDeBotones.style.width = "150px";
    ControlDeBotones.style.height = "40px";
    ControlDeBotones.style.color = "white";
    ControlDeBotones.style.textShadow = "2px 2px 5px black";
    ControlDeBotones.style.boxShadow = "2px 2px 5px white";
    ControlDeBotones.textContent = "Continuar...";
    ControlDeBotones.style.margin = "10px";
    ControlDeBotones.style.paddingLeft = "20px";
    ControlDeBotones.style.paddingRight = "20px";
    ControlDeBotones.style.paddingTop = "5px";
    ControlDeBotones.style.paddingBottom = "5px";
    ControlDeBotones.style.backgroundColor = "rgb(0, 132, 255)";
    ContenedorDeBotones.appendChild(ControlDeBotones);

    ListaDeMusica.remove();
    NotasDelDesarrollador.remove();
    BotonPausaMusica();

});

ControlDeBotones.addEventListener('click', (event) => {
    Dialogos += 1;
    DialogosCap1();
    DialogosCap2();
    DialogosCap3();
    DialogosCap4();
    DialogosCap5();
    DialogosCap6();
    DialogosCap7();
    DialogosCap8();
    DialogosCap9();
    DialogosCap10();
})

function Tiempos() {
    ControlDeBotones.disabled = true;
    setTimeout(() => {
        ControlDeBotones.disabled = false;
    }, 10000);
}

function BotonPausaMusica() {
    let PausaDeMusica = 0;
    const PausarMusica = document.createElement('button');
    PausarMusica.textContent = "Pausar musica";
    PausarMusica.style.width = "150px";
    PausarMusica.style.height = "40px";
    PausarMusica.style.color = "white";
    PausarMusica.style.textShadow = "2px 2px 5px black";
    PausarMusica.style.boxShadow = "2px 2px 5px white";
    PausarMusica.style.margin = "10px";
    PausarMusica.style.paddingLeft = "20px";
    PausarMusica.style.paddingRight = "20px";
    PausarMusica.style.paddingTop = "5px";
    PausarMusica.style.paddingBottom = "5px";
    PausarMusica.style.backgroundColor = "red";
    ContenedorDeBotones.appendChild(PausarMusica);
    PausarMusica.addEventListener('click', (event) => {
        PausaDeMusica += 1;
        if (PausaDeMusica == 1) {
            MusicaJuego.pause();
            PausarMusica.style.backgroundColor = "yellow";
            ControlDeMusica = 2;

        } else if (PausaDeMusica == 2) {
            MusicaJuego.play();
            PausaDeMusica = 0;
            PausarMusica.style.backgroundColor = "red";
            ControlDeMusica = 1;
        }
    });
}

function DialogosCap1() {
    console.log(Dialogos);
    Tiempos();
    if (Dialogos == 1 && cambioDeCapitulo == 1) {
        InterfazDos.remove();
        MusicaJuego.src = "Musica/Hopping_Steps.mp3"
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros.png";
        InterfazUno.style.backgroundImage = "url(Imagenes/Campo.png)";
        MusicaJuego.play();

        ControladorDeDialogos.textContent = "Hace unos días Keine me llamo la atencion al salirme de los limites de la aldea y el campo. No la culpo, los youkais se han puesto algo violentos peor si consideramos que no soy nativo de este lugar y a duras penas se hablar el idioma local.";

    } else if (Dialogos == 2 && cambioDeCapitulo == 1) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_4.png";
        ControladorDeDialogos.textContent = "Pero extranio mi hogar. Dios todo es tan peligroso. Chicas con rasgos fisicos o vestimentas extravagantes disparando orbes de colores! No tengo electricidad, ni internet, ni absolutamente nada pero bueno al menos trabajo como escriba para Akyuu y como docente en la escuela de Keine. Aunque es gracioso no poder explicar bien mis temas por la barrera del idioma.";

    } else if (Dialogos == 3 && cambioDeCapitulo == 1) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";

        ControladorDeDialogos.textContent = "Creo que ire al mercado a rodearme de gente y quien sabe a lo mejor compre algo. Aunque todos me miran raro y con razón...";

    } else if (Dialogos == 4 && cambioDeCapitulo == 1) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_3.png";
        InterfazUno.style.backgroundImage = "url(Imagenes/Mercado_Aldea_De_Los_Humanos.jpg)";
        ControladorDeDialogos.textContent = "Tras regresar a la aldea Humana e ir al mercado me doy cuenta que todo esta caro... Creo. Vi a la sacerdotisa caminar con la bruja que vive en el bosque y a la Tengu vestida de Humana, esta ultima ya sabe que veo detrás de su disfraz.";

    } else if (Dialogos == 5 && cambioDeCapitulo == 1) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros.png";
        ControladorDeDialogos.textContent = "Aunque creo que le da risa que lo sepa, los Humanos de la aldea parecen desconocerlo o ignorarlo aunque esas chicas raras conocen esos trucos mejor que nadie. Keine me dice que no hable mucho con ese tipo de youkais ya que se podrian dar cuenta de que soy del mundo exterior.";

    } else if (Dialogos == 6 && cambioDeCapitulo == 1) {
        ControladorDeDialogos.textContent = "Subire la montania... Cuestion... Que es mas agradable estar en el templo Moriya que en el templo Hakurei. En este ultimo Reimu intentara sacarme hasta la ultima de mis monedas. JA! La pobre se muere de hambre";

    } else if (Dialogos == 7 && cambioDeCapitulo == 1) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_4.png";
        InterfazUno.style.backgroundImage = "url(Imagenes/Montania_Youkai.png)";
        ControladorDeDialogos.textContent = "Llego y me doy cuenta que el teleferico esta roto. Joder... Una persona normal daria media vuelta y se iria a casa pero yo no. Quizas obstinacion? terquedad? No lo se, a lo mejor por que es genuinamente agradable estar en ese lugar.";

    } else if (Dialogos == 8 && cambioDeCapitulo == 1) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros.png";
        MusicaJuego.src = "Musica/Side_Statement.mp3";
        MusicaJuego.play();
        ControladorDeDialogos.textContent = "Tras unos segundos de estar caminando buscando una manera de subir para evitar encontrarme algun Youkai hostil y a las diosas menores de la montania: Logro encontrar una subida pero poco duraria la felicidad cuando escucho una rama quebrarse";

    } else if (Dialogos == 9 && cambioDeCapitulo == 1) {
        ImagenMomiji.src = "Imagenes/Momiji/Enojada.png"
        ControladorDeDialogos.textContent = "ALTO AHI! QUIEN ERES?! UN HUMANO DE LA ALDEA?! QUE HACES POR ACÁ AMIGO?! SI SABES QUE ESTO ES TERRITORIO PROHIBIDO PARA HUMANOS?!";
        ContenedorDeDialogos.style.backgroundColor = "red";

        Dialogos = 0;
        cambioDeCapitulo = 2;

    }
}

function DialogosCap2() {
    Tiempos();
    if (Dialogos == 1 && cambioDeCapitulo == 2) {
        Titulo.textContent = "Capitulo 2";
        NombreCaps.textContent = "Nuestro primer encuentro~";
        ControladorDeDialogos.textContent = "Acaso la Hakutaku no te lo dijo Humano? o simplemente eres demaciado estupido como para ignorar las advertencias?";

    } else if (Dialogos == 2 && cambioDeCapitulo == 2) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_4.png";
        ControladorDeDialogos.textContent = "Mira, lo siento si? solo intento subir al templo Moriya es todo, no quiero problemas";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 3 && cambioDeCapitulo == 2) {
        ImagenMomiji.src = "Imagenes/Momiji/Enojada.png";
        ControladorDeDialogos.textContent = "Mira Humano: Mi trabajo es interceptar intrusos y gente despistada como tu. Para los Humanos que van a la cima de la montania esta el teleferico o es que no lo sabes?";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 4 && cambioDeCapitulo == 2) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_4.png";
        ControladorDeDialogos.textContent = "No se si te has dado cuenta pero el teleferico esta roto. No se puede usar y simplemente tome esta ruta por que considere que era la mejor para llegar a la cima.";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 5 && cambioDeCapitulo == 2) {
        ImagenMomiji.src = "Imagenes/Momiji/Pensamiento.png";
        ControladorDeDialogos.textContent = "...";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 6 && cambioDeCapitulo == 2) {
        ImagenMomiji.src = "Imagenes/Momiji/Enojada.png";
        ControladorDeDialogos.textContent = "Las Kappas no me informaron de eso...";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 7 && cambioDeCapitulo == 2) {
        ImagenMomiji.src = "Imagenes/Momiji/Indiferencia.png";
        ControladorDeDialogos.textContent = "Oh... Lo siento la verdad esa informacion no me habia llegado y te pido una disculpa Humano, sin embargo insisto en que te debes ir.";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 8 && cambioDeCapitulo == 2) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros.png";
        ControladorDeDialogos.textContent = "Asi que definitivamente no puedo subir hasta que arreglen el teleferico, no?";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 9 && cambioDeCapitulo == 2) {
        ImagenMomiji.src = "Imagenes/Momiji/Pensamiento.png";
        ControladorDeDialogos.textContent = "Me temo que si Humano.";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 10 && cambioDeCapitulo == 2) {
        ImagenMomiji.src = "Imagenes/Momiji/Yandere_1.png";
        ControladorDeDialogos.textContent = "Espera un momento Humano... Hay algo en ti que no me cuadra...";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 11 && cambioDeCapitulo == 2) {
        ControladorDeDialogos.textContent = "No hueles y mucho menos te pareces a ninguno de los humanos que conozco o los que son nativos de Gensokyo... Eres un Humano del mundo exterior verdad?";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 12 && cambioDeCapitulo == 2) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_3.png";
        ControladorDeDialogos.textContent = "Mira... No quiero problemas si? estoy protegido por la aldea, Keine y Akyuu y respeto las reglas y la convivencia con ustedes";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 13 && cambioDeCapitulo == 2) {
        ImagenMomiji.src = "Imagenes/Momiji/Superior.png";
        ControladorDeDialogos.textContent = "Puedes estar tranquilo. Tienes suerte de que ya comí y mi hambre ha sido saciada. El caso: Deberias tener cuidado Humano. A lo mejor la proxima vez que encuentres a un youkai no sea tan... Benevolente como yo. Es hora de que te vayas. Nos vemos Humano.";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 14 && cambioDeCapitulo == 2) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros.png";
        ControladorDeDialogos.textContent = "Espera, antes de que te vayas... Cual es tu nombre chica?";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
        MusicaJuego.src = "Musica/One_Plus_Two_Equal.mp3";
        MusicaJuego.play();

    } else if (Dialogos == 15 && cambioDeCapitulo == 2) {
        ImagenMomiji.src = "Imagenes/Momiji/Superior.png";
        ControladorDeDialogos.textContent = "Me llamo Momiji Inubashiri! aunque puedes decirme General Inubashiri";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 16 && cambioDeCapitulo == 2) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        ControladorDeDialogos.textContent = "Te molesta si te digo 'Momi'?";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 17 && cambioDeCapitulo == 2) {
        ImagenMomiji.src = "Imagenes/Momiji/Sonrojada.png";
        ControladorDeDialogos.textContent = "No, no me molesta. A decir verdad es un apodo muy lindo.";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 18 && cambioDeCapitulo == 2) {
        ImagenMomiji.src = "Imagenes/Momiji/Feliz.jpg";
        ControladorDeDialogos.textContent = "Me caiste bien Humano";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 19 && cambioDeCapitulo == 2) {
        ImagenMomiji.src = "Imagenes/Momiji/Timidez.png";
        ControladorDeDialogos.textContent = "Oye lamento empezar con el pie izquierdo contigo... Pero como te dije: Mi trabajo es alejar a los intrusos.";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 20 && cambioDeCapitulo == 2) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        ControladorDeDialogos.textContent = "Puedes estar tranquila. Yo entiendo tus razones para haber actuado asi Momi";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 21 && cambioDeCapitulo == 2) {
        ImagenMomiji.src = "Imagenes/Momiji/Feliz.jpg";
        ControladorDeDialogos.textContent = "Va! me parece genial que nos entendamos.";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 22 && cambioDeCapitulo == 2) {
        ImagenMomiji.src = "Imagenes/Momiji/Timidez.png";
        ControladorDeDialogos.textContent = "Oye Humano ya deberias irte y yo igual, se hace tarde para ti y yo debo volver con los mios.";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 23 && cambioDeCapitulo == 2) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        ControladorDeDialogos.textContent = "Va! cuidate Momi! espero verte pronto!";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 24 && cambioDeCapitulo == 2) {
        InterfazUno.style.backgroundImage = "url(Imagenes/Aldea_De_Los_Humanos_2.png)";
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros.png";
        ControladorDeDialogos.textContent = "Regreso a la aldea, las calles estan vacias, las farolas estan encendidas, la gente va hacia sus hogares y las puertas se cierran. Yo regreso a mi hogar... Ha sido un día interesante...";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 25 && cambioDeCapitulo == 2) {
        InterfazUno.style.backgroundImage = "url(Imagenes/Habitacion_1.png)";
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        ControladorDeDialogos.textContent = "Voy a mi habitacion en la casa que Akyuu me asigno. Como algo que habia preparado antes, me doy un banio, me lavo los dientes y me doy las buenas noches antes de cerrar los ojos";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 26 && cambioDeCapitulo == 2) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros.png";
        ControladorDeDialogos.textContent = "Mientras duermo... No puedo sacarme de la cabeza a esa chica... Tuve suerte de que no me matara... Quizas dentro de unos días deberia volver a verla. Es linda y atractiva... Bueno, me saco esas ideas de la cabeza, seria agradable volver a hablarle";
        InterfazUno.style.backgroundImage = "url(Imagenes/Habitacion_Oscura_2.png)";
    } else if (Dialogos == 27 && cambioDeCapitulo == 2) {
        ControladorDeDialogos.textContent = "Buenas noches a mi...";
        Dialogos = 0;
        cambioDeCapitulo = 3;
    }
}

function DialogosCap3() {
    Tiempos();
    if (Dialogos == 1 && cambioDeCapitulo == 3) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        InterfazUno.style.backgroundImage = "url(Imagenes/Aldea_De_Los_Humanos_1.png)";
        Titulo.textContent = "Capitulo 3";
        NombreCaps.textContent = "Deberiamos reencontrarnos~";
        ControladorDeDialogos.textContent = "Antes del amanecer me levanto, me preparo algo de comer y me doy un banio. A final de cuentas no puedo ser un mantenido ya que me moriria de hambre y seria un inutil";
    } else if (Dialogos == 2 && cambioDeCapitulo == 3) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros.png";
        ControladorDeDialogos.textContent = "Transcribir textos de algunos tomos o intentar... ENTENDER que dicen ante mi me confunde y me da un dolor de cabeza tremendo. Digo... En el colegio mi fuerte nunca fueron los idiomas y estar rodeado de extranios a los que a duras penas entiendo... Es una situacion tan lamentable para mi";
    } else if (Dialogos == 3 && cambioDeCapitulo == 3) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        ControladorDeDialogos.textContent = "Aunque admito que la unica parte genial del día es estar en la escuela de Keine, es agradable enseniar. Aunque la gran mayoria de los ninios y los youkais... Que parecen menores de edad no me entiendan, para mi sigue siendo gratificante";
    } else if (Dialogos == 4 && cambioDeCapitulo == 3) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros.png";
        ControladorDeDialogos.textContent = "Keine y Akyuu ha intensificado sus esfuerzos para ayudarme a hablar el idioma local. Estan felices de mi progreso y ya puedo comunicarme... Moderadamente mejor aunque como dije... Siguen los problemas por la barrera del idioma.";
    } else if (Dialogos == 5 && cambioDeCapitulo == 3) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        InterfazUno.style.backgroundImage = "url(Imagenes/Aldea_De_Los_Humanos_2.png)";
        ControladorDeDialogos.textContent = "Y tras un largo día el sol se vuelve a ocultar...";
    } else if (Dialogos == 6 && cambioDeCapitulo == 3) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_3.png";
        ControladorDeDialogos.textContent = "Estuve hablando con Keine... Me dijo que por nada en el mundo interactuara con los Youkais de la montania... Me dijo que podian ser muy hostiles, recordandome el comportamiento de ellos recientemente. Además de que si busco bendiciones hay 2 templos cerca";
    } else if (Dialogos == 7 && cambioDeCapitulo == 3) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_4.png";
        ControladorDeDialogos.textContent = "Hablamos un buen rato, le dije que no me agradaba el templo Myouren y que Reimu me exprimiria economicamente. Ella me dio la razón pero insistio en que era eso o morir por un youkai. Entiendo su preocupacion... Sin embargo... Insisto en subir la montania... Aunque ya no deseo solo subir, me gustaria volver a hablar con Momi";
    } else if (Dialogos == 8 && cambioDeCapitulo == 3) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros.png";
        InterfazUno.style.backgroundImage = "url(Imagenes/Habitacion_1.png)";
        ControladorDeDialogos.textContent = "Tras hablar con Keine vuelvo a mi casa... Hoy no tuve ganas de comer pero si me he duchado, lavado los dientes y descansar además de guardar mi comida.";
    } else if (Dialogos == 9 && cambioDeCapitulo == 3) {
        InterfazUno.style.backgroundImage = "url(Imagenes/Habitacion_Oscura_2.png)";
        ControladorDeDialogos.textContent = "En definitiva... Ire a verla... Buenas noches...";
    } else if (Dialogos == 10 && cambioDeCapitulo == 3) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        InterfazUno.style.backgroundImage = "url(Imagenes/Aldea_De_Los_Humanos_1.png)";
        ControladorDeDialogos.textContent = "Y vuelve a amanecer... Le dije a Keine que me sentia mal fisicamente. Sere honesto conmigo mismo: me siento como la peor persona por mentirle pero quiero ver a la chica de la otra vez. Muy simp de mi parte pero quiero volver a hablarle.";
    } else if (Dialogos == 11 && cambioDeCapitulo == 3) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        InterfazUno.style.backgroundImage = "url(Imagenes/Montania_Youkai.png)";
        ControladorDeDialogos.textContent = "Lo que mas se me complico al salir de la aldea fue no encontrarme con Keine o Akyuu pero despues de un largo rato de estar detras de casas y puestos escondiendome al fin pude salir";
    } else if (Dialogos == 12 && cambioDeCapitulo == 3) {
        ImagenMomiji.src = "Imagenes/Momiji/Feliz.jpg";
        ControladorDeDialogos.textContent = "Volviste! Si te soy honesta pensé que te habias aterrado y preferias no volver. Es agradable verte de nuevo, te vi desde que saliste de la aldea Humana.";
        ContenedorDeDialogos.style.backgroundColor = "red";
        MusicaJuego.src = "Musica/Missing_Love.mp3";
        MusicaJuego.play();
    } else if (Dialogos == 13 && cambioDeCapitulo == 3) {
        ImagenMomiji.src = "Imagenes/Momiji/Esperando.png";
        ControladorDeDialogos.textContent = "Tengo tiempo para hablar asi que podemos conocernos un poco. No crees?";
    } else if (Dialogos == 14 && cambioDeCapitulo == 3) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        ControladorDeDialogos.textContent = "JA! No te habia visto Momi, que placer mas grande el mio volver a verte. Cómo estás?";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 15 && cambioDeCapitulo == 3) {
        ImagenMomiji.src = "Imagenes/Momiji/Feliz.jpg";
        ControladorDeDialogos.textContent = "Me encuentro mejor ahora que te veo. Que has hecho? poco o nada se de ti";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 16 && cambioDeCapitulo == 3) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        ControladorDeDialogos.textContent = "Nada fuera de lo normal. Lo que siempre hago desde que llegue acá jeje";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 17 && cambioDeCapitulo == 3) {
        ImagenMomiji.src = "Imagenes/Momiji/Feliz.jpg";
        ControladorDeDialogos.textContent = "Ah si? a que te dedicas en la aldea Humana?";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 18 && cambioDeCapitulo == 3) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        ControladorDeDialogos.textContent = "Yo... Me dedico a transcibir tomos y... Ensenio cosas en la aldea de Keine jejeje";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 19 && cambioDeCapitulo == 3) {
        ImagenMomiji.src = "Imagenes/Momiji/Superior.png";
        ControladorDeDialogos.textContent = "Ohhh! un profesor y un escriba! eso es genial!";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 20 && cambioDeCapitulo == 3) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        ControladorDeDialogos.textContent = "Ni tanto diria yo... Jejeje... Aun tengo problemas al escribir y comunicarme...";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 21 && cambioDeCapitulo == 3) {
        ImagenMomiji.src = "Imagenes/Momiji/Pensamiento.png";
        ControladorDeDialogos.textContent = "Bueno al menos sabes lo basico. Digo, estas teniendo una conversacion fluida conmigo";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 22 && cambioDeCapitulo == 3) {
        ImagenMomiji.src = "Imagenes/Momiji/Timidez.png";
        ControladorDeDialogos.textContent = "Oye no quiero ser imprudente pero como es de donde vienes?";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 23 && cambioDeCapitulo == 3) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros.png";
        ControladorDeDialogos.textContent = "Bueno... Hay muchas cosas... Tecnologia y cosas de esa indole... No hay magia y todo eso...";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 24 && cambioDeCapitulo == 3) {
        ImagenMomiji.src = "Imagenes/Momiji/Feliz.jpg";
        ControladorDeDialogos.textContent = "Suena muy aburrido a decir verdad";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 25 && cambioDeCapitulo == 3) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        ControladorDeDialogos.textContent = "Oye Momi y tu a que te dedicas?";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 26 && cambioDeCapitulo == 3) {
        ImagenMomiji.src = "Imagenes/Momiji/Feliz.jpg";
        ControladorDeDialogos.textContent = "Soy patrullera! mi trabajo es alejar o interceptar intrusos! o gente despistada como tu!";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 27 && cambioDeCapitulo == 3) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros.png";
        ControladorDeDialogos.textContent = "Wow... Osea tienes luchas y todo eso no? digo... Los Youkais acá tienen... Esos poderes de lanzar orbes";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 28 && cambioDeCapitulo == 3) {
        ImagenMomiji.src = "Imagenes/Momiji/Sonrojada.png";
        ControladorDeDialogos.textContent = "JAJA! creo que estas hechando muchas flores a mi labor, no es tan asi... Simplemente advertir y si las cosas se salen de control si tengo que pelear";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 29 && cambioDeCapitulo == 3) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        ControladorDeDialogos.textContent = "Ohhhh eres como una policia! En mi mundo la gente que mantiene el orden y la paz en sitios son los policias";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 30 && cambioDeCapitulo == 3) {
        ImagenMomiji.src = "Imagenes/Momiji/Esperando.png";
        ControladorDeDialogos.textContent = "No se que es un policia pero... Bueno solo dire que si! si soy una policia!";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 31 && cambioDeCapitulo == 3) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros.png";
        ControladorDeDialogos.textContent = "Oye Momi... Tengo una pregunta para ti... Pero me gustaria primero preguntar si no te va a molestar o incomodar";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 32 && cambioDeCapitulo == 3) {
        ImagenMomiji.src = "Imagenes/Momiji/Feliz.jpg";
        ControladorDeDialogos.textContent = "Claro, dime!";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 33 && cambioDeCapitulo == 3) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros.png";
        ControladorDeDialogos.textContent = "Por que no me comiste o mataste cuando te diste cuenta que no soy de acá?";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 34 && cambioDeCapitulo == 3) {
        ImagenMomiji.src = "Imagenes/Momiji/Pensamiento.png";
        ControladorDeDialogos.textContent = "...";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 35 && cambioDeCapitulo == 3) {
        ImagenMomiji.src = "Imagenes/Momiji/Yandere_1.png";
        ControladorDeDialogos.textContent = "Quieres que lo haga?";
    } else if (Dialogos == 36 && cambioDeCapitulo == 3) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_4.png";
        ControladorDeDialogos.textContent = "NO! ABSOLUTAMENTE NO!";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 37 && cambioDeCapitulo == 3) {
        ImagenMomiji.src = "Imagenes/Momiji/Feliz.jpg";
        ControladorDeDialogos.textContent = "JA! DEBISTE VER TU CARA!";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 38 && cambioDeCapitulo == 3) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_4.png";
        ControladorDeDialogos.textContent = "Oye! No es gracioso";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 39 && cambioDeCapitulo == 3) {
        ImagenMomiji.src = "Imagenes/Momiji/Feliz.jpg";
        ControladorDeDialogos.textContent = "Para mi si lo es JAJAJA!";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 40 && cambioDeCapitulo == 3) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        ControladorDeDialogos.textContent = "Jejeje... Ah... Me la he pasado muy bien hoy";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 41 && cambioDeCapitulo == 3) {
        ImagenMomiji.src = "Imagenes/Momiji/Esperando.png";
        ControladorDeDialogos.textContent = "Oye! te gustaria ir a un lugar conmigo antes de que caiga la noche?";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 42 && cambioDeCapitulo == 3) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros.png";
        ControladorDeDialogos.textContent = "Va! que sitio es o que?";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 43 && cambioDeCapitulo == 3) {
        ImagenMomiji.src = "Imagenes/Momiji/Sonrojada.png";
        ControladorDeDialogos.textContent = "Solo sigueme~";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 44 && cambioDeCapitulo == 3) {
        InterfazUno.style.backgroundImage = "url(Imagenes/Cascadas.jpg)";
        ControladorDeDialogos.textContent = "Y aqui es donde vivo yo~ Mi hogar y el de mis conocidos, amigos y familiares estan hacia arriba de las cascada";
        MusicaJuego.src = "Musica/Momiji_Theme.mp3";
        MusicaJuego.play();
    } else if (Dialogos == 45 && cambioDeCapitulo == 3) {
        ImagenMomiji.src = "Imagenes/Momiji/Esperando.png";
        ControladorDeDialogos.textContent = "Por si deseas visitarme algún día";
    } else if (Dialogos == 46 && cambioDeCapitulo == 3) {
        ControladorDeDialogos.textContent = "Puedes estar tranquilo. Ya les he hablado de ti. Solo usa el apodo con que me llamas vale?";
    } else if (Dialogos == 47 && cambioDeCapitulo == 3) {
        ImagenMomiji.src = "Imagenes/Momiji/Sonrojada.png";
        ControladorDeDialogos.textContent = "Es hora de que regreses a casa";
        MusicaJuego.src = "Musica/Missing_Love.mp3";
        MusicaJuego.play();
    } else if (Dialogos == 48 && cambioDeCapitulo == 3) {
        ImagenMomiji.src = "Imagenes/Momiji/Esperando.png";
        InterfazUno.style.backgroundImage = "url(Imagenes/Aldea_De_Los_Humanos_2.png)";
        ControladorDeDialogos.textContent = "No puedo entrar a la aldea Humana por las leyes de convicencia y te debo dejar acá";
    } else if (Dialogos == 49 && cambioDeCapitulo == 3) {
        ImagenMomiji.src = "Imagenes/Momiji/Sonrojada.png";
        ControladorDeDialogos.textContent = "Antes de irme";
    } else if (Dialogos == 50 && cambioDeCapitulo == 3) {
        ImagenMomiji.src = "Imagenes/Momiji/Beso.png";
        ControladorDeDialogos.textContent = "Muack";
    } else if (Dialogos == 51 && cambioDeCapitulo == 3) {
        ImagenMomiji.src = "Imagenes/Momiji/Sonrojada.png";
        ControladorDeDialogos.textContent = "Descansa~ te vere pronto~";
    } else if (Dialogos == 52 && cambioDeCapitulo == 3) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros.png";
        ControladorDeDialogos.textContent = "...";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 53 && cambioDeCapitulo == 3) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_3.png";
        ControladorDeDialogos.textContent = "Ha sido un día maravilloso...";
    } else if (Dialogos == 54 && cambioDeCapitulo == 3) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros.png";
        InterfazUno.style.backgroundImage = "url(Imagenes/Habitacion_Oscura_2.png)";
        ControladorDeDialogos.textContent = "Creo...";
    } else if (Dialogos == 55 && cambioDeCapitulo == 3) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        ControladorDeDialogos.textContent = "Creo que estoy enamorado...";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
        Dialogos = 0;
        cambioDeCapitulo = 4;
    }
}

function DialogosCap4() {
    Tiempos();
    if (Dialogos == 1 && cambioDeCapitulo == 4) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        InterfazUno.style.backgroundImage = "url(Imagenes/Aldea_De_Los_Humanos_1.png)";
        Titulo.textContent = "Capitulo 4";
        NombreCaps.textContent = "No puedo parar de pensar en ti~";
        ControladorDeDialogos.textContent = "Tras lo de ayer me levante mas animado que nunca. Estoy muy feliz. Prepare mi comida favorita, comí feliz pensando en lo que pasó ayer en la noche.";
        MusicaJuego.src = "Musica/Hopping_Steps.mp3";
        MusicaJuego.play();
    } else if (Dialogos == 2 && cambioDeCapitulo == 4) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_3.png";
        ControladorDeDialogos.textContent = "Cuando termine de hacer mis labores con Akyuu y fui a dar las clases con Keine: Ella me llevo a un lado y me dijo que sabia lo que hice, sobre la mentira y que vio lo que final";
    } else if (Dialogos == 3 && cambioDeCapitulo == 4) {
        ControladorDeDialogos.textContent = "Me dijo que tuviera cuidado: Que no soy un nativo ni tengo capacidad espiritual para aprender magia y que aunque soy muy sociable me dijo que tuviera cuidado ya que mi japones local esta aun muy roto";
    } else if (Dialogos == 4 && cambioDeCapitulo == 4) {
        ControladorDeDialogos.textContent = "Aun asi, me dijo que se alegraba de que yo encontra a alguien que parecia genuinamente feliz de pasar tiempo conmigo. Luego de decir eso, me ordeno continuar con mis labores";
    } else if (Dialogos == 5 && cambioDeCapitulo == 4) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros.png";
        ControladorDeDialogos.textContent = "Esta genuinamente feliz y a su vez preocupada aunque debo de tener en cuenta todo lo que dice, despues de todo tengo que conocer mis limites";
    } else if (Dialogos == 6 && cambioDeCapitulo == 4) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        InterfazUno.style.backgroundImage = "url(Imagenes/Montania_Youkai.png)"
        ControladorDeDialogos.textContent = "Tras terminar mis labores, me pregunte si podriamos vernos de nuevo. Salí de la aldea aunque esta vez Keine me vio, antes de irme me dio un abrazo y me recordo cuidarme, mencionando que esperaba que regresara";
    } else if (Dialogos == 7 && cambioDeCapitulo == 4) {
        ImagenMomiji.src = "Imagenes/Momiji/Esperando.png";
        ControladorDeDialogos.textContent = "Hola! me alegra volver a verte! se esta volviendo una costumbre que vengas todas las tardes a visitarme no crees?";
        ContenedorDeDialogos.style.backgroundColor = "red";
        MusicaJuego.src = "Musica/Missing_Love.mp3";
        MusicaJuego.play();
    } else if (Dialogos == 8 && cambioDeCapitulo == 4) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        ControladorDeDialogos.textContent = "Oh! HOLA MOMI! Sis! Supongo que lo volvere costumbre jajajaja";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 9 && cambioDeCapitulo == 4) {
        ImagenMomiji.src = "Imagenes/Momiji/Feliz.jpg";
        ControladorDeDialogos.textContent = "Ahora que tengo tu atencion, te gustaria ir a las cascadas? es lindo estar allá";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 10 && cambioDeCapitulo == 4) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        ControladorDeDialogos.textContent = "Va! me encantaria acompaniarte! aunque estaba pensando en otra cosa... Supongo que lo mencionare despues";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 11 && cambioDeCapitulo == 4) {
        ImagenMomiji.src = "Imagenes/Momiji/Pensamiento.png";
        ControladorDeDialogos.textContent = "Y que tenias planeado para mi?";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 12 && cambioDeCapitulo == 4) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_3.png";
        ControladorDeDialogos.textContent = "Queria invitarte a una cafeteria o no se... Me gustaria estar en un lugar donde podamos comer y hablar un poco mas ";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 13 && cambioDeCapitulo == 4) {
        ImagenMomiji.src = "Imagenes/Momiji/Esperando.png";
        ControladorDeDialogos.textContent = "No es una mala idea, aunque debo recordarte que no puedo entrar a la aldea Humana...";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 14 && cambioDeCapitulo == 4) {
        ImagenMomiji.src = "Imagenes/Momiji/Feliz.jpg";
        ControladorDeDialogos.textContent = "A menos de que puedas convencer a la Hakutaku de dejarme pasar";
    } else if (Dialogos == 15 && cambioDeCapitulo == 4) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_3.png";
        ControladorDeDialogos.textContent = "Si te soy honesto no lo habia planificado muy bien...";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 16 && cambioDeCapitulo == 4) {
        ImagenMomiji.src = "Imagenes/Momiji/Superior.png";
        ControladorDeDialogos.textContent = "Tranquilo! para eso me tienes a mi!";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 17 && cambioDeCapitulo == 4) {
        ImagenMomiji.src = "Imagenes/Momiji/Feliz.jpg";
        ControladorDeDialogos.textContent = "Ahora menos blah blah y mas accion. Ven, sigueme!";
    } else if (Dialogos == 18 && cambioDeCapitulo == 4) {
        ImagenMomiji.src = "Imagenes/Momiji/Superior.png";
        InterfazUno.style.backgroundImage = "url(Imagenes/Cascadas.jpg)";
        ControladorDeDialogos.textContent = "Me gusta estar acá, debajo de este arbol y cerca de las cascadas. Prepare algo para ti. Hice bolitas de arroz con carne, toma";
    } else if (Dialogos == 19 && cambioDeCapitulo == 4) {
        ImagenMomiji.src = "Imagenes/Momiji/Feliz.jpg";
        ControladorDeDialogos.textContent = "Y que tal? estan buenos no?";
    } else if (Dialogos == 20 && cambioDeCapitulo == 4) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        ControladorDeDialogos.textContent = "A decir verdad estan muy deliciosos Momi. Aunque algo picosos, no estoy muy acostumbrado al picante.";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 21 && cambioDeCapitulo == 4) {
        ImagenMomiji.src = "Imagenes/Momiji/Preocupacion.png";
        ControladorDeDialogos.textContent = "Oye! por que no me lo dijiste? supuse que comias bastante picante en la aldea Humana o en tu mundo. Ven! deja de comer, te traere agua.";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 22 && cambioDeCapitulo == 4) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_3.png";
        ControladorDeDialogos.textContent = "Mientras espero a que Momi regrese de traerme un poco de agua, pienso en lo lindo que fue este gesto y en el beso que me dio la noche anterior... Deberia comentarle sobre eso... Saber el por que";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 23 && cambioDeCapitulo == 4) {
        ImagenMomiji.src = "Imagenes/Momiji/Preocupacion.png";
        ControladorDeDialogos.textContent = "Mira, toma, un cuenco de agua. Oye, debes ser mas abierto conmigo vale?";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 24 && cambioDeCapitulo == 4) {
        ControladorDeDialogos.textContent = "No te ahogues";
    } else if (Dialogos == 25 && cambioDeCapitulo == 4) {
        ImagenMomiji.src = "Imagenes/Momiji/Feliz.jpg";
        ControladorDeDialogos.textContent = "Oye, lamento lo de la carne picante, no queria darte una mala impresion";
    } else if (Dialogos == 26 && cambioDeCapitulo == 4) {
        ImagenMomiji.src = "Imagenes/Momiji/Preocupacion.png";
        ControladorDeDialogos.textContent = "Hmmm... Lo que menos quiero es caerte mal";
    } else if (Dialogos == 27 && cambioDeCapitulo == 4) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        ControladorDeDialogos.textContent = "Tranquila. No me has dado ninguna mala imagen ni estoy enojado ni nada";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 28 && cambioDeCapitulo == 4) {
        ImagenMomiji.src = "Imagenes/Momiji/Feliz.jpg";
        ControladorDeDialogos.textContent = "Me alegra de verdad que me digas eso <3";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 29 && cambioDeCapitulo == 4) {
        ImagenMomiji.src = "Imagenes/Momiji/Pensamiento.png";
        ControladorDeDialogos.textContent = "Sin embargo, debes ser mas comunitcativo conmigo. No deseo matarte, lo digo de verdad eh?";
    } else if (Dialogos == 30 && cambioDeCapitulo == 4) {
        ImagenMomiji.src = "Imagenes/Momiji/Sonrojada.png";
        ControladorDeDialogos.textContent = "Dame tu plato. Es hora de que regreses a casa";
    } else if (Dialogos == 31 && cambioDeCapitulo == 4) {
        ControladorDeDialogos.textContent = "Ha sido un día muy lindo todo gracias a ti <3";
        InterfazUno.style.backgroundImage = "url(Imagenes/Aldea_De_Los_Humanos_2.png)";
    } else if (Dialogos == 32 && cambioDeCapitulo == 4) {
        ImagenMomiji.src = "Imagenes/Momiji/Beso.png";
        ControladorDeDialogos.textContent = "Muack~";
    } else if (Dialogos == 33 && cambioDeCapitulo == 4) {
        ImagenMomiji.src = "Imagenes/Momiji/Timidez.png";
        ControladorDeDialogos.textContent = "Volvere esto una costumbre tambien <3";
    } else if (Dialogos == 34 && cambioDeCapitulo == 4) {
        ImagenMomiji.src = "Imagenes/Momiji/Feliz.jpg";
        ControladorDeDialogos.textContent = "Se me hace tarde! y tu debes ir a dormir!";
    } else if (Dialogos == 35 && cambioDeCapitulo == 4) {
        ImagenMomiji.src = "Imagenes/Momiji/Sonrojada.png";
        ControladorDeDialogos.textContent = "Buenas noches corazón, descansa <3";
    } else if (Dialogos == 36 && cambioDeCapitulo == 4) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros.png";
        ControladorDeDialogos.textContent = "...";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 37 && cambioDeCapitulo == 4) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_3.png";
        ControladorDeDialogos.textContent = "Se repite lo mismo de la ultima vez... Veo a Momiji perderse entre los arboles, saltando entre las ramas hasta que la oscuridad la cubre por completo...";
    } else if (Dialogos == 38 && cambioDeCapitulo == 4) {
        InterfazUno.style.backgroundImage = "url(Imagenes/Habitacion_Oscura_2.png)";
        ControladorDeDialogos.textContent = "Mientras estoy acostado... No puedo sacarme de la cabeza los 2 besos... Estoy muy enamorado... Deberia comentarselo a Keine?. Aunque otro pensamiento inunda mi mente: No veré a Momiji dentro de unos días... Las festividades se acercan y Keine y Akyuu me pidieron que participara en los eventos.";
    } else if (Dialogos == 39 && cambioDeCapitulo == 4) {
        ControladorDeDialogos.textContent = "Ah... Bueno, no deberia sobrepensarlo: además de que no tengo opcion. A lo mejor me levante temprano para buscar a Momi y preguntarle si le gustaria acompañarme en la festividad. No lo se, ya veré que hacer. Dormire, mañana será un día pesado...";
    } else if (Dialogos == 40 && cambioDeCapitulo == 4) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        ControladorDeDialogos.textContent = "Buenas noches para ti tambien Momi, la pasé genial contigo hoy... Te amo <3";
        Dialogos = 0;
        cambioDeCapitulo = 5;
    }
}

function DialogosCap5() {
    Tiempos();
    if (Dialogos == 1 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        Titulo.textContent = "Capitulo 5";
        NombreCaps.textContent = "Quieres tener una cita conmigo?~";
        ControladorDeDialogos.textContent = "Me levanto temprano, mis obligaciones me lo exigen... Sin embargo, no puedo sacarme de la cabeza la idea de invitar a Momiji a esta festividad";
        MusicaJuego.src = "Musica/One_Plus_Two_Equal.mp3";
        MusicaJuego.play();
    } else if (Dialogos == 2 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros.png";
        InterfazUno.style.backgroundImage = "url(Imagenes/Aldea_De_Los_Humanos_2.png)";
        ControladorDeDialogos.textContent = "El sol aun tarda en salir, la oscuridad aun esta presente y puedo ver con lujo de detalles las estrellas...";
    } else if (Dialogos == 3 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        ControladorDeDialogos.textContent = "Alzar la vista al cielo y admirarlas... No puedo evitar pensar en ella <3";
    } else if (Dialogos == 4 && cambioDeCapitulo == 5) {
        ControladorDeDialogos.textContent = "Me pone muy feliz pensar en eso <3";
    } else if (Dialogos == 5 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros.png";
        ControladorDeDialogos.textContent = "Me muevo a toda prisa para salir de la aldea, para mi buena fortuna la luz del sol ya empieza a asomarce y las puertas ya estan siendo abiertas";
    } else if (Dialogos == 6 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        ControladorDeDialogos.textContent = "Los aldeanos que abren las puertas ya me conocen, me he hecho un buen nombre gracias a Keine y a mi buen trabajo. Aprovecho de inmediato para darles los buenos días y salir";
    } else if (Dialogos == 7 && cambioDeCapitulo == 5) {
        InterfazUno.style.backgroundImage = "url(Imagenes/Campo.png)";
        ControladorDeDialogos.textContent = "Al salir de la aldea, regreso al campo que siempre cruzo para ir a la montaña";
    } else if (Dialogos == 8 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Momiji/Feliz.jpg";
        ControladorDeDialogos.textContent = "ALTO AHI GUAPO! tan temprano te levantaste? <3";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 9 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        ControladorDeDialogos.textContent = "Oh Hola Momi! Buenos días! No esperaba encontrarte por acá";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 10 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Momiji/Superior.png";
        ControladorDeDialogos.textContent = "Bueno, mi patrulla empieza por la mañana. Además sentí tu olor muy temprano, asi que vine a comprobar si mi nariz no me engañaba"
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 11 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Momiji/Timidez.png";
        ControladorDeDialogos.textContent = "Olvidaba algo";
    } else if (Dialogos == 12 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Momiji/Beso.png";
        ControladorDeDialogos.textContent = "Muack~";
    } else if (Dialogos == 13 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Momiji/Sonrojada.png";
        ControladorDeDialogos.textContent = "He visto que los Humanos suelen darse besos al despertar <3";
    } else if (Dialogos == 14 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Momiji/Esperando.png";
        ControladorDeDialogos.textContent = "Y... Bueno... Dado que di el primer paso... Quisiera seguir haciendolo <3";
    } else if (Dialogos == 15 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Momiji/Feliz.jpg";
        ControladorDeDialogos.textContent = "En fin, que haces despierto tan temprano? y mas importante: que haces por aquí?";
    } else if (Dialogos == 16 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        ControladorDeDialogos.textContent = "Oh... Si, eso... Ps... Vine a buscarte, iba a ir a la montaña, pero me encontraste  y bueno... Queria saber si: Te gustaria acompañarme a la festividad que habrá esta noche en la aldea?...";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 17 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Momiji/Feliz.jpg";
        ControladorDeDialogos.textContent = "ME ENCANTARIA! SI! SI! SI! SI! SI! SI! SI! SI QUIERO ACOMPAÑARTE!";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 18 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Momiji/Timidez.png";
        ControladorDeDialogos.textContent = "sin embargo... La Hakutaku si me permitira entrar?";
    } else if (Dialogos == 19 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        ControladorDeDialogos.textContent = "Claro! Keine es comprensiva conmigo. Además se ha alegrado mucho de que alguien quiera estar conmigo";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 20 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_3.png";
        ControladorDeDialogos.textContent = "Oye Momi... Puedo preguntarte algo?";
    } else if (Dialogos == 21 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Momiji/Feliz.jpg";
        ControladorDeDialogos.textContent = "Claro, puedes preguntarme lo que desees <3";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 22 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        ControladorDeDialogos.textContent = "Que somos realmente?";
        ContenedorDeDialogos.style.backgroundColor = "rgb(163, 115, 84)";
    } else if (Dialogos == 23 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Momiji/Pensamiento.png";
        ControladorDeDialogos.textContent = "...";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 24 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Momiji/Feliz.jpg";
        ControladorDeDialogos.textContent = "No es evidente?";
    } else if (Dialogos == 25 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Momiji/Sonrojada.png";
        ControladorDeDialogos.textContent = "Somos pareja <3";
    } else if (Dialogos == 26 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Momiji/Esperando.png";
        ControladorDeDialogos.textContent = "El beso, la comida, el tiempo que pasamos juntos... Eres lindo, me prestas atencion, me sigues además de ser muy amable conmigo. Me enamoraste.";
    } else if (Dialogos == 27 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Momiji/Feliz.jpg";
        ControladorDeDialogos.textContent = "Se me hace tarde para empezar mi patrulla";
    } else if (Dialogos == 28 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Momiji/Beso.png";
        ControladorDeDialogos.textContent = "Muack~";
    } else if (Dialogos == 29 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Momiji/Sonrojada.png";
        ControladorDeDialogos.textContent = "Te vere esta noche <3";
    } else if (Dialogos == 30 && cambioDeCapitulo == 5) {
        ControladorDeDialogos.textContent = "Cuidate, te amo <3";
    } else if (Dialogos == 31 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros.png";
        ControladorDeDialogos.textContent = "Observo a Momiji irse rapidamente, casi tan rapido como aparecio. Entrando en si rapidamente al recordar mis propias obligaciones";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 32 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        ControladorDeDialogos.textContent = "Cuidate Momi. Yo tambien te amo <3";
    } else if (Dialogos == 33 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros.png";
        ControladorDeDialogos.textContent = "Al llegar a la aldea lo primero que veo es a Keine, acercandome a ella para preguntar por las asignaciones del día";
        InterfazUno.style.backgroundImage = "url(Imagenes/Mercado_Aldea_De_Los_Humanos.jpg)";
    } else if (Dialogos == 34 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        ControladorDeDialogos.textContent = "Me dice que simplemente ayude a organizar algunos puestos como poner decoraciones y poco mas.";
    } else if (Dialogos == 35 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_3.png";
        ControladorDeDialogos.style.textContent = "Intente ayudar en la decoracion, en montar los puestos y trayendo cosas para la venta. Al final, me retire ya que despues de un rato las cosas pasaron a otras manos para de otras personas y mi presencia no fue necesesaria";
    } else if (Dialogos == 36 && cambioDeCapitulo == 5) {
        InterfazUno.style.backgroundImage = "url(Imagenes/Campo.png)";
        ControladorDeDialogos.textContent = "Tras eso, simplemente salgo a caminar. Ir mas allá de los limites de la aldea pero desviandome al lago. Esperando no encontrarme con la hada energetica y loca de pelo azul...";
    } else if (Dialogos == 37 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        InterfazUno.style.backgroundImage = "url(Imagenes/Lago.jpg)";
        ControladorDeDialogos.textContent = "Caminando por los bordes del lago las cosas son bastantes tranquilas. Nada de ruido, el cantar de las aves, la niebla... Y la torre de la mansion de la vampira a la distancia. Me gustaria traer a Momiji por aquí algún día";
    } else if (Dialogos == 38 && cambioDeCapitulo == 5) {
        ControladorDeDialogos.textContent = "Al acercarme un poco al borde del lago y escucho las olas golpear la playa... Ha pasado mucho tiempo desde que caí en este lugar... Perderme en una excursion en solitario, cruzar la barrera y casi ser asinado por una chica de pelo rubio que gusta de la carne Humana en un bosque donde a duras penas la luz del sol llegaba";
    } else if (Dialogos == 39 && cambioDeCapitulo == 5) {
        ControladorDeDialogos.textContent = "Dejar atrás mi hogar, mi vida, mis cosas, mis conocidos... Bueno, al menos estoy vivo pero es solitario el estar rodeado de gente que a duras penas entiendo al hablar..."
    } else if (Dialogos == 40 && cambioDeCapitulo == 5) {
        ControladorDeDialogos.textContent = "Tras pasar un rato en este lugar casi toda la tarde... Me dispongo a regresar a la aldea Humana. En el camino veo a los pajaros volar a sus nidos y el sol se oculta cada vez mas y mas... El hambre no me ataco hoy...";
    } else if (Dialogos == 41 && cambioDeCapitulo == 5) {
        ControladorDeDialogos.textContent = "Despues de todo, tengo que verme con Momiji hoy, es mi primera cita <3 Aunque tengo que hablarle a Keine si los youkais pueden entrar a la festividad. Se me haria injusto si dice que no considerando que Alice, las chicas de la SDM y demás deidades si pueden entrar en cualquier momento";
    } else if (Dialogos == 42 && cambioDeCapitulo == 5) {
        InterfazUno.style.backgroundImage = "url(Imagenes/Mercado_Nocturno_Aldea_De_Los_Humanos.png)";
        ControladorDeDialogos.textContent = "Antes de ir a casa pregunto a Keine y si Momiji puede entrar y participar de la festividad.";
    } else if (Dialogos == 43 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_3.png";
        ControladorDeDialogos.textContent = "Para mi buena fortuna... Me dijo que si recordandome que le alegraba demaciado que al fin encontrara a alguien que me quiera genuinamente, mencionando brevemente que la trate bien y que disfrute de la festividad";
    } else if (Dialogos == 44 && cambioDeCapitulo == 5) {
        InterfazUno.style.backgroundImage = "url(Imagenes/Habitacion_1.png)"
        ControladorDeDialogos.textContent = "Tras salir del mercado iria rapidamente a mi hogar para vestirme lo mejor posible aunque para alguien que poco o nada sabe de la cultura japonesa... Pues es complicado";
    } else if (Dialogos == 45 && cambioDeCapitulo == 5) {
        InterfazUno.style.backgroundImage = "url(Imagenes/Aldea_De_Los_Humanos_2.png)";
        ControladorDeDialogos.textContent = "Tras terminar de arreglarme con la ropa al revés voy a la entrada de la aldea";
    } else if (Dialogos == 46 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Momiji/Feliz.jpg";
        ControladorDeDialogos.textContent = "Holaaa! se te hizo tarde eh? Lo supuse y se nota que estas mal arreglado";
        ContenedorDeDialogos.style.backgroundColor = "red";
        MusicaJuego.src = "Musica/Missing_Love.mp3";
        MusicaJuego.play();
    } else if (Dialogos == 47 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        ControladorDeDialogos.textContent = "Oh! HOLA MOMI! si, se me hizo tarde...";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 48 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Momiji/Preocupacion.png";
        ControladorDeDialogos.textContent = "Shshshshshshshsh ven, dejame acomodarte esa ropa que esta toda mal puesta";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 49 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Momiji/Esperando.png";
        ControladorDeDialogos.textContent = "Debiste venir primero conmigo, asi no darias pena caminando con la ropa al revés";
    } else if (Dialogos == 50 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Momiji/Superior.png";
        ControladorDeDialogos.textContent = "Para tu buena suerte solo era esta bata. Para llevar mucho tiempo viviendo acá te falta aprender muchas cosas";
    } else if (Dialogos == 51 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Momiji/Sonrojada.png";
        ControladorDeDialogos.textContent = "Tienes a una novia muy observadora y que te va a cuidar siempre <3";
    } else if (Dialogos == 52 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        ControladorDeDialogos.textContent = "Gracias ayudarme por ayudarme con esta ropa Momi <3 Tu tambien te ves hermosa <3";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 53 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Momiji/Sonrojada.png";
        ControladorDeDialogos.textContent = "Te lo agradezco <3 me es extraño no estar con mi traje de patrulla pero viniendo de ti me siento mas comoda con esta ropa <3";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 54 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Momiji/Beso.png";
        ControladorDeDialogos.textContent = "Muack~";
    } else if (Dialogos == 55 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Momiji/Sonrojada.png";
        ControladorDeDialogos.textContent = "Te amo <3";
    } else if (Dialogos == 56 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Momiji/Feliz.jpg";
        ControladorDeDialogos.textContent = "Bueno, ya se nos esta haciendo tarde no? quiero ver la festividad de la aldea contigo <3"
    } else if (Dialogos == 57 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        ControladorDeDialogos.textContent = "Es cierto, vamos Momi";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 58 && cambioDeCapitulo == 5) {
        InterfazUno.style.backgroundImage = "url(Imagenes/Mercado_Nocturno_Aldea_De_Los_Humanos.png)";
        ImagenMomiji.src = "Imagenes/Momiji/Feliz.jpg";
        ControladorDeDialogos.textContent = "Sabes esta es la primera vez que vengo a una festividad asi. Con comida por todos lados y ventas de manualidades";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 59 && cambioDeCapitulo == 5) {
        ControladorDeDialogos.textContent = "Agradezco que me invitaras <3 aunque en escencia esta es nuestra primera cita <3";
    } else if (Dialogos == 60 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        ControladorDeDialogos.textContent = "No hay problema Momi <3 simplemente no queria dejar escapar esta oportunidad para pasar tiempo los 2 juntos <3";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 61 && cambioDeCapitulo == 5) {
        ControladorDeDialogos.textContent = "A que puesto quieres ir? la comida huele muy bien y las artesanias se ven hermosas <3";
    } else if (Dialogos == 62 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Momiji/Feliz.jpg";
        ControladorDeDialogos.textContent = "Hmmm... A decir verdad no se que opciones tomar. No tengo hambre asi que prefiero ver las artesanias!";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 63 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Momiji/Esperando.png";
        ControladorDeDialogos.textContent = "Me gusta esta mascara de Kitsune! es linda!";
    } else if (Dialogos == 64 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Momiji/Timidez.png";
        ControladorDeDialogos.textContent = "Dejame ponertela...";
    } else if (Dialogos == 65 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Momiji/Esperando.png";
        ControladorDeDialogos.textContent = "Que apretado... Tienes una cabeza muy grande sabes?";
    } else if (Dialogos == 66 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Momiji/Feliz.jpg";
        ControladorDeDialogos.textContent = "Tadaaa~ te ves muy gracioso! creo que la comprare!";
    } else if (Dialogos == 67 && cambioDeCapitulo == 5) {
        ControladorDeDialogos.textContent = "Ven dejame ayudarte a quitarte esta mascara";
    } else if (Dialogos == 68 && cambioDeCapitulo == 5) {
        ControladorDeDialogos.textContent = "Ahora a donde iremos? tienes un puesto en particular que quieras ver?";
    } else if (Dialogos == 69 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Momiji/Timidez.png";
        ControladorDeDialogos.textContent = "Oye... La gente nos ve extraño. No te molesta o incomoda estar conmigo?";
    } else if (Dialogos == 70 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        ControladorDeDialogos.textContent = "Claro que no, me da igual además tenemos el permiso de Keine sin mencionar que hay youkais por todos lados";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 71 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Momiji/Feliz.jpg";
        ControladorDeDialogos.textContent = "Es cierto habia olvidado que es una festividad para todos";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 72 && cambioDeCapitulo == 5) {
        ControladorDeDialogos.textContent = "Debe ser por que en la aldea Tengu son festividades grandes, ruidosas sin presencia Humana...";
    } else if (Dialogos == 73 && cambioDeCapitulo == 5) {
        ControladorDeDialogos.textContent = "Da igual!";
    } else if (Dialogos == 74 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Momiji/Beso.png";
        ControladorDeDialogos.textContent = "Muack~";
    } else if (Dialogos == 75 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Momiji/Sonrojada.png";
        ControladorDeDialogos.textContent = "Gracias de verdad por invitarme <3 y mas que no te de pena o verguenza estar conmigo";
    } else if (Dialogos == 76 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Momiji/Sorpresa.png";
        ControladorDeDialogos.textContent = "OHHH! MIRA! DIBUJOS!";
    } else if (Dialogos == 77 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Dibujo.png";
        ControladorDeDialogos.textContent = "...";
    } else if (Dialogos == 78 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Momiji/Pensamiento.png";
        ControladorDeDialogos.textContent = "...";
    } else if (Dialogos == 79 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Momiji/Feliz.jpg";
        ControladorDeDialogos.textContent = "Es muy gracioso, quiero ver si hay mas";
    } else if (Dialogos == 80 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Fumo_1.png";
        ControladorDeDialogos.textContent = "...";
    } else if (Dialogos == 81 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Fumo_2.png";
        ControladorDeDialogos.textContent = "...";
    } else if (Dialogos == 82 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Fumo_3.png";
        ControladorDeDialogos.textContent = "...";
    } else if (Dialogos == 83 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Momiji/Pensamiento.png";
        ControladorDeDialogos.textContent = "Todas son tan hermosas... Ay...";
    } else if (Dialogos == 84 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Momiji/Superior.png";
        ControladorDeDialogos.textContent = "Quizas deba solo seleccionar una! aunque estoy indecisa";
    } else if (Dialogos == 85 && cambioDeCapitulo == 5) {
        ControladorDeDialogos.textContent = "Hagamos algo! yo comprare las cosas bonitas y tu pagas la comida! es por igualdad!~";
    } else if (Dialogos == 86 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        ControladorDeDialogos.textContent = "Me parece bien Momi, aunque antes que nada... Quiero darte algo, esperame en esa banqueta";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 87 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Momiji/Esperando.png";
        ControladorDeDialogos.textContent = "Vale! te estare esperando!";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 88 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros.png";
        ControladorDeDialogos.textContent = "Tras alejarme un momento de Momi, busco el puesto donde vi algo que deseo regalarle";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 89 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        ControladorDeDialogos.textContent = "Espero le guste <3";
    } else if (Dialogos == 90 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Momiji/Sonrojada.png";
        ControladorDeDialogos.textContent = "HOLAAA REGRESASTE! Mira, nos compre un palo de carne con verduras, estaba esperandote para comer";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 91 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        ControladorDeDialogos.textContent = "Gracias Momi";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 92 && cambioDeCapitulo == 5) {
        ControladorDeDialogos.textContent = "Te traje esto <3 es para ti <3";
    } else if (Dialogos == 93 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Momiji/Sorpresa.png";
        ControladorDeDialogos.textContent = "...";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 94 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Momiji/Rama_Flores.png";
        ControladorDeDialogos.textContent = "Flores... Son tan hermosas... Son tan hermosa...";
    } else if (Dialogos == 95 && cambioDeCapitulo == 5) {
        ControladorDeDialogos.textContent = "En mi vida... Habia recibido algo tan hermoso...";
    } else if (Dialogos == 96 && cambioDeCapitulo == 5) {
        ControladorDeDialogos.textContent = "Eres... Eres una persona increible sabes?...";
    } else if (Dialogos == 97 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Momiji/Beso.png";
        ControladorDeDialogos.textContent = "Muack~";
    } else if (Dialogos == 98 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Momiji/Sonrojada.png";
        ControladorDeDialogos.textContent = "Te amo <3";
    } else if (Dialogos == 99 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Momiji/Feliz.jpg";
        ControladorDeDialogos.textContent = "Oh! los fuegos artificiales! vamos!";
        Sonidos.play();
    } else if (Dialogos == 100 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        ControladorDeDialogos.textContent = "Momi me toma de la mano arrastrandome hacia un diminuto espacio donde cabemos los 2... Observamos la luz de los fuegos artificiales, el estruendo y las formas... Verla brillar de esa forma... Es tan hermosa...";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
        Sonidos.play();
    } else if (Dialogos == 101 && cambioDeCapitulo == 5) {
        ControladorDeDialogos.textContent = "Yo tambien te amo Momi <3";
    } else if (Dialogos == 102 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Momiji/Esperando.png";
        ControladorDeDialogos.textContent = "Te oí eh? <3";
        Sonidos.play();
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 103 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Momiji/Beso.png";
        ControladorDeDialogos.textContent = "Muack~";
    } else if (Dialogos == 104 && cambioDeCapitulo == 5) {
        ImagenMomiji.src = "Imagenes/Momiji/Sonrojada.png";
        ControladorDeDialogos.textContent = "Yo tambien <3 ya te lo dije <3";
    } else if (Dialogos == 105 && cambioDeCapitulo == 5) {
        ControladorDeDialogos.textContent = "Y no pienso dejarte jamás <3";
        Dialogos = 0;
        cambioDeCapitulo = 6;
    }
}

function DialogosCap6() {
    Tiempos();
    if (Dialogos == 1 && cambioDeCapitulo == 6) {
        Titulo.textContent = "Capitulo 6";
        NombreCaps.textContent = "Un día solo para los 2~";
        ImagenMomiji.src = "Imagenes/Momiji/Feliz.jpg";
        ControladorDeDialogos.textContent = "Se esta haciendo muy noche no crees?";
        MusicaJuego.src = "Musica/WaveOf_The_Spell.mp3";
        MusicaJuego.play();
    } else if (Dialogos == 2 && cambioDeCapitulo == 6) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros.png";
        ControladorDeDialogos.textContent = "Oh es cierto. No tengo una casa propia Momi, vivo en un espacio compartido con mas personas...";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 3 && cambioDeCapitulo == 6) {
        ImagenMomiji.src = "Imagenes/Momiji/Indiferencia.png";
        ControladorDeDialogos.textContent = "Oh... Es verdad, lo habia olvidado...";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 4 && cambioDeCapitulo == 6) {
        ImagenMomiji.src = "Imagenes/Momiji/Pensamiento.png";
        ControladorDeDialogos.textContent = "...";
    } else if (Dialogos == 5 && cambioDeCapitulo == 6) {
        ImagenMomiji.src = "Imagenes/Momiji/Feliz.jpg";
        ControladorDeDialogos.textContent = "Que tal si vienes conmigo?";
    } else if (Dialogos == 6 && cambioDeCapitulo == 6) {
        ImagenMomiji.src = "Imagenes/Momiji/Timidez.png";
        ControladorDeDialogos.textContent = "Somos pareja sabes? podemos compartir un espacio para los 2!";
    } else if (Dialogos == 7 && cambioDeCapitulo == 6) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_3.png";
        ControladorDeDialogos.textContent = "Momi... No creo que sea buena idea...";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 8 && cambioDeCapitulo == 6) {
        ImagenMomiji.src = "Imagenes/Momiji/Feliz.jpg";
        ControladorDeDialogos.textContent = "Tonterias! despues de todo, te recuerdo: Somos pareja. Asi que vamos a estar juntos! empezando por esto";
    } else if (Dialogos == 9 && cambioDeCapitulo == 6) {
        ImagenMomiji.src = "Imagenes/Momiji/Sonrojada.png";
        ControladorDeDialogos.textContent = "Quiero esto sabes? y supongo que tu tambien <3";
    } else if (Dialogos == 10 && cambioDeCapitulo == 6) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros.png";
        ControladorDeDialogos.textContent = "...";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 11 && cambioDeCapitulo == 6) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        ControladorDeDialogos.textContent = "Tienes toda la razón Momi <3 Yo tambien quiero esto <3";
    } else if (Dialogos == 12 && cambioDeCapitulo == 6) {
        ImagenMomiji.src = "Imagenes/Momiji/Beso.png";
        ControladorDeDialogos.textContent = "Muack~";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 13 && cambioDeCapitulo == 6) {
        ImagenMomiji.src = "Imagenes/Momiji/Esperando.png";
        ControladorDeDialogos.textContent = "Te amo <3 vamos entonces?";
    } else if (Dialogos == 14 && cambioDeCapitulo == 6) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        ControladorDeDialogos.textContent = "Vamos Momi";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 15 && cambioDeCapitulo == 6) {
        InterfazUno.style.backgroundImage = "url(Imagenes/Aldea_De_Los_Humanos_2.png)";
        ImagenMomiji.src = "Imagenes/Momiji/Feliz.jpg";
        ControladorDeDialogos.textContent = "Aunque es algo tarde y pues... El camino es peligroso para un Humano solitario, estas conmigo!";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 16 && cambioDeCapitulo == 6) {
        ImagenMomiji.src = "Imagenes/Momiji/Sonrojada.png";
        ControladorDeDialogos.textContent = "Eres el primero en enamorarme sabes? nunca habia sentido algo tan lindo por otra persona <3";
    } else if (Dialogos == 17 && cambioDeCapitulo == 6) {
        ImagenMomiji.src = "Imagenes/Momiji/Timidez.png";
        ControladorDeDialogos.textContent = "Puedo tomarte de la mano?"
    } else if (Dialogos == 18 && cambioDeCapitulo == 6) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        ControladorDeDialogos.textContent = "Claro Momi, no tienes que preguntar para eso <3";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 19 && cambioDeCapitulo == 6) {
        ImagenMomiji.src = "Imagenes/Momiji/Sonrojada.png";
        ControladorDeDialogos.textContent = "Gracias <3 eres alguien verdaderamente encantador sabes?";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 20 && cambioDeCapitulo == 6) {
        InterfazUno.style.backgroundImage = "url(Imagenes/Puesto_2.png)";
        ImagenMomiji.src = "Imagenes/Momiji/Feliz.jpg";
        ControladorDeDialogos.textContent = "Y aqui es donde vivo!"
    } else if (Dialogos == 21 && cambioDeCapitulo == 6) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_3.png";
        ControladorDeDialogos.textContent = "Wow Momi... De verdad vives aquí?";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 22 && cambioDeCapitulo == 6) {
        ImagenMomiji.src = "Imagenes/Momiji/Superior.png";
        ControladorDeDialogos.textContent = "Bueno solo es un puesto de avanzada. Mi situacion no es muy diferente a la tuya sabes?";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 23 && cambioDeCapitulo == 6) {
        ImagenMomiji.src = "Imagenes/Momiji/Feliz.jpg";
        ControladorDeDialogos.textContent = "Vamos hacia adentro, hace frio y hay que dormir";
    } else if (Dialogos == 24 && cambioDeCapitulo == 6) {
        InterfazUno.style.backgroundImage = "url(Imagenes/Interior_Puesto.png)";
        ImagenMomiji.src = "Imagenes/Momiji/Sonrojada.png";
        ControladorDeDialogos.textContent = "Ponte comodo en lo que busco mi futon~";
    } else if (Dialogos == 25 && cambioDeCapitulo == 6) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros.png";
        ControladorDeDialogos.textContent = "Observo a Momi dejar la habitacion. A decir verdad es un sitio muy comodo, limpio y calido...";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 26 && cambioDeCapitulo == 6) {
        ImagenMomiji.src = "Imagenes/Momiji/Feliz.jpg";
        ControladorDeDialogos.textContent = "Listo! ya esta todo organizado. Ven acuestate conmigo~";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 27 && cambioDeCapitulo == 6) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_3.png";
        ControladorDeDialogos.textContent = "Momi, no se si-";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 28 && cambioDeCapitulo == 6) {
        ImagenMomiji.src = "Imagenes/Momiji/Preocupacion.png";
        ControladorDeDialogos.textContent = "NO HABLES!";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 29 && cambioDeCapitulo == 6) {
        ImagenMomiji.src = "Imagenes/Momiji/Timidez.png";
        ControladorDeDialogos.textContent = "No me rechaces si? ven y duerme conmigo <3 somos pareja <3 esto hacen las parejas <3 duermen juntas, se dan amor y se cuidan mutuamente <3";
    } else if (Dialogos == 30 && cambioDeCapitulo == 6) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros.png";
        ControladorDeDialogos.textContent = "Momiji me toma de las manos, cediendo ante ella, me arrodillo y me recuesto a su lado. Pasa la sabana encima de nosotros y su larga y esponjosa cola me envuelve y me pega a ella";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 31 && cambioDeCapitulo == 6) {
        ImagenMomiji.src = "Imagenes/Momiji/Sonrojada.png";
        ControladorDeDialogos.textContent = "Eso es~ No tienes nada por que preocuparte si?";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 32 && cambioDeCapitulo == 6) {
        ImagenMomiji.src = "Imagenes/Momiji/Beso.png";
        ControladorDeDialogos.textContent = "Muack~";
    } else if (Dialogos == 33 && cambioDeCapitulo == 6) {
        ImagenMomiji.src = "Imagenes/Momiji/Sonrojada.png";
        ControladorDeDialogos.textContent = "Pasa buenas noches y sueña lindo <3 te amo <3";
    } else if (Dialogos == 33 && cambioDeCapitulo == 6) {
        ControladorDeDialogos.textContent = "Nada nos va a separar vale? nisiquiera la muerte lo hará <3";
    } else if (Dialogos == 34 && cambioDeCapitulo == 6) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros.png";
        ControladorDeDialogos.textContent = "Observo a Momi cerrar sus ojitos, apretandome a ella con sus brazos, sintiendo el palpitar de su corazón y su respiracion lenta y calida";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 35 && cambioDeCapitulo == 6) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        ControladorDeDialogos.textContent = "Yo tambien te amo <3 pasa buenas noches Momi <3 no me voy a separar de ti jamás";
        Dialogos = 0;
        cambioDeCapitulo = 7;
    }
}

//Convivencia con Momiji
function DialogosCap7() {
    Tiempos();
    if (Dialogos == 1 && cambioDeCapitulo == 7) {
        Titulo.textContent = "Capitulo 7";
        NombreCaps.textContent = "Una convivencia rara...";
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros.png";
        ControladorDeDialogos.textContent = "Al amanecer me doy cuenta que Momi no esta. Suponiendo que salio a hacer su trabajo ya que tambien hace falta su espada y escudo";
        MusicaJuego.src = "Musica/Hopping_Steps.mp3";
        MusicaJuego.play();
    } else if (Dialogos == 2 && cambioDeCapitulo == 7) {
        ImagenMomiji.src = "Imagenes/Momiji/Feliz.jpg";
        ControladorDeDialogos.textContent = "HOLAAAA!";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 3 && cambioDeCapitulo == 7) {
        ImagenMomiji.src = "Imagenes/Momiji/Beso.png";
        ControladorDeDialogos.textContent = "Muack~";
    } else if (Dialogos == 4 && cambioDeCapitulo == 7) {
        ImagenMomiji.src = "Imagenes/Momiji/Sonrojada.png";
        ControladorDeDialogos.textContent = "Buenos días <3 dormiste bien? <3";
    } else if (Dialogos == 5 && cambioDeCapitulo == 7) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        ControladorDeDialogos.textContent = "Buenos días Momi <3 dormí muy bien y mas considerando que estoy a tu lado <3 y tu? dormiste bien?";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 6 && cambioDeCapitulo == 7) {
        ImagenMomiji.src = "Imagenes/Momiji/Beso.png";
        ControladorDeDialogos.textContent = "Muack~";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 7 && cambioDeCapitulo == 7) {
        ImagenMomiji.src = "Imagenes/Momiji/Sonrojada.png";
        ControladorDeDialogos.textContent = "Eres una persona maravillosa <3 me alegra y me enamora cada día mas el hecho de ser tu novia <3";
    } else if (Dialogos == 8 && cambioDeCapitulo == 7) {
        ImagenMomiji.src = "Imagenes/Momiji/Feliz.jpg";
        ControladorDeDialogos.textContent = "Ven! vamos a comer! estaba patrullando hasta que despertaste! quiero desayunar contigo";
    } else if (Dialogos == 9 && cambioDeCapitulo == 7) {
        ImagenMomiji.src = "Imagenes/Momiji/Superior.png";
        ControladorDeDialogos.textContent = "Hice carne de jabalí con arroz! espero te guste!";
    } else if (Dialogos == 10 && cambioDeCapitulo == 7) {
        ControladorDeDialogos.textContent = "Aveces salgo a cazar un poco para asi tener raciones en caso de que tenga que quedarme días vigilando!";
    } else if (Dialogos == 11 && cambioDeCapitulo == 7) {
        ImagenMomiji.src = "Imagenes/Momiji/Sonrojada.png";
        ControladorDeDialogos.textContent = "Que te parece? esta algo salado por que es la forma que conozco para preservar bien la carne...";
    } else if (Dialogos == 12 && cambioDeCapitulo == 7) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        ControladorDeDialogos.textContent = "Esta deliciosa Momi, me recuerda a la carne que comiamos junto mi familia en el mundo exterior";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 13 && cambioDeCapitulo == 7) {
        ImagenMomiji.src = "Imagenes/Momiji/Sorpresa.png";
        ControladorDeDialogos.textContent = "Ohhhhh";
        ContenedorDeDialogos.style.backgroundColor = "red";
        MusicaJuego.src = "Musica/Missing_Love.mp3";
        MusicaJuego.play();
    } else if (Dialogos == 14 && cambioDeCapitulo == 7) {
        ImagenMomiji.src = "Imagenes/Momiji/Esperando.png";
        ControladorDeDialogos.textContent = "Me alegra saber que mi comida te recuerda a tu hogar  <3";
    } else if (Dialogos == 15 && cambioDeCapitulo == 7) {
        ImagenMomiji.src = "Imagenes/Momiji/Beso.png";
        ControladorDeDialogos.textContent = "Muack~";
    } else if (Dialogos == 16 && cambioDeCapitulo == 7) {
        ImagenMomiji.src = "Imagenes/Momiji/Sonrojada.png";
        ControladorDeDialogos.textContent = "Ahora tienes a tu chica <3 ahora somos una familia de 2 <3 me gustaria... Hmmm...";
    } else if (Dialogos == 17 && cambioDeCapitulo == 7) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        ControladorDeDialogos.textContent = "Formar una familia conmigo? que seamos Padres?";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 18 && cambioDeCapitulo == 7) {
        ImagenMomiji.src = "Imagenes/Momiji/Timidez.png";
        ControladorDeDialogos.textContent = "Si... Eso es lo que deseo... Deseo tener una familia, ser Padre y tener al Padre de mis hijos a mi lado...";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 18 && cambioDeCapitulo == 7) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros.png";
        ControladorDeDialogos.textContent = "Me acerco a Momi y le doy un beso suave, lindo y limpio en los labios";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 19 && cambioDeCapitulo == 7) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        ControladorDeDialogos.textContent = "Serás una gran Madre si? yo tambien intentare ser el mejor Padre y esposo para ti <3"
    } else if (Dialogos == 20 && cambioDeCapitulo == 7) {
        ImagenMomiji.src = "Imagenes/Momiji/Sonrojada.png";
        ControladorDeDialogos.textContent = "Lo se <3 confio en que lo seremos <3";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 21 && cambioDeCapitulo == 7) {
        ImagenMomiji.src = "Imagenes/Momiji/Feliz.jpg";
        ControladorDeDialogos.textContent = "EN FIN! HAY QUE REGRESARTE A LA ALDEA! tienes trabajo que hacer no?";
        MusicaJuego.src = "Musica/Hopping_Steps.mp3";
        MusicaJuego.play();
    } else if (Dialogos == 22 && cambioDeCapitulo == 7) {
        InterfazUno.style.backgroundImage = "url(Imagenes/Puesto_1.png)";
        ControladorDeDialogos.textContent = "Ire contigo, me da miedo que algo te ataque durante el camino";
    } else if (Dialogos == 23 && cambioDeCapitulo == 7) {
        InterfazUno.style.backgroundImage = "url(Imagenes/Aldea_De_Los_Humanos_1.png)";
        ImagenMomiji.src = "Imagenes/Momiji/Timidez.png";
        ControladorDeDialogos.textContent = "Hasta aqui llego yo...";
    } else if (Dialogos == 24 && cambioDeCapitulo == 7) {
        ImagenMomiji.src = "Imagenes/Momiji/Beso.png";
        ControladorDeDialogos.textContent = "Muack~";
    } else if (Dialogos == 25 && cambioDeCapitulo == 7) {
        ImagenMomiji.src = "Imagenes/Momiji/Sonrojada.png";
        ControladorDeDialogos.textContent = "Cuidate <3 te amo <3 te veré luego  <3";
    } else if (Dialogos == 26 && cambioDeCapitulo == 7) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros.png";
        ControladorDeDialogos.textContent = "Observo a Momiji partir, corriendo a velocidades superiores a las del sonido y saltando de rama en rama hasta perderse de mi vista";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 27 && cambioDeCapitulo == 7) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        ControladorDeDialogos.textContent = "Cuidate tu tambien Momi <3 yo tambien te amo... Mas de lo que puedes imaginar  <3";
    } else if (Dialogos == 28 && cambioDeCapitulo == 7) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros.png";
        ControladorDeDialogos.textContent = "Mi día empieza de lo normal. Será una semana larga y complicada...";
    } else if (Dialogos == 29 && cambioDeCapitulo == 7) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_3.png";
        ControladorDeDialogos.textContent = "Keine me dijo que necesitaba mi ayuda por esta semana... Lo que restringue mi tiempo para estar con Momi... Sin embargo: Es eso o morir de hambre";
    } else if (Dialogos == 30 && cambioDeCapitulo == 7) {
        ControladorDeDialogos.textContent = "Barrer el mercado de la aldea, ir a dar clases, ir con Akyuu a organizar tomos... Es algo bastante aburrido";
    } else if (Dialogos == 31 && cambioDeCapitulo == 7) {
        ControladorDeDialogos.textContent = "Mientras doy una clase a los jovenes de la aldea Humana, me pregunto que estara haciendo Momiji...";
    } else if (Dialogos == 32 && cambioDeCapitulo == 7) {
        ControladorDeDialogos.textContent = "Los chicos casi no me prestan atencion por lo que gran parte del rato es yo tratando de explicarles por que es D = M / V aunque su atencion esta en otras cosas...";
    } else if (Dialogos == 33 && cambioDeCapitulo == 7) {
        ControladorDeDialogos.textContent = "Tengo poca paciencia para esto... Será que si seré un buen Padre?";
    } else if (Dialogos == 34 && cambioDeCapitulo == 7) {
        InterfazUno.style.backgroundImage = "url(Imagenes/Aldea_De_Los_Humanos_2.png)";
        ControladorDeDialogos.textContent = "El tiempo transcurre con total normalidad hasta caer la noche. Keine me ha mencionado que al día siguiente tengo que ir... Con Marisa... La bruja loca al bosque de la magia para traer algunas cosas que ella necesita";
    } else if (Dialogos == 35 && cambioDeCapitulo == 7) {
        InterfazUno.style.backgroundImage = "url(Imagenes/Habitacion_Oscura_2.png)";
        ControladorDeDialogos.textContent = "Por Dios soy el maldito chico de los recados, esto es un fastidio. Buenas noches Momi <3 te amo <3";
    } else if (Dialogos == 36 && cambioDeCapitulo == 7) {
        InterfazUno.style.backgroundImage = "url(Imagenes/Aldea_De_Los_Humanos_2.png)";
        ControladorDeDialogos.textContent = "Al día siguiente me levanto mas temprano de lo normal. Casi al mismo tiempo que los granjeros quienes ya van al campo o a buscar a sus vacas";
    } else if (Dialogos == 37 && cambioDeCapitulo == 7) {
        ControladorDeDialogos.textContent = "Me encuentro con Keine, quien me da los buenos días y me pasa la lista de cosas que necesita que le traiga. Marisa aparece volando sobre mi, dandome los buenos días y golpeandome la espalda, para luego agarrarme de la mano y salir corriendo conmigo hacia el bosque";
    } else if (Dialogos == 38 && cambioDeCapitulo == 7) {
        InterfazUno.style.backgroundImage = "url(Imagenes/Bosque.jpg)";
        ControladorDeDialogos.textContent = "A medida que mas y mas nos metemos en este bosque observo cosas interesantes: Hongos de casi 5 metros de altura con un pileo colosal, facilmente podria construirse una casa bajo ellos";
    } else if (Dialogos == 39 && cambioDeCapitulo == 7) {
        ControladorDeDialogos.textContent = "Marisa no para de correr y saltar por todos lados mientras yo busco lo que Keine me pidio. A su vez Marisa empieza a hablar tonterias preguntandome como es mi mundo, por que no se magia, por que soy tan delgado etc...";
    } else if (Dialogos == 40 && cambioDeCapitulo == 7) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_4.png";
        ControladorDeDialogos.textContent = "Fastidiado simplemente le menciono que quiero hacer mi trabajo y regresar a casa";
    } else if (Dialogos == 41 && cambioDeCapitulo == 7) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros.png";
        ControladorDeDialogos.textContent = "Ella se rie, golpeandome de nuevo la espalda, para despues decir que se nota a leguas que le molesta estar en este Lugar sobre todo por que no esta Momiji";
    } else if (Dialogos == 42 && cambioDeCapitulo == 7) {
        ControladorDeDialogos.textContent = "Me sonrojo un poco por que tiene toda la razón: Quiero estar con ella, no en este lugar con una loca que en cualquier momento se le puede salir un disparo de su arma";
    } else if (Dialogos == 43 && cambioDeCapitulo == 7) {
        ControladorDeDialogos.textContent = "Tras terminar, Marisa me insiste en que este con ella un rato, invitandome un poco de su comida. Dado que tengo bastante hambre por que estoy recien despierto acepto";
    } else if (Dialogos == 44 && cambioDeCapitulo == 7) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        ControladorDeDialogos.textContent = "La comida que me da no esta mala, un pan con frutas, esta bastante rico además de tener un brebaje que me ofrece. No lo tomo ya que me da miedo tener una 3ra pierna o 4 ojos. No confio en ella";
    } else if (Dialogos == 45 && cambioDeCapitulo == 7) {
        ControladorDeDialogos.textContent = "Mientras comemos ella se acerca mas y empieza a contarme sobre su vida, los chismes que le llegan (Por que me recuerda a Aya?) y sobre la situacion de las cosas de los demás. Me da gracia como se burla de la pobreza de Reimu, en eso estamos deacuerdo";
    } else if (Dialogos == 46 && cambioDeCapitulo == 7) {
        ControladorDeDialogos.textContent = "Mencionando tambien de la nada que nunca habia visto a un Tengu tan feliz en su vida. Dandome una sonrisa me dice que soy una persona muy afortunada y que cada segundo que pase con Momiji es tiempo bien invertido";
    } else if (Dialogos == 47 && cambioDeCapitulo == 7) {
        ControladorDeDialogos.textContent = "Recordandome mis propias limitaciones, diciendo que no esperaba que me adaptara tan rapido, considerando que solo llevo un par de años en Gensokyo";
    } else if (Dialogos == 48 && cambioDeCapitulo == 7) {
        ControladorDeDialogos.textContent = "Al terminar de comer, me toma de la mano y me que aunque sea una persona aveces rara y del tipo que la gente pierde la paciencia rapido, ella sigue siendo Humana y que el hecho de no quejarme por estar cerca de ella la hace feliz";
    } else if (Dialogos == 49 && cambioDeCapitulo == 7) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        ControladorDeDialogos.textContent = "Para despues llamarme: Amigo";
    } else if (Dialogos == 50 && cambioDeCapitulo == 7) {
        InterfazUno.style.backgroundImage = "url(Imagenes/Aldea_De_Los_Humanos_2.png)";
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_3.png";
        ControladorDeDialogos.textContent = "Luego de terminar de recoger y buscar lo que Keine me pidio, Marisa me acompaño hacia la aldea, dandome un abrazo y deseandome lo mejor y perdiendose en el cielo, volando en su escoba";
    } else if (Dialogos == 51 && cambioDeCapitulo == 7) {
        InterfazUno.style.backgroundImage = "url(Imagenes/Habitacion_Oscura_2.png)";
        ControladorDeDialogos.textContent = "Ha sido un día muy extraño, una semana atareada y dado que estoy cansado es mejor dormir..."
        Dialogos = 0;
        cambioDeCapitulo = 8;
    }
}

//Momiji celosa
function DialogosCap8() {
    Tiempos();
    if (Dialogos == 1 && cambioDeCapitulo == 8) {
        Titulo.textContent = "Capitulo 8";
        NombreCaps.textContent = "Instinto protector~";
        InterfazUno.style.backgroundImage = "url(Imagenes/Aldea_De_Los_Humanos_1.png)";
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        ControladorDeDialogos.textContent = "Al amanecer me levanto como de costumbre y me preparo para mis actividades";
    } else if (Dialogos == 2 && cambioDeCapitulo == 8) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_3.png";
        ControladorDeDialogos.textContent = "Hoy tengo planeado hacer todo un poco mas rapido para ir a ver a Momi";
    } else if (Dialogos == 3 && cambioDeCapitulo == 8) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        ControladorDeDialogos.textContent = "Al llegar a la escuela de Keine, ella me menciona que hoy el tiempo de trabajo será breve debido a que trabajé muy bien estos ultimos días en la feria y ayer por lo que me dejara pasar esta vez directo con Akyuu";
    } else if (Dialogos == 4 && cambioDeCapitulo == 8) {
        ControladorDeDialogos.textContent = "Eso me pone bastante feliz, agradeciendole y tomando de nuevo mis cosas para ir a la casa de Akyuu";
    } else if (Dialogos == 5 && cambioDeCapitulo == 8) {
        ControladorDeDialogos.textContent = "A decir verdad el día transcurre con total normalidad salvo que ahora puedo hacer todo con mas tiempo";
    } else if (Dialogos == 6 && cambioDeCapitulo == 8) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros.png";
        ControladorDeDialogos.textContent = "Mientras organizo y limpio los tomos, Akyuu me pregunta sobre como va mi relacion con Momiji";
    } else if (Dialogos == 7 && cambioDeCapitulo == 8) {
        ControladorDeDialogos.textContent = "Simplemente le menciono que vamos bien, que para apenas llevar conociendonos un par de días estamos muy bien";
    } else if (Dialogos == 8 && cambioDeCapitulo == 8) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_3.png"
        ControladorDeDialogos.textContent = "Akyuu se levanto, se acerco a mi y me dio un abrazo. Felicitandome por lo que he logrado en Gensokyo, diciendome que tiene mi bendicion y que puedo contar con ella.";
    } else if (Dialogos == 9 && cambioDeCapitulo == 8) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        ControladorDeDialogos.textContent = "Akyuu posteriormente me solto y me dijo que siguiera trabajando. Para luego irse a otra habitacion";
    } else if (Dialogos == 10 && cambioDeCapitulo == 8) {
        ControladorDeDialogos.textContent = "Fue un gesto muy hermoso...";
    } else if (Dialogos == 11 && cambioDeCapitulo == 8) {
        MusicaJuego.src = "Musica/Side_Statement.mp3";
        MusicaJuego.play();
        InterfazUno.style.backgroundImage = "url(Imagenes/Aldea_De_Los_Humanos_1.png)";
        ControladorDeDialogos.textContent = "Tras terminar de hacer el trabajo salgo de la aldea y busco el puesto de trabajo de Momi";
    } else if (Dialogos == 12 && cambioDeCapitulo == 8) {
        InterfazUno.style.backgroundImage = "url(Imagenes/Puesto_1.png)";
        ControladorDeDialogos.textContent = "Momi! me escuchas?!";
    } else if (Dialogos == 13 && cambioDeCapitulo == 8) {
        ImagenMomiji.src = "Imagenes/Momiji/Enojada.png";
        ControladorDeDialogos.textContent = "NO GRITES! ME MOLESTA!";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 14 && cambioDeCapitulo == 8) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        ControladorDeDialogos.textContent = "Holaaa Momi! como estás?";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 15 && cambioDeCapitulo == 8) {
        ImagenMomiji.src = "Imagenes/Momiji/Indiferencia.png";
        ControladorDeDialogos.textContent = "He estado mejor. Que haces acá?";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 16 && cambioDeCapitulo == 8) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_3.png";
        ControladorDeDialogos.textContent = "Vine a visitarte. Que tienes?";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 17 && cambioDeCapitulo == 8) {
        ImagenMomiji.src = "Imagenes/Momiji/Indiferencia.png";
        ControladorDeDialogos.textContent = "No tengo nada y ya me viste, ahora vete";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 18 && cambioDeCapitulo == 8) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_3.png";
        ControladorDeDialogos.textContent = "No, algo tienes, nunca te he visto asi, pareces enfadada. Ven, cuentame que te pasa. Intento acercarme a Momiji pero ella se aleja, desenfundando su espada y acercandome la hoja al cuello.";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 19 && cambioDeCapitulo == 8) {
        ImagenMomiji.src = "Imagenes/Momiji/Enojada.png";
        ControladorDeDialogos.textContent = "TE DIGO QUE NO TENGO NADA!";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 20 && cambioDeCapitulo == 8) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_3.png";
        ControladorDeDialogos.textContent = "Momi...";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 21 && cambioDeCapitulo == 8) {
        ImagenMomiji.src = "Imagenes/Momiji/Enojada.png";
        ControladorDeDialogos.textContent = "Quieres saber que tengo?";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 22 && cambioDeCapitulo == 8) {
        ImagenMomiji.src = "Imagenes/Momiji/Yandere_2.png";
        ControladorDeDialogos.textContent = "Estoy celosa... Crees que no te ví cuado la Maga loca que vive en el bosque re agarro la mano?";
    } else if (Dialogos == 23 && cambioDeCapitulo == 8) {
        ImagenMomiji.src = "Imagenes/Momiji/Triste.png";
        ControladorDeDialogos.textContent = "Me dolio verte tan cerca con esa mujer, no le pusiste un alto, solamente te quedaste ahi quieto...";
    } else if (Dialogos == 24 && cambioDeCapitulo == 8) {
        ControladorDeDialogos.textContent = "Eres mi pareja... Debes respetar lo que tenemos, yo lo hago... Por que tu no?";
    } else if (Dialogos == 25 && cambioDeCapitulo == 8) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_3.png";
        ControladorDeDialogos.textContent = "Momi... No es lo que parece, es un error, lo siento...";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 26 && cambioDeCapitulo == 8) {
        ControladorDeDialogos.textContent = "Solo fui con Marisa a buscar algunas cosas para Keine, fue solo trabajo...";
    } else if (Dialogos == 27 && cambioDeCapitulo == 8) {
        ControladorDeDialogos.textContent = "Momi...Por favor, quizas actue mal no haberme alejado de ella y se malinterpretaron las cosas... Es mi culpa por eso... Por favor perdoname";
    } else if (Dialogos == 28 && cambioDeCapitulo == 8) {
        ControladorDeDialogos.textContent = "Por favor... Perdoname lo siento... No debes sentir eso. Sabes que te amo... No puedo ni quiero dejarte nunca... por favor... Perdoname...";
    } else if (Dialogos == 29 && cambioDeCapitulo == 8) {
        ImagenMomiji.src = "Imagenes/Momiji/Triste.png";
        ControladorDeDialogos.textContent = "De verdad?";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 30 && cambioDeCapitulo == 8) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        ControladorDeDialogos.textContent = "Momi... Eres lo mas valioso que tengo en este lugar... Nunca te mentiria, nunca haria algo que te lastime... Por favor, perdoname...";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 31 && cambioDeCapitulo == 8) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_3.png";
        ControladorDeDialogos.textContent = "Momi... Por favor... Lo siento... No estés asi...";
    } else if (Dialogos == 32 && cambioDeCapitulo == 8) {
        ImagenMomiji.src = "Imagenes/Momiji/Yandere_2.png";
        ControladorDeDialogos.textContent = "Solo no me gusta verte con otras personas...";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 33 && cambioDeCapitulo == 8) {
        ControladorDeDialogos.textContent = "Eres una persona demaciado importante para mi...";
    } else if (Dialogos == 34 && cambioDeCapitulo == 8) {
        ImagenMomiji.src = "Imagenes/Momiji/Triste.png";
        ControladorDeDialogos.textContent = "El unico que me mira como mujer, como persona, como algo mas que un monstruo con una espada y escudo...";
        MusicaJuego.src = "Musica/WaveOf_The_Spell.mp3";
        MusicaJuego.play();
    } else if (Dialogos == 35 && cambioDeCapitulo == 8) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        ControladorDeDialogos.textContent = "Momi... Pasamos una festividad juntos, compartimos comida, estuvimos juntos una noche... No voy a permitir que nada ni nadie se interponga entre nosotros... Momi, yo te amo... Quiero vivir una vida a tu lado <3";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 36 && cambioDeCapitulo == 8) {
        ImagenMomiji.src = "Imagenes/Momiji/Yandere_1.png";
        ControladorDeDialogos.textContent = "De verdad?";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 37 && cambioDeCapitulo == 8) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        ControladorDeDialogos.textContent = "De verdad...";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 38 && cambioDeCapitulo == 8) {
        ControladorDeDialogos.textContent = "Jejeje, si pudiera te pediria matrimonio ahora mismo, pero no tengo un anillo y solo se quedaria en una palabra o gesto";
    } else if (Dialogos == 39 && cambioDeCapitulo == 8) {
        ImagenMomiji.src = "Imagenes/Momiji/Sorpresa.png";
        ControladorDeDialogos.textContent = "...";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 40 && cambioDeCapitulo == 8) {
        ImagenMomiji.src = "Imagenes/Momiji/Sonrojada.png";
        ControladorDeDialogos.textContent = "Eres... Eres un idiota sabes? <3";
    } else if (Dialogos == 41 && cambioDeCapitulo == 8) {
        ControladorDeDialogos.textContent = "Un idiota increible <3";
    } else if (Dialogos == 42 && cambioDeCapitulo == 8) {
        ImagenMomiji.src = "Imagenes/Momiji/Beso.png";
        ControladorDeDialogos.textContent = "Muack~";
    } else if (Dialogos == 43 && cambioDeCapitulo == 8) {
        ImagenMomiji.src = "Imagenes/Momiji/Sonrojada.png";
        ControladorDeDialogos.textContent = "Te diria que si, 1.000 veces si, si quiero casarme contigo <3";
    } else if (Dialogos == 44 && cambioDeCapitulo == 8) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        ControladorDeDialogos.textContent = "Bueno <3 entonces oficialmente eres mi prometida <3";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 45 && cambioDeCapitulo == 8) {
        ControladorDeDialogos.textContent = "Vamos a dentro? <3";
    } else if (Dialogos == 46 && cambioDeCapitulo == 8) {
        ImagenMomiji.src = "Imagenes/Momiji/Sonrojada.png";
        ControladorDeDialogos.textContent = "Sis <3";
        ContenedorDeDialogos.style.backgroundColor = "red";
        Dialogos = 0;
        cambioDeCapitulo = 9;
    }
}
//Propuesta de matrimonio y mudanza para vivir juntos
function DialogosCap9() {
    Tiempos();
    if (Dialogos == 1 && cambioDeCapitulo == 9) {
        InterfazUno.style.backgroundImage = "url(Imagenes/Aldea_De_Los_Humanos_1.png)";
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        ControladorDeDialogos.textContent = "Llega el día siguiente y tras arreglar las cosas con Momi y regresar a la aldea ahora tengo que hacer algo nuevo... La nueva etapa en mi vida";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
        Titulo.textContent = "Capitulo 9";
        NombreCaps.textContent = "Te casarias conmigo?~";
        MusicaJuego.src = "Musica/Hopping_Steps.mp3";
        MusicaJuego.play();
    } else if (Dialogos == 2 && cambioDeCapitulo == 9) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_3.png";
        ControladorDeDialogos.textContent = "Ahora me casare... Tengo que decircelo a Keine y a Akyuu y claro... Hacer mejor las cosas con Momiji, hacer una propuesta linda para ella";
    } else if (Dialogos == 3 && cambioDeCapitulo == 9) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros.png";
        ControladorDeDialogos.textContent = "Empezando primero con Keine... La primera persona que me tendio la mano al llegar a ese sitio";
    } else if (Dialogos == 4 && cambioDeCapitulo == 9) {
        ControladorDeDialogos.textContent = "Tras llegar a la casa de Keine ella me recibe con una sonrisa. Es una persona muy agradable a decir verdad";
    } else if (Dialogos == 5 && cambioDeCapitulo == 9) {
        ControladorDeDialogos.textContent = "Al entrar, me dice que ya lo sabe... Sabe que le propuse matrimonio a Momiji, Momiji fue antes de que despertara a decirselo";
    } else if (Dialogos == 6 && cambioDeCapitulo == 9) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        ControladorDeDialogos.textContent = "Keine me tomo de las manos, dandome su bendicion para el matrimonio";
    } else if (Dialogos == 7 && cambioDeCapitulo == 9) {
        ControladorDeDialogos.textContent = "Dandome un abrazo y recomendandome un lugar donde comprarle un anillo";
    } else if (Dialogos == 8 && cambioDeCapitulo == 9) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_3.png";
        ControladorDeDialogos.textContent = "Luego... Procedio a pagarme por mi trabajo... Fue mas de lo que solia ganar con ella... Diciendo que comprara un anillo hermoso para ella y que este era mi primer paso hacia un futuro con Momiji"
    } else if (Dialogos == 9 && cambioDeCapitulo == 9) {
        ControladorDeDialogos.textContent = "No merezco tanto...";
    } else if (Dialogos == 10 && cambioDeCapitulo == 9) {
        ControladorDeDialogos.textContent = "Keine me dio un abrazo, diciendo que merezco esto y mas, hablando sobre que soy un buen hombre y que merezco ser feliz al lado de alguien que tambien me ama";
    } else if (Dialogos == 11 && cambioDeCapitulo == 9) {
        InterfazUno.style.backgroundImage = "url(Imagenes/Mercado_Aldea_De_Los_Humanos.jpg)";
        ControladorDeDialogos.textContent = "Tras salir de la casa de Keine, voy a la direccion que me dio Keine para comprar el anillo... Encontre variedades hermosas hasta que me escogí por un rubí rojo intenso, recordandome a los ojos de Momiji <3";
    } else if (Dialogos == 12 && cambioDeCapitulo == 9) {
        ControladorDeDialogos.textContent = "El brillo y la intensidad de esta roca es... Simplemente va mas allá de lo que he visto por imagenes o llegue a imaginar <3";
    } else if (Dialogos == 13 && cambioDeCapitulo == 9) {
        InterfazUno.style.backgroundImage = "url(Imagenes/Montania_Youkai.png)";
        ControladorDeDialogos.textContent = "Y regreso al sitio donde Momiji y yo nos conocimos... ";
    } else if (Dialogos == 14 && cambioDeCapitulo == 9) {
        MusicaJuego.src = "Musica/WaveOf_The_Spell.mp3";
        MusicaJuego.play();
        ImagenMomiji.src = "Imagenes/Momiji/Feliz.jpg";
        ControladorDeDialogos.textContent = "HOLAAAA! te note cuando saliste de la aldea";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 15 && cambioDeCapitulo == 9) {
        ImagenMomiji.src = "Imagenes/Momiji/Beso.png";
        ControladorDeDialogos.textContent = "Muack~";
    } else if (Dialogos == 16 && cambioDeCapitulo == 9) {
        ImagenMomiji.src = "Imagenes/Momiji/Sonrojada.png";
        ControladorDeDialogos.textContent = "Me alegra verte <3";
    } else if (Dialogos == 17 && cambioDeCapitulo == 9) {
        ImagenMomiji.src = "Imagenes/Momiji/Esperando.png";
        ControladorDeDialogos.textContent = "Que haces por aqui?";
    } else if (Dialogos == 18 && cambioDeCapitulo == 9) {
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        ControladorDeDialogos.textContent = "Venia a hacer algo Momi <3";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
    } else if (Dialogos == 19 && cambioDeCapitulo == 9) {
        ControladorDeDialogos.textContent = "Arrodillandome frente a Momi, sacando la cajita que contiene el anillo que le compre";
    } else if (Dialogos == 20 && cambioDeCapitulo == 9) {
        ImagenMomiji.src = "Imagenes/Momiji/Final_MATRIMONIO_1.png";
        ControladorDeDialogos.textContent = "Momi... Te casarias conmigo? <3";
    } else if (Dialogos == 21 && cambioDeCapitulo == 9) {
        ImagenMomiji.src = "Imagenes/Momiji/Pensamiento.png";
        ControladorDeDialogos.textContent = "...";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 22 && cambioDeCapitulo == 9) {
        ImagenMomiji.src = "Imagenes/Momiji/Sonrojada.png";
        ControladorDeDialogos.textContent = "Tonto! te dije que si desde ayer! te diria que si 1.000 veces mas!";
    } else if (Dialogos == 23 && cambioDeCapitulo == 9) {
        ControladorDeDialogos.textContent = "Si, si quiero casarme contigo <3";
    } else if (Dialogos == 24 && cambioDeCapitulo == 9) {
        ImagenMomiji.src = "Imagenes/Momiji/Final_MATRIMONIO_2.png";
        ControladorDeDialogos.textContent = "Es tan hermoso <3";
    } else if (Dialogos == 25 && cambioDeCapitulo == 9) {
        ImagenMomiji.src = "Imagenes/Momiji/Beso.png";
        ControladorDeDialogos.textContent = "Muack~";
    } else if (Dialogos == 26 && cambioDeCapitulo == 9){
        ImagenMomiji.src = "Imagenes/Momiji/Sonrojada.png";
        ControladorDeDialogo.textContent = "Eres una persona increible <3";
    } else if (Dialogos == 27 && cambioDeCapitulo == 9){
        ControladorDeDialogos.textContent = "Estaremos juntos~ Te amo <3";
        Dialogos = 0;
        cambioDeCapitulo = 10;
    }
}

//Planes de boda y final
function DialogosCap10() {
    Tiempos();
    if(Dialogos == 1 && cambioDeCapitulo == 10){    
        InterfazUno.style.backgroundImage = "url(Imagenes/Matrimonio.png)";
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_3.png";
        ControladorDeDialogos.textContent = "Hoy es el día mas importante de mi vida... Estoy absurdamente nervioso";
        ContenedorDeDialogos.style.backgroundColor = "rgb(153, 115, 84)";
        Titulo.textContent = "Capitulo 10";
        NombreCaps.textContent = "Donde el carmin de tus ojos derrite mi invierno~";
        MusicaJuego.src = "Musica/Missing_Love.mp3";
        MusicaJuego.play();
    } else if (Dialogos == 2 && cambioDeCapitulo == 10){
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_2.png";
        ControladorDeDialogos.textContent = "Tengo miedo... Pero Keine me tranquiliza. Diciendo que este es un paso gigante en mi vida y que esta feliz de verme bien vestido, a punto de casarme con una buena mujer que me ama";
    } else if (Dialogos == 3 && cambioDeCapitulo == 10){
        ImagenMomiji.src = "Imagenes/Nosotros/Nosotros_3.png";
        ControladorDeDialogos.textContent = "Ha llegado el momento... Observo a Momiji acercarse... Se ve como un angel... El mas hermoso que jamás he visto. Esa es la mujer con la que pasare el resto de mi vida... La amo <3";
    } else if (Dialogos == 4 && cambioDeCapitulo == 10){
        ControladorDeDialogos.style.fontFamily = "'Dancing Script', cursive;";
        ControladorDeDialogos.textContent = "weight";
        ImagenMomiji.src = "Imagenes/Momiji/Final_Matrimonio_3.png";
        ControladorDeDialogos.textContent = "Te vez nervioso sabes?";
        ContenedorDeDialogos.style.backgroundColor = "red";
    } else if (Dialogos == 5 && cambioDeCapitulo == 10){
        ControladorDeDialogos.textContent = "No te sientas asi~ esto es hermoso <3";
    } else if (Dialogos == 6 && cambioDeCapitulo == 10){
        ImagenMomiji.src = "Imagenes/Momiji/Final_Matrimonio_4.png";
        ControladorDeDialogos.textContent = "Muack~";
    } else if (Dialogos == 7 && cambioDeCapitulo == 10){
        ImagenMomiji.src = "Imagenes/Momiji/Final_Matrimonio_3.png";
        ControladorDeDialogos.textContent = "Pasare el resto de mi vida a tu lado <3 nisiquiera la muerte me va a alejar de ti <3";
    } else if (Dialogos == 8 && cambioDeCapitulo == 10){
        ImagenMomiji.style.visibility = "hidden";
        ControladorDeDialogos.textContent = "Te amo mas de lo que puedes llegar a imaginar <3";
    } else if (Dialogos == 9 && cambioDeCapitulo == 10){
        ControladorDeDialogos.textContent = "Fin~"
    }
}