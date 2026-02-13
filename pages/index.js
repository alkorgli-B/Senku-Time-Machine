import Desktop from '../components/Desktop';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Senku Time Machine | آلة الزمن</title>
        <meta name="description" content="عودة إلى جيل التسعينات والالفين بأحدث التقنيات" />
      </Head>

      <main>
        <Desktop />
      </main>

      <style jsx global>{`
        /* ضمان أن الصفحة تأخذ كامل الشاشة */
        html, body {
          padding: 0;
          margin: 0;
          height: 100vh;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
