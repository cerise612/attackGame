var attackKittens = {
    "mittens": {
        name: "Mittens",
        healthPoints: 90,
        attackPower: 7,
        imageUrl:"../../images/kitten8.jpg" ,
        counterAttackPower: 5,
      },
      "sirMeowsALot" : {
          name: "Sir Meows A Lot",
          healthPoints: 104, 
          attackPower: 7, 
          imageUrl: "../../images/kitten9.gif",
          counterAttackPower: 8,
      },
      "Fergus": {
        name: "Fergus",
        healthPoints: 150,
        attackPower: 5,
        imageUrl: "../../images/kitten2.jpg",
        counterAttackPower: 2,
      },
      "catBenetar" : {
          name: "Cat Benetar",
          healthPoints: 124, 
          attackPower: 4, 
          imageUrl:"../../images/kitten5.jpg",
          counterAttackPower: 4,
      },
      "jellyBean" : {
        name: "Jelly Bean",
        healthPoints: 110, 
        attackPower: 17, 
        imageUrl:"../../images/kitten3.png",
        counterAttackPower: 10,
    }
  };
        

 console.log(attackKittens.mittens.attack + "attackKittens ")

// //don't load js until html and css are loaded.  set attackKittens in div when page loads
// $(document).ready(function () {
//     $(".attackKittens").show();
//     $(".battleReady").hide();

//       //1.when player selects one kitten from attackKittens move the selected kitten to the playerKitten div
//     $("#attackKittens").on('click', function () {
//         $('#playerKitten').append(this)
//         console.log(this + "....this")
//         kittenAppear();
//     });
//     console.log('playerKitten')
//     //2.move the remaining Kittens to the availableOpponents div
//     $("#attackKittens").on('click', function () {
//         $('#availableOpponents').append(this)
//     });
//     console.log('availableOpponents')
//     //3.when player selects one kitten from availableOpponents div move the selected kitten to the selectedOpponent div
//     $('#availableOpponents').on('click', function () {
//         $('#selectedOpponent').append(this)
//     });
//     console.log('selectedOpponent')
//     //move kitten stats name + healthPoints to battleStats div ----- maybe not needed, review later. keep stats in player and opponent areas

//     //4.on click attackButton show updates to health points for playerKitten + selectedOpponent.  insert text "You attacked [name] for # damage. [name] attacked you for # damage."
//     $('#attackButton').on('click', function () {
//         $('#battleStats').append(this)
//     });
//     console.log('battleStats')
//     //5.on click attackButton bounce kittens in battleArena
 


    

// //6.on click kittens attackButton subtract healthPoints of playerKitten by selectedOpponent counterAttactPower and subtract healthPoints from selectedOpponent based on current level of playerKitten attackPower 
// $('#attackButton').on('click', function () {
//     $('#selectedOpponent').append(this)
// });
// console.log('selectedOpponent')
//   //Math.Pow  

// //7.each subsequent on click attackButton stack attackPower to incrementally power up playerKitten

// //8.if playerKitten healthPoints are <=0 insert text "oh, Noes!!! You have been defeated." show restarGame button

// //9.if selectedOpponent healthPoints are <=0 hide selectedOpponent. insert text "You have defeated [name] attack another opponent."

// //10.on click repeat steps 3-9 until playerKitten healthPoints are <=0 or no kittens remain in availableOpponents.  insert text "You reign Attack Kitten Supreme, Huzzah!!"

// // var renderKitten = function(kittenAttack, statBox) {
// // 	var kittenDiv = $('<div>class=attackKittens</div>');
// //     var kittenName = $("<div class='kitten-name'>").text(kittenAttack.name);
// //     var kittenImage = $("<img alt='image' class='kitten-image'>").attr("src", kittenAttack.imageUrl);
// //     var kittenHealth = $("<div class='kitten-health'>").text(kittenAttack.healthPoints);
// //     kittenDiv.append(kittenName).append(kittenImage).append(kittenHealth);
// //     $(statBox).append(kittenDiv);
// //   };

// });




