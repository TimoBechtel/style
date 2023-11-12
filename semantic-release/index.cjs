/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
	branches: [
		'main',
		{
			name: 'canary',
			channel: 'canary',
			prerelease: true,
		},
	],
	plugins: [
		'@semantic-release/commit-analyzer',
		'@semantic-release/release-notes-generator',
		'@semantic-release/changelog',
		'@semantic-release/npm',
		'@semantic-release/github',
		'@semantic-release/git',
	],
};
