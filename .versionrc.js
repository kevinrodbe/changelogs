module.exports = {
  changelogHeader: `# Hi\n\n bais bla bla 🔥 ![Insomnia API Client](https://raw.githubusercontent.com/Kong/insomnia/develop/screenshots/main.png)`,
  releaseCommitMessageFormat: 'chore(release): {{currentTag}} [skip ci]',
  types: [
    { type: 'chore', section: 'Others', hidden: false },
    { type: 'revert', section: 'Reverts', hidden: false },
    { type: 'feat', section: 'Features', hidden: false },
    { type: 'fix', section: 'Bug Fixes', hidden: false },
    { type: 'improvement', section: 'Feature Improvements', hidden: false },
    { type: 'docs', section: 'Docs', hidden: false },
    { type: 'style', section: 'Styling', hidden: false },
    { type: 'refactor', section: 'Code Refactoring', hidden: false },
    { type: 'perf', section: 'Performance Improvements', hidden: false },
    { type: 'test', section: 'Tests', hidden: false },
    { type: 'build', section: 'Build System', hidden: false },
    { type: 'ci', section: 'CI', hidden: false },
  ],
  compareUrlFormat: '{{host}}/{{owner}}/{{repository}}/compare/{{previousTag}}...{{currentTag}}',
};
