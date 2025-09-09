# Asset Management Society, India (AMSI) Website

A modern, responsive website for the Asset Management Society, India built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional design with responsive layout
- **Component-Based Architecture**: Reusable components for maintainability
- **Mobile-First**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Next.js for optimal performance
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Accessibility**: WCAG compliant design patterns

## Pages

- **Home**: Hero section, about overview, workshops, membership, gallery, and contact
- **About Us**: Detailed information about AMSI's history, mission, and values
- **Workshops**: Upcoming and past workshops with registration functionality
- **Membership**: Membership types, benefits, and application process
- **Press**: Press releases, media coverage, and publications
- **Gallery**: Images, videos, and event highlights
- **Contact**: Contact form, team information, and location details

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd amsi-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── about/             # About page
│   ├── workshops/         # Workshops page
│   ├── membership/        # Membership page
│   ├── press/            # Press page
│   ├── gallery/          # Gallery page
│   ├── contact/          # Contact page
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/            # Reusable components
│   ├── sections/         # Page sections
│   ├── Header.tsx        # Navigation header
│   └── Footer.tsx        # Site footer
└── globals.css           # Global styles
```

## Customization

### Colors
The website uses a blue color scheme that can be customized in the Tailwind configuration:
- Primary: Blue-600
- Secondary: Blue-800
- Accent: Blue-300

### Content
- Update content in individual component files
- Modify images by replacing placeholder URLs
- Update contact information in Footer and Contact components

### Styling
- All styling is done with Tailwind CSS classes
- Custom styles can be added to `globals.css`
- Component-specific styles are co-located with components

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub:
   ```bash
   # Create a new repository on GitHub first, then:
   git remote add origin https://github.com/yourusername/amsi-website.git
   git push -u origin main
   ```

2. Deploy to Vercel:
   - Go to [Vercel](https://vercel.com/) and sign up/login
   - Click "Add New" > "Project"
   - Import your GitHub repository
   - Configure project settings (all defaults should work fine)
   - Click "Deploy"

3. Your site will be live at a Vercel URL (e.g., `amsi-website.vercel.app`)

4. To use a custom domain:
   - Go to Project Settings > Domains
   - Add your domain (e.g., `www.amsi.net.in`)
   - Follow Vercel's instructions to configure DNS settings

### Other Platforms

The website can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

For questions about this website, please contact:
- Email: info@amsi.net.in
- Website: https://www.amsi.net.in/

## Acknowledgments

- Design inspired by modern web design principles
- Icons provided by Lucide React
- Built with Next.js and Tailwind CSS