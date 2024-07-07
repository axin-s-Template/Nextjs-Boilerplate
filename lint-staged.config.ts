module.exports = {
	// '*.{js,jsx,ts,tsx}': ['eslint --fix', 'eslint'],
	// '**/*.ts?(x)': () => 'npm run check-types',
	// '*.{json,yaml}': ['prettier --write']

	'src/**/*.(ts|tsx|js|jsx)': ['eslint --fix'],
	'src/**/*.(ts|tsx|js|jsx|css|scss|md|json)': ['prettier --write']
};
