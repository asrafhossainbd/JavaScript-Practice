// // type coercion
// console.log('hello world');

// var fristName, lastName, age, job, ismarried;
// fristName = prompt('what is your frist Name');
// lastName = prompt('what is your last Name');
// age = prompt('How old are you?');
// job = prompt('What do you do?');
// ismarried = prompt('Are you married?');
// console.log(fristName + ' is a ' + age + ' years old, '+ job + ' is he marieed? ' + ismarried);



// // variable mutation


///*************************
// Basic Oparetor
// Three type of Oparator

//1 Math Oparator
// var year, yearAshik, yearRubel, result;
// year = 2019;
// yearAshik = 24;
// yearRubel = 27;
// result = year - yearAshik;
// result2 = year - yearRubel;
// console.log(result2); // plus, minas, tims & devied is same.

// //2 Logical Oparator
// var logic = result > result2;
// console.log(logic);
// //3 typeof Oparator
// var x = 0;
// // console.log(typeof x)

// var year, rubelYear, ranaYear;
// year =2019;
// rubelYear =28;
// ranaYear =28;
// var xyz = true;
// var math = rubelYear < ranaYear;
// console.log(math);
// console.log(typeof xyz)

// var markWeight = 55;
// var markHeight = 1.5;
// var johnWeight = 60;
// var johnHeight = 1.9;

// var markBMI = markWeight / (markHeight * markHeight);
// var johnBMI = johnWeight / (johnHeight * johnHeight);

// console.log(markBMI);
// console.log(johnBMI);
// var markHigherJohn = markBMI > johnBMI;
// console.log(markHigherJohn);
// var result = 'Is Mark\'s ' + Math.round(markBMI) + ' higher than John\'s? ' + markHigherJohn;
// console.log(result);
// var markWeight = 55;
// var markHeight = 1.5;
// var johnWeight = 60;
// var johnHeight = 1.9;

// var markBMI = markWeight / (markHeight * markHeight);
// var johnBMI = johnWeight / (johnHeight * johnHeight);

// console.log(markBMI);
// console.log(johnBMI);
// var markHigherJohn = markBMI > johnBMI;
// console.log(markHigherJohn);
// var result = 'Is mark\'s ' + markBMI + ' higher than john\'s? ' + markHigherJohn;
// console.log(result);

// var fristName = 'Rubel';
// var civilStates = 'Singel';
// var age = 90;

// if(civilStates === 'Married'){
//     console.log(fristName + ' is Married');
// }else{
//     console.log(fristName + ' will hopefully marry soon :)');
// }
// var marryedStates = true;
// if(marryedStates){
//     console.log(fristName + ' is married');
// }else{
//     console.log( fristName + ' is singel');
// }
// if(age < 13){
//     console.log(fristName + 'is boy.');
// }else if(age >= 13 && age <20){
//     console.log(fristName + 'is teenager.');
// }else if(age >= 20 && age <30){
//     console.log(fristName + 'is young man.');
// }else if(age >= 30 && age <50){
//     console.log(fristName + 'is man.');
// }else{
//     console.log(fristName + 'is Old man.');
// }
//  if(age < 13){
//      console.log(fristName + ' is boy');
//  }else if(age >= 13 && age <20){
//      console.log(fristName + ' is teenager');
//  }else if(age >= 20 && age <30){
//      console.log(fristName + ' is young man')
//  }else if(age >= 30 && age < 50){
//      console.log(fristName + ' is man');
//  }else if(age >=50 && age <80){
//      console.log(fristName + ' is old man');
//  }
// ////// Ternar Operator
// age >= 18 ? console.log(fristName + 'yea you are drink beer'):console.log(fristName + 'you are don\'t drinking beer');

// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);

// /// Switch Statements
// age = 55;
// switch(true){
//     case age < 13: 
//         console.log(fristName + ' is boy');
//         break;
//     case age >= 13 && age < 20 :
//         console.log(fristName + ' is teenager');
//         break;
//     case age >= 20 && age < 30 :
//         console.log(fristName + ' is young man');
//         break;
//     case age >= 30 && age < 50 :
//         console.log(fristName + ' is man');
//         break;
//     case age >= 50 && age < 80 :
//         console.log(fristName + ' is old man');
//         break;
//     default: 
//         console.log(fristName + ' is young man');

// }

// var scoreJohn = (89 + 150 + 103) / 3;
// var scoreMike = (116 + 103 + 123) / 3;
// var scoreOmok = (89 + 150 + 103) / 3;

