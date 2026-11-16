# INFR3120 Assignment 2 – Express Portfolio Website

**Student:** Mustafa Khan  
**Student Number:** [Add your student number if required]  
**Course:** INFR3120 – Web and Scripting Programming  
**University:** Ontario Tech University  
**Assignment:** Assignment 2 – Express Portfolio Site  
**Project Repository:** https://github.com/Mkhay910/infr3120-portfolio-a2

---

# Table of Contents

1. Project Overview
2. Project Objectives
3. Technologies and Tools
4. Website Features and Pages
5. Project Structure
6. Express Generator and Initial Setup
7. Express Application Configuration
8. Express Routing
9. EJS Templates and Reusable Partials
10. Bootstrap 5 and Responsive Design
11. Font Awesome Integration
12. Static Files and Assets
13. Website Functionality
14. Course Concepts and Implementation Evidence
15. Code Documentation and External Code Acknowledgement
16. Installation and Running the Project
17. Testing and Verification
18. Git and GitHub Version Control
19. Cloud Deployment
20. Project Demonstration Video
21. Assignment Submission Checklist
22. References
23. Author Information

---

# 1. Project Overview

This project is a personal portfolio website developed for INFR3120 – Web and Scripting Programming at Ontario Tech University.

The website was built using Node.js, Express.js, and the EJS templating engine. Its purpose is to introduce me as an Information Technology student, present my interests in networking and network security, showcase selected coursework and technical projects, and provide visitors with a way to contact me.

The application uses the Express Generator project structure and separates its functionality into routes, views, reusable partials, and public assets.

Bootstrap 5 is used to organize the content into responsive layouts and provide interface components. Font Awesome is used to display icons throughout the website. Custom CSS is also included to support the website's appearance.

The project demonstrates how a multi-page website can be developed using server-side routing, template rendering, reusable components, static file serving, and responsive front-end design.

# 2. Project Objectives

The main objectives of this assignment were to:

- Create a personal portfolio website using Node.js and Express.js.
- Generate the initial application structure using Express Generator.
- Configure Express to use EJS as its view engine.
- Create separate EJS templates for the Home, About Me, Projects, and Contact pages.
- Implement Express routes to navigate between the different pages.
- Use reusable EJS partials for the shared navigation header and footer.
- Organize images, videos, stylesheets, JavaScript, and font files in the public directory.
- Integrate Bootstrap 5 to create responsive layouts and interface components.
- Integrate Font Awesome to display icons.
- Document the code using comments to explain important implementation details.
- Maintain the project in a public GitHub repository using Git version control.
- Deploy the completed website to a cloud hosting platform.

# 3. Technologies and Tools

The following technologies and tools were used during development.

| Technology or Tool | Purpose |
|---|---|
| Node.js | JavaScript runtime used to execute the application. |
| Express.js | Web framework used to handle HTTP requests, middleware, and routing. |
| Express Generator | Tool used to generate the initial Express application structure. |
| EJS | Templating engine used to generate HTML pages and reuse templates. |
| Bootstrap 5 | CSS framework used for responsive layouts, cards, buttons, navigation, and spacing. |
| Font Awesome | Icon library used throughout the portfolio. |
| HTML5 | Used to structure the content inside the EJS templates. |
| CSS3 | Used to customize the appearance and layout of the website. |
| JavaScript | Used by the application and Bootstrap's interactive components. |
| Git | Used to track changes and maintain project history. |
| GitHub | Used to store and host the public project repository. |
| npm | Used to install and manage project dependencies. |

### Development Environment

The project was developed locally using:

- macOS
- Visual Studio Code
- Terminal
- Node.js
- npm
- Git
- A web browser for testing

# 4. Website Features and Pages

The portfolio contains four main pages that are connected through a shared navigation bar.

## 4.1 Home Page

**EJS file:** `views/index.ejs`  
**Route:** `/`

The Home page introduces me and provides visitors with an overview of the portfolio.

It includes:

- A main introduction section identifying my area of study.
- Navigation buttons linking to the About Me and Projects pages.
- An introduction to the areas of Information Technology I am currently learning.
- A short About Me preview.
- Technical learning areas, including networking, systems, and security.
- A technical skills section.
- Featured project cards.
- Career interests.
- A contact section linking to the Contact page.

Bootstrap containers, rows, columns, cards, buttons, and spacing utilities are used to organize the content.

Font Awesome icons are used to visually represent different areas of Information Technology.

## 4.2 About Me Page

