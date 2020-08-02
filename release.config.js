/*
 * Host-Your-Music
 * Copyright 2020 - Host-Your-Music.
 * Rodrigo de Souza - rsouza01@gmail.com
 */


module.exports = {
  branches: ["master"],
  repositoryUrl: 'https://github.com/HostYourMusic/api-components',

  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/npm',
    '@semantic-release/github',
  ],
};