// if(scoreJohn > scoreMike && scoreJohn > scoreOmok) {
//     console.log('John is win, John team Schore: ' + scoreJohn);
// }else if(scoreMike > scoreJohn && scoreMike > scoreOmok){
//     console.log('Mike is win, Omok team score: ' + scoreMike);
// }else if(scoreOmok > scoreJohn && scoreOmok > scoreMike){
//     console.log('Omok is win, Omok team Schore: ' + scoreOmok);
// }else{
//     console.log('The Game is Drow')
// }

// console.log(scoreJohn);
// console.log(scoreMike);

// Function

/////// There have a two type of Function
/////1) Function Diclaretions 2) Function Expressions

////1) Function Diclaretions

// function ageCalculate(carentYear, birthday){
//     return carentYear - birthday;
// }
// ageCalculate();

// function calculateAge(birthday){
//     return 2019 - birthday;
// }

// var rubelAge = calculateAge(1995);
// var ashikAge = calculateAge(1996);

// console.log(rubelAge, ashikAge);


// function yearsUntilRetirment(year, fristName){
//     var age = calculateAge(year);
//     var retirment = 65 - age;
//     console.log(fristName + ' retires is ' + retirment + ' years.');
// }
// yearsUntilRetirment(1995, 'Rana');
//  var ranaAge = calculateAge(1994);
//  var rubelAge = calculateAge(1997);

//  console.log(ranaAge, ranaAge);
 
//  function yearsUntilRetirment(year, fristName){
//      var age = calculateAge(year);
//      var retirment = 65- age;
//      if(retirment > 0){
//         console.log(fristName + ' retirs in ' + retirment + ' years');
//      }else{
//         console.log(fristName + ' is already retired');
//      }
//  }
//  yearsUntilRetirment(1994, 'Jhon');
//  yearsUntilRetirment(1950, 'Rana');
//  yearsUntilRetirment(1994, 'Nozrul');

////2) Function Expressions

//  var yearsUntilRetirment = function(year, fristName){
//     var age = calculateAge(year);
//     var retirment = 65- age;
//     if(retirment > 0){
//        console.log(fristName + ' retirs in ' + retirment + ' years');
//     }else{
//        console.log(fristName + ' is already retired');
//     }
// }
// yearsUntilRetirment(1990, 'Raju')

// var whatDoYouDo = function(name, job){
//     switch(job){
//         case 'teacher':
//             return name + ' teacher kids how to code'; // "Return" keyword return a value & exit next all conditions.
//         case 'driver':
//             return name + ' drivers a cab in Lisbon.';
//         case 'designer':
//             return name + ' designs beautiful website';
//         default: 
//             return name + ' dose something else';
//     }
// }
// console.log(whatDoYouDo('Ashik', 'teacher'));
// console.log(whatDoYouDo('Asraf', 'designer'));
// console.log(whatDoYouDo('Raaz', 'Player'));

// var whatDoYouDo = function(fristName, job){
//     switch(job){
//         case 'teacher':
//             return fristName + 'techer kids how to coad';
//         case 'driver':
//             return fristName + 'driver a cab in lisbon';
//         case 'designer':
//             return fristName + 'designs beautiful website';
//         default:
//             return fristName + 'dose something else';
//     }
// } 
// console.log(whatDoYouDo('rana', 'teacher'));
// console.log(whatDoYouDo('rubel', 'driver'));
// console.log(whatDoYouDo('raju', 'player'));


///// Arrays

// var arr = ['asraf', 'raju', 'kashem', 434, 464, true, false, 'Driver'];
// console.log(arr);
// console.log(arr.length);
// arr[1] = 'rubel';
// console.log(arr);
// arr.push('blue');
// arr.unshift('Mr.');
// arr.push('Designer');
// console.log(arr);

// arr.shift();
// console.log(arr);
// console.log(arr.indexOf(90));
// var whatDoYouDo = 'Gajakhor'
// // var isDesigner = arr.indexOf(whatDoYouDo) === -1 ? 'Asraf is not a ' + whatDoYouDo : 'Asraf is a ' + whatDoYouDo;
// // console.log(isDesigner);
// arr.push(whatDoYouDo);
// var index = arr.indexOf(whatDoYouDo);
// arr.shift();
// console.log(arr);
// console.log(index);
// var diffrentTypeArray = new Array('admi', 34, 45, 56);
// console.log(diffrentTypeArray)

