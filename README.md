This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Clone this repository: `git clone https://github.com/rorepoid/vocalo-client.git`

Once done you can get the list of commands to run this project with the following one:

```bash
make help
```

### Run it in yout environment

1. Install the dependencies:

```bash
make deps
```

2. Start dev server

```bash
make dev
```

### Git hooks

There are 2 git hooks included. They're inside the `./doc/hooks` directory and they will run the pre-commit and pre-push tasks before pushing to any remote.

The pre-commit task is intended to run all the checks you consider before committing. At this very moment, it tries to format the code with ts-standard style guide.

The pre-push task is intended to run all the checks you consider before pushing. At this very moment, does the same validation as pre-commit.

In order to install this hooks, just run:

```bash
make git/install-hooks
```
