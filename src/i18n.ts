import { createI18n } from 'vue-i18n'

/**
 * @description Create a dynamic i18n instance based on the provided languages and session storage Id.
 * @param languages 
 * @param sessionId 
 * @returns 
 */
export function createDynamicI18n(
	languages: Record<string, any>,
	sessionId: string
) {
	// Set default locale to 'en' (English)
	let defaultLocale = 'en'

	if (typeof window !== 'undefined') {
		const sessionData = sessionStorage.getItem(sessionId)
		const parsedData = sessionData ? JSON.parse(sessionData) : null

		defaultLocale = parsedData?.language || 'en'
	}

	return createI18n({
		legacy: false, // Enable Composition API
		globalInjection: true, // Enable `t()` globally
		missingWarn: false, // Disable warnings for missing keys
		fallbackWarn: false, // Disable fallback warnings
		locale: defaultLocale, // Default language
		fallbackLocale: "en",
		messages: languages,
	})
}