**EJS file:** `views/about.ejs`  
**Route:** `/about`

The About Me page provides more information about my educational background, interests, experience, and future goals.

It includes:

- A page introduction section.
- My profile photograph.
- My personal story and educational background.
- My interests in networking, network security, IT support, and system administration.
- A description of the technical areas I have explored through coursework and practical assignments.
- My professional and career goals.
- My personal introduction video.

The page uses Bootstrap's grid system to organize the profile photograph and text into columns.

The introduction video is embedded using the HTML5 video element and references a video stored in the public directory.

## 4.3 Projects Page

**EJS file:** `views/projects.ejs`  
**Route:** `/projects`

The Projects page showcases selected coursework and technical projects related to Information Technology.

The projects include:

### IP Addressing and Subnetting

Practised identifying network and host portions of IPv4 addresses and calculating subnet information.

**Technologies and concepts:** IPv4, subnetting, and networking fundamentals.

### Ubuntu Server Virtual Machine

Used an Ubuntu Server virtual machine and terminal commands to check connectivity and work with web services.

**Technologies and concepts:** Ubuntu, VirtualBox, and Linux.

### Docker Nginx Containers

Ran Nginx using Docker containers and mapped host ports to access services locally.

**Technologies and concepts:** Docker, Nginx, and port mapping.

### Local Cloud Services Lab

Explored a local AWS-style environment using LocalStack and AWS CLI as part of cloud computing coursework.

**Technologies and concepts:** LocalStack, AWS CLI, and cloud computing concepts.

### Responsive HTML and CSS Website

Created a multi-page website using HTML and CSS, including navigation, responsive layouts, and form controls.

**Technologies and concepts:** HTML5, CSS3, and responsive web design.

The project cards use Bootstrap's grid and card components to present the information consistently.

## 4.4 Contact Page

**EJS file:** `views/contact.ejs`  
**Route:** `/contact`

The Contact page provides visitors with contact information and a contact form demonstration.

It includes:

- Contact information.
- Email contact details.
- Links to professional social media profiles.
- A form layout with input fields.
- A submit button.

The contact form demonstrates front-end form structure and styling. It is not currently connected to a backend email service, so it should not be considered a working email submission system.

# 5. Project Structure

The project follows the directory structure generated by Express Generator, with additional folders for portfolio content and reusable EJS partials.

```text
infr3120-portfolio-a2/
│
├── app.js
├── package.json
├── package-lock.json
│
├── bin/
│   └── www
│
├── routes/
│   ├── index.js
│   └── users.js
│
├── views/
│   ├── index.ejs
│   ├── about.ejs
│   ├── projects.ejs
│   ├── contact.ejs
│   ├── error.ejs
│   │
│   └── partials/
│       ├── header.ejs
│       └── footer.ejs
│
└── public/
    ├── images/
    ├── videos/
    ├── stylesheets/
    ├── javascripts/
    └── webfonts/
```

### 5.1 Main Application Files

**app.js**

The main Express application configuration file. It imports the required packages, configures EJS, registers middleware, serves static files, and connects the application routes.

**package.json**

Contains project information, dependencies, and npm scripts used to manage and start the application.

**package-lock.json**

Records the installed dependency versions to support consistent dependency installation.

**bin/www**

The application startup script generated by Express Generator. It starts the HTTP server and uses the configured application.

### 5.2 Routes Directory

The `routes` directory contains the Express route definitions.

- `index.js` contains the main portfolio page routes.
- `users.js` is part of the generated Express Generator structure.

### 5.3 Views Directory

The `views` directory contains the EJS templates rendered by Express.

Each portfolio page has its own template. The `partials` subdirectory contains the reusable header and footer.

### 5.4 Public Directory

The `public` directory contains files that need to be accessible by the browser.

- `images/` contains the profile photograph and other images.
- `videos/` contains the introduction video.
- `stylesheets/` contains Bootstrap, Font Awesome, and custom CSS files.
- `javascripts/` contains the Bootstrap JavaScript bundle.
- `webfonts/` contains the Font Awesome font files.

# 6. Express Generator and Initial Setup

The application was initially generated using Express Generator with EJS support.

The following command was used:

```bash
npx express-generator --view=ejs infr3120-portfolio-a2
```

The `--view=ejs` option specifies EJS as the view engine.

Express Generator created the initial application structure, including:

- `app.js`
- `bin/www`
- `routes/`
- `views/`
- `public/`
- `package.json`

After generating the application, the required dependencies were installed using npm.

