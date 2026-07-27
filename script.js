//Image
const mainImg = document.getElementById("mainImg");
//Info
const mainName = document.getElementById("mainName");
const mainId = document.getElementById("mainId");
const mainType = document.getElementById("mainType");
const mainAbility = document.getElementById("mainAbility");
const mainHeight = document.getElementById("mainHeight");
const mainWeight = document.getElementById("mainWeight");
//Stats
const mainHp = document.getElementById("mainHp");
const mainAttack = document.getElementById("mainAttack");
const mainDef = document.getElementById("mainDef");
const mainSpatk = document.getElementById("mainSpatk");
const mainSpdef = document.getElementById("mainSpdef");
const mainSpeed = document.getElementById("mainSpeed");
//moves1
const move1name = document.getElementById("move1name");
const move1Type = document.getElementById("move1Type");
const move1Power = document.getElementById("move1Power");
const move1Accuracy = document.getElementById("move1Accuracy");
const move1PP = document.getElementById("move1PP");
const move1Class = document.getElementById("move1Class");
//moves2
const move2name = document.getElementById("move2name");
const move2Type = document.getElementById("move2Type");
const move2Power = document.getElementById("move2Power");
const move2Accuracy = document.getElementById("move2Accuracy");
const move2PP = document.getElementById("move2PP");
const move2Class = document.getElementById("move2Class");
//moves3
const move3name = document.getElementById("move3name");
const move3Type = document.getElementById("move3Type");
const move3Power = document.getElementById("move3Power");
const move3Accuracy = document.getElementById("move3Accuracy");
const move3PP = document.getElementById("move3PP");
const move3Class = document.getElementById("move3Class");
//moves4
const move4name = document.getElementById("move4name");
const move4Type = document.getElementById("move4Type");
const move4Power = document.getElementById("move4Power");
const move4Accuracy = document.getElementById("move4Accuracy");
const move4PP = document.getElementById("move4PP");
const move4Class = document.getElementById("move4Class");



async function getFetch(){
    try{
        const myrandom = Math.floor(Math.random() * 1025) + 1;

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${myrandom}`);

        const data = await response.json();

        mainName.textContent = data.name;

        mainId.textContent = data.id;

        mainType.textContent = data.types[0].type.name;

        const ability2 = data.abilities.map(a => a.ability.name);
        mainAbility.textContent = ability2.join(", ");

        const heightm = data.height / 10;
        mainHeight.textContent = `${heightm} m`;

        const weightKg = data.weight / 10;
        mainWeight.textContent = `${weightKg} kg`;

        mainHp.textContent = data.stats[0].base_stat;

        mainAttack.textContent = data.stats[1].base_stat;

        mainDef.textContent = data.stats[2].base_stat;

        mainSpatk.textContent = data.stats[3].base_stat;

        mainSpdef.textContent = data.stats[4].base_stat;

        mainSpeed.textContent = data.stats[5].base_stat;

        const Imgg = data.sprites.other["official-artwork"].front_default;
        mainImg.src = Imgg
        mainImg.style.display = "block"

        const moveInfo = data.moves[0].move.url;
        const moveResponse = await fetch(moveInfo);
        const moveUrl = await moveResponse.json();

        move1name.textContent = moveUrl.name;
        move1PP.textContent = moveUrl.pp;
        move1Type.textContent = moveUrl.type.name;
        move1Power.textContent = moveUrl.power;
        move1Accuracy.textContent = moveUrl.accuracy;
        move1Class.textContent = moveUrl.damage_class.name;

        const moveInfo2 = data.moves[1].move.url;
        const moveResponse2 = await fetch(moveInfo2);
        const moveUrl2 = await moveResponse2.json();

        move2name.textContent = moveUrl2.name;
        move2PP.textContent = moveUrl2.pp;
        move2Type.textContent = moveUrl2.type.name;
        move2Power.textContent = moveUrl2.power;
        move2Accuracy.textContent = moveUrl2.accuracy;
        move2Class.textContent = moveUrl2.damage_class.name;

        const moveInfo3 = data.moves[2].move.url;
        const moveResponse3 = await fetch(moveInfo3);
        const moveUrl3 = await moveResponse3.json();

        move3name.textContent = moveUrl3.name;
        move3PP.textContent = moveUrl3.pp;
        move3Type.textContent = moveUrl3.type.name;
        move3Power.textContent = moveUrl3.power;
        move3Accuracy.textContent = moveUrl3.accuracy;
        move3Class.textContent = moveUrl3.damage_class.name;

        const moveInfo4 = data.moves[3].move.url;
        const moveResponse4 = await fetch(moveInfo4);
        const moveUrl4 = await moveResponse4.json();

        move4name.textContent = moveUrl4.name;
        move4PP.textContent = moveUrl4.pp;
        move4Type.textContent = moveUrl4.type.name;
        move4Power.textContent = moveUrl4.power;
        move4Accuracy.textContent = moveUrl4.accuracy;
        move4Class.textContent = moveUrl4.damage_class.name;
    }
    catch(Error){
        console.log(Error)
    }
}