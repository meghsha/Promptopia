import connectToDB from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (request, response) => {
    const { userId, prompt, tag } = await request.json();

    try {
        await connectToDB();

        const newPrompt = await Prompt.create({
            creator: userId, 
            prompt, 
            tag 
        })
        
        return new Response(JSON.stringify(newPrompt), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new prompt", { status: 500 });
    }
}