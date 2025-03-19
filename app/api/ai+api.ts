import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(request: Request) {
    const { image } = await request.json();

    const chatCompletion = await groq.chat.completions.create({
        "messages": [
          {
            "role": "user",
            "content": [
              {
                "type": "text",
                "text": "Create a short children's story (300 words) based on the given image. Start with a captivating and imaginative title. Then, craft a heartwarming and engaging story with simple yet vivid language. Ensure the story is adventurous, magical, or educational, appropriate for young readers (ages 4-8). Introduce a lovable main character, a clear goal or challenge, and a satisfying resolution. Keep the tone playful and inspiring, and incorporate elements from the image naturally into the story."
              },
              {
                "type": "image_url",
                "image_url": {
                  "url": `data:image/jpeg;base64,${image}`
                }
              }
            ]
          }
        ],
        "model": "llama-3.2-11b-vision-preview",
        "temperature": 1,
        "max_completion_tokens": 1024,
        "top_p": 1,
        "stream": false,
        "stop": null,
    });

    const story = chatCompletion.choices[0]?.message?.content || ""
    
    return new Response(JSON.stringify({ story }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
    })
}