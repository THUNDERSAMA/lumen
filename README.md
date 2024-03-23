## Project Lumen
## Folder Structure
<p>+---.github <br />
|&nbsp &nbsp \---workflows <br />
+---node_modules <br />
+---public <br />
|&nbsp &nbsp +---images<br />
|&nbsp &nbsp \---json<br />
+---PythonScripts<br />
|&nbsp &nbsp +---2auth_images<br />
|&nbsp &nbsp +---api<br />
|&nbsp &nbsp \---ML<br />
+---src<br />
|&nbsp &nbsp \---app<br />
|&nbsp &nbsp &nbsp &nbsp +---api<br />
|&nbsp &nbsp &nbsp &nbsp +---components<br />
|&nbsp &nbsp &nbsp &nbsp |&nbsp &nbsp +---desktop<br />
|&nbsp &nbsp &nbsp &nbsp |&nbsp &nbsp |&nbsp &nbsp +---doctor<br />
|&nbsp &nbsp &nbsp &nbsp |&nbsp &nbsp |&nbsp &nbsp \---patient<br />
|&nbsp &nbsp &nbsp &nbsp |&nbsp &nbsp \---mobile<br />
|&nbsp &nbsp &nbsp &nbsp |&nbsp &nbsp &nbsp &nbsp +---doctor<br />
|&nbsp &nbsp &nbsp &nbsp |&nbsp &nbsp &nbsp &nbsp \---patient<br />
|&nbsp &nbsp &nbsp &nbsp +---middleware<br />
|&nbsp &nbsp &nbsp &nbsp \---pages<br />
|&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp +---desktop<br />
|&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp |&nbsp &nbsp +---doctor<br />
|&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp |&nbsp &nbsp |&nbsp &nbsp \---sample_page<br />
|&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp |&nbsp &nbsp \---patient<br />
|&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp |&nbsp &nbsp &nbsp &nbsp \---sample_page<br />
|&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp \---mobile<br />
|&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp +---doctor<br />
|&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp |&nbsp &nbsp \---sample_page<br />
|&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  \---patient<br />
|&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp \---sample_page<br />
\---styles<br />
 &nbsp &nbsp &nbsp &nbsp \---components<br />
 &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp +---desktop<br />
 &nbsp &nbsp &nbsp &nbsp |&nbsp &nbsp &nbsp &nbsp +---doctor<br />
 &nbsp &nbsp &nbsp &nbsp |&nbsp &nbsp&nbsp &nbsp  \---patient<br />
 &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp  \---mobile<br />
 &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp +---doctor<br />
 &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp  \---patient<br />
</p>

## Folder Structure Explanation

<b>.github/workflows:</b> Contains GitHub Actions workflows.<br />
node_modules: Node.js dependencies.<br />
public: Public assets like images and JSON files.<br />
PythonScripts: Python scripts including authentication images, APIs, and machine learning scripts.<br />
src: Source code for the Next.js application.<br />
app: Main application logic.<br />
api: API routes.<br />
components: Reusable UI components.<br />
desktop: Components specific to desktop layout.<br />
doctor: Components related to doctors.<br />
patient: Components related to patients.<br />
mobile: Components specific to mobile layout.<br />
doctor: Components related to doctors.<br />
patient: Components related to patients.<br />
middleware: Middleware for handling requests.<br />
pages: Next.js pages.<br />
desktop: Pages specific to desktop layout.<br />
doctor: Pages related to doctors.<br />
patient: Pages related to patients.<br />
sample_page: Sample page for patients.<br />
mobile: Pages specific to mobile layout.<br />
doctor: Pages related to doctors.<br />
patient: Pages related to patients.<br />
sample_page: Sample page for patients.<br />
styles: CSS stylesheets.<br />
components: Styles for components.<br />
desktop: Styles specific to desktop layout.<br />
doctor: Styles related to doctors.<br />
patient: Styles related to patients.<br />
mobile: Styles specific to mobile layout.<br />
doctor: Styles related to doctors.<br />
patient: Styles related to patients.<br />

### Reporting Issues

If you encounter any bugs, glitches, or other issues, please [create a new issue](link-to-issue-tracker) on our issue tracker. Be sure to include detailed information about the problem, including steps to reproduce it if possible.


### Submitting Pull Requests

 please follow these steps:

1. Fork the repository and create your branch from `main`.
2. Make your changes and ensure the codebase is properly formatted.
3. Write tests to cover your changes, if applicable.
4. Ensure your commits are well-documented and descriptive.
5. Submit a pull request, explaining the changes you've made and why they're beneficial.


## Setup Instructions

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

