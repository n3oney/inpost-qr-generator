import type { MetaFunction } from '@remix-run/node';
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import styles from './styles/app.css';
import { Form } from './components/Form';
import { useSearchParams } from '@remix-run/react';
import { IoLogoGithub } from 'react-icons/io5';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'InPost QR Generator',
  viewport: 'width=device-width,initial-scale=1',
});

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles,
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com/',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com/',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Krona+One&family=Montserrat:wght@400;500;600;700&display=swap',
    },
    {
      rel: 'icon',
      href: '/favicon.svg',
      type: 'image/svg+xml',
    },
  ];
}

export default function App() {
  const [params] = useSearchParams();

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="font-display bg-gray-800 text-white relative pb-16">
        <div className="flex flex-col justify-center items-center px-1 pt-6 md:px-4 flex-grow min-h-[calc(100vh-4rem)]">
          <Link
            to="/"
            className="text-2xl font-header text-center text-yellow-400 mb-4"
          >
            Generator Kodów QR InPost
          </Link>
          <Form
            defaultPhone={params.get('phone')}
            defaultCode={params.get('code')}
          />
          <Outlet />
        </div>
        <div className="absolute h-16 bottom-0 left-0 right-0 flex justify-center items-center p-4 text-2xl">
          <a href="https://github.com/n3oney/inpost-qr-generator">
            <IoLogoGithub />
          </a>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
