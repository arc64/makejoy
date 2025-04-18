import { json } from '@sveltejs/kit'
import type { RequestHandler } from '@sveltejs/kit'
import { ApiClient } from '$lib/services/api-client'
import { ZineService } from '$lib/services/zine-service'
import { env } from '$env/dynamic/private'

// Initialize API client with environment variables
const apiClient = new ApiClient({
	baseUrl: env.API_BASE_URL || 'http://localhost:3000',
	apiKey: env.API_KEY,
	timeout: Number(env.API_TIMEOUT) || 5000
})

// Initialize zine service
const zineService = new ZineService(apiClient)

// GET handler for /api/zine
export const GET: RequestHandler = async () => {
	try {
		const response = await zineService.getZineData()
		return json(response)
	} catch (error) {
		console.error('Error fetching zine data:', error)
		return json({ error: 'Failed to fetch zine data', details: error }, { status: 500 })
	}
}
