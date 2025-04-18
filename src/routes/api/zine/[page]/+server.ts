import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'
import { ApiClient } from '$lib/services/api-client'
import type { ZineContent, ZineRequestParams } from '$lib/types/api'
import { env } from '$env/dynamic/private'

// Validate required environment variables
if (!env.API_KEY || !env.API_BASE_URL) {
	throw new Error('Missing required environment variables: API_KEY, API_BASE_URL')
}

// Initialize API client with environment variables
const apiClient = new ApiClient({
	apiKey: env.API_KEY,
	baseUrl: env.API_BASE_URL,
	timeout: Number(env.API_TIMEOUT) || 5000
})

export const GET: RequestHandler = async ({ params, url }) => {
	try {
		// Get query parameters
		const limit = url.searchParams.get('limit')
		const sortBy = url.searchParams.get('sortBy')
		const order = url.searchParams.get('order')

		// Construct request parameters
		const requestParams: ZineRequestParams = {
			page: Number(params.page) || 1,
			limit: limit ? Number(limit) : undefined,
			sortBy: sortBy as ZineRequestParams['sortBy'],
			order: order as ZineRequestParams['order']
		}

		// Filter out undefined values
		const queryParams = Object.entries(requestParams)
			.filter(([, value]) => value !== undefined)
			.reduce((acc, [key, value]) => ({ ...acc, [key]: String(value) }), {})

		// Fetch zine content
		const response = await apiClient.get<ZineContent>('/zine/content', queryParams)

		return json(response)
	} catch (error) {
		console.error('Error fetching zine content:', error)
		return json({ error: 'Failed to fetch zine content', details: error }, { status: 500 })
	}
}

export const POST: RequestHandler = async ({ params }) => {
	try {
		const pageId = params.page
		// TODO: Implement page processing
		return json({ success: true, pageId })
	} catch (err) {
		const errorMessage = err instanceof Error ? err.message : 'Failed to process page data'
		return json({ error: errorMessage }, { status: 500 })
	}
}
