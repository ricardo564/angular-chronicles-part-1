export function getRandomLinkForRedirection() {
  const links = [
    'https://www.linkedin.com/in/ricardo-camilo-programador-frontend-web-developer/',
    'https://www.instagram.com/ricardo.camilo.dev/',
    'https://persona-nextjs-chronicles-part-2.netlify.app/sitemap.xml',
  ];

  return links[Math.floor(Math.random() * links.length)];
}