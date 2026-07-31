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
//buttom
const addPokemon = document.getElementById("addPokemon");
const shinybtn = document.getElementById("shinybtn");

//slot
const mainslotbtn = document.getElementById("mainslotbtn");
//pokeball
const slotbtn1 = document.getElementById("slotbtn1");
const slotbtn2 = document.getElementById("slotbtn2");
const slotbtn3 = document.getElementById("slotbtn3");
const slotbtn4 = document.getElementById("slotbtn4");
const slotbtn5 = document.getElementById("slotbtn5");
const slotbtn6 = document.getElementById("slotbtn6");

//slotshowcase
const Pokemon1Imgs = document.getElementById("Pokemon1Imgs");
const Pokemon2Imgs = document.getElementById("Pokemon2Imgs");
const Pokemon3Imgs = document.getElementById("Pokemon3Imgs");
const Pokemon4Imgs = document.getElementById("Pokemon4Imgs");
const Pokemon5Imgs = document.getElementById("Pokemon5Imgs");
const Pokemon6Imgs = document.getElementById("Pokemon6Imgs");

const Pokemon1Name = document.getElementById("Pokemon1Name");
const Pokemon2Name = document.getElementById("Pokemon2Name");
const Pokemon3Name = document.getElementById("Pokemon3Name");
const Pokemon4Name = document.getElementById("Pokemon4Name");
const Pokemon5Name = document.getElementById("Pokemon5Name");
const Pokemon6Name = document.getElementById("Pokemon6Name");

//pokeball img
const pokeballimg1 = document.getElementById("pokeballimg1");
const pokeballimg2 = document.getElementById("pokeballimg2");
const pokeballimg3 = document.getElementById("pokeballimg3");
const pokeballimg4 = document.getElementById("pokeballimg4");
const pokeballimg5 = document.getElementById("pokeballimg5");
const pokeballimg6 = document.getElementById("pokeballimg6");



let selectedPokemon = []
let slotT = true;
let select = null;
let effectselect = null;

