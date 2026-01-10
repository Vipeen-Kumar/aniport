![Homepage Screenshot](assets/demo1.png)

🚀 Aniport – Animated Personal Portfolio

Aniport is a modern, interactive, and visually engaging personal portfolio web application built with React. It is designed to showcase an individual’s professional profile, projects, certificates, and contact information using smooth animations and fluid navigation.

The project focuses on delivering a strong first impression through clean design, motion effects, and an intuitive user experience.

🌟 Key Features
🎨 Interactive User Interface

Built using React for a fast, dynamic, and responsive UI

Component-based architecture for scalability and maintainability

🧭 Smooth Navigation

Seamless scrolling between sections

Enhanced scrolling experience using Locomotive Scroll

✨ Animated Visual Elements

Eye-catching animations and transitions

Smooth motion effects using Framer Motion and GSAP

Interactive components such as animated marquees and visual effects

📁 Project Showcase

Dedicated section to display projects

Supports images, descriptions, and structured layouts

🏆 Certificates Section

Organized and visually appealing certificate display

Highlights achievements and credentials clearly

📩 Contact Form

Fully functional contact form

Allows visitors to directly send messages

Designed with modern UI and smooth interactions

🎯 Project Objectives

The main goal of Aniport is to provide a professional and interactive platform for individuals to:

Showcase their skills and projects

Highlight certifications and achievements

Share contact details with recruiters or clients

Create a strong personal brand through design and animation

📌 Scope of the Project

Primarily focused on frontend development

Emphasis on UI/UX design, animations, and responsiveness

No backend server required (client-side functionality only)

Easily customizable for different users and portfolios

👥 Target Audience

Recruiters and hiring managers

Potential employers

Freelance clients

Anyone interested in viewing the portfolio owner’s work and professional background

## 🚀 Deployment

The project is configured for automated deployment to **GitHub Pages** using **GitHub Actions**.

### **Automated Deployment Process**
1. **Trigger**: Every push to the `main` branch triggers the deployment workflow.
2. **Build**: The workflow installs dependencies and builds the project using Vite.
3. **Deploy**: The generated `dist/` folder is automatically pushed to the `gh-pages` branch.

### **Setup Instructions**

#### **1. GitHub Secrets Configuration**
To ensure the contact form works in the production environment, you must add the following secrets to your GitHub repository:
- Go to **Settings > Secrets and variables > Actions**.
- Click **New repository secret** and add:
  - `VITE_EMAILJS_SERVICE_ID`: Your EmailJS Service ID.
  - `VITE_EMAILJS_TEMPLATE_ID`: Your EmailJS Template ID.
  - `VITE_EMAILJS_PUBLIC_KEY`: Your EmailJS Public Key.

#### **2. Branch Protection Rules**
To maintain stability, it is recommended to set up branch protection for `main`:
- Go to **Settings > Branches**.
- Click **Add rule** for the `main` branch.
- Enable:
  - **Require a pull request before merging**.
  - **Require status checks to pass before merging** (select the "build-and-deploy" job).

### **Rollback Procedures**
If a deployment fails or introduces a bug:
1. Go to the **Actions** tab in your GitHub repository.
2. Select the last successful workflow run.
3. Click **Re-run all jobs** or manually revert the `main` branch to a previous stable commit and push.

### **Monitoring**
- **Deployment Status**: Tracked via the **Actions** tab in GitHub.
- **Application Health**: Post-deployment health can be monitored via browser console logs (for runtime errors) and GitHub Pages status.

---

🛠️ Tech Stack
Frontend

React (with Vite for fast development and builds)

Styling

Tailwind CSS – utility-first CSS framework

Animations

Framer Motion – smooth UI animations

GSAP – advanced timeline-based animations

Scrolling

Locomotive Scroll – smooth scrolling and scroll-based effects

Architecture

Modular, component-based React architecture

Reusable and maintainable components

📦 Installation & Setup
# Clone the repository
git clone https://github.com/your-username/aniport.git

# Navigate into the project
cd aniport

# Install dependencies
npm install

# Start development server
npm run dev

📧 EmailJS Setup (Contact Form)

Create an account at https://www.emailjs.com
 and verify your email.

Add an Email Service (Gmail / Outlook) from the EmailJS dashboard.

Create an Email Template and use variables like user_name, user_email, and message.

Copy your Service ID, Template ID, and Public Key from the dashboard.

Create a .env file in the project root and add:

VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key


Restart the development server after adding environment variables.

Submit the contact form to test email delivery.
