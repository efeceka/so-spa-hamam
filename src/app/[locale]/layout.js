import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import '../globals.css';
import {Suspense} from 'react';               // ⬅️ eklendi
import FloatingButtons from '@/components/common/FloatingButtons';

export function generateStaticParams() {
  return [{locale:'tr'},{locale:'en'},{locale:'de'}];
}

export default async function LocaleLayout({children, params}) {
  const {locale} = await params;              // Next 15: await gerekli
  const messages = await getMessages({locale});

  return (
    <html lang={locale}>
      <body className="bg-black text-white">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <Suspense fallback={null}>          {/* ⬅️ children Suspense içinde */}
            {children}
          </Suspense>
          <Footer/>
          <FloatingButtons/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}