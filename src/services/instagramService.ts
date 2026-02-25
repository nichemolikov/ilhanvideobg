import { GoogleGenAI, Type } from "@google/genai";

export interface InstagramPost {
  id: string;
  url: string;
  likes: string;
  comments: string;
}

export async function fetchInstagramPhotos(profileUrl: string): Promise<InstagramPost[]> {
  const getPlaceholders = () => [
    { id: '1', url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=600', likes: '1.2k', comments: '45' },
    { id: '2', url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=600', likes: '850', comments: '32' },
    { id: '3', url: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=600', likes: '2.1k', comments: '89' },
    { id: '4', url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600', likes: '1.5k', comments: '56' },
    { id: '5', url: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=600', likes: '920', comments: '28' },
    { id: '6', url: 'https://images.unsplash.com/photo-1465495910483-0d6749ee997b?auto=format&fit=crop&q=80&w=600', likes: '1.8k', comments: '64' },
  ];

  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.warn("GEMINI_API_KEY is not defined. Using placeholders.");
      return getPlaceholders();
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const response = await ai.models.generateContent({
      model: "gemini-3.1-pro-preview",
      contents: `I need to display the 6 most recent public posts from the Instagram profile: ${profileUrl}. 
      
      Please use Google Search to find the actual public posts. 
      For each post, I need:
      1. A direct image URL (look for high-quality preview images or CDN links that are publicly accessible).
      2. The number of likes (e.g., "1.2k").
      3. The number of comments (e.g., "45").
      
      Return the data as a JSON array of objects. 
      If you cannot find real images, do not return placeholders; instead, return an empty array so I can handle the fallback.`,
      config: {
        tools: [{ googleSearch: {} }],
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING },
              url: { type: Type.STRING },
              likes: { type: Type.STRING },
              comments: { type: Type.STRING },
            },
            required: ["id", "url", "likes", "comments"]
          }
        }
      },
    });

    const text = response.text;
    if (!text || text === '[]') {
      console.log("Gemini returned no real data, using placeholders.");
      return getPlaceholders();
    }
    
    const data = JSON.parse(text);
    console.log("Successfully fetched real Instagram data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching Instagram photos via Gemini:", error);
    return getPlaceholders();
  }
}
