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
<b>node_modules:</b>Node.js dependencies.<br />
<b>public:</b>Public assets like images and JSON files.<br />
<b>PythonScripts:</b>Python scripts including authentication images, APIs, and machine learning scripts.<br />
<b>src:</b>Source code for the Next.js application.<br />
<b>app:</b>Main application logic.<br />
<b>api:</b>API routes.<br />
<b>components:</b>Reusable UI components.<br />
<b>desktop:</b>Components specific to desktop layout.<br />
<b>doctor:</b>Components related to doctors.<br />
<b>patient:</b>Components related to patients.<br />
<b>mobile:</b>Components specific to mobile layout.<br />
<b>doctor:</b>Components related to doctors.<br />
<b>patient:</b>Components related to patients.<br />
<b>middleware:</b>Middleware for handling requests.<br />
<b>pages:</b>Next.js pages.<br />
<b>desktop:</b>Pages specific to desktop layout.<br />
<b>doctor:</b>Pages related to doctors.<br />
<b>patient:</b>Pages related to patients.<br />
<b>sample_page:</b>Sample page for patients.<br />
<b>mobile:</b>Pages specific to mobile layout.<br />
<b>doctor:</b>Pages related to doctors.<br />
<b>patient:</b>Pages related to patients.<br />
<b>sample_page:</b>Sample page for patients.<br />
<b>styles:</b>CSS stylesheets.<br />
<b>components:</b>Styles for components.<br />
<b>desktop:</b>Styles specific to desktop layout.<br />
<b>doctor:</b>Styles related to doctors.<br />
<b>patient:</b>Styles related to patients.<br />
<b>mobile:</b>Styles specific to mobile layout.<br />
<b>doctor:</b>Styles related to doctors.<br />
<b>patient:</b>Styles related to patients.<br />

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