Bootstrap and Font Awesome were also installed through npm:

```bash
npm install bootstrap @fortawesome/fontawesome-free
```

Additional folders were created to organize the portfolio's images, videos, and reusable EJS partials.

The project structure was then customized to support the four portfolio pages.

# 7. Express Application Configuration

The `app.js` file is responsible for configuring the Express application.

It imports the necessary modules and configures the application to use EJS.

### 7.1 Importing Modules

The application uses `require()` to load the modules needed for its functionality.

Examples include:

- `express` to create and configure the web application.
- `path` to work with file and directory paths.
- `morgan` to log HTTP requests.
- `cookie-parser` to process cookies.
- `http-errors` to create HTTP error objects.

### 7.2 Creating the Express Application

The Express application is created using:

```javascript
var app = express();
```

This creates the application object used to configure middleware, routing, and other Express functionality.

### 7.3 Configuring EJS

The view directory and view engine are configured using:

```javascript
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
```

The first statement identifies where the EJS templates are stored.

The second statement tells Express to use EJS when rendering views.

### 7.4 Middleware Configuration

The application registers middleware using `app.use()`.

Examples include:

- `logger('dev')` to log incoming HTTP requests.
- `express.json()` to parse incoming JSON request bodies.
- `express.urlencoded({ extended: false })` to parse URL-encoded form data.
- `cookieParser()` to process cookies.
- `express.static(path.join(__dirname, 'public'))` to serve static files.

Middleware functions execute during the request-response process and can process requests before they reach the route handlers.

### 7.5 Static File Middleware

The following middleware makes the contents of the public directory accessible to the browser:

```javascript
app.use(express.static(path.join(__dirname, 'public')));
```

This allows the website to load resources such as:

- CSS files.
- JavaScript files.
- Images.
- Videos.
- Font files.

For example, a file stored at `public/images/mustafa-photo.jpg` can be accessed through:

```text
/images/mustafa-photo.jpg
```

### 7.6 Connecting the Routes

The main portfolio router is connected using:

```javascript
app.use('/', indexRouter);
```

This allows the routes defined in `routes/index.js` to handle requests to the main website.

### 7.7 Error Handling

The generated Express application also contains error-handling middleware.

It handles requests for pages that do not exist and renders the error template when an appropriate error occurs.

This helps the application respond to invalid routes instead of leaving the request without a proper response.

# 8. Express Routing

The portfolio routes are defined in:

`routes/index.js`

Express Router is used to organize the different page routes.

The router is created using:

```javascript
var router = express.Router();
```

Individual pages are defined using `router.get()`.

### 8.1 Portfolio Routes

| HTTP Method | URL | EJS Template | Purpose |
|---|---|---|---|
| GET | `/` | `index.ejs` | Displays the Home page. |
| GET | `/about` | `about.ejs` | Displays the About Me page. |
| GET | `/projects` | `projects.ejs` | Displays the Projects page. |
| GET | `/contact` | `contact.ejs` | Displays the Contact page. |

### 8.2 Rendering EJS Templates

Each route uses `res.render()` to display the corresponding EJS template.

For example:

```javascript
router.get('/about', function(req, res, next) {
    res.render('about');
});
```

When a visitor accesses `/about`, Express handles the GET request and renders `about.ejs`.

The same approach is used for the other portfolio pages.

### 8.3 Navigation Between Pages

The navigation links in the shared header allow visitors to move between the different routes.

The website also includes links and buttons within the page content that direct visitors to the Projects, About Me, and Contact pages.

This connects the front-end navigation to the Express routes.

# 9. EJS Templates and Reusable Partials

EJS is used to create the individual website pages.

Each page is stored as an `.ejs` file in the `views` directory.

EJS allows HTML markup to be combined with template syntax.

### 9.1 EJS Include Statements

The website uses EJS include statements to reuse common page sections.

For example:

```ejs
<%- include('partials/header', { title: 'Home' }) %>
```

This includes the shared header template and passes a page title to it.

The footer is included using:

```ejs
<%- include('partials/footer') %>
```

### 9.2 Shared Header

The shared header is stored in:

`views/partials/header.ejs`

It contains the common document structure, stylesheet references, and navigation bar.

Using a shared header means the navigation does not need to be recreated separately in every page.

### 9.3 Shared Footer

The shared footer is stored in:

`views/partials/footer.ejs`

It contains the common footer information, including contact and social media links.

The footer is reused across the portfolio pages.

### 9.4 Advantages of Reusable Partials

