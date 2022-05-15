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