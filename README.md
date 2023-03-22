[![Notion](https://img.shields.io/badge/Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white)](https://www.notion.so/Dashboard-e31f3ba10d904b17b9cf3e7850717a2c)
[![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)](https://www.figma.com/file/O0I3HuNe7Nrw1J7vk5g6ME/LuckyBet?node-id=0%3A1&t=RY3LWTkAnILQh5eH-0)

## Contribution Guidelines
- DO NOT PUSH TO `main` DIRECTLY
- For any changes to this repo, first create a new branch locally using `git checkout -b <branch-name>`
- Then make all of your changes within that branch
- For each change, add a descriptive commit message that follows [Semantic Commit style](https://www.conventionalcommits.org/en/v1.0.0/#summary)
  - Ex: `feat: created landing page` or `fix: stop memory leak`
- Once changes are ready to be pushed up, execute the following commands:
  - `git pull origin main`, resolve any merge conflicts and commit those as well
  - `git push origin <branch-name>`
- Once your branch has been pushed up, navigate to this repo in GitHub and create a Pull Request and notify the team so we can review it

## Getting Started

First, to install all dependencies, type in your terminal:
```bash
npm install
```

To run the site, type in your terminal:

```bash
npm run dev
```

To open the **Home** page go to [http://localhost:3000](http://localhost:3000) in Chrome.

To edit the themes, go to `styles/themeConfig.js` and edit the color values for `primary`, `secondary`, and `alt` for either theme.

To see you changed colors, close the development server in your terminal by pressing `Ctrl + C`, pres `Y` when prompted and 
then restart the site using the directions from above.

To cycle between themes, press on the **Theme** button on the header on any page :)