async function getFetch(){
    try{
        const myrandom = Math.floor(Math.random() * 1025) + 1;

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${myrandom}`);

        const data = await response.json();

        mainName.textContent = data.name;

        select = myrandom;

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
        move1Power.textContent = moveUrl.power  ?? "-";
        move1Accuracy.textContent = moveUrl.accuracy  ?? "-";
        move1Class.textContent = moveUrl.damage_class.name;

        const moveInfo2 = data.moves[1].move.url;
        const moveResponse2 = await fetch(moveInfo2);
        const moveUrl2 = await moveResponse2.json();

        move2name.textContent = moveUrl2.name;
        move2PP.textContent = moveUrl2.pp;
        move2Type.textContent = moveUrl2.type.name;
        move2Power.textContent = moveUrl2.power  ?? "-";
        move2Accuracy.textContent = moveUrl2.accuracy  ?? "-";
        move2Class.textContent = moveUrl2.damage_class.name;

        const moveInfo3 = data.moves[2].move.url;
        const moveResponse3 = await fetch(moveInfo3);
        const moveUrl3 = await moveResponse3.json();

        move3name.textContent = moveUrl3.name;
        move3PP.textContent = moveUrl3.pp;
        move3Type.textContent = moveUrl3.type.name;
        move3Power.textContent = moveUrl3.power  ?? "-";
        move3Accuracy.textContent = moveUrl3.accuracy  ?? "-";
        move3Class.textContent = moveUrl3.damage_class.name;

        const moveInfo4 = data.moves[3].move.url;
        const moveResponse4 = await fetch(moveInfo4);
        const moveUrl4 = await moveResponse4.json();

        move4name.textContent = moveUrl4.name;
        move4PP.textContent = moveUrl4.pp;
        move4Type.textContent = moveUrl4.type.name;
        move4Power.textContent = moveUrl4.power ?? "-";
        move4Accuracy.textContent = moveUrl4.accuracy ?? "-";
        move4Class.textContent = moveUrl4.damage_class.name;
        
    }
    catch(Error){
        console.log(Error)
    }
}
addPokemon.addEventListener("click",() => {
    if(select == null){
        alert("Select first to add Pokemon")
        return
    }
    else if(slotT){
        mainslotbtn.style.display = "flex";
        slotT = false;
        fetchAdd()
    }
    else{alert("error")};
})

async function fetchAdd(){
    try{
        const fetchSelect = await fetch(`https://pokeapi.co/api/v2/pokemon/${select}`);
        const selectedData = await fetchSelect.json();
        effectselect = selectedData;
        slotbtn1.addEventListener("click",() => {
            if(effectselect.types[0].type.name == "water"){
                Pokemon1Name.style.color = "#6390F0";
            }else if(effectselect.types[0].type.name == "normal"){
                Pokemon1Name.style.color = "#A8A77A";
            }
            else if(effectselect.types[0].type.name == "fire"){
                Pokemon1Name.style.color = "#EE8130";
            }else if(effectselect.types[0].type.name == "electric"){
                Pokemon1Name.style.color = "#F7D02C";
            }else if(effectselect.types[0].type.name == "grass"){
                Pokemon1Name.style.color = "#7AC74C";
            }else if(effectselect.types[0].type.name == "ice"){
                Pokemon1Name.style.color = "#96D9D6";
            }else if(effectselect.types[0].type.name == "fighting"){
                Pokemon1Name.style.color = "#C22E28";
            }else if(effectselect.types[0].type.name == "poison"){
                Pokemon1Name.style.color = "#A33EA1";
            }else if(effectselect.types[0].type.name == "ground"){
                Pokemon1Name.style.color = "#E2BF65";
            }else if(effectselect.types[0].type.name == "flying"){
                Pokemon1Name.style.color = "#A98FF3";
            }else if(effectselect.types[0].type.name == "psychic"){
                Pokemon1Name.style.color = "#F95587";
            }else if(effectselect.types[0].type.name == "bug"){
                Pokemon1Name.style.color = "#A6B91A";
            }else if(effectselect.types[0].type.name == "rock"){
                Pokemon1Name.style.color = "#B6A136";
            }else if(effectselect.types[0].type.name == "ghost"){
                Pokemon1Name.style.color = "#735797";
            }else if(effectselect.types[0].type.name == "dragon"){
                Pokemon1Name.style.color = "#6F35FC";
            }else if(effectselect.types[0].type.name == "dark"){
                Pokemon1Name.style.color = "#705746";
            }else if(effectselect.types[0].type.name == "steel"){
                Pokemon1Name.style.color = "#B7B7CE";
            }else{
                Pokemon1Name.style.color = "#D685AD";
            };
            Pokemon1Name.style.fontSize = "19px"
            mainslotbtn.style.display = "none";
            slotT = true;
            Pokemon1Name.textContent = selectedData.name;
            Pokemon1Imgs.src = selectedData.sprites.other["official-artwork"].front_default;
            Pokemon1Imgs.style.display = "block";
            pokeballimg1.src = selectedData.sprites.other["official-artwork"].front_default;
            pokeballimg1.style.display = "block";
            
            select = null;
        },{once: true});
        
        slotbtn2.addEventListener("click",() => {
            mainslotbtn.style.display = "none";
            slotT = true;
            Pokemon2Name.textContent = selectedData.name;
            Pokemon2Imgs.src = selectedData.sprites.other["official-artwork"].front_default;
            Pokemon2Imgs.style.display = "block";
            pokeballimg2.src = selectedData.sprites.other["official-artwork"].front_default;
            pokeballimg2.style.display = "block";

            select = null;
        },{once: true});

        slotbtn3.addEventListener("click",() => {
            mainslotbtn.style.display = "none";
            slotT = true;
            Pokemon3Name.textContent = selectedData.name;
            Pokemon3Imgs.src = selectedData.sprites.other["official-artwork"].front_default;
            Pokemon3Imgs.style.display = "block";
            pokeballimg3.src = selectedData.sprites.other["official-artwork"].front_default;
            pokeballimg3.style.display = "block";

            select = null;
        },{once: true});

        slotbtn4.addEventListener("click",() => {
            mainslotbtn.style.display = "none";
            slotT = true;
            Pokemon4Name.textContent = selectedData.name;
            Pokemon4Imgs.src = selectedData.sprites.other["official-artwork"].front_default;
            Pokemon4Imgs.style.display = "block";
            pokeballimg4.src = selectedData.sprites.other["official-artwork"].front_default;
            pokeballimg4.style.display = "block";

            select = null;
        },{once: true});

        slotbtn5.addEventListener("click",() => {
            mainslotbtn.style.display = "none";
            slotT = true;
            Pokemon5Name.textContent = selectedData.name;
            Pokemon5Imgs.src = selectedData.sprites.other["official-artwork"].front_default;
            Pokemon5Imgs.style.display = "block";
            pokeballimg5.src = selectedData.sprites.other["official-artwork"].front_default;
            pokeballimg5.style.display = "block";

            select = null;
        },{once: true});

        slotbtn6.addEventListener("click",() => {
            mainslotbtn.style.display = "none";
            slotT = true;
            Pokemon6Name.textContent = selectedData.name;
            Pokemon6Imgs.src = selectedData.sprites.other["official-artwork"].front_default;
            Pokemon6Imgs.style.display = "block";
            pokeballimg6.src = selectedData.sprites.other["official-artwork"].front_default;
            pokeballimg6.style.display = "block";

            select = null;
        },{once: true});
        
    }
    catch(Error){console.log(Error)};
}

