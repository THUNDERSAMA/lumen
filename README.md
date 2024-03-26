![Alt](https://repobeats.axiom.co/api/embed/5b856a2914d963228592b041fc375c4f001137bc.svg "Repobeats analytics image")

## Project Lumen 🙂

🏥 Our project addresses the modern healthcare landscape's need for efficient, secure, and patient-centric prescription data management. By integrating blockchain technology with a centralized medical database, we ensure security, accessibility, and confidentiality.

🔒 Traditional paper-based systems pose vulnerabilities, including inefficiencies and data breaches. Our solution leverages blockchain's transparency and immutability to establish a secure platform for prescription data storage.

💡 Patients gain control over their data, with the ability to grant or revoke access as needed. This fosters trust and empowers individuals in their health journey.

🚀 The transition to digital systems streamlines record-keeping and data management, enhancing efficiency and accessibility.

🔐 Key components include a user-friendly registration process, smart contracts for secure data management on the Ethereum blockchain, integration with a graph database for data analysis, and robust security measures for compliance with regulations like HIPAA.

🌟 Our solution enables accurate tracking, reduced errors, and minimized fraud. It facilitates seamless data exchange between healthcare providers, improving care coordination and decision-making.

## Folder Structure 😯

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

## Folder Structure Explanation 🤨

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

<p><b>Node modules 😏</b></br>
 "@emotion/react": "^11.11.4",
        "@emotion/styled": "^11.11.0",
        "@mui/icons-material": "^5.15.14",
        "@mui/material": "^5.15.14",
        "@radix-ui/react-switch": "^1.0.3",
        "@reduxjs/toolkit": "^2.2.2",
        "ethereumjs-wallet": "^1.0.2",
        "ganache-cli": "^6.12.2",
        "js-cookie": "^3.0.5",
        "mongoose": "^8.2.3",
        "neo4j-driver": "^5.18.0",
        "next": "^14.1.4",
        "next-pwa": "^5.6.0",
        "react": "^18",
        "react-redux": "^9.1.0",
        "react-dom": "^18",
        "recoil": "^0.7.7",
        "redux": "^5.0.1",
        "web3": "^4.6.0" 
</p>

## Note: 🥸🥸

- Please ensure to update the `node_modules` field in the `readme.md` file if you install any new modules using npm . This helps maintain an accurate list of dependencies for the project.

- If you update or add any connection string in the `.env` file, make sure to upload the updated `.env` file to GitHub along with your other project files. This ensures that other contributors have access to the correct database connection configuration.

- When creating new files, such as components, please use camel case for the file names. For example, `SampleComponent` instead of `sample_component`.
- Before pushing code in git run `npm run build` is must
- Ensure that your code contains proper comments explaining the changes made. Comments help other developers understand the purpose of each code modification and facilitate collaboration.

- Provide a descriptive commit message when committing changes to the repository. A clear and informative commit message helps maintain a well-documented history of project changes and facilitates easier tracking of modifications over time.

### Reporting Issues 🤦‍♀️🤦‍♂️

If you encounter any bugs, glitches, or other issues, please [create a new issue](link-to-issue-tracker) on our issue tracker. Be sure to include detailed information about the problem, including steps to reproduce it if possible.

### Submitting Pull Requests 😊😊

please follow these steps:

1. Fork the repository and create your branch from `main`.
2. Make your changes and ensure the codebase is properly formatted.
3. Write tests to cover your changes, if applicable.
4. Ensure your commits are well-documented and descriptive.
5. Submit a pull request, explaining the changes you've made and why they're beneficial.

## Setup Instructions 😏😏

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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. 🤗

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
