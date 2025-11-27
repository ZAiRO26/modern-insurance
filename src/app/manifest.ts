import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Morris & Garritano Insurance',
    short_name: 'M&G Insurance',
    description: 'Trusted advisory since 1885. Property & Casualty, Employee Benefits, and Personal Insurance.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0f2d52',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
