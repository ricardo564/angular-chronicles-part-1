export function getRandomLinkForRedirection() {
  const links = [
    'https://resume.io/r/4bDKkHLB9',
    'https://www.linkedin.com/in/ricardo-camilo-492b95b3/',
    'https://recrutest.recrutei.com.br/public/result/eyJpdiI6IlFQRk9LZHlBelNOSVUzMGdQazd1RHc9PSIsInZhbHVlIjoiWUlVaU5HV0oxdHMxSmxCTjdEUkdVdz09IiwibWFjIjoiZGNjNTA5NWQ1OThlNmY5NGU2YmE5MjlmNjJhMzIxNDhiMGYxYTE0ZDQzZGRlODJhNzExMDk4MjFiMzRiZWM4NiJ9',
    'https://x.com/Ricardo50993066',
    'https://www.instagram.com/ricardohks/',
    'https://www.figma.com/community/file/1103820487891554272',
    'https://www.figma.com/@KamranAlime',
    'https://x.com/KamranAlime',
  ];

  return links[Math.floor(Math.random() * links.length)];
}