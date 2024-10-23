import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components';
import { Providers } from '@/utils/Providers';

export const metadata: Metadata = {
  title: 'Todo List',
  description: '코드잇 - 프론트엔드 단기심화 과정 Todo List 과제입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          href="https://cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
