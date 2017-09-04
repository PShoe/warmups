console.log('Sept 4 warmup');

var grannyTalk = function (question){
    var startYear = 1930;
    var endYear = 1950;
    var randomYear = Math.round(Math.random() * (endYear - startYear) + startYear);

    // question = question.replace(/(?!\w|\s)./g, '');

    if (question === 'BYE'){
        var grannySays = "What's that honey, I didn't hear you.."
    } else if (question === question.toUpperCase()) {
        grannySays = "NO, NOT SINCE " + randomYear
    } else {
        grannySays = "SPEAK UP SONNY JIM"
    }
    return grannySays;
}


console.log("I say ALL CAPS:   " + grannyTalk('HELLO, HOW ARE *^^ YOU?!?'));
console.log("I say some caps:   " + grannyTalk('Hello, How AFFFF###re you?!?'));
console.log("I say BYE:   " + grannyTalk('BYE'));
