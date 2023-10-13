
var quotesContainer = [
    'Be yourself; everyone else is already taken.',

    '“So many books, so little time.”',

    '“A room without books is like a body without a soul.”',

    '“You only live once, but if you do it right, once is enough.”',

    `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,

    `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,

    `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,

    `“You've gotta dance like there's nobody watching,
    Love like you'll never be hurt,
    Sing like there's nobody listening,
    And live like it's heaven on earth.”`,

    `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`,

    `“Be the change that you wish to see in the world.”`,

    `“In three words I can sum up everything I've learned about life: it goes on.”`,

    `“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”`,

    `“Don't walk in front of me… I may not follow
   Don't walk behind me… I may not lead
   Walk beside me… just be my friend”
   `,

    `“If you tell the truth, you don't have to remember anything.”`,

    `“Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .”`,

    `“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”`,

    `“A friend is someone who knows all about you and still loves you.`,

    `“To live is the rarest thing in the world. Most people exist, that is all.”`,

    `“Always forgive your enemies; nothing annoys them so much.”`,

    `“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”   `,

    `“Live as if you were to die tomorrow. Learn as if you were to live forever.”`,

    `“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”`,

    `
   “Without music, life would be a mistake.”`,

    `“I am so clever that sometimes I don't understand a single word of what I am saying.”`,

    `“Insanity is doing the same thing, over and over again, but expecting different results.”`,
];
var currentRandom = [];
function rndQuote() {
    var quote = '';
    var index = Math.floor(Math.random() * ((quotesContainer.length)-1));
    if(index==currentRandom[currentRandom.length-1]){
        index++;
        Math.floor(Math.random() * quotesContainer.length);
    }
    currentRandom.push(index);
    quote = quotesContainer[index]
    document.getElementById("test").innerHTML = quote;
}