// var jhon = [124, 48, 268];
// var tip = [];
// var totalBill = [];

// function tips(bill){
//     if(bill>= 50 && bill < 200){
//         tip.push((bill*15)/100);
//     }else if(bill >= 200){
//         tip.push((bill*10)/100);
//     }else{
//         tip.push((bill*20)/100);
//     }
// }

// function billAndTips(bill){
//     if(bill>= 50 && bill < 200){
//         totalBill.push(bill + ((bill*15)/100));
//     }else if(bill >= 200){
//         totalBill.push(bill + ((bill*10)/100));
//     }else{
//         totalBill.push(bill + ((bill*20)/100));
//     }
// }
// console.log('Jhon Resturent\'s Bill : '+ jhon);

// tips(jhon[0]);
// tips(jhon[1]);
// tips(jhon[2]);

// console.log('Jhon Resturent\'s tips : ' + tip);

// billAndTips(jhon[0]);
// billAndTips(jhon[1]);
// billAndTips(jhon[2]);

// console.log('Jhon Resturent\'s total bill : ' + totalBill);

/// Object
// var ashik = {
//     fristName : 'Asraf',
//     lastName : 'Hossain',
//     birthYear : 1995,
//     familyMember : ['Sunny', 'Juniyed', 'Mizan', 'Rubel'],
//     job : 'Designer',
//     ismarried : false,
//     calcAge : function(birthYear){
//         return 2018 - birthYear;
//     }
// };
// console.log(ashik.calcAge(ashik.birthYear));

///object rubel///
// var rubel = {
//     fristName : 'Rubel',
//     lastName : 'Rana',
//     birthYear : 1997,
//     familyMember : ['ashik' , 'masud' , 'omok', 'tomok'],
//     job : 'Designer',
//     ismarried : false,
//     ageCalculate : function(){
//         this.age =  2019 - this.birthYear
//     }
// }
// rubel.ageCalculate();
// console.log(rubel);
//Challenge-4//
// var jhon = {
//     weight : 60,
//     height : 1.5,
//     calBMI : function(){
//         this.BMI = this.weight / (this.height * this.height);
//     }
// }
// jhon.calBMI();

// var mark = {
//     weight : 65,
//     height : 1.6,
//     calBMI : function(){
//         this.BMI = this.weight / (this.height * this.height);
//     }
// }
// mark.calBMI();
// if (jhon.BMI > mark.BMI){
//     console.log('jhon is hight');
// }else if (jhon.BMI > mark.BMI){
//     console.log( 'mark is hight');
// }else {console.log('both are equel')};


// var student = [{
//     name : 'Jhon',
//     weight : 60,
//     height : 1.5,
//     calBMI : function(){
//         this.BMI = this.weight / (this.height * this.height);
//     }
// }, {
//     name : 'Mark',
//     weight : 65,
//     height : 1.6,
//     calBMI : function(){
//         this.BMI = this.weight / (this.height * this.height);
//     }
// }];
// student[0].calBMI();
// student[1].calBMI();

// function hightBMI(){
//     if (student[0].BMI > student[1].BMI){
//         console.log('jhon is hight');
//     }else if (student[0].BMI > student[1].BMI){
//         console.log( 'mark is hight');
//     }else {console.log('both are equel')};
// }
// hightBMI();

// For Loop //



// for (var i = 0; i < 10; i += 2){
//     console.log(i);
// }

// Example
// var rubel = [49, 'Rubel', 'Rana', 1996, 'Developer', false, 'Blue', 21 ];
// console.log(rubel);

// for (var i = 0; i < rubel.length; i++){
//     console.log(rubel[i]);
// }

// //While Loop//

// var i = 0;
// while(i < rubel.length){
//     console.log(rubel[i]);
//     i++;
// }

// continue and break//

// for (var i = 0; i < rubel.length; i++){
//     if(typeof rubel[i] !== 'string') continue;
//     console.log(rubel[i]);
// }
// for (var i = 0; i < rubel.length; i++){
//     if(typeof rubel[i] !== 'number') break;
//     console.log(rubel[i]);
// }

//  looping backwards
// for (var i = rubel.length-1; i >= 0; i--){
//     console.log(rubel[i]);
// }

// Last and Final Coding Challenge 5//

// part-1

