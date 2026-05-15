
import { SpecialDate } from '../types';

export interface SpecialDateWithVideo extends SpecialDate {
  videoId: string;
  songTitle: string;
  artist: string;
}

export const SPECIAL_DATES: Record<string, SpecialDateWithVideo> = {
  "06102004": {
    id: "06102004",
    title: "Mi Cumple (Tu Regalo)",
    message: "El día que el mundo se iluminó con mi nacimiento, solo para que años después nuestros caminos se cruzaran sin importar la distancia. Noelia, los kilómetros son nada comparados con lo que siento. Nací para ser tu compañero de vida y, sinceramente, ¡qué puntería tuviste! Tienes mucha suerte de tener a este bombón que te ama con locura. 🎂🌍❤️",
    formatted: "06/10/2004",
    videoId: "GxldQ9eX2wo",
    songTitle: "Canción Especial",
    artist: "Artista"
  },
  "08122003": {
    id: "08122003",
    title: "Tu Cumpleaños",
    message: "El 08 de diciembre de 2003 el mundo recibió su mejor regalo: tú. Noelia, eres la mujer más increíble, fuerte y hermosa que conozco. Sé que a veces soy un desastre, pero nacería mil veces más solo para buscarte y volver a enamorarte, sin importar los kilómetros. Eres mi jefa, mi vida y mi todo. ¡Feliz cumpleaños a la dueña de mi corazón! ✨🎂👸🏻❤️",
    formatted: "08/12/2003",
    videoId: "NjkAgGwXaSs",
    songTitle: "Cuándo empezaré a vivir",
    artist: "Enredados"
  },
  "19081975": {
    id: "19081975",
    title: "El Ángel de tu vida",
    message: "El día que nació tu mamá, el universo regaló a una mujer extraordinaria que amó con todo su corazón. Ella siempre quería verte bien arreglada, limpia y radiante. Le encantaba tomarte fotos para capturar tu belleza, y adoraba sus lentes de contacto que la hacían ver aún más hermosa. Tu mamá te amó infinitamente, Noelia. Desde el cielo, sé que ve cómo yo también te amo con la misma intensidad. Eres su legado más hermoso, y cada día me esfuerzo por cuidarte y hacerte feliz como ella lo hizo ya que ella es y será siempre la mejor mamá del mundo. Y gracias por ser la mejor hija y la mejor novia, TE AMO. ✨🦋❤️",
    formatted: "19/08/1975",
    videoId: "v9T_MGfzq7I",
    songTitle: "DtMF (Visualizer)",
    artist: "Bad Bunny"
  },
  "05081977": {
    id: "05081977",
    title: "El Suegro...",
    message: "Bueno... el cumple del suegro. Le damos las gracias por haberte hecho a ti, y ya. Lo felicitamos por compromiso y nos alejamos lentamente... ¡Shhh! 😬🤫",
    formatted: "05/08/1977",
    videoId: "b9CekFw21GM",
    songTitle: "Algo Se Enciende",
    artist: "Violetta"
  },
  "13011998": {
    id: "13011998",
    title: "El Jochis",
    message: "¡Cumple del Jochis! Mi 'cuñado' favorito y el que tiene mejor gusto de la familia... ¡porque le gustan los hombres, claro! 😂 Un brindis por el rey de la pluma y la fiesta. ¡Te queremos, Jochis! 🍻🏳️‍🌈",
    formatted: "13/01/1998",
    videoId: "f1ftatXL84s",
    songTitle: "Alcancemos las Estrellas",
    artist: "Violetta"
  },
  "10102023": {
    id: "10102023",
    title: "Nuestro Día",
    message: "El 10 de octubre de 2023, el universo decidió que dos personas de diferentes países se encontraran en el caos de internet. Desde ese primer 'Hola', supe que eras especial... aunque los kilómetros insistan en ser tercos. Noelia, cada día contigo es una aventura a distancia que vale más que cualquier viaje. Eres mi persona favorita, incluso cuando no puedo abrazarte en persona. Pero te prometo que cuando me den mi visa y nos veamos, no habrá distancia que valga. ¡Eres mi todo, ¡Mi frentona! 💘🌍✈️❤️",
    formatted: "10/10/2023",
    videoId: "F8KlF1XM05c",
    songTitle: "Nuestro Camino",
    artist: "Violetta"
  },
  "14022024": {
    id: "14022024",
    title: "San Valentín",
    message: "Dicen que es el día del amor, pero contigo no necesito calendario. Aunque me he currado esta página para que veas que soy el novio más detallista del planeta. ¡Te amo! ❤️🌹",
    formatted: "14/02/2024",
    videoId: "fZSZMp32XaA",
    songTitle: "Veo en ti la Luz",
    artist: "Rapunzel"
  }
};
