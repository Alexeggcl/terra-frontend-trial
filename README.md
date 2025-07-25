# Terra Frontend Trial

A practical frontend development trial to evaluate HTML, SCSS, and JavaScript skills in a real-world scenario.

## 📋 Overview

This is a frontend development assessment that simulates building a landing page for a client. While the project uses Astro as the base framework, **no prior Astro knowledge is required**. The focus is entirely on core frontend skills: HTML structure, SCSS styling, and JavaScript functionality.

## 🎯 What We're Looking For

- **Clean, semantic HTML structure**
- **Advanced SCSS/CSS skills** (variables & responsive design)
- **Vanilla JavaScript proficiency** (DOM manipulation, event handling, modules)
- **Responsive design** across devices
- **Performance optimization**
- **Code organization** and best practices
- **Attention to detail** in implementation
- **Capacity to react to new tech** reading our documentation

## 🏢 Project Context

You're tasked with developing a modern landing page for a fictional client. This scenario mirrors real client feedback work where you'll need to:

- Interpret design requirements
- Implement responsive layouts
- Create interactive components
- Optimize for performance
- Maintain clean, scalable code

### Required Libraries Knowledge

While the focus is on core frontend skills, this trial requires basic familiarity with these libraries (they're not complex, but some knowledge is needed):

- **GSAP** - For animations and transitions
- **Terra Helpers** - Utility functions and components
- **Collapsify** - For collapsible/accordion functionality

#### Library Resources:
- [GSAP Documentation](https://greensock.com/docs/)
- [Terra Helpers](https://www.npmjs.com/package/@terrahq/helpers)
- [Collapsify](https://www.npmjs.com/package/@terrahq/collapsify)

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation & Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```


## 📁 Project Structure

```text
/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable components
│   ├── layouts/          # Page layouts
│   ├── pages/            # Page routes
│   ├── scss/             # Stylesheets
│   └── js/               # JavaScript modules
└── package.json
```


## 📝 Assessment Focus Areas

### HTML/Structure
- Semantic markup
- Accessibility considerations
- Component organization

### SCSS/Styling
- Modern CSS techniques
- Responsive design patterns
- Code organization (variables, etc.)
- Cross-browser compatibility

### JavaScript
- Clean, modular code
- DOM manipulation
- Event handling
- Performance considerations

### General
- Code readability and documentation
- Git workflow and commit messages
- Problem-solving approach
- Attention to design details

## 🎨 Design System

The project includes Terra's design system for reference:
```html
<link rel="stylesheet" href="https://unpkg.com/@terrahq/design-system@latest/dist/style.css">
```

Feel free to use it as a foundation or create your own styling approach.

## 📋 Trial Exercises

Complete the following tasks to demonstrate your frontend development skills:

### 1. Fix Interaction Issues
- **Problem**: After the preloader disappears, buttons become unclickable and accordion sections don't work

### 2. Accordion Arrow States
- **Current state**: All accordion arrows point down (v)
- **Required**: Active/open accordion items should have arrows pointing up (^)
- **Task**: Implement proper arrow rotation based on accordion state

### 3. Develop Cards Component
- **Reference**: Follow the Figma design provided via email
- **Task**: Create responsive components matching the design specifications
- **Focus**: Pixel-perfect implementation

### 4. Responsive Design Implementation
- **Constraint**: No responsive design provided in Figma
- **Task**: Use your own design judgment to make the entire site responsive
- **Breakpoints**: Mobile, tablet, and desktop considerations
- **Approach**:  desktop-first and mobile second

### 5. Fix RevealItem Animation Triggers
- **Problem**: RevealItem animation triggers are not positioned correctly.
- **Current state**: Animation markers are visible (set to true) showing incorrect trigger positions
- **Debug**: Keep markers set to true to visualize the animation trigger positions
- **Requirement**: Ensure RevealItem animations execute properly 

### 6. Lottie Animation Controls
- **Current state**: Play and Pause buttons exist but have no functionality
- **Task**: Implement play/pause controls for Lottie animations
- **Requirements**: Connect buttons to Lottie animation instance
- **Integration**: Work with existing Terra Helpers preloadLotties functionality

### 7. Accessibility Implementation
- **Task**: Implement comprehensive accessibility features throughout the project
- **Include**: ARIA labels, keyboard navigation, screen reader support, color contrast, focus management
- **Standard**: WCAG 2.1 AA compliance where possible

### 8. Performance Optimization
- **Analysis**: Identify potential performance bottlenecks
- **Implementation**: Apply performance optimizations you can implement
- **Documentation**: Explain what additional performance improvements you would make given more time/resources - You will be asked on panel interview.

## 📋 Deliverables

- Functional landing page with all exercises completed
- Clean, well-organized code
- Responsive design implementation
- Accessibility features implemented
- Performance optimizations applied
- Brief documentation of your approach and decisions

## ⏱ Time Expectations

This trial is designed to be completed in a reasonable timeframe while allowing you to showcase your skills effectively. Focus on quality over quantity, and document your decision-making process.

Once trial is finished please share repo with us and deploy it to netlify/vercel/heroku 

---

**Note**: This project uses Astro as a build tool, but you can treat `.astro` files similarly to HTML files. The focus is on your HTML, SCSS, and JavaScript skills, not Astro-specific knowledge.
