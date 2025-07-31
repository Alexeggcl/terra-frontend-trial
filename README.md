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

# Completed Tasks Overview

## 🛠 Task 1 – Fix Interaction Issues

### Analysis
Although the preloader faded out visually via a GSAP animation, it continued to occupy the full viewport with `position: fixed` and a very high `z-index`. This blocked all user interaction with the underlying content, including keyboard navigation and screen reader access.

### Solution
I created a CSS class `.is-hidden` to:
- Set `opacity: 0` and `pointer-events: none` to eliminate both visibility and interactivity, ensuring accessibility for all users.
- Apply a smooth fade-out using `transition: opacity` for a polished experience.

In the GSAP timeline's `onComplete` callback:
1. I add the `.is-hidden` class to the `.c--preloader-a` element.
2. After the transition, I remove the element from the DOM (using a `setTimeout`) to free up resources and prevent any accidental blocking.

### Reasoning
Why this approach:
- Minimal and efficient DOM manipulation.
- Guarantees a smooth user experience (no abrupt disappearance or interaction lag).
- Improves accessibility by removing obstacles for keyboard and assistive technology users.
- Frees memory and avoids resource leaks by removing unused elements.
- Avoids CSS conflicts or layout shifts by simply toggling class state.
- Future-proof: easy to reuse the `.is-hidden` class pattern elsewhere if needed.

## 🛠 Task 2 – Accordion Arrow States

### Analysis
By default, all accordion arrows pointed down, regardless of whether the section was open or closed. This made it unclear to users which sections were expanded.

### Solution
I leveraged the Collapsify library, which automatically adds the class `--is-active` to the header button of an open accordion item. Using SCSS, I created a selector that targets the arrow icon (`.c--accordion-a__item__hd__artwork`) when its parent button has the `--is-active` class. This rotates the arrow upwards when the section is open, and downwards when closed. The transition is smooth for a polished user experience.

### Reasoning
Why this approach:
- No JS changes required: Collapsify already manages the state and classes.
- Pure CSS solution: maximizes performance and maintainability.
- Clear visual feedback for users, improving usability and accessibility.
- Easy to extend or customize for future design changes.

## 🛠 Task 3 Component A

### Solution
- **Result**: Naturally fluid scaling that maintains proportions
- **Percentage-Based Positioning**: Converted all box dimensions and positions to percentages relative to the container
- **Complex Mask Handling**: For boxes with internal rounded corners

### Reasoning
Why this approach succeeded:
- **True responsiveness**: Component adapts to any container size naturally
- **Maintainable code**: Percentage-based positioning is easier to understand and modify
- **Performance optimized**: No transform calculations or GPU layers
- **Design faithful**: Maintains exact proportional relationships from original design
- **Future-proof**: Easy to extend with hover effects, animations, or layout changes
- **Cross-browser compatible**: Uses well-supported CSS features
- **Scalable system**: Pattern can be applied to other complex geometric layouts

## 🛠 Task 3 Component B

### Solution
I developed ComponentB with the following key features:
- **Responsive container**: Used `aspect-ratio: 584/311` to maintain design proportions while scaling
- **Dynamic border-radius**: Implemented `clamp(8px, 4vw, 24px)` for proportional corner rounding
- **Dual-color text effect**: Created overlapping green and pink text layers for visual impact
- **Bottom-left positioning**: Positioned text in the corner with proper padding respect
- **Responsive typography**: Used `clamp(16px, 6vw, 48px)` for scalable font sizes
- **Proper centering**: Applied `margin: 0 auto` for horizontal centering without extra wrappers

### Reasoning
Why this approach:
- **Scalable design**: Component works perfectly on all screen sizes without breaking
- **Performance optimized**: Minimal CSS with efficient selectors and properties
- **Maintainable code**: Clear structure that's easy to modify or extend
- **Accessibility focused**: Proper semantic HTML and focus management
- **Design faithful**: Pixel-perfect implementation matching Figma specifications
- **Future-proof**: Uses modern CSS techniques that are well-supported

### Alternative Approaches Considered

During development, I evaluated several approaches for the dual-color text effect:

#### 1. CSS `background-clip: text` Approach
**Initial attempt**: Using gradient backgrounds with `background-clip: text` to create the color effect.

**Why it was rejected**:
- **Browser compatibility issues**: Limited support in older browsers

#### 2. CSS-Generated Image Approach
**Second attempt**: Creating the text as a CSS-generated image or using canvas to render the dual-color effect.

**Why it was rejected**:
- **Hacky solution**: Felt like a workaround rather than a proper implementation
- **Maintenance overhead**: Any text changes would require regenerating images
- **Performance impact**

## 🛠 Task 4 – Responsive Design Implementation

### Analysis
The Figma design was only provided for desktop, so I needed to create tablet and mobile versions from scratch while keeping the design consistent and user-friendly across all devices.

### Solution
I used a **desktop-first approach** to make the site responsive:

- **Desktop**: Started with the original design as the base
- **Tablet**: Adjusted spacing and component sizes while keeping the same layout
- **Mobile**: Reorganized content to work vertically

