// Birthday Trivia Facts

export const getBirthdayTrivia = (birthdayDate) => {
  // birthdayDate format: "01/02/2004" (DD/MM/YYYY)
  const [day, month, year] = birthdayDate.split("/").map(Number);

  const facts = [
    {
      emoji: "🌍",
      title: "Around the World",
      fact: `On your birth date, there were over 6 billion people on Earth!`,
    },
    {
      emoji: "🎬",
      title: "That Year in Movies",
      fact: `2004 gave us classics like The Shrek 2, Harry Potter and the Prisoner of Azkaban, and The Incredibles!`,
    },
    {
      emoji: "🎵",
      title: "Music Then",
      fact: `In 2004, Eminem's "Lose Yourself" and OutKast's "Hey Ya Ya!" were dominating the charts!`,
    },
    {
      emoji: "⭐",
      title: "Star Sign",
      fact:
        month === 2
          ? `Your zodiac sign is Aquarius (Jan 20 - Feb 18) ♒ - known for being unique and visionary!`
          : `Check your birthday to discover your zodiac sign!`,
    },
    {
      emoji: "📱",
      title: "Tech in 2004",
      fact: `Facebook was just founded in February 2004! You grew up with the internet!`,
    },
    {
      emoji: "🎂",
      title: "Age Milestone",
      fact: `You've now experienced 20 years of memories, growth, and beautiful moments!`,
    },
    {
      emoji: "🌸",
      title: "February Days",
      fact:
        day === 1
          ? `Being born on the 1st makes you a natural leader and pioneer!`
          : `February is the month of love - how fitting for such a loving soul!`,
    },
    {
      emoji: "👶",
      title: "Your Daughter",
      fact: `Your precious daughter was born on 10/01/2026 - a new chapter of joy! 💕`,
    },
    {
      emoji: "🎁",
      title: "20 Years!",
      fact: `Can you believe 20 years have passed? Time flies when you're amazing! 🎉`,
    },
    {
      emoji: "💝",
      title: "Beautiful Soul",
      fact: `Every February 1st, the world gets a little brighter because you exist! ✨`,
    },
  ];

  return facts;
};

export const getSpecialAnimation = (birthdayDate, currentDate = new Date()) => {
  // birthdayDate format: "01/02/2004" (DD/MM/YYYY)
  const [bDay, bMonth, bYear] = birthdayDate.split("/").map(Number);

  const today = new Date(currentDate);
  const todayDay = today.getDate();
  const todayMonth = today.getMonth() + 1;

  // Check if today is her birthday
  if (todayDay === bDay && todayMonth === bMonth) {
    return {
      active: true,
      type: "birthday",
      message: "🎉 TODAY IS HER SPECIAL DAY! 🎉",
      animation: "birthday-explosion",
      particles: "confetti",
    };
  }

  // Check if it's her daughter's birthday (10/01/2026 - January 10th)
  if (todayDay === 10 && todayMonth === 1) {
    return {
      active: true,
      type: "daughter-birthday",
      message: "🎂 DOUBLE CELEBRATION - DAUGHTER'S BIRTHDAY! 🎂",
      animation: "daughter-celebration",
      particles: "hearts",
    };
  }

  return {
    active: false,
    type: null,
  };
};
