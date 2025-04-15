import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'
import { env } from '$env/dynamic/private'
import { negativeNumbersZine } from '$lib/mock-data/negative-numbers'
import type { ApiResponse, Panel } from '$lib/types/zine'

// Configuration for the external API
const EXTERNAL_API_URL = env.EXTERNAL_API_URL || 'https://your-external-api.com'
const API_KEY = env.EXTERNAL_API_KEY
const USE_MOCK_DATA = env.USE_MOCK_DATA === 'true'

// GET handler for /api/zine/panels
export const GET: RequestHandler = async ({ url }) => {
	try {
		// If mock data is enabled, return it directly
		if (USE_MOCK_DATA) {
			const panels = negativeNumbersZine.panels
			const response: ApiResponse<Panel[]> = {
				data: panels,
				status: 200
			}
			return json(response)
		}

		// Forward the query parameters
		const page = url.searchParams.get('page') || '1'
		const limit = url.searchParams.get('limit') || '10'

		// Construct the external API URL with query parameters
		const externalUrl = `${EXTERNAL_API_URL}/zine/panels?page=${page}&limit=${limit}`

		// Make the request to the external API
		const response = await fetch(externalUrl, {
			headers: {
				Authorization: `Bearer ${API_KEY}`,
				'Content-Type': 'application/json'
			}
		})

		if (!response.ok) {
			throw new Error(`External API responded with status: ${response.status}`)
		}

		// Get the data from the external API
		const data = await response.json()

		// Return the data directly to the client
		return json(data)
	} catch (error) {
		console.error('Error proxying to external API:', error)

		// If there's an error and mock data is not enabled, return the error
		if (!USE_MOCK_DATA) {
			return json(
				{
					error: 'Failed to fetch panels',
					details: error instanceof Error ? error.message : 'Unknown error'
				},
				{ status: 500 }
			)
		}

		// Otherwise, return the mock data as a fallback
		console.log('Using mock data as fallback')
		const panels = negativeNumbersZine.panels
		const mockResponse: ApiResponse<Panel[]> = {
			data: panels,
			status: 200
		}
		return json(mockResponse)
	}
}

// POST handler for /api/zine/panels
export const POST: RequestHandler = async ({ request }) => {
	try {
		// If mock data is enabled, simulate a successful creation
		if (USE_MOCK_DATA) {
			const body = await request.json()
			const newPanel = {
				id: negativeNumbersZine.panels.length + 1,
				...body
			}
			return json(newPanel, { status: 201 })
		}

		// Get the request body
		const body = await request.json()

		// Make the request to the external API
		const response = await fetch(`${EXTERNAL_API_URL}/zine/panels`, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${API_KEY}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		})

		if (!response.ok) {
			throw new Error(`External API responded with status: ${response.status}`)
		}

		// Get the data from the external API
		const data = await response.json()

		// Return the data directly to the client
		return json(data, { status: 201 })
	} catch (error) {
		console.error('Error proxying to external API:', error)
		return json(
			{
				error: 'Failed to create panel',
				details: error instanceof Error ? error.message : 'Unknown error'
			},
			{ status: 500 }
		)
	}
}
