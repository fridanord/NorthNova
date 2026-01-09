NorthNova (Degree project.)

A modern web application built with React, TypeScript, SCSS and Sanity CMS. This project focuses on accessibility, maintainability and high performance. 

Tech Stack:

Frontend: React (Vite) TypeScript. 
Styling: SCSS with a modular folder structure. 
Backend/CMS: Sanity.io (Headless CMS)
Query Language: GROQ 

Technical Features

SCSS (Modular Architecture): 

I used SCSS to create a scalable and organized styling system with Variables for colors, typography. Nesting to reflect the HTML structure, making the stylesheets easier to read and maintain and Manual Scoping by using specific parent classes for each component. I ensured that styles remain organized and focused, preventing unintended global overrides. 

Efficient Data Fetching:

Data is fetched from Sanity using GROQ, I use projections to fetch only the specific data needed for each view, reducing payload size. Images are processed through Sanity's image builder to provide cropped and resized URLs, improving loading speeds. 


Accessibility:

Accessibility was a priority throughout development, the HTML structure is 100% compliant with W3C Standards. All elements meet WCAG AA/AAA contrast requirements, verfied via WebAIM. This project also maintains high scores in Google Lighthouse for Accessibility. 

Getting Started

1. Clone the respoitory: git clone https://github.com/fridanord/NorthNova
2. Install dependencies: npm install
3. Run the development server: 
cd web
npm run dev