export default function handler(req, res) {
  const userGuess = req.body?.untrustedData?.buttonIndex;

  const correctNumber = Math.floor(Math.random() * 3) + 1;

  const isCorrect = parseInt(userGuess) === correctNumber;

  res.status(200).json({
    frames: [
      {
        frame: "vNext",
        image: isCorrect
          ? "https://your-deployment-url.vercel.app/win.png"
          : "https://your-deployment-url.vercel.app/lose.png",
        buttons: [
          {
            label: "Main Lagi",
            action: "post",
            target: "https://your-deployment-url.vercel.app/"
          }
        ]
      }
    ]
  });
}