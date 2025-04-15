/**
 * API types for the zine application
 */

export interface ZineContent {
	title: string
	content: string
	images?: string[]
}

export interface ApiConfig {
	apiKey: string
	baseUrl: string
	timeout?: number
}

export interface ZineRequestParams {
	page: number
	limit?: number
	sortBy?: 'date' | 'title' | 'author'
	order?: 'asc' | 'desc'
}
