const quotes = [
  {
    quote: 'The future depends on what we do in the present.',
    author: 'Mahatma Gandhi',
  },
  {
    quote: 'Everything in your world is created by what you think.',
    author: 'Oprah Winfrey',
  },
  {
    quote:
      'The biggest adventure you can ever take is to live the life of your dreams.',
    author: 'Oprah Winfrey',
  },
  {
    quote: "Dream as if you'll live forever. Live as if you'll die today.",
    author: 'James Dean',
  },
  {
    quote: 'The way to get started is to quit talking and begin doing.',
    author: 'Walt Disney',
  },
  {
    quote: "Don't push past memories deeper inside of yourself.",
    author: 'Walt Disney',
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: 'John Lennon',
  },
  {
    quote: 'To Travel is to Live',
    author: 'Hans Christian Andersen',
  },
  {
    quote: 'You only live once, but if you do it right, once is enough.',
    author: 'Mae West',
  },
  {
    quote: 'Travel expands the mind and fills the gap.',
    author: 'Sheda Savage',
  },
];

const quote = document.querySelector('#quote div');

const random = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = `${random.quote} - ${random.author}`;
