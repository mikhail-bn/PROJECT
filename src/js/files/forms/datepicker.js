/* Календарь */

// Подключение функционала "Чертогов Фрилансера"
// Подключение списка активных модулей
import { flsModules } from "../modules.js";

// Подключение модуля
import datepicker from 'js-datepicker';

const picker = datepicker('[data-datepicker]', {
	customDays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
	customMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
	overlayButton: 'Apply',
	overlayPlaceholder: 'Year (4 numbers)',
	startDay: 0,
	formatter: (input, date, instance) => {
		const value = date.toLocaleDateString()
		input.value = value
	},
	onSelect: function (input, instance, date) {

	}
});
flsModules.datepicker = picker;
