import { ApiClient } from './api-client'
import type { ZineData, Panel, ApiResponse } from '$lib/types/zine'

/**
 * Service for handling zine data
 */
export class ZineService {
	private apiClient: ApiClient

	/**
	 * Create a new zine service
	 * @param apiClient API client
	 */
	constructor(apiClient: ApiClient) {
		this.apiClient = apiClient
	}

	/**
	 * Get all zine data
	 * @returns Zine data
	 */
	async getZineData(): Promise<ApiResponse<ZineData>> {
		return this.apiClient.get<ZineData>('/zine')
	}

	/**
	 * Get a specific panel by ID
	 * @param id Panel ID
	 * @returns Panel data
	 */
	async getPanelById(id: number): Promise<ApiResponse<Panel>> {
		return this.apiClient.get<Panel>(`/zine/panels/${id}`)
	}

	/**
	 * Get panels by page number
	 * @param page Page number
	 * @param limit Number of panels per page
	 * @returns Panels data
	 */
	async getPanelsByPage(page: number, limit: number = 10): Promise<ApiResponse<Panel[]>> {
		return this.apiClient.get<Panel[]>('/zine/panels', {
			page: page.toString(),
			limit: limit.toString()
		})
	}

	/**
	 * Create a new panel
	 * @param panel Panel data
	 * @returns Created panel
	 */
	async createPanel(panel: Omit<Panel, 'id'>): Promise<ApiResponse<Panel>> {
		return this.apiClient.post<Panel>('/zine/panels', panel)
	}

	/**
	 * Update an existing panel
	 * @param id Panel ID
	 * @param panel Panel data
	 * @returns Updated panel
	 */
	async updatePanel(id: number, panel: Partial<Panel>): Promise<ApiResponse<Panel>> {
		return this.apiClient.put<Panel>(`/zine/panels/${id}`, panel)
	}

	/**
	 * Delete a panel
	 * @param id Panel ID
	 * @returns Deletion result
	 */
	async deletePanel(id: number): Promise<ApiResponse<void>> {
		return this.apiClient.delete<void>(`/zine/panels/${id}`)
	}
}
