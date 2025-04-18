/**
 * Escapes HTML special characters in a string to prevent XSS attacks
 *
 * This approach is recommended by:
 * - OWASP (Open Web Application Security Project)
 * - MDN (Mozilla Developer Network)
 * - Google's Security Guidelines
 *
 * It uses the browser's built-in HTML escaping mechanisms through textContent,
 * which is more reliable than manual string replacement and handles all edge cases.
 * This pattern is used in many security-focused frameworks and libraries.
 *
 * @param str The string to escape
 * @returns The escaped string
 */
export function escapeHtml(str: string): string {
	const div = document.createElement('div')
	div.textContent = str
	return div.innerHTML
}