// var jhon = {
//     fullName : 'Jhon Smith',
//     bills : [124, 48, 268, 180, 42],
//     calcTips : function(){
//         this.tips = [];
//         this.finalValues = [];

//         for (var i = 0; i < this.bills.length; i++){
//             var percentage;
//             var bill = this.bills[i];
//             if(bill < 50){
//                 percentage = .2;
//             }else if (bill >= 50 && bill < 200){
//                 percentage = .15;
//             }else{
//                 percentage = .1; 
//             }

//             this.tips[i] = bill * percentage;
//             this.finalValues[i] = bill + (bill * percentage);

//         }
//     }
// }
// // jhon.calcTips();
// // console.log(jhon);

// // part- 2
// var mark = {
//     fullName : 'Mark Niller',
//     bills : [77, 475, 110, 45],
//     calcTips : function(){
//         this.tips = [];
//         this.finalValues = [];

//         for (var i = 0; i < this.bills.length; i++){
//             var percentage;
//             var bill = this.bills[i];
//             if(bill < 100){
//                 percentage = .2;
//             }else if (bill >= 100 && bill < 300){
//                 percentage = .15;
//             }else{
//                 percentage = .1; 
//             }

//             this.tips[i] = bill * percentage;
//             this.finalValues[i] = bill + (bill * percentage);

//         }
//     }
// }
// 5,6,7,8,9
// function calcAverage(tips){
//     var sum = 0;
//     for(var i = 0; i < tips.length; i++){
//         sum = sum + tips[i];
//     }
//     return sum / tips.length;
// }



// jhon.calcTips();
// mark.calcTips();

// jhon.average = calcAverage(jhon.tips);
// mark.average = calcAverage(mark.tips);

// console.log(jhon, mark);

// if (jhon.average > mark.average){
//     console.log('Jhon Family is hight tips paid')
// }else if(mark.average > jhon.average){
//     console.log('Mark Family is hight tips paid')
// }else{
//     console.log('Both Family is same tips paid') ;
// }
// // jhon//
// var jhon = {
//     fullName : 'jhon smith',
//     bills : [124, 48, 268, 180, 42],
//     calcTips : function (){
//         this.tips = [];
//         this.finalValues = [];

//         for (var i = 0; i < this.bills.length; i++){
//             var percentage;
//             var bill = this.bills[i];
//             if ( bill < 50){
//                 percentage = .2;
//             }else if(bill >= 50 && bill < 200){    
//                     percentage = .15;
//             }else{
//                 percentage = .1;
//             }

//             this.tips[i] = bill * percentage;
//             this.finalValues[i] = bill + (bill * percentage);
//         }
//     }
// }
 
// //mark//
// var mark = {
//     fullName : 'mark niller',
//     bills : []
// }

// function name(){
//     var lastname = 'kdjf';
// }


// var age = 25;

// ageCalculate();
// function ageCalculate(){
//     console.log(age);
// }

// var ami = {
//     name : 'rubel rana',
//     print: function(){
//         console.log('hello ' + this.name);
        
//         // function another(){
//         //     console.log(this);
            
//         // }
//         // another();
//     }
// }

//  var parson = {
//      name : 'ashraf',
//  }
//  parson.print = ami.print;

// parson.print();

// var parson = {
//     name : 'Rubel rana',

//     print: function(){
//         console.log(this);
//     }
// }
// var myPrint = parson.print;
// console.log(myPrint);
// myPrint();

// var obj = {
//     name : 'ashik',
//     print: function(){
//         console.log(this);
//     }
// }
// obj.print();

//DOM

// var scores, roundScore, activePlayer, dice;

// scores = [0, 0];
// roundScore = 0;
// activePlayer = 0;
// dice = Math.floor(Math.random() * 6) +1;

// document.querySelector('#current-'+ activePlayer).textContent = dice ;

