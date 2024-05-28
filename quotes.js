const quotes = [
    "There are only two kinds of programming languages: those people always bitch about and those nobody uses. - Bjarne Stroustrup",
    "To understand recursion, you must first understand recursion. - Unknown",
    "Software and cathedrals are much the same – first we build them, then we pray. - Sam Redwine",
    "Programming is like writing a book... except if you miss out a single comma on page 126 the whole thing makes no sense. - Unknown",
    "I don’t care if it works on your machine! We are not shipping your machine! - Vidiu Platon",
    "Debugging is like being the detective in a crime movie where you are also the murderer. - Filipe Fortes",
    "In order to understand recursion, one must first understand recursion. - Stephen Hawking",
    "It works on my machine. - Every Developer Ever",
    "The best thing about a boolean is even if you are wrong, you are only off by a bit. - Unknown",
    "Programming is 10% writing code and 90% figuring out why it doesn’t work. - Unknown",
    "There are two ways to write error-free programs; only the third one works. - Alan J. Perlis",
    "Experience is the name everyone gives to their mistakes. - Oscar Wilde",
    "The trouble with programmers is that you can never tell what a programmer is doing until it’s too late. - Seymour Cray",
    "If debugging is the process of removing software bugs, then programming must be the process of putting them in. - Edsger Dijkstra",
    "A good programmer is someone who always looks both ways before crossing a one-way street. - Doug Linder",
    "Walking on water and developing software from a specification are easy if both are frozen. - Edward V. Berard",
    "It's not a bug – it's an undocumented feature. - Anonymous",
    "First, solve the problem. Then, write the code. - John Johnson",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. - Martin Fowler",
    "Real programmers don't comment their code. If it was hard to write, it should be hard to understand. - Unknown",
    "A bit in the hand is worth two in the byte. - Unknown",
    "Why do Java developers wear glasses? Because they don't C#. - Unknown",
    "I'm not anti-social; I'm just not user-friendly. - Unknown",
    "Life would be much easier if I had the source code. - Unknown",
    "You had me at 'Hello World.' - Unknown",
    "In the world of computing, a byte is worth a thousand words. - Unknown",
    "The best way to get a project done faster is to start sooner. - Jim Highsmith",
    "Programmer: A machine that turns coffee into code. - Unknown",
    "If at first you don’t succeed, call it version 1.0. - Unknown",
    "Computers are like air conditioners: they stop working properly if you open Windows. - Unknown"
];

document.addEventListener('DOMContentLoaded', () => {
    const quoteElement = document.getElementById('quote');
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteElement.textContent = randomQuote;
});
