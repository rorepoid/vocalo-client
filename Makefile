.DEFAULT_GOAL := help

RED = \033[0;31m
GREEN = \033[0;32m
NOCOLOR = \033[0m

help: ## Prints this help.
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

deps: ## Install dependencies
	@yarn install

dev: ## Start development server
	@yarn dev

build: ## Build the server
	@yarn build

start: ## Start the built application
	@yarn start -p 3002

lint: ## Lint the code
	@yarn lint

git/install-hooks: ## Installs the hooks.
	@./doc/hooks/install-hooks.sh

git/pre-commit: ## Runs the tests before committing.
	@yarn lint --max-warnings 0 1> /dev/null
	@echo "$(GREEN)Pre commit checks passed"

git/pre-push: ## Runs the tests before pushing.
	@yarn lint --max-warnings 0 1> /dev/null
	@echo "$(GREEN)Pre push checks passed"
