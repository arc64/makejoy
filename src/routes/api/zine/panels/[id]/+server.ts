import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'
import { env } from '$env/dynamic/private'

// Configuration for the external API
const EXTERNAL_API_URL = env.EXTERNAL_API_URL || 'https://your-external-api.com'
const API_KEY = env.EXTERNAL_API_KEY

// GET handler for /api/zine/panels/[id]
export const GET: RequestHandler = async ({ params }) => {
	try {
		const id = params.id

		// Make the request to the external API
		const response = await fetch(`${EXTERNAL_API_URL}/zine/panels/${id}`, {
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
		return json(
			{
				error: 'Failed to fetch panel',
				details: error instanceof Error ? error.message : 'Unknown error'
			},
			{ status: 500 }
		)
	}
}

// PUT handler for /api/zine/panels/[id]
export const PUT: RequestHandler = async ({ params, request }) => {
	try {
		const id = params.id
		const body = await request.json()

		// Make the request to the external API
		const response = await fetch(`${EXTERNAL_API_URL}/zine/panels/${id}`, {
			method: 'PUT',
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
		return json(data)
	} catch (error) {
		console.error('Error proxying to external API:', error)
		return json(
			{
				error: 'Failed to update panel',
				details: error instanceof Error ? error.message : 'Unknown error'
			},
			{ status: 500 }
		)
	}
}

// DELETE handler for /api/zine/panels/[id]
export const DELETE: RequestHandler = async ({ params }) => {
	try {
		const id = params.id

		// Make the request to the external API
		const response = await fetch(`${EXTERNAL_API_URL}/zine/panels/${id}`, {
			method: 'DELETE',
			headers: {
				Authorization: `Bearer ${API_KEY}`,
				'Content-Type': 'application/json'
			}
		})

		if (!response.ok) {
			throw new Error(`External API responded with status: ${response.status}`)
		}

		// Return success response
		return json({ success: true })
	} catch (error) {
		console.error('Error proxying to external API:', error)
		return json(
			{
				error: 'Failed to delete panel',
				details: error instanceof Error ? error.message : 'Unknown error'
			},
			{ status: 500 }
		)
	}
}
