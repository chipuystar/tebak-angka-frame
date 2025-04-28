export default function Home() {
  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="fc:frame" content="vNext" />
        <meta name="fc:frame:button:1" content="Tebak 1" />
        <meta name="fc:frame:button:2" content="Tebak 2" />
        <meta name="fc:frame:button:3" content="Tebak 3" />
        <meta name="fc:frame:post_url" content="https://your-deployment-url.vercel.app/api/guess" />
        <title>Tebak Angka!</title>
      </head>
      <body>
        <h1>Tebak Angka dari 1-3!</h1>
      </body>
    </>
  );
}