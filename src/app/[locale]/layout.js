import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import Header from '@/components/layout/Header';
import '../globals.css';
import Footer from '@/components/layout/Footer';

export function generateStaticParams() {
  return [{locale:'tr'},{locale:'en'},{locale:'de'}];
}

export default async function LocaleLayout({children, params}) {
  const {locale} = await params;
  const messages = await getMessages({locale});
  return (
    <html lang={locale}>
      <body className="bg-black text-white">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
          <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}