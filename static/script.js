class Monkey{
    static monkeyDiv = document.getElementById("monkey-div");
    static monkeyNum = 1;
    static letters = ['~','`','1','!',`2`,`@`,`3`,`#`,`4`,`$`,`5`,`%`,`6`,`^`,`7`,`&`,`8`,`*`,`9`,`0`,`(`,`)`,`-`,`_`,`=`,`+`,`q`,`w`,`e`,`r`,`t`,`y`,`u`,`i`,`o`,`p`,`[`,`]`,`{`,`}`,`\\`,`|`,`a`,`s`,`d`,`f`,`g`,`h`,`j`,`k`,`l`,`;`,`:`,`'`,`"`,`z`,`x`,`c`,`v`,`b`,`n`,`m`,`,`,`.`,`/`,`<`,`>`,`?`];
    constructor(title){
        this.name = title;
        this.lettersTyped = 0;
        this.attempts = 0; //manuscripts attempted
        //creating HTML div for the monkey
        const monkeyContainer = document.createElement('div');
        monkeyContainer.classList.add("monkey-container");

        const deleteBtn = document.createElement("i");
        deleteBtn.classList.add('delete-button');
        
        const monkeyTitle = document.createElement("h2");
        monkeyTitle.classList.add("monkey-name");
        monkeyTitle.innerText = title;
        
        const lettersCounter = document.createElement('p');
        lettersCounter.classList.add("monkey-stat");
        lettersCounter.innerText = 'Letters Typed: 0';

        const attemptCounter = document.createElement('p');
        attemptCounter.classList.add("monkey-stat");
        attemptCounter.innerText = 'Attempts: 0'

        const monkeyText = document.createElement('p');
        monkeyText.classList.add("monkey-text");

        monkeyContainer.appendChild(deleteBtn);
        monkeyContainer.appendChild(monkeyTitle);
        monkeyContainer.appendChild(lettersCounter);
        monkeyContainer.appendChild(attemptCounter);
        monkeyContainer.appendChild(monkeyText);
        Monkey.monkeyDiv.appendChild(monkeyContainer);

        Monkey.monkeyNum++;
    }

    //starts typing the random numbers
    async startTyping(){
        
    }
}

const monkeys = [];

let finalText = '';

const monkeyCount = document.getElementById('monkey-counter');
const lettersCount = document.getElementById('letter-counter');
const attemptsCount = document.getElementById('attempt-counter');

function makeMonkey(){
    monkeyCount.innerText = `Monkeys: ${Monkey.monkeyNum}`;
    monkeys.push(new Monkey("monkey " + Monkey.monkeyNum));
    
}
