/**
 * formatHelper
 * Provides helper functions for formatting data.
 *
 * Methods:
 * - formatDate: Formats a date string.
 * - formatCurrency: Formats a number as currency.
 * - capitalize: Capitalizes the first letter of a string.
 */

const formatHelper = {
	formatDate: (date, locale = "en-US", options = {}) => {
		return new Date(date).toLocaleDateString(locale, options);
	},

	formatCurrency: (amount, currency = "USD", locale = "en-US") => {
		return new Intl.NumberFormat(locale, {
			style: "currency",
			currency,
		}).format(amount);
	},

	capitalize: (str) => {
		if (!str) return "";
		return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
	},
};

export default formatHelper;
