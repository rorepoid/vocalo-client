.DEFAULT_GOAL := help

APP_NAME = vocalo-app-v1

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
	@docker build -t $(APP_NAME) .

start: ## Start the built application
	@docker run --rm --name=$(APP_NAME) -p 3002:3000 $(APP_NAME)

lint: ## Lint the code
	@yarn lint --max-warnings 0 --fix

git/pre-commit: ## Runs the lint before committing.
	@yarn lint-staged
	@echo "$(GREEN)Pre commit checks passed"
