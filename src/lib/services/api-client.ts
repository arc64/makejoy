import type { ApiResponse, ApiError } from '$lib/types/zine'

/**
 * Configuration for the API client
 */
export interface ApiConfig {
	baseUrl: string
	apiKey?: string
	timeout?: number
}

/**
 * API client for making requests to the backend
 */
export class ApiClient {
	private baseUrl: string
	private apiKey?: string
	private timeout: number

	/**
	 * Create a new API client
	 * @param config API configuration
	 */
	constructor(config: ApiConfig) {
		this.baseUrl = config.baseUrl
		this.apiKey = config.apiKey
		this.timeout = config.timeout || 5000
	}

	/**
	 * Make a request with timeout
	 * @param url URL to request
	 * @param options Request options
	 * @returns Response
	 */
	private async fetchWithTimeout(url: string, options: RequestInit = {}): Promise<Response> {
		const controller = new AbortController()
		const timeoutId = setTimeout(() => controller.abort(), this.timeout)

		try {
			const response = await fetch(url, {
				...options,
				signal: controller.signal,
				headers: {
					'Content-Type': 'application/json',
					...(this.apiKey ? { Authorization: `Bearer ${this.apiKey}` } : {}),
					...options.headers
				}
			})
			return response
		} finally {
			clearTimeout(timeoutId)
		}
	}

	/**
	 * Handle API response
	 * @param response Fetch response
	 * @returns Parsed response data
	 */
	private async handleResponse<T>(response: Response): Promise<ApiResponse<T>> {
		if (!response.ok) {
			const error: ApiError = await response.json()
			throw new Error(error.error || 'API request failed')
		}

		const data = await response.json()
		return {
			data,
			status: response.status
		}
	}

	/**
	 * Make a GET request
	 * @param endpoint API endpoint
	 * @param params Query parameters
	 * @returns Response data
	 */
	async get<T>(endpoint: string, params?: Record<string, string>): Promise<ApiResponse<T>> {
		const url = new URL(`${this.baseUrl}${endpoint}`)
		if (params) {
			Object.entries(params).forEach(([key, value]) => {
				url.searchParams.append(key, value)
			})
		}

		const response = await this.fetchWithTimeout(url.toString())
		return this.handleResponse<T>(response)
	}

	/**
	 * Make a POST request
	 * @param endpoint API endpoint
	 * @param data Request data
	 * @returns Response data
	 */
	async post<T>(endpoint: string, data: unknown): Promise<ApiResponse<T>> {
		const response = await this.fetchWithTimeout(`${this.baseUrl}${endpoint}`, {
			method: 'POST',
			body: JSON.stringify(data)
		})
		return this.handleResponse<T>(response)
	}

	/**
	 * Make a PUT request
	 * @param endpoint API endpoint
	 * @param data Request data
	 * @returns Response data
	 */
	async put<T>(endpoint: string, data: unknown): Promise<ApiResponse<T>> {
		const response = await this.fetchWithTimeout(`${this.baseUrl}${endpoint}`, {
			method: 'PUT',
			body: JSON.stringify(data)
		})
		return this.handleResponse<T>(response)
	}

	/**
	 * Make a DELETE request
	 * @param endpoint API endpoint
	 * @returns Response data
	 */
	async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
		const response = await this.fetchWithTimeout(`${this.baseUrl}${endpoint}`, {
			method: 'DELETE'
		})
		return this.handleResponse<T>(response)
	}
}
