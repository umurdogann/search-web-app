const MatchStrings = (str1, str2) => {
	return str1.toLowerCase().includes(str2.toLowerCase());
};

const SortByDate = (a, b) => {
	let date1 = a[3];
	let date2 = b[3];
	date1 = date1.split('/').reverse().join('');
	date2 = date2.split('/').reverse().join('');
	return date1.localeCompare(date2);
};

export const SearchInData = (value) => {
	const data = JSON.parse(localStorage.getItem('mockData')).data;
	let filtered = data.filter(
		(item) => MatchStrings(item[0], value) || MatchStrings(item[2], value) || MatchStrings(item[3], value)
	);
	return SortData(filtered, 'Name ascending');
};

export const SortData = (data, option) => {
	switch (option) {
		case 'Name ascending':
			return [...data].sort((a, b) => a[0].localeCompare(b[0]));
		case 'Name descending':
			return [...data].sort((a, b) => a[0].localeCompare(b[0])).reverse();
		case 'Year ascending':
			return [...data].sort((a, b) => SortByDate(a, b));
		case 'Year descending':
			return [...data].sort((a, b) => SortByDate(a, b)).reverse();
		default:
			break;
	}
};
