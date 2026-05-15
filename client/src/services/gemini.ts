
import { GoogleGenAI } from "@google/genai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';
let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

export const generateRomanticMessage = async (name: string, dateInfo: string) => {
  if (!ai) {
    console.warn("Gemini API key not configured");
    return "Noelia, eres lo mejor que me ha pasado. ¡Menudo partidazo te has llevado conmigo! ❤️";
  }
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: `Actúa como Cris, el novio de Noelia. Cris es divertido, bromista, un poco pícaro pero profundamente enamorado. 
      Escribe un mensaje para Noelia mencionando que la fecha ${dateInfo} es especial. 
      CONTEXTO IMPORTANTE: Noelia perdió a su madre, así que si la fecha parece relacionada con ella, sé muy dulce, romántico y un poco nostálgico. 
      Si es otra fecha, usa el humor típico de Cris: un poco creído pero adorable. 
      Máximo 40 palabras. Usa emojis que Cris usaría. Habla de tú a tú, muy personal.`,
      config: {
        temperature: 0.85,
        topP: 0.9,
      }
    });
    return response.text || "Noelia, eres lo mejor que me ha pasado. ¡Menudo partidazo te has llevado conmigo! ❤️";
  } catch (error) {
    console.error("Error generating message:", error);
    return "Noelia, te amo más que a nada. Gracias por ser mi compañera en todo. ❤️";
  }
};