// document.querySelector('.dice').style.display = 'none';

    // var scores, roundScore, activePlayer, gamePlaying;
    // init();

    // document.querySelector('.dice').style.display = 'none';
    // document.querySelector('.btn-roll').addEventListener('click', function(){
    //     if(gamePlaying){
    //         var dice = Math.floor(Math.random() * 6) + 1;
    //         var diceDOM = document.querySelector('.dice');
    //         diceDOM.style.display = 'block';
    //         diceDOM.src = 'starter/dice-' + dice + '.png';
            
    //         if(dice !== 1){
    //             //Add Score
    //             roundScore += dice; //roundScore = roundScore + dice
    //             document.querySelector('#current-' + activePlayer).textContent = roundScore;
    //         }else{
    //             //Next Player
    //             nextPlayer();
        
    //         }    
    //     }
    // })

    // document.querySelector('.btn-hold').addEventListener('click', function(){
    //     if(gamePlaying){
    //         scores[activePlayer] += roundScore; //scores[activePlayer] = scores[activePlayer] + roundScore
    //         document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    //         if(scores[activePlayer] >= 10){
    //             document.querySelector('#name-'+activePlayer).textContent = 'Winner!';
    //             document.querySelector('.dice').style.display = 'none';
    //             document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
    //             document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
    //             document.querySelector('#current-' + activePlayer).textContent = 0;
    //             gamePlaying = false;
    //         }else{
    //             nextPlayer();
    //         }
    //     }
    // })

    // function nextPlayer(){
    //     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    //     // if(activePlayer === 0){
    //         //     activePlayer = 1;
    //         // }else{
    //             //     activePlayer = 0;
    //             // }
    //             roundScore = 0;
    //             document.querySelector('#current-0').textContent = roundScore;
    //             document.querySelector('#current-1').textContent = roundScore;
                
    //             document.querySelector('.player-0-panel').classList.toggle('active');
    //             document.querySelector('.player-1-panel').classList.toggle('active');
                
    //             document.querySelector('.dice').style.display = 'none';
    // }

    // document.querySelector('.btn-new').addEventListener('click', init);

    // function init(){
        
    // scores = [0, 0];
    // roundScore = 0;
    // activePlayer = 0;
    // gamePlaying = true;
    // document.getElementById('score-0').textContent = 0;
    // document.getElementById('score-1').textContent = 0;
    // document.getElementById('current-0').textContent = 0;
    // document.getElementById('current-1').textContent = 0;
    // document.getElementById('name-0').textContent = 'Player 1';
    // document.getElementById('name-1').textContent = 'Player 2';
    // document.querySelector('.player-0-panel').classList.remove('winner');
    // document.querySelector('.player-1-panel').classList.remove('winner');
    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.remove('active');
    // document.querySelector('.player-0-panel').classList.add('active');
    // }


    // var scores, roundScore, activePlayer, dice;
    // scores = [0,0];
    // roundScore = 0;
    // activePlayer = 0;
    
    // document.querySelector('.dice').style.display = 'none';
    // document.querySelector('.btn-roll').addEventListener('click', function(){
    //     var dice = Math.floor(Math.random()*6)+1;
    //     var diceDom = document.querySelector('.dice');
    //     diceDom.style.display = 'block';
    //     diceDom.src='starter/dice-' + dice +'.png';
    //     console.log(dice);

    //     if(dice !== 1){
    //         roundScore += dice;
    //         document.getElementById('current-'+ activePlayer).textContent = roundScore;
    //     }else{
    //         nextPlayer();      
    //     }
        
    // })

    // document.querySelector('.btn-hold').addEventListener('click', function(){
    //     scores[activePlayer] += roundScore;
    //     document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];
    //     if(scores[activePlayer] >= 15){
    //         document.getElementById('name-' + activePlayer).textContent = 'Winner!!';
    //         document.querySelector('.player-' + activePlayer + 'panel').classList.add('.player-name');
    //         document.querySelector('.player-' + activePlayer + 'panel').classList.remove('active');
    //         document.querySelector('#current-' + activePlayer).textContent = 0;  
            
    //     } else{
    //         nextPlayer();
    //     }
    // })

    // function nextPlayer(){
    //     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    //         roundScore = 0
    //         document.getElementById('current-0').textContent = roundScore;
    //         document.getElementById('current-1').textContent = roundScore;
    //         document.querySelector('.player-0-panel').classList.toggle('active');
    //         document.querySelector('.player-1-panel').classList.toggle('active');
    //         document.querySelector('.dice').style.display = 'none';  
    // }

    // document.getElementById('score-0').textContent = 0;
    // document.getElementById('score-1').textContent = 0;
    // document.getElementById('current-0').textContent = 0;
    // document.getElementById('current-1').textContent = 0;
    

//     var scores, roundScore, activePlayer, dice;

