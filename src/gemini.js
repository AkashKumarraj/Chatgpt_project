
import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold

} from "@google/generative-ai"

const api = process.env.REACT_APP_GEMINI_API_KEY
console.log('Using API Key:', api ? `${api.substring(0, 5)}*******************************` : 'NONE')
const genAI = new GoogleGenerativeAI(api);

const model = genAI.getGenerativeModel({
    model: "gemini-flash-latest",

});

const generationConfig = {

    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};
async function run(prompt) {
    const chatSession = model.startChat({
        generationConfig,
        history: [

        ],
    });
    const result = await chatSession.sendMessage(prompt);
    console.log(result.response.text());
    return result.response.text()
}
export default run;