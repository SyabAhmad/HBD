import { useState, useEffect } from "react";

export default function BirthdayGifs() {
  const [currentGifIndex, setCurrentGifIndex] = useState(0);

  // Auto-play GIFs every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGifIndex((prev) => (prev + 1) % 21); // 21 total GIFs
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const gifs = [
    // Original 9 GIFs
    {
      url: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnRvYTd4d3NrNDh6M3R1ajV5cHU0ODQ1cGhjOHN3Y3M4cGkwNndxeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/N1dHukDMve0pnwpigc/giphy.gif",
      alt: "Happy birthday cat",
      title: "Happy Birthday! 🎉",
    },
    {
      url: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3ZDhzcmlxODlqdXA0ZTc5bGxxMWcyaGNiZno0dnN1dXc2dmdkN3dqZSZlcD12MV9zdGlja2Vyc19yZWxhdGVkJmN0PXM/j51yWohQV0Uh81LPlk/giphy.gif",
      alt: "Balloons celebration",
      title: "Balloons & Joy! 🎈",
    },
    {
      url: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3ZDhzcmlxODlqdXA0ZTc5bGxxMWcyaGNiZno0dnN1dXc2dmdkN3dqZSZlcD12MV9zdGlja2Vyc19yZWxhdGVkJmN0PXM/AlJ5L2TUUic2Yo22Mo/giphy.gif",
      alt: "Cake with candles",
      title: "Cake with Candles! 🎂",
    },
    {
      url: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3YjA3OXphcjJlNm9jNDgwNjlqN3BuM2tubW9ocjJlemR0OHZncDFvbSZlcD12MV9zdGlja2Vyc19yZWxhdGVkJmN0PXM/ZiWZeyJBLfi7JXivAZ/giphy.gif",
      alt: "Blowing candles",
      title: "Make a Wish! ✨",
    },
    {
      url: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3YjA3OXphcjJlNm9jNDgwNjlqN3BuM2tubW9ocjJlemR0OHZncDFvbSZlcD12MV9zdGlja2Vyc19yZWxhdGVkJmN0PXM/kcD2L6VcA5xzfJolXr/giphy.gif",
      alt: "Offering cake",
      title: "For You! 🎁",
    },
    {
      url: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3YmlneHRvaWxpcmI2b3h0eG9uYTRvb2gzNmQxMTUwZ2V5bTQ1d3Q3NiZlcD12MV9zdGlja2Vyc19yZWxhdGVkJmN0PXM/IaXXrEwZg7nSDf4nRy/giphy.gif",
      alt: "Dancing candle",
      title: "Let's Celebrate! 💃",
    },
    {
      url: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3YmlneHRvaWxpcmI2b3h0eG9uYTRvb2gzNmQxMTUwZ2V5bTQ1d3Q3NiZlcD12MV9zdGlja2Vyc19yZWxhdGVkJmN0PXM/MCiwhE47wiWiiIPRFb/giphy.gif",
      alt: "Balloon dancing",
      title: "Party Time! 🎊",
    },
    {
      url: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXg5MzN5bDkzc2loZzc4bHRuNHU2cGFvbGx3bzdjbzF1NWkzYXVrMiZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/CMPU2v5QzvhPAS9kST/giphy.gif",
      alt: "Cat saying happy birthday",
      title: "Happy Birthday! 😸",
    },
    {
      url: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXg5MzN5bDkzc2loZzc4bHRuNHU2cGFvbGx3bzdjbzF1NWkzYXVrMiZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/BvRxxQneLRbLPHLi7e/giphy.gif",
      alt: "Cat offering gift",
      title: "Special Gift! 🎀",
    },
    // New 10 GIFs
    {
      url: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NTFnNDhsanJhMDhnOXlzb3c1ZTN2cnMyOXptdm9tNnNqYzB1djBpOCZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/49UUsgh5Bunq6tcjm1/giphy.gif",
      alt: "Heart celebration",
      title: "So Much Love! 💕",
    },
    {
      url: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NTFnNDhsanJhMDhnOXlzb3c1ZTN2cnMyOXptdm9tNnNqYzB1djBpOCZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/wfG1IfszszpBoYGhN9/giphy.gif",
      alt: "Happy birthday celebration",
      title: "Happy Birthday! 🎉",
    },
    {
      url: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NTFnNDhsanJhMDhnOXlzb3c1ZTN2cnMyOXptdm9tNnNqYzB1djBpOCZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/xMz1zHGibq3MqsierE/giphy.gif",
      alt: "Cat happy birthday",
      title: "Cat Says Happy Birthday! 😸",
    },
    {
      url: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXg5MzN5bDkzc2loZzc4bHRuNHU2cGFvbGx3bzdjbzF1NWkzYXVrMiZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/XryTh7U1sMnaTfo2KS/giphy.gif",
      alt: "Cat with gift",
      title: "Special Gift for You! 🎁",
    },
    {
      url: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXg5MzN5bDkzc2loZzc4bHRuNHU2cGFvbGx3bzdjbzF1NWkzYXVrMiZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/o1aK89fBxbLxde1zWc/giphy.gif",
      alt: "Eating cake celebration",
      title: "Enjoy Your Cake! 🎂",
    },
    {
      url: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMG14YWM4cWZqanMzcmplYTQwdGY5OWJqejRxYWdkbGt6c2JqYmNqZiZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/yHcFkj8Jhsr4QrmsvG/giphy.gif",
      alt: "Happy hugs",
      title: "Sending You Hugs! 🤗",
    },
    {
      url: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMG14YWM4cWZqanMzcmplYTQwdGY5OWJqejRxYWdkbGt6c2JqYmNqZiZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/hjaOkpwDbtzGBIyr7K/giphy.gif",
      alt: "Birthday hugs celebration",
      title: "Birthday Hugs! 💕",
    },
    {
      url: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2M4NXJ2aGh6OGJqZnBpczR3eWRsNWx6cmJqOXE1ankzYXRpNWNibyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/6tJVUmKWsIMJu7Kxmn/giphy.gif",
      alt: "Hearts and balloons",
      title: "Hearts & Balloons! 🎈",
    },
    {
      url: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3dWU1b3dxcDYzYTFrc2E4c3EzcGxkM3o1dXhydnpmNHE5OXhqeWVlbiZlcD12MV9zdGlja2Vyc19yZWxhdGVkJmN0PXM/KoU1FSodU4310NglUz/giphy.gif",
      alt: "Love happy birthday",
      title: "With All Our Love! 💗",
    },
    {
      url: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NTFnNDhsanJhMDhnOXlzb3c1ZTN2cnMyOXptdm9tNnNqYzB1djBpOCZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/wfG1IfszszpBoYGhN9/giphy.gif",
      alt: "Happy birthday celebration",
      title: "Happy Birthday! 🎉",
    },
    {
      url: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NTFnNDhsanJhMDhnOXlzb3c1ZTN2cnMyOXptdm9tNnNqYzB1djBpOCZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/xMz1zHGibq3MqsierE/giphy.gif",
      alt: "Cat happy birthday",
      title: "Cat Says Happy Birthday! 😸",
    },
    {
      url: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXg5MzN5bDkzc2loZzc4bHRuNHU2cGFvbGx3bzdjbzF1NWkzYXVrMiZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/XryTh7U1sMnaTfo2KS/giphy.gif",
      alt: "Cat with gift",
      title: "Special Gift for You! 🎁",
    },
    {
      url: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXg5MzN5bDkzc2loZzc4bHRuNHU2cGFvbGx3bzdjbzF1NWkzYXVrMiZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/o1aK89fBxbLxde1zWc/giphy.gif",
      alt: "Eating cake celebration",
      title: "Enjoy Your Cake! 🎂",
    },
    {
      url: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMG14YWM4cWZqanMzcmplYTQwdGY5OWJqejRxYWdkbGt6c2JqYmNqZiZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/yHcFkj8Jhsr4QrmsvG/giphy.gif",
      alt: "Happy hugs",
      title: "Sending You Hugs! 🤗",
    },
    {
      url: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMG14YWM4cWZqanMzcmplYTQwdGY5OWJqejRxYWdkbGt6c2JqYmNqZiZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/hjaOkpwDbtzGBIyr7K/giphy.gif",
      alt: "Birthday hugs celebration",
      title: "Birthday Hugs! 💕",
    },
    {
      url: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2M4NXJ2aGh6OGJqZnBpczR3eWRsNWx6cmJqOXE1ankzYXRpNWNibyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/6tJVUmKWsIMJu7Kxmn/giphy.gif",
      alt: "Hearts and balloons",
      title: "Hearts & Balloons! 🎈",
    },
    {
      url: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3dWU1b3dxcDYzYTFrc2E4c3EzcGxkM3o1dXhydnpmNHE5OXhqeWVlbiZlcD12MV9zdGlja2Vyc19yZWxhdGVkJmN0PXM/KoU1FSodU4310NglUz/giphy.gif",
      alt: "Love happy birthday",
      title: "With All Our Love! 💗",
    },
    {
      url: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3dWU1b3dxcDYzYTFrc2E4c3EzcGxkM3o1dXhydnpmNHE5OXhqeWVlbiZlcD12MV9zdGlja2Vyc19yZWxhdGVkJmN0PXM/qY0CZqPeDQVfoZEfoc/giphy.gif",
      alt: "Birthday hug",
      title: "Happy Birthday Hug! 🤗",
    },
    {
      url: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3dWU1b3dxcDYzYTFrc2E4c3EzcGxkM3o1dXhydnpmNHE5OXhqeWVlbiZlcD12MV9zdGlja2Vyc19yZWxhdGVkJmN0PXM/wwhDSdbI8WvppIFG2A/giphy.gif",
      alt: "Girly hug",
      title: "Girly Hug! 👯",
    },
    {
      url: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3dWU1b3dxcDYzYTFrc2E4c3EzcGxkM3o1dXhydnpmNHE5OXhqeWVlbiZlcD12MV9zdGlja2Vyc19yZWxhdGVkJmN0PXM/CYVQcC2LWIk4bxng4g/giphy.gif",
      alt: "Gift surprise",
      title: "Special Gift! 🎁",
    },
  ];

  const currentGif = gifs[currentGifIndex];

  const nextGif = () => {
    setCurrentGifIndex((prev) => (prev + 1) % gifs.length);
  };

  const prevGif = () => {
    setCurrentGifIndex((prev) => (prev - 1 + gifs.length) % gifs.length);
  };

  return (
    <div className="birthday-gifs-section">
      <h3 className="gifs-title">🎉 Celebration GIFs 🎉</h3>

      <div className="gif-carousel">
        <button onClick={prevGif} className="gif-nav-btn left">
          ❮
        </button>

        <div className="gif-container">
          <img
            src={currentGif.url}
            alt={currentGif.alt}
            className="gif-image"
          />
          <div className="gif-label">{currentGif.title}</div>
        </div>

        <button onClick={nextGif} className="gif-nav-btn right">
          ❯
        </button>
      </div>

      <div className="gif-dots">
        {gifs.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentGifIndex(idx)}
            className={`gif-dot ${idx === currentGifIndex ? "active" : ""}`}
            aria-label={`Go to gif ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
