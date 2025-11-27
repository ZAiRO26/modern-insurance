# Modern Insurance / Catalyst Mergers

This is a comprehensive insurance website built with Next.js 14+, Tailwind CSS, and TypeScript. It features a responsive design, SEO optimization, and a seamless user experience.

## Features

*   **Responsive Design:** Optimized for all devices (Mobile, Tablet, Desktop).
*   **Modern Tech Stack:** Next.js 14 App Router, Tailwind CSS, Framer Motion.
*   **SEO Optimized:** Semantic HTML, JSON-LD Schema, and meta tags.
*   **Contact Form:** Integrated with Nodemailer for email delivery.
*   **Interactive Maps:** Google Maps integration.
*   **Performance:** Fast loading with optimized assets.

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/ZAiRO26/modern-insurance.git
    cd modern-insurance
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open the browser:**
    Navigate to `http://localhost:3000` to see the application.

## Environment Variables

Create a `.env` file in the root directory and add the following variables for email functionality:

```env
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-password
EMAIL_TO=recipient@example.com
```

## Deployment

This project is configured for easy deployment on **Netlify** or **Vercel**.

### Netlify

The project includes a `netlify.toml` file for automatic configuration.

### Vercel

Simply import the repository into Vercel, and it will automatically detect the Next.js framework.

## Repository Structure

```
src/
├── app/              # Next.js App Router pages and API routes
├── components/       # Reusable React components
│   ├── contact/      # Contact form and map components
│   ├── layout/       # Navbar, Footer, and layout wrappers
│   └── ui/           # Generic UI components (buttons, inputs, etc.)
├── lib/              # Utility functions
└── ...
```

## Contributing

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

## License

Distributed under the MIT License. See `LICENSE` for more information.
