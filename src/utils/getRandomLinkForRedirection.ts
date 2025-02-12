export function getRandomLinkForRedirection() {
  const links = [
    'https://www.linkedin.com/in/ricardo-camilo-programador-frontend-web-developer/',
    'https://www.instagram.com/ricardo.camilo.dev/',
  ];

  return links[Math.floor(Math.random() * links.length)];
}