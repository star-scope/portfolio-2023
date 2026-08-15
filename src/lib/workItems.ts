// The contents of the work page, kept out of the client bundle.
//
// These used to be written inline in pages/work.tsx, which meant the titles,
// the Notion links and the design system password shipped to every visitor
// regardless of whether they knew the page password. Anything in here is only
// ever sent after the password has been checked: getServerSideProps includes it
// for a request that already has a valid cookie, and /api/auth/work returns it
// in the response to a correct password.
//
// Import the WorkItem type into client code if you need it, never WORK_ITEMS.

export interface WorkItem {
  title: string;
  subtitle: string;
  subtitle2?: string;
  image: string;
  // Omitted for cards that aren't linked anywhere yet.
  href?: string;
}

export const WORK_ITEMS: WorkItem[] = [
  {
    title: 'TACTACAM REVEAL',
    subtitle: 'TRAILCAM APP',
    image: '/images/Reveal.png',
    href: 'https://starscope.notion.site/Tactacam-Reveal-cfbca692e05e43db8029edb2917ea52a',
  },
  {
    title: 'TACTACAM CONNECT',
    subtitle: 'POV CAMERA APP',
    image: '/images/Connect.png',
    href: 'https://starscope.notion.site/Tactacam-Connect-9f29ea7ccfc149ddae0cf8e0ccae49e8',
  },
  {
    title: 'TACTACAM DESIGN SYSTEM',
    subtitle: 'PASSWORD: TACTA0HEIGHT',
    image: '/images/Design System.png',
    href: 'https://design.ishareit.net',
  },
  {
    title: 'BREAKER NATION',
    subtitle: 'MUSIC SHARING SOCIAL MEDIA',
    image: '/images/Breaker.png',
    href: 'https://starscope.notion.site/Breaker-Nation-4d9efe3eec8f4e35886628b59f69ce5a',
  },
  {
    title: 'XQUISITE MARKETING',
    subtitle: 'GRAPHIC DESIGN & BRANDING',
    image: '/images/XM.png',
    href: 'https://starscope.notion.site/Xquisite-Marketing-a126d213e1334e50ba606bb35a09b382',
  },
  {
    title: 'TACTACAM SECURITY',
    subtitle: '',
    subtitle2: 'COMING SOON',
    image: '/images/Security.png',
  },
];
