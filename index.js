const name = `Hi, my name is Aki.`

const language = "JavaScript" || "Python";

function introduction(name){
    return (`Hi, my name is ${name}.`);
}

function logTwoValues (value1, value2){
    console.log(`The two values are ${value1} and ${value2}.`);
}


function introductionWithLanguage (name, language = "JavaScript"){
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
}

function introductionWithLanguageOptional(name, language = "JavaScript"){
    if (language === "JavaScript"){
        return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
    }
    else if (language === "Python"){
        return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
    }
}