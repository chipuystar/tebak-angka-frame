export default function Home() {
  return (
    <>
      <head>
        <title>Tebak Angka</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Tebak Angka Frame Game" />
        <meta property="og:description" content="Tebak angka 1-5 di Warpcast!" />
        <meta property="og:image" content="https://tebak-angka-frame.vercel.app/win.png" />
        <meta name="fc:frame" content="vNext" />
        <meta name="fc:frame:image" content="https://tebak-angka-frame.vercel.app/win.png" />
        <meta name="fc:frame:button:1" content="Tebak 1" />
        <meta name="fc:frame:button:2" content="Tebak 2" />
        <meta name="fc:frame:button:3" content="Tebak 3" />
        <meta name="fc:frame:button:4" content="Tebak 4" />
        <meta name="fc:frame:button:5" content="Tebak 5" />
        <meta name="fc:frame:post_url" content="https://tebak-angka-frame.vercel.app/api/guess" />
      </head>
      <body>
        <h1>Guess the Number</h1>
        <p>Open this in Warpcast to play!</p>
      </body>
    </>
  );
}
