var attackKittens = [
     {
        name: "Mittens",
        healthPoints: 90,
        attackPower: 7,
        imageUrl: "assets/images/kitten8.png",
        counterAttackPower: 5,
    },
     {
        name: "Sir Meows A Lot",
        healthPoints: 104,
        attackPower: 7,
        imageUrl: "assets/images/kitten9.png",
        counterAttackPower: 8,
    },
    {
        name: "Fergus",
        healthPoints: 150,
        attackPower: 5,
        imageUrl: "assets/images/kitten2.png",
        counterAttackPower: 2,
    },
     {
        name: "Cat Benetar",
        healthPoints: 124,
        attackPower: 4,
        imageUrl: "assets/images/kitten5.png",
        counterAttackPower: 4,
    },
    {
        name: "Jelly Bean",
        healthPoints: 110,
        attackPower: 17,
        imageUrl: "assets/images/kitten3.png",
        counterAttackPower: 10,
    }
];




// var availableOpponents = [];
var selectedOpponent = [];
var playerKitten = [];


// //don't load js until html and css are loaded.  set attackKittens in div when page loads
$(document).ready(function () {

createKittens = function(){
 console.log("working")

    for (i = 0; i < attackKittens.length; i++) {
       $("#availableOpponents").append("<div class='col-sm-2 pick-kitten'>"+
                                     "<div class='imageUrl kittenImage'>" +
                                        "<img src='"+ attackKittens[i].imageUrl +"' class='image' alt='kitten'>" +
                                     "</div>" +
                                     "<div class='card statBox' style='width: 10rem;'>" +
                                     "<div class='card-body'>" +
                                        "<h5 class='card-title kittenName'>" +
                                            "<h5>"+ attackKittens[i].name +"</h5>" +
                                            "<p class='card-text battleWounds'></p>" +
                                      "</div>" +
                                      "<ul class='list-group list-group-flush'>" +
                                        "<li class='list-group-item' id='kittenHealth'>health:"+ attackKittens[i].healthPoints +"</li>" +
                                       "</ul>" +
                                    "</div>" +
                                    "</div>"
       )
    } 
console.log("test")
   
    // $("#mittensHealth").append(attackKittens.mittens.healthPoints);
    // $("#sirMeowsALotHealth").append(attackKittens.sirMeowsALot.healthPoints);
    // $("#fergusHealth").append(attackKittens.fergus.healthPoints);
    // $("#catBenetarHealth").append(attackKittens.catBenetar.healthPoints);
    // $("#jellyBeanHealth").append(attackKittens.jellyBean.healthPoints);

}
createKittens();
    console.log("working");


    //1.when player selects one kitten from attackKittens move the selected kitten to the playerKitten div

    var isSelected = false
    $(".pick-kitten").click(function() {
        console.log(isSelected)
        if (playerKitten === undefined) {
           
            console.log("#availableOpponents")
        }
        else {
            $("#availableOpponents").remove()
            $(playerKitten).append($(this));
        }
    });
    console.log("selected " + playerKitten);

    //2.when player selects one kitten from availableOpponents div move the selected kitten to the selectedOpponent div


//     $(availableOpponents).on('click', function () {
//         $(selectedOpponent).append(this)
//     });
//     console.log('selectedOpponent')


//     //3.on click attackButton show updates to health points for playerKitten + selectedOpponent.  insert text "You attacked [name] for # damage. [name] attacked you for # damage."
//     $('#attackButton').on('click', function () {
//         var playerKittenDamage = healthPoints - selectedOpponent.counterAttackPower;
//         var selectedOponentDamage = healthPoints - num;

//         if (playerKitten) {
//             $(Health).append(playerKittenDamage);
//             document.write("You attacked" + selectedOpponent.name + "for" + electedOponentDamage + "damage." + selectedOpponent.name + "attacked you for" + playerKittenDamage + "damage.")
//         }
//         else (selectedOpponent) {
//             $(Health).append(selectedOponentDamage);
//         };
//         $('#battleStats').append(this)
//     });
//     console.log('battleStats')
//     //4.on click attackButton bounce kittens in battleArena
//     //link bouncing_cat


//     //5.each subsequent on click attackButton stack attackPower to incrementally power up playerKitten
//     var num = playerKitten.attackPower;
//     num += num;
//     //6.if playerKitten healthPoints are <=0 insert text "oh, Noes!!! You have been defeated." show restarGame button
//     if (playerKitten.Health <= 0) {
//         document.write("oh, Noes!!! You have been defeated.");
//     }
//     //7.if selectedOpponent healthPoints are <=0 hide selectedOpponent. insert text "You have defeated [name] attack another opponent."
//     else (selectedOpponent.Health <= 0) {
//         document.write("You have defeated" + selectedOpponent.name + " attack another opponent."); $(selectedOpponent).hide();
//     }

//     //8.on click repeat steps 3-8 until playerKitten healthPoints are <=0 or no kittens remain in availableOpponents.  insert text "You reign Attack Kitten Supreme, Huzzah!!"
//     if (availableOpponents === undefined || availableOpponents.length == 0) {
//         document.write("You reign Attack Kitten Supreme, Huzzah!!")
//     }
//     else if (selectedOpponent === undefined || selectedOpponent.length == 0)
//         document.write("You reign Attack Kitten Supreme, Huzzah!!")
});

