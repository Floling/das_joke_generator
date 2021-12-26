// This array contains the dad jokes
const dadJokes = [
    "I'm afraid for the calendar. Its days are numbered.", 
    "My wife said I should do lunges to stay in shape. That would be a big step forward.", 
    "Why do fathers take an extra pair of socks when they go golfing? In case they get a hole in one!", 
    "Singing in the shower is fun until you get soap in your mouth. Then it's a soap opera.",
    "What do a tick and the Eiffel Tower have in common? They're both Paris sites.",
    "What do you call a fish wearing a bowtie? Sofishticated.",
    "How do you follow Will Smith in the snow? You follow the fresh prints.",
    "If April showers bring May flowers, what do May flowers bring? Pilgrims.",
    "I thought the dryer was shrinking my clothes. Turns out it was the refrigerator all along.",
    "What do you call a factory that makes okay products? A satisfactory.",
    "Dear Math, grow up and solve your own problems.",
    "What did the janitor say when he jumped out of the closet? Supplies!",
    "Have you heard about the chocolate record player? It sounds pretty sweet.",
    "What did the ocean say to the beach? Nothing, it just waved.",
    "Why do seagulls fly over the ocean? Because if they flew over the bay, we'd call them bagels." 
];

// This function randomly choses one of the jokes from dead jokes
const dadJokePicker = () => {
    console.log('- ' + dadJokes[Math.floor(Math.random() * dadJokes.length)]);
};

// function to check if string contains a specific word, this is going to be used in the dadJokeKeword function
const stringContainsWord = (string, word) => {
  if (string.includes(word)) {
      return true;
  } else {
      return false;
  }; 
}

// function to call joke by keyword
const dadJokeKeyword = (array, keyword) => {
    // this new array stores all the dad jokes which contain our keyword
    let matchingDadJokes = [];
    // we use stringCintainWord function to check if the string contains a specific word and if so push the entire string into our new array
    for (let i = 0; i < array.length; i++) {
        if (stringContainsWord(array[i], keyword) === true) {
            matchingDadJokes.push(array[i]); 
        };
    };
    // we make sure that our new array has at least one element, if not we send an error message that the keyword could not be found
    if (matchingDadJokes.length !== 0) {
        for (let j = 0; j < matchingDadJokes.length; j++) {
            console.log("- " + matchingDadJokes[j]);
        };
    } else {
        console.log("Sorry no dad jokes with your keyword have been found.");
    };
};

// this function adds the funtionality to add more jokes to the end of the dadJokes array by the user
const dadJokeAdder = (joke) => {
  dadJokes.push(joke);
};

// function call for random joke
dadJokePicker();

// function call dadJokeAdder with new joke and call the last joke in the dadJokes array
dadJokeAdder("I asked my dog what's two minus two. He said nothing.");
console.log('- ' + dadJokes[dadJokes.length - 1]);

// function call dadJokeKeword with a specific Keyword
dadJokeKeyword(dadJokes, "April");
dadJokeKeyword(dadJokes, "ocean");
dadJokeKeyword(dadJokes, "Peaches");