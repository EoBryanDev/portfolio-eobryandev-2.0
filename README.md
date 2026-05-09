# Personal Portfolio (3.0)

A next generation personal website built with Next.js (App Router) and Supabase. This project serves as a showcase of modern web development practices, incorporating features like AI-generated content, real-time subscriptions, and advanced animations.

## Features

- **Modern Tech Stack**: Built with Next.js 16 (App Router) and TypeScript.
- **AI Content Generation**: Leverages Groq API to generate content for the "Philosophy" section.
- **Real-time Subscriptions**: Utilizes Supabase Realtime to listen for database changes.
- **Advanced Animations**: Features a 3D Hero section using `@splinetool/react-spline` and scroll-triggered animations with `GSAP`.
- **Dynamic Project Showcase**: Projects are fetched from Supabase database, allowing for easy updates.
- **SEO Optimized**: Built with performance and SEO best practices in mind (Targeting >90 Lighthouse score).
- **Design System**: A strict "Dark Theme" aesthetic with a custom design system.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- Node.js >= 18.0.0
- npm or yarn or pnpm
- Supabase Account (for API keys)
- Groq API Key (for AI features)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd eobryandev.me-2.0
   ```

2. Install dependencies:
   ```bash
   # Using npm
   npm install

   # Or using yarn
   yarn install

   # Or using pnpm
   pnpm install
   ```

3. Environment Configuration:
   Create a `.env.local` file in the root directory and add your API keys:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   NEXT_PUBLIC_GROQ_API_KEY=your_groq_api_key
   ```

### Running the Project

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.