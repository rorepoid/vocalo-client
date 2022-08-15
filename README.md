This is a [Next.js](https://nextjs.org/) project bootstrapped
with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Clone this repository: `git clone https://github.com/rorepoid/vocalo-client.git`

Once done you can get the list of commands to run this project with the following one:

```bash
make help
```

### Run it in your environment

1. Install the dependencies:

    ```bash
    make deps
    ```

2. Start dev server

    ```bash
    make dev
    ```

### Git hooks

There is 1 git hook included, which is the pre-commit.

The pre-commit hook is intended to run all the checks you consider before committing. At this very moment, it tries to
check the recommended Next JS validation and format the code with
the [ts-standard style guide](https://github.com/standard/ts-standard).

If you want to exec the pre-commit hook validation without commiting anything, run the following command:

```bash
make git/pre-commit
```
