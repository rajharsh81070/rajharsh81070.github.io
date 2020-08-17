## Personal Portfolio

It is a personal static website/portfolio template hosted with GitHub Pages, built to showcase my recent projects. [Demo](https://rajharsh81070.github.io/My-Portfolio/)

## Technology Stack 🛠️

Dependencies defined in package.json:

[Reactjs](https://reactjs.org/)
| [Bootstrap](https://getbootstrap.com/)
| [Typist](https://github.com/jstejada/react-typist)
| [React-ga](https://github.com/react-ga/react-ga)

## Prerequisites 🍪

You should have [Node.js](https://nodejs.org/en/) and [Git](https://git-scm.com/) installed on your PC. You should also own a GitHub account.

## Setup And Deployment 🔧

1. To Get Started, Fork this repository to your GitHub account:
2. Clone the forked repo from your account using:

   ```bash
     git clone https://github.com/<your-username>/home.git
   ```

3. Open in editor and edit [src/assets/data.json](./src/assets/data.json) file.

4. Add your resume as <resume.pdf> in place of [src/assets/resume.pdf](./src/assets/)

5. Edit [title](./public/index.html#L26) and meta [description](./public/index.html#L10) and [icon](./public/index.html#L6) in [public/index.html](./public/index.html).

6. Add your google traking id in [src/componentes](./src/componentes) files.

7. Change URL in [package.json](./package.json) file:

   ```json
    "homepage": "https://<your-username>.github.io/home"
   ```

   Or for deployment at custom domain, refer [create-react-app.dev](https://create-react-app.dev/docs/deployment/#step-1-add-homepage-to-packagejson)

8. After editing run the following bash commands:

   ```bash
   npm install
   npm start
   ```

9. To deploy website, run:

   ```bash
    npm run deploy
   ```

10. Congrats your site is up and running. To see it live, visit:

```https
  https://<your-username>.github.io/home
```

### Thank You!
