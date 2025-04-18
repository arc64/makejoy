/**
 * Type definitions for the zine
 */

/**
 * Represents a background image for a panel
 */
export interface BackgroundImage {
	src: string
	alt?: string
}

/**
 * Represents a text element within a panel
 */
export interface Text {
	text: string
	type: 'normal' | 'explosive' | 'shout' | 'whisper'
	text_position: string
}

/**
 * Represents a panel in the zine
 */
export interface Panel {
	id: string
	width: string
	height: string
	'background-img'?: BackgroundImage
	texts: Text[]
}

/**
 * Represents the entire zine data structure
 */
export interface ZineData {
	title: string
	author: string
	panels: Panel[]
}

/**
 * API response structure
 */
export interface ApiResponse<T> {
	data: T
	status: number
	message?: string
}

/**
 * API error structure
 */
export interface ApiError {
	error: string
	status: number
	details?: unknown
}
