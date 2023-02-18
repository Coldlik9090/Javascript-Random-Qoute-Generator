function generate(){
    var qoutes = {
        "- Dr.Suess" :  "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
     "- C.S Lewis" : "Love yourself first and everything else falls into line. You really have to love yourself to get anything done in this world.",
     "- Mother Teresa" : "Let us always meet each other with smile, for the smile is the beginning of love.",
    }

    var authors = Object.keys(qoutes);

    var author = authors[Math.floor(Math.random() *
    authors.length)];

    var quote = qoutes[author];

    document.getElementById("quote").innerHTML =
     quote;
    document.getElementById("author").innerHTML =
     author;

}