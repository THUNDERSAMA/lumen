import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyAaVnO7NuMW4iSPDnxOhD0gVLLyCm3z-6Y");
export async function extractDoctorInfo(prompt:string) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const modifiedPrompt = `${prompt}\n*extract doctor info only*`;
    const result = await model.generateContent(modifiedPrompt);
    const response = await result.response;
    const text = await response.text();
    
    
    //const doctorInfo = extractDoctorDetails(text);

    return text;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}