Using EJS partials provides several benefits:

- Reduces repeated HTML.
- Keeps the navigation consistent across pages.
- Keeps the footer consistent across pages.
- Makes future updates easier.
- Separates shared layout components from individual page content.

# 10. Bootstrap 5 and Responsive Design

Bootstrap 5 is used throughout the portfolio to create a consistent and responsive interface.

Bootstrap provides prebuilt CSS classes and components that help organize page content without requiring every layout element to be styled from scratch.

### 10.1 Bootstrap Containers

The `container` class is used to organize page content and provide consistent horizontal spacing.

Example:

```html
<main class="container py-5">
```

The `py-5` class adds vertical padding to the main content.

### 10.2 Bootstrap Grid System

The grid system organizes content into rows and columns.

Examples include:

- `row` to create a horizontal group of columns.
- `col-md-4` to create a responsive column that occupies four of twelve grid columns at medium screen sizes and above.
- `col-md-6` to create two equal-width columns at medium screen sizes and above.
- `g-4` to add spacing between grid columns and rows.

The grid system is used for the learning cards, project cards, and other content sections.

### 10.3 Bootstrap Cards

Cards are used to group related information into separate content sections.

Examples include:

- Featured project cards.
- Technical learning cards.
- Career interest cards.
- Student introduction cards.

Classes such as `card`, `shadow-sm`, `h-100`, and `p-3` are used to control the appearance and spacing of the cards.

### 10.4 Bootstrap Buttons

Bootstrap button classes are used for navigation and page actions.

Examples include:

- `btn`
- `btn-primary`
- `btn-outline-secondary`

These classes provide consistent button styling.

### 10.5 Bootstrap Spacing Utilities

Spacing utilities are used throughout the website.

Examples include:

- `py-5` for vertical padding.
- `mb-4` for bottom margin.
- `mt-3` for top margin.
- `p-3` for padding on all sides.

These utilities help maintain consistent spacing without requiring additional custom CSS for every section.

### 10.6 Bootstrap Progress Bars

The Home page includes Bootstrap progress bars to visually represent areas of technical learning.

The progress bars are illustrative indicators of learning progress rather than formally measured proficiency scores.

### 10.7 Responsive Layout

Bootstrap's responsive grid and utility classes help the website adapt to different screen sizes.

For example, `col-md-4` displays three columns at medium screen sizes and above, while allowing the columns to stack on smaller screens.

The `img-fluid` class is used to make images responsive within their containing elements.

# 11. Font Awesome Integration

Font Awesome is used to provide icons throughout the portfolio.

The Font Awesome CSS file is loaded through the shared header.

The icons are displayed using their corresponding CSS classes.

Examples include:

| Icon | CSS Classes | Purpose |
|---|---|---|
| Network Wired | `fa-solid fa-network-wired` | Represents networking-related content. |
| Linux | `fa-brands fa-linux` | Represents the Ubuntu Server project. |
| Docker | `fa-brands fa-docker` | Represents the Docker project. |
| User Graduate | `fa-solid fa-user-graduate` | Represents the student introduction. |
| GitHub | `fa-brands fa-github` | Links to the GitHub profile. |
| LinkedIn | `fa-brands fa-linkedin` | Links to the LinkedIn profile. |

Font Awesome icons are used to make the interface more visually recognizable and to support the content of different sections.

The icon stylesheet and required webfont files are stored in the public directory.

# 12. Static Files and Assets

The website uses Express static middleware to make the files inside `public` accessible to the browser.

### 12.1 Images

The `public/images/` directory contains the profile photograph used on the About Me page and any other images used by the website.

### 12.2 Videos

The `public/videos/` directory contains the personal introduction video.

The video is displayed using the HTML5 `<video>` and `<source>` elements.

### 12.3 Stylesheets

The `public/stylesheets/` directory contains:

- Bootstrap CSS.
- Font Awesome CSS.
- Custom portfolio stylesheets.

### 12.4 JavaScript

The `public/javascripts/` directory contains the Bootstrap JavaScript bundle.

The Bootstrap bundle supports interactive components such as the responsive navigation menu.

### 12.5 Webfonts

The `public/webfonts/` directory contains the font files required by Font Awesome.

These files allow the icons to display correctly in the browser.

# 13. Website Functionality

The main functionality of the website includes:

