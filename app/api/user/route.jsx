import connectToDB from '@utils/database'
import Prompt from '@models/prompt'
import 

export const GET = async (request) => {
    try {
        await connectToDB()
        const prompts = await Prompt.find({})
        return {
        status: 200,
        body: {
            success: true,
            data: prompts
        }
        }
    } catch (error) {
        return {
        status: 500,
        body: {
            success: false,
            error: error.message
        }
        }
    }
}