//     scores = [0],[0];
//     roundScore = 0;
//     activePlayer = 0;
    
    
//     document.querySelector('.dice').style.display = 'none';
//     document.querySelector('.btn-roll').addEventListener('click', function(){
//         dice = Math.floor(Math.random()*6)+1;
//         var diceDom = document.querySelector('.dice');
//         diceDom.style.display = 'block';
//         diceDom.src='starter/dice-'+dice+'.png';
        
//         if(dice !== 1){
//             roundScore += dice;
//             document.getElementById('current-' + activePlayer).textContent = roundScore;
//         }else{
//             nextPlayer();
//         }
        
//     });
//     document.querySelector('.btn-hold').addEventListener('click', function(){
//         scores[activePlayer] += roundScore;
//         document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

//         if(scores[activePlayer] >= 14){
//             document.getElementById('name-' + activePlayer).textContent = 'Winner!!';
            
//         }
//     })

// function nextPlayer(){
//     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
//     roundScore = 0;
//     document.getElementById('current-0').textContent = roundScore;
//     document.getElementById('current-1').textContent = roundScore;
//     document.querySelector('.player-0-panel').classList.toggle('active');
//     document.querySelector('.player-1-panel').classList.toggle('active');
//     document.querySelector('.dice').style.display = 'none'; 
// }

// var scores, roundScore, activePlayer, dice;

// scores = [0], [0];
// roundScore = 0;
// activePlayer = 0;
// init();

// document.querySelector('.dice').style.display = 'none';
// document.querySelector('.btn-roll').addEventListener('click' , function(){
//     if(gamePlaying){
//         dice = Math.floor(Math.random()*6)+1;
//         var diceDOM = document.querySelector('dice');
//         diceDOM.style.display = 'block';
//         diceDOM.src='starter/dice-'+dice+'.png';

//         if(dice !== 1){
//             roundScore += dice;
//             document.getElementById('current-' + activePlayer).textContent = roundScore;
//         } else{
//             nextPlayer();
//         }
//     }

// });

// document.querySelector('.btn-hold').addEventListener('click' , function(){
//     if(gamePlaying){
//         scores[activePlayer] += roundScore;
//         document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
//         if(scores[activePlayer] >=100) {
//             document.getElementById('name-' + activePlayer).textContent = 'Winner!!';
//             document.querySelector('.dice').style.display = 'none';
//             document.querySelector('.player-' +activePlayer + '-panel').classList.add('winner');
//             document.querySelector('.player-' +activePlayer + '-panel').classList.remove('active');
//             document.getElementById('current-' + activePlayer).textContent = 0;
//             gamePlaying = false;
//         }else{
//             nextPlayer();
//         }
//     }
// })

// document.querySelector('.btn-new').addEventListener('click', init);

// function nextPlayer(){
//     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
//     roundScore = 0;
//     document.getElementById('current-0').textContent = roundScore;
//     document.getElementById('current-1').textContent = roundScore;
//     document.querySelector('.player-0-panel').classList.toggle('active');
//     document.querySelector('.player-1-panel').classList.toggle('active');
//     document.querySelector('.dice').style.display = 'none';
// }

// function init(){    
//     scores = [0, 0];
//     roundScore = 0;
//     activePlayer = 0;
//     gamePlaying = true;
//     document.getElementById('score-0').textContent = 0;
//     document.getElementById('score-1').textContent = 0;
//     document.getElementById('current-0').textContent = 0;
//     document.getElementById('current-1').textContent = 0;
//     document.getElementById('name-0').textContent = 'Player 1';
//     document.getElementById('name-1').textContent = 'Player 2';
//     document.querySelector('.player-0-panel').classList.remove('winner');
//     document.querySelector('.player-1-panel').classList.remove('winner');
//     document.querySelector('.player-0-panel').classList.remove('active');
//     document.querySelector('.player-1-panel').classList.remove('active');
//     document.querySelector('.player-0-panel').classList.add('active');
// }
// // Game End

// Advance JavaScript "Object & Funtion"
//######################################

// var john = {
//     name: 'John',
//     yearOfBirth: 1990,
//     job: 'teacher'
// }

// var Person = function(name, yearOfBirth, job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person.prototype.ageCalculator = function(){
//     return 2019 - this.yearOfBirth;
// }

// var rubel = new Person('Rana', 1995, 'Developer');
// console.log(rubel);

//Module Pattern

var budgetcontroller = (function(){
    var x = 23;
    var add = function(a){
        return x + a;
    }
    return{
        publicTest: function(b){
            console.log(add(b));
        }
    }
})();
budgetcontroller.publicTest(10);


