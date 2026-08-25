const conversations = [
  {
    id: 1,
    title: "Explain CSS Grid Clearly",
    group: "Today",
    messages: [
      { role: "user", text: "Can you explain CSS grid?" },
      { role: "assistant", text: "Sure. Grid lets you arrange items into rows and columns using a parent container." },
      { role: "user", text: "How is it different from flexbox?" },
      { role: "assistant", text: "Flexbox is one-dimensional (row or column). Grid is two-dimensional (rows and columns together)." },
      { role: "user", text: "Explain the stacked again, in easy words" },
      {
        role: "assistant",
        text: "Here's how cards normally sit side by side:",
        code: `<div class="card1"></div>\n<div class="card2"></div>\n<div class="card3"></div>`
      }
    ]
  },
  {
    id: 2,
    title: "Greeting exchange",
    group: "Today",
    messages: [
      { role: "user", text: "hi" },
      { role: "assistant", text: "Hello! How can I help you today?" },
      { role: "user", text: "just testing the UI" },
      { role: "assistant", text: "No problem, go ahead and test away." },
      { role: "user", text: "cool, thanks" },
      { role: "assistant", text: "Anytime!" }
    ]
  },
  {
    id: 3,
    title: "JavaScript Closures",
    group: "Yesterday",
    messages: [
      { role: "user", text: "what is a closure?" },
      { role: "assistant", text: "A closure is a function that remembers variables from where it was created." },
      { role: "user", text: "give me a simple example" },
      { role: "assistant", text: "A counter function that keeps its own count variable even after the outer function finishes." },
      { role: "user", text: "why is that useful?" },
      { role: "assistant", text: "It lets you create private variables that outside code can't directly access." }
    ]
  },
  {
    id: 4,
    title: "Trip Planning",
    group: "Previous 7 days",
    messages: [
      { role: "user", text: "planning a 3 day trip to Manali" },
      { role: "assistant", text: "Great choice. Day 1 can be local sightseeing, Day 2 Solang Valley, Day 3 Rohtang Pass." },
      { role: "user", text: "best time to visit?" },
      { role: "assistant", text: "March to June for pleasant weather, December to February if you want snow." },
      { role: "user", text: "any food recommendations?" },
      { role: "assistant", text: "Try Himachali Dham and local trout fish dishes." }
    ]
  },
  {
    id: 5,
    title: "Resume Tips",
    group: "Older",
    messages: [
      { role: "user", text: "how do I make my resume stand out?" },
      { role: "assistant", text: "Focus on measurable achievements instead of just listing responsibilities." },
      { role: "user", text: "should it be one page?" },
      { role: "assistant", text: "For students/early career, yes — keep it to one page." },
      { role: "user", text: "any formatting tips?" },
      { role: "assistant", text: "Stick to one font, consistent spacing, and clear section headings." }
    ]
  }
];

const mockReplies = [
  "That's a great question. Let me think about that for a second.",
  "Sure, here's what I think about that.",
  "Interesting — I hadn't considered it that way.",
  "Got it. Here's a simple way to look at it.",
  "That depends on a few things, but generally speaking, yes.",
  "Good point. Let's break it down.",
  "Sure thing, here's a quick explanation.",
  "That's doable. Here's how I'd approach it."
];