- Loading the Home page through the root route.
- Navigating between the four main portfolio pages.
- Rendering individual EJS templates through Express.
- Reusing the shared header and footer.
- Loading CSS and JavaScript files from the public directory.
- Displaying images and the introduction video.
- Displaying Bootstrap cards, buttons, and responsive layouts.
- Displaying Font Awesome icons.
- Providing links to GitHub and LinkedIn.
- Providing a contact form demonstration.

The website uses server-side Express routing to display the pages. The navigation links connect the different pages through their corresponding routes.

# 14. Course Concepts and Implementation Evidence

This section identifies where concepts related to the course are demonstrated in the project.

The examples below refer to actual project files rather than general descriptions of the technologies.

| Course concept | File | Evidence and explanation |
|---|---|---|
| Express application creation | `app.js` | Uses `express()` to create the application instance. |
| Module importing | `app.js` | Uses `require()` to import Express and other Node.js modules. |
| Application configuration | `app.js` | Uses `app.set()` to configure the views directory and EJS view engine. |
| Middleware | `app.js` | Uses `app.use()` to register middleware functions. |
| Static file serving | `app.js` | Uses `express.static()` to make the public directory accessible. |
| Express routing | `routes/index.js` | Uses `express.Router()` and `router.get()` to define page routes. |
| Request handling | `routes/index.js` | Uses route handler functions to respond to incoming GET requests. |
| View rendering | `routes/index.js` | Uses `res.render()` to display the corresponding EJS templates. |
| EJS templating | `views/index.ejs`, `views/about.ejs`, `views/projects.ejs`, `views/contact.ejs` | Uses EJS templates to generate the portfolio pages. |
| Reusable EJS templates | `views/partials/` | Uses EJS include statements to reuse the header and footer. |
| HTML structure | `views/*.ejs` | Uses HTML elements to organize page content. |
| Responsive layout | `views/*.ejs` | Uses Bootstrap containers, rows, columns, and responsive classes. |
| Static resources | `public/` | Stores the stylesheets, JavaScript, images, videos, and webfonts. |
| Error handling | `app.js` and `views/error.ejs` | Uses Express error-handling middleware and an error template. |
| Version control | GitHub repository | Stores the project and tracks development changes through commits. |

### Example: Express Routing

The route below demonstrates how Express handles a request and renders an EJS page.

```javascript
router.get('/projects', function(req, res, next) {
    res.render('projects');
});
```

The route listens for a GET request to `/projects` and uses `res.render()` to display the Projects page.

### Example: Static File Middleware

The following statement demonstrates how Express serves static files.

```javascript
app.use(express.static(path.join(__dirname, 'public')));
```

This allows the browser to request images, CSS, JavaScript, and other files from the public directory.

### Example: Reusable EJS Partials

The following statement demonstrates how the shared header is included in an EJS page.

```ejs
<%- include('partials/header', { title: 'Projects' }) %>
```

This allows the same header and navigation bar to be reused across different pages.

**Note:** The file references in this section identify the relevant implementation areas. Exact line numbers can be added after the final source files are checked.

# 15. Code Documentation and External Code Acknowledgement

The project contains comments in important application and template files to explain the purpose of the code.

Comments are used to describe:

- The purpose of imported modules.
- The creation and configuration of the Express application.
- The role of middleware.
- The purpose of individual Express routes.
- The use of EJS templates and partials.
- The purpose of Bootstrap layout sections.
- The use of Font Awesome icons.
- The loading of static resources.

These comments are intended to make the code easier to understand and maintain.

### External Code and Libraries

The project uses external libraries, including Bootstrap and Font Awesome, which were installed through npm.

Express Generator was used to create the initial application structure.

Official documentation was consulted as a technical reference while developing the project.

Where code has been copied or adapted from an external example, the source should be identified in a comment near the relevant code.

The project distinguishes between using a third-party library and copying third-party source code. Using a Bootstrap CSS class or Font Awesome icon class does not automatically mean that the surrounding original HTML content was copied from an external source.

The assignment's external-code limit is followed by keeping externally sourced code within the permitted limit and acknowledging any code that has been copied or adapted.

# 16. Installation and Running the Project

The application can be run locally by following these steps.

### Step 1: Clone the Repository

```bash
git clone https://github.com/Mkhay910/infr3120-portfolio-a2.git
```

### Step 2: Open the Project Directory

```bash
cd infr3120-portfolio-a2
```

### Step 3: Install Dependencies

```bash
npm install
```

This installs the packages listed in `package.json`.

### Step 4: Start the Application

```bash
npm start
```

The npm start script launches the Express application through the generated startup file.

### Step 5: Open the Website

Open a