Key changes made:
- Made text sizes scale smoothly between screen sizes using `clamp()`
- Ensured all buttons are easy to tap on mobile (44px minimum)
- Made images and components scale proportionally

### Reasoning
Why desktop-first worked best:
- Started with the complete design and adapted it down rather than building up
- Easier to maintain since CSS overrides base styles instead of adding complexity
- Matches how clients typically provide designs (desktop first)
- Mobile feels like a thoughtful adaptation rather than an afterthought

## 🛠 Task 5 – Fix RevealItem Animation Triggers

### Analysis
- There was an issue with instance initialization that prevented animations from working correctly.

### Solution
- Fixed the instance initialization in Main.js to ensure they are stored properly instead of being executed as functions.
- Added checks for the play/pause buttons to prevent errors if they don't exist in the DOM.

### Reasoning
- Proper instance initialization removes errors and ensures that all animations run as expected.
- Button existence checks improve the robustness of the code and prevent unnecessary runtime errors.

## 🛠 Task 6 – Lottie Animation Controls

### Analysis
To control Lottie animations in a scalable and maintainable way, a system was implemented using custom HTML attributes (`data-name` and `data-lottie`). This allows each Play/Pause button to be dynamically linked to its corresponding animation, without hardcoding names in the JavaScript.

### Solution
- Each `.js--lottie-element` has a unique `data-name` attribute.
- Each Play/Pause button has a `data-lottie` attribute matching the `data-name` of the animation it should control.
- The JavaScript selects all Play/Pause buttons and, on click, reads the `data-lottie` value to identify the Lottie instance in `window.WL` and execute the appropriate method (`play()` or `pause()`).

### Reasoning
- This approach keeps the code clean, scalable, and easy to maintain.
- It allows for multiple animations and controls without conflicts or hardcoded dependencies.

## Task 7 - Accessibility Implementation

### Analysis
The original website lacked proper accessibility features, making it difficult or impossible for users with disabilities to navigate and interact with the content. This included missing alternative text for images, poor keyboard navigation, and inadequate support for screen readers.

### Solution
I implemented comprehensive accessibility improvements following WCAG 2.1 AA guidelines:

#### Visual Accessibility
- **Image Descriptions**: Added meaningful alternative text to all images, allowing screen readers to describe visual content to users who can't see it
- **Color and Contrast**: Ensured all text meets minimum contrast requirements for readability
- **Focus Indicators**: Made it clear which element is currently selected when navigating with a keyboard

#### Navigation and Interaction
- **Keyboard Support**: Made every interactive element accessible using only a keyboard (no mouse required)
- **Logical Tab Order**: Ensured users can navigate through the page in a sensible sequence
- **No Keyboard Traps**: Users can always move forward or backward through the interface without getting stuck

#### Screen Reader Support
- **Semantic Structure**: Used proper HTML headings and landmarks so screen readers can understand page organization
- **ARIA Labels**: Added descriptive labels for complex interface elements like accordions and animations
- **Live Announcements**: Important changes (like accordion opening/closing) are announced to screen reader users

#### Interactive Elements
- **Clear Labels**: All buttons and form elements have descriptive names that explain their purpose
- **Status Updates**: Users are informed when something changes on the page (like animations starting or stopping)
- **Predictable Behavior**: Interface elements behave consistently and don't cause unexpected changes

## Task 8 - Performance Optimization

### Analysis
The initial website had several performance bottlenecks that could slow down loading times and user experience. Large image files, unoptimized JavaScript bundles, and inefficient CSS delivery were causing slower page loads, especially on mobile devices and slower internet connections.

### Solution
I implemented a comprehensive performance optimization strategy:

#### Code Optimization
- **JavaScript Minification**: Compressed JavaScript files to reduce their size by removing unnecessary spaces and characters
- **Smart Code Splitting**: Separated large external libraries (like GSAP and Lottie) from the main application code, allowing browsers to cache them independently
- **CSS Optimization**: Streamlined stylesheets and embedded small CSS files directly into HTML to reduce server requests

#### Image Optimization
- **Modern Image Formats**: Converted images to WebP format, which provides better compression than traditional JPEG/PNG while maintaining quality
- **Responsive Images**: Created multiple image sizes for different screen resolutions, ensuring mobile users don't download oversized desktop images
- **Smart Loading Strategy**: Implemented priority loading for images visible immediately when the page loads, while delaying others until needed
- **Lazy Loading**: Images outside the initial viewport load only when users scroll near them, reducing initial page load time

#### Loading Strategy
- **Critical Resource Prioritization**: Ensured essential content loads first, allowing users to see and interact with the page faster
- **Progressive Enhancement**: Built the site to work on slower connections while providing enhanced features for faster ones
- **Efficient Resource Management**: Reduced the number of server requests and optimized the timing of when resources load

---

## 🚀 Live Demo

The completed project is deployed and available at:

**https://terra-frontend-trial-alejandroeggcl.vercel.app/**