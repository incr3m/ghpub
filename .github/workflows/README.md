# Development

- Use https://github.com/nektos/act to debug pipelines locally
- Run `gh act -W <yml_file>` to run specific tests. e.g. `gh act -W .github/workflows/scheduled_lint_checks.yml`
- With secrets `gh act -W .github/workflows/deploy_storybook.yml --secret-file .env`
