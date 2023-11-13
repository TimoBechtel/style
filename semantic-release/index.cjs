/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
  branches: [
    'main',
    '+([0-9])?(.{+([0-9]),x}).x',
    { name: 'beta', prerelease: true },
    { name: 'alpha', prerelease: true },
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
