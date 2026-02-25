import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function listModels() {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        console.error("GEMINI_API_KEY not found in .env");
        return;
    }

    const ai = new GoogleGenAI({ apiKey });
    try {
        const models = await ai.models.list();
        console.log("Available models:");
        // @ts-ignore - models is an async iterator or has a results property depending on version
        for await (const model of models) {
            console.log(`- ${model.name} (supports: ${model.supportedGenerationMethods.join(', ')})`);
        }
    } catch (error) {
        console.error("Error listing models:", error);
    }
}

listModels();
