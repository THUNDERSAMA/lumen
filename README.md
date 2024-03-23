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

.github/workflows: Contains GitHub Actions workflows.
node_modules: Node.js dependencies.
public: Public assets like images and JSON files.
PythonScripts: Python scripts including authentication images, APIs, and machine learning scripts.
src: Source code for the Next.js application.
app: Main application logic.
api: API routes.
components: Reusable UI components.
desktop: Components specific to desktop layout.
doctor: Components related to doctors.
patient: Components related to patients.
mobile: Components specific to mobile layout.
doctor: Components related to doctors.
patient: Components related to patients.
middleware: Middleware for handling requests.
pages: Next.js pages.
desktop: Pages specific to desktop layout.
doctor: Pages related to doctors.
patient: Pages related to patients.
sample_page: Sample page for patients.
mobile: Pages specific to mobile layout.
doctor: Pages related to doctors.
patient: Pages related to patients.
sample_page: Sample page for patients.
styles: CSS stylesheets.
components: Styles for components.
desktop: Styles specific to desktop layout.
doctor: Styles related to doctors.
patient: Styles related to patients.
mobile: Styles specific to mobile layout.
doctor: Styles related to doctors.
patient: Styles related to patients.

### Reporting Issues

If you encounter any bugs, glitches, or other issues, please [create a new issue](link-to-issue-tracker) on our issue tracker. Be sure to include detailed information about the problem, including steps to reproduce it if possible.

### Suggesting Enhancements

Have an idea for a new feature or improvement? Feel free to [open a new discussion](link-to-discussions) to suggest your enhancement. We value community feedback and would love to hear your ideas.

### Submitting Pull Requests

We welcome contributions via pull requests. If you'd like to fix a bug, add a new feature, or make any other changes to the project, please follow these steps:

1. Fork the repository and create your branch from `main`.
2. Make your changes and ensure the codebase is properly formatted.
3. Write tests to cover your changes, if applicable.
4. Ensure your commits are well-documented and descriptive.
5. Submit a pull request, explaining the changes you've made and why they're beneficial.

### Providing Feedback

Even if you're not able to contribute code directly, your feedback is valuable to us. If you have any thoughts, suggestions, or questions about the project, feel free to [reach out](link-to-contact) to us.

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

