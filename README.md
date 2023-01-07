## Contribution Guidelines
- DO NOT PUSH TO `master` DIRECTLY
- For any changes to this repo, first create a new branch locally using `git checkout -b <branch-name>`
- Then make all of your changes within that branch
- For each change, add a descriptive commit message that follows [Semantic Commit style](https://www.conventionalcommits.org/en/v1.0.0/#summary)
  - Ex: `feat: created landing page` or `fix: stop memory leak`
- Once changes are ready to be pushed up, execute the following commands:
  - `git pull origin master`, resolve any merge conflicts and commit those as well
  - `git push origin <branch-name>`
- Once your branch has been pushed up, navigate to this repo in GitHub and create a Pull Request and notify the team so we can review it

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
