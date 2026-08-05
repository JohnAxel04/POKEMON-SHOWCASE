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

const mainPokemonimg1 = document.getElementById("mainPokemonimg1");
const mainPokemonimg2 = document.getElementById("mainPokemonimg2");
const mainPokemonimg3 = document.getElementById("mainPokemonimg3");
const mainPokemonimg4 = document.getElementById("mainPokemonimg4");
const mainPokemonimg5 = document.getElementById("mainPokemonimg5");
const mainPokemonimg6 = document.getElementById("mainPokemonimg6");

const pokemonimgss = document.querySelectorAll(".pokemonimgclass");


//pokeball name
const pokeballname1 = document.getElementById("pokeballname1");
const pokeballname2 = document.getElementById("pokeballname2");
const pokeballname3 = document.getElementById("pokeballname3");
const pokeballname4 = document.getElementById("pokeballname4");
const pokeballname5 = document.getElementById("pokeballname5");
const pokeballname6 = document.getElementById("pokeballname6");


//
const onoff = document.getElementById("onoff");
const back = document.getElementById("back");

const mainpkmBtn = document.getElementById("mainpkmBtn");

let selectedPokemon = [null,null,null,null,null,null]
let slotT = true;
let select = null;
let effectselect = null;

async function getFetch(){
    try{

        const myrandom = Math.floor(Math.random() * 1025) + 1;

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${myrandom}`);

        const data = await response.json();

        select = myrandom;

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
        
        addPokemon.disabled = false;
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
                pokeballname1.style.color = "#6390F0";
            }else if(effectselect.types[0].type.name == "normal"){
                Pokemon1Name.style.color = "#A8A77A";
                pokeballname1.style.color = "#A8A77A";
            }
            else if(effectselect.types[0].type.name == "fire"){
                Pokemon1Name.style.color = "#EE8130";
                pokeballname1.style.color = "#EE8130";
            }else if(effectselect.types[0].type.name == "electric"){
                Pokemon1Name.style.color = "#F7D02C";
                pokeballname1.style.color = "#F7D02C";
            }else if(effectselect.types[0].type.name == "grass"){
                Pokemon1Name.style.color = "#7AC74C";
                pokeballname1.style.color = "#7AC74C";
            }else if(effectselect.types[0].type.name == "ice"){
                Pokemon1Name.style.color = "#96D9D6";
                pokeballname1.style.color = "#96D9D6";
            }else if(effectselect.types[0].type.name == "fighting"){
                Pokemon1Name.style.color = "#C22E28";
                pokeballname1.style.color = "#C22E28";
            }else if(effectselect.types[0].type.name == "poison"){
                Pokemon1Name.style.color = "#A33EA1";
                pokeballname1.style.color = "#A33EA1";
            }else if(effectselect.types[0].type.name == "ground"){
                Pokemon1Name.style.color = "#E2BF65";
                pokeballname1.style.color = "#E2BF65";
            }else if(effectselect.types[0].type.name == "flying"){
                Pokemon1Name.style.color = "#A98FF3";
                pokeballname1.style.color = "#A98FF3";
            }else if(effectselect.types[0].type.name == "psychic"){
                Pokemon1Name.style.color = "#F95587";
                pokeballname1.style.color = "#F95587";
            }else if(effectselect.types[0].type.name == "bug"){
                Pokemon1Name.style.color = "#A6B91A";
                pokeballname1.style.color = "#A6B91A";
            }else if(effectselect.types[0].type.name == "rock"){
                Pokemon1Name.style.color = "#B6A136";
                pokeballname1.style.color = "#B6A136";
            }else if(effectselect.types[0].type.name == "ghost"){
                Pokemon1Name.style.color = "#735797";
                pokeballname1.style.color = "#735797";
            }else if(effectselect.types[0].type.name == "dragon"){
                Pokemon1Name.style.color = "#6F35FC";
                pokeballname1.style.color = "#6F35FC";
            }else if(effectselect.types[0].type.name == "dark"){
                Pokemon1Name.style.color = "#705746";
                pokeballname1.style.color = "#705746";
            }else if(effectselect.types[0].type.name == "steel"){
                Pokemon1Name.style.color = "#B7B7CE";
                pokeballname1.style.color = "#B7B7CE";
            }else{
                Pokemon1Name.style.color = "#D685AD";
                pokeballname1.style.color = "#D685AD";
            };
            Pokemon1Name.style.fontSize = "19px"
            mainslotbtn.style.display = "none";
            slotT = true;
            Pokemon1Name.textContent = selectedData.name;
            Pokemon1Imgs.src = selectedData.sprites.other["official-artwork"].front_default;
            Pokemon1Imgs.style.display = "block";
            pokeballimg1.src = selectedData.sprites.other["official-artwork"].front_default;
            pokeballimg1.style.display = "block";
            
            pokeballname1.textContent = selectedData.name;
            pokeballname1.style.display = "block";

            selectedPokemon[0] = selectedData;

            addPokemon.disabled = true;

            select = null;
        },{once: true});
        
        slotbtn2.addEventListener("click",() => {
            if(effectselect.types[0].type.name == "water"){
                Pokemon2Name.style.color = "#6390F0";
                pokeballname2.style.color = "#6390F0";
            }else if(effectselect.types[0].type.name == "normal"){
                Pokemon2Name.style.color = "#A8A77A";
                pokeballname2.style.color = "#A8A77A";
            }
            else if(effectselect.types[0].type.name == "fire"){
                Pokemon2Name.style.color = "#EE8130";
                pokeballname2.style.color = "#EE8130";
            }else if(effectselect.types[0].type.name == "electric"){
                Pokemon2Name.style.color = "#F7D02C";
                pokeballname2.style.color = "#F7D02C";
            }else if(effectselect.types[0].type.name == "grass"){
                Pokemon2Name.style.color = "#7AC74C";
                pokeballname2.style.color = "#7AC74C";
            }else if(effectselect.types[0].type.name == "ice"){
                Pokemon2Name.style.color = "#96D9D6";
                pokeballname2.style.color = "#96D9D6";
            }else if(effectselect.types[0].type.name == "fighting"){
                Pokemon2Name.style.color = "#C22E28";
                pokeballname2.style.color = "#C22E28";
            }else if(effectselect.types[0].type.name == "poison"){
                Pokemon2Name.style.color = "#A33EA1";
                pokeballname2.style.color = "#A33EA1";
            }else if(effectselect.types[0].type.name == "ground"){
                Pokemon2Name.style.color = "#E2BF65";
                pokeballname2.style.color = "#E2BF65";
            }else if(effectselect.types[0].type.name == "flying"){
                Pokemon2Name.style.color = "#A98FF3";
                pokeballname2.style.color = "#A98FF3";
            }else if(effectselect.types[0].type.name == "psychic"){
                Pokemon2Name.style.color = "#F95587";
                pokeballname2.style.color = "#F95587";
            }else if(effectselect.types[0].type.name == "bug"){
                Pokemon2Name.style.color = "#A6B91A";
                pokeballname2.style.color = "#A6B91A";
            }else if(effectselect.types[0].type.name == "rock"){
                Pokemon2Name.style.color = "#B6A136";
                pokeballname2.style.color = "#B6A136";
            }else if(effectselect.types[0].type.name == "ghost"){
                Pokemon2Name.style.color = "#735797";
                pokeballname2.style.color = "#735797";
            }else if(effectselect.types[0].type.name == "dragon"){
                Pokemon2Name.style.color = "#6F35FC";
                pokeballname2.style.color = "#6F35FC";
            }else if(effectselect.types[0].type.name == "dark"){
                Pokemon2Name.style.color = "#705746";
                pokeballname2.style.color = "#705746";
            }else if(effectselect.types[0].type.name == "steel"){
                Pokemon2Name.style.color = "#B7B7CE";
                pokeballname2.style.color = "#B7B7CE";
            }else{
                Pokemon2Name.style.color = "#D685AD";
                pokeballname2.style.color = "#D685AD";
            };
            mainslotbtn.style.display = "none";
            slotT = true;
            Pokemon2Name.textContent = selectedData.name;
            Pokemon2Imgs.src = selectedData.sprites.other["official-artwork"].front_default;
            Pokemon2Imgs.style.display = "block";
            pokeballimg2.src = selectedData.sprites.other["official-artwork"].front_default;
            pokeballimg2.style.display = "block";

            pokeballname2.textContent = selectedData.name;
            pokeballname2.style.display = "block";

            selectedPokemon[1] = selectedData;

            addPokemon.disabled = true;

            select = null;
        },{once: true});

        slotbtn3.addEventListener("click",() => {
            if(effectselect.types[0].type.name == "water"){
                Pokemon3Name.style.color = "#6390F0";
                pokeballname3.style.color = "#6390F0";
            }else if(effectselect.types[0].type.name == "normal"){
                Pokemon3Name.style.color = "#A8A77A";
                pokeballname3.style.color = "#A8A77A";
            }
            else if(effectselect.types[0].type.name == "fire"){
                Pokemon3Name.style.color = "#EE8130";
                pokeballname3.style.color = "#EE8130";
            }else if(effectselect.types[0].type.name == "electric"){
                Pokemon3Name.style.color = "#F7D02C";
                pokeballname3.style.color = "#F7D02C";
            }else if(effectselect.types[0].type.name == "grass"){
                Pokemon3Name.style.color = "#7AC74C";
                pokeballname3.style.color = "#7AC74C";
            }else if(effectselect.types[0].type.name == "ice"){
                Pokemon3Name.style.color = "#96D9D6";
                pokeballname3.style.color = "#96D9D6";
            }else if(effectselect.types[0].type.name == "fighting"){
                Pokemon3Name.style.color = "#C22E28";
                pokeballname3.style.color = "#C22E28";
            }else if(effectselect.types[0].type.name == "poison"){
                Pokemon3Name.style.color = "#A33EA1";
                pokeballname3.style.color = "#A33EA1";
            }else if(effectselect.types[0].type.name == "ground"){
                Pokemon3Name.style.color = "#E2BF65";
                pokeballname3.style.color = "#E2BF65";
            }else if(effectselect.types[0].type.name == "flying"){
                Pokemon3Name.style.color = "#A98FF3";
                pokeballname3.style.color = "#A98FF3";
            }else if(effectselect.types[0].type.name == "psychic"){
                Pokemon3Name.style.color = "#F95587";
                pokeballname3.style.color = "#F95587";
            }else if(effectselect.types[0].type.name == "bug"){
                Pokemon3Name.style.color = "#A6B91A";
                pokeballname3.style.color = "#A6B91A";
            }else if(effectselect.types[0].type.name == "rock"){
                Pokemon3Name.style.color = "#B6A136";
                pokeballname3.style.color = "#B6A136";
            }else if(effectselect.types[0].type.name == "ghost"){
                Pokemon3Name.style.color = "#735797";
                pokeballname3.style.color = "#735797";
            }else if(effectselect.types[0].type.name == "dragon"){
                Pokemon3Name.style.color = "#6F35FC";
                pokeballname3.style.color = "#6F35FC";
            }else if(effectselect.types[0].type.name == "dark"){
                Pokemon3Name.style.color = "#705746";
                pokeballname3.style.color = "#705746";
            }else if(effectselect.types[0].type.name == "steel"){
                Pokemon3Name.style.color = "#B7B7CE";
                pokeballname3.style.color = "#B7B7CE";
            }else{
                Pokemon3Name.style.color = "#D685AD";
                pokeballname3.style.color = "#D685AD";
            };
            mainslotbtn.style.display = "none";
            slotT = true;
            Pokemon3Name.textContent = selectedData.name;
            Pokemon3Imgs.src = selectedData.sprites.other["official-artwork"].front_default;
            Pokemon3Imgs.style.display = "block";
            pokeballimg3.src = selectedData.sprites.other["official-artwork"].front_default;
            pokeballimg3.style.display = "block";

            pokeballname3.textContent = selectedData.name;
            pokeballname3.style.display = "block";

            addPokemon.disabled = true;

            selectedPokemon[2] = selectedData;

            select = null;
        },{once: true});

        slotbtn4.addEventListener("click",() => {
            if(effectselect.types[0].type.name == "water"){
                Pokemon4Name.style.color = "#6390F0";
                pokeballname4.style.color = "#6390F0";
            }else if(effectselect.types[0].type.name == "normal"){
                Pokemon4Name.style.color = "#A8A77A";
                pokeballname4.style.color = "#A8A77A";
            }
            else if(effectselect.types[0].type.name == "fire"){
                Pokemon4Name.style.color = "#EE8130";
                pokeballname4.style.color = "#EE8130";
            }else if(effectselect.types[0].type.name == "electric"){
                Pokemon4Name.style.color = "#F7D02C";
                pokeballname4.style.color = "#F7D02C";
            }else if(effectselect.types[0].type.name == "grass"){
                Pokemon4Name.style.color = "#7AC74C";
                pokeballname4.style.color = "#7AC74C";
            }else if(effectselect.types[0].type.name == "ice"){
                Pokemon4Name.style.color = "#96D9D6";
                pokeballname4.style.color = "#96D9D6";
            }else if(effectselect.types[0].type.name == "fighting"){
                Pokemon4Name.style.color = "#C22E28";
                pokeballname4.style.color = "#C22E28";
            }else if(effectselect.types[0].type.name == "poison"){
                Pokemon4Name.style.color = "#A33EA1";
                pokeballname4.style.color = "#A33EA1";
            }else if(effectselect.types[0].type.name == "ground"){
                Pokemon4Name.style.color = "#E2BF65";
                pokeballname4.style.color = "#E2BF65";
            }else if(effectselect.types[0].type.name == "flying"){
                Pokemon4Name.style.color = "#A98FF3";
                pokeballname4.style.color = "#A98FF3";
            }else if(effectselect.types[0].type.name == "psychic"){
                Pokemon4Name.style.color = "#F95587";
                pokeballname4.style.color = "#F95587";
            }else if(effectselect.types[0].type.name == "bug"){
                Pokemon4Name.style.color = "#A6B91A";
                pokeballname4.style.color = "#A6B91A";
            }else if(effectselect.types[0].type.name == "rock"){
                Pokemon4Name.style.color = "#B6A136";
                pokeballname4.style.color = "#B6A136";
            }else if(effectselect.types[0].type.name == "ghost"){
                Pokemon4Name.style.color = "#735797";
                pokeballname4.style.color = "#735797";
            }else if(effectselect.types[0].type.name == "dragon"){
                Pokemon4Name.style.color = "#6F35FC";
                pokeballname4.style.color = "#6F35FC";
            }else if(effectselect.types[0].type.name == "dark"){
                Pokemon4Name.style.color = "#705746";
                pokeballname4.style.color = "#705746";
            }else if(effectselect.types[0].type.name == "steel"){
                Pokemon4Name.style.color = "#B7B7CE";
                pokeballname4.style.color = "#B7B7CE";
            }else{
                Pokemon4Name.style.color = "#D685AD";
                pokeballname4.style.color = "#D685AD";
            };
            mainslotbtn.style.display = "none";
            slotT = true;
            Pokemon4Name.textContent = selectedData.name;
            Pokemon4Imgs.src = selectedData.sprites.other["official-artwork"].front_default;
            Pokemon4Imgs.style.display = "block";
            pokeballimg4.src = selectedData.sprites.other["official-artwork"].front_default;
            pokeballimg4.style.display = "block";

            pokeballname4.textContent = selectedData.name;
            pokeballname4.style.display = "block";

            addPokemon.disabled = true;

            selectedPokemon[3] = selectedData;

            select = null;
        },{once: true});

        slotbtn5.addEventListener("click",() => {
            if(effectselect.types[0].type.name == "water"){
                Pokemon5Name.style.color = "#6390F0";
                pokeballname5.style.color = "#6390F0";
            }else if(effectselect.types[0].type.name == "normal"){
                Pokemon5Name.style.color = "#A8A77A";
                pokeballname5.style.color = "#A8A77A";
            }
            else if(effectselect.types[0].type.name == "fire"){
                Pokemon5Name.style.color = "#EE8130";
                pokeballname5.style.color = "#EE8130";
            }else if(effectselect.types[0].type.name == "electric"){
                Pokemon5Name.style.color = "#F7D02C";
                pokeballname5.style.color = "#F7D02C";
            }else if(effectselect.types[0].type.name == "grass"){
                Pokemon5Name.style.color = "#7AC74C";
                pokeballname5.style.color = "#7AC74C";
            }else if(effectselect.types[0].type.name == "ice"){
                Pokemon5Name.style.color = "#96D9D6";
                pokeballname5.style.color = "#96D9D6";
            }else if(effectselect.types[0].type.name == "fighting"){
                Pokemon5Name.style.color = "#C22E28";
                pokeballname5.style.color = "#C22E28";
            }else if(effectselect.types[0].type.name == "poison"){
                Pokemon5Name.style.color = "#A33EA1";
                pokeballname5.style.color = "#A33EA1";
            }else if(effectselect.types[0].type.name == "ground"){
                Pokemon5Name.style.color = "#E2BF65";
                pokeballname5.style.color = "#E2BF65";
            }else if(effectselect.types[0].type.name == "flying"){
                Pokemon5Name.style.color = "#A98FF3";
                pokeballname5.style.color = "#A98FF3";
            }else if(effectselect.types[0].type.name == "psychic"){
                Pokemon5Name.style.color = "#F95587";
                pokeballname5.style.color = "#F95587";
            }else if(effectselect.types[0].type.name == "bug"){
                Pokemon5Name.style.color = "#A6B91A";
                pokeballname5.style.color = "#A6B91A";
            }else if(effectselect.types[0].type.name == "rock"){
                Pokemon5Name.style.color = "#B6A136";
                pokeballname5.style.color = "#B6A136";
            }else if(effectselect.types[0].type.name == "ghost"){
                Pokemon5Name.style.color = "#735797";
                pokeballname5.style.color = "#735797";
            }else if(effectselect.types[0].type.name == "dragon"){
                Pokemon5Name.style.color = "#6F35FC";
                pokeballname5.style.color = "#6F35FC";
            }else if(effectselect.types[0].type.name == "dark"){
                Pokemon5Name.style.color = "#705746";
                pokeballname5.style.color = "#705746";
            }else if(effectselect.types[0].type.name == "steel"){
                Pokemon5Name.style.color = "#B7B7CE";
                pokeballname5.style.color = "#B7B7CE";
            }else{
                Pokemon5Name.style.color = "#D685AD";
                pokeballname5.style.color = "#D685AD";
            };
            mainslotbtn.style.display = "none";
            slotT = true;
            Pokemon5Name.textContent = selectedData.name;
            Pokemon5Imgs.src = selectedData.sprites.other["official-artwork"].front_default;
            Pokemon5Imgs.style.display = "block";
            pokeballimg5.src = selectedData.sprites.other["official-artwork"].front_default;
            pokeballimg5.style.display = "block";

            pokeballname5.textContent = selectedData.name;
            pokeballname5.style.display = "block";

            addPokemon.disabled = true;

            selectedPokemon[4] = selectedData;

            select = null;
        },{once: true});

        slotbtn6.addEventListener("click",() => {
            if(effectselect.types[0].type.name == "water"){
                Pokemon6Name.style.color = "#6390F0";
                pokeballname6.style.color = "#6390F0";
            }else if(effectselect.types[0].type.name == "normal"){
                Pokemon6Name.style.color = "#A8A77A";
                pokeballname6.style.color = "#A8A77A";
            }
            else if(effectselect.types[0].type.name == "fire"){
                Pokemon6Name.style.color = "#EE8130";
                pokeballname6.style.color = "#EE8130";
            }else if(effectselect.types[0].type.name == "electric"){
                Pokemon6Name.style.color = "#F7D02C";
                pokeballname6.style.color = "#F7D02C";
            }else if(effectselect.types[0].type.name == "grass"){
                Pokemon6Name.style.color = "#7AC74C";
                pokeballname6.style.color = "#7AC74C";
            }else if(effectselect.types[0].type.name == "ice"){
                Pokemon6Name.style.color = "#96D9D6";
                pokeballname6.style.color = "#96D9D6";
            }else if(effectselect.types[0].type.name == "fighting"){
                Pokemon6Name.style.color = "#C22E28";
                pokeballname6.style.color = "#C22E28";
            }else if(effectselect.types[0].type.name == "poison"){
                Pokemon6Name.style.color = "#A33EA1";
                pokeballname6.style.color = "#A33EA1";
            }else if(effectselect.types[0].type.name == "ground"){
                Pokemon6Name.style.color = "#E2BF65";
                pokeballname6.style.color = "#E2BF65";
            }else if(effectselect.types[0].type.name == "flying"){
                Pokemon6Name.style.color = "#A98FF3";
                pokeballname6.style.color = "#A98FF3";
            }else if(effectselect.types[0].type.name == "psychic"){
                Pokemon6Name.style.color = "#F95587";
                pokeballname6.style.color = "#F95587";
            }else if(effectselect.types[0].type.name == "bug"){
                Pokemon6Name.style.color = "#A6B91A";
                pokeballname6.style.color = "#A6B91A";
            }else if(effectselect.types[0].type.name == "rock"){
                Pokemon6Name.style.color = "#B6A136";
                pokeballname6.style.color = "#B6A136";
            }else if(effectselect.types[0].type.name == "ghost"){
                Pokemon6Name.style.color = "#735797";
                pokeballname6.style.color = "#735797";
            }else if(effectselect.types[0].type.name == "dragon"){
                Pokemon6Name.style.color = "#6F35FC";
                pokeballname6.style.color = "#6F35FC";
            }else if(effectselect.types[0].type.name == "dark"){
                Pokemon6Name.style.color = "#705746";
                pokeballname6.style.color = "#705746";
            }else if(effectselect.types[0].type.name == "steel"){
                Pokemon6Name.style.color = "#B7B7CE";
                pokeballname6.style.color = "#B7B7CE";
            }else{
                Pokemon6Name.style.color = "#D685AD";
                pokeballname6.style.color = "#D685AD";
            };
            mainslotbtn.style.display = "none";
            slotT = true;
            Pokemon6Name.textContent = selectedData.name;
            Pokemon6Imgs.src = selectedData.sprites.other["official-artwork"].front_default;
            Pokemon6Imgs.style.display = "block";
            pokeballimg6.src = selectedData.sprites.other["official-artwork"].front_default;
            pokeballimg6.style.display = "block";

            pokeballname6.textContent = selectedData.name;
            pokeballname6.style.display = "block";

            addPokemon.disabled = true;

            selectedPokemon[5] = selectedData;

            select = null;
        },{once: true});
        
    }
    catch(Error){console.log(Error)};
}
pokemonimgss.forEach((img,index) => {
    img.addEventListener("click",async () => {
        const pkm = selectedPokemon[index];

        const ability2 = pkm.abilities.map(a => a.ability.name);

        const heightm = pkm.height / 10;
        

        const weightKg = pkm.weight / 10;

        mainName.textContent = pkm.name;

        mainId.textContent = pkm.id;

        mainType.textContent = pkm.types[0].type.name;

        mainAbility.textContent = ability2.join(", ");

        mainHeight.textContent = `${heightm} m`;

        mainWeight.textContent = `${weightKg} kg`;

        mainHp.textContent = pkm.stats[0].base_stat;

        mainAttack.textContent = pkm.stats[1].base_stat;

        mainDef.textContent = pkm.stats[2].base_stat;

        mainSpatk.textContent = pkm.stats[3].base_stat;

        mainSpdef.textContent = pkm.stats[4].base_stat;

        mainSpeed.textContent = pkm.stats[5].base_stat;

        const Imgg = pkm.sprites.other["official-artwork"].front_default;
        mainImg.src = Imgg;

        const newmoves = pkm.moves[0].move.url;
        const newmoveresponse = await fetch(newmoves);
        const newmovedata = await newmoveresponse.json();

        move1name.textContent = newmovedata.name;
        move1PP.textContent = newmovedata.pp;
        move1Type.textContent = newmovedata.type.name;
        move1Power.textContent = newmovedata.power  ?? "-";
        move1Accuracy.textContent = newmovedata.accuracy  ?? "-";
        move1Class.textContent = newmovedata.damage_class.name;

        const newmoves1 = pkm.moves[1].move.url;
        const newmoveresponse1 = await fetch(newmoves1);
        const newmovedata1 = await newmoveresponse1.json();

        move2name.textContent = newmovedata1.name;
        move2PP.textContent = newmovedata1.pp;
        move2Type.textContent = newmovedata1.type.name;
        move2Power.textContent = newmovedata1.power  ?? "-";
        move2Accuracy.textContent = newmovedata1.accuracy  ?? "-";
        move2Class.textContent = newmovedata1.damage_class.name;

        const newmoves2 = pkm.moves[2].move.url;
        const newmoveresponse2 = await fetch(newmoves2);
        const newmovedata2 = await newmoveresponse2.json();

        move3name.textContent = newmovedata2.name;
        move3PP.textContent = newmovedata2.pp;
        move3Type.textContent = newmovedata2.type.name;
        move3Power.textContent = newmovedata2.power  ?? "-";
        move3Accuracy.textContent = newmovedata2.accuracy  ?? "-";
        move3Class.textContent = newmovedata2.damage_class.name;

        const newmoves3 = pkm.moves[3].move.url;
        const newmoveresponse3 = await fetch(newmoves3);
        const newmovedata3 = await newmoveresponse3.json();

        move4name.textContent = newmovedata3.name;
        move4PP.textContent = newmovedata3.pp;
        move4Type.textContent = newmovedata3.type.name;
        move4Power.textContent = newmovedata3.power  ?? "-";
        move4Accuracy.textContent = newmovedata3.accuracy  ?? "-";
        move4Class.textContent = newmovedata3.damage_class.name;
        // console.log(selectedPokemon)

        addPokemon.disabled = true;
        select = null;
    })
})
let onoffvar = true;
shinybtn.addEventListener("click",() => {
    if(onoffvar){
        onoff.textContent = "On";
        onoffvar = false;
    }else if(!onoffvar){
        onoff.textContent = "Off";
        onoffvar = true;
    }
    
})
back.addEventListener("click",() => {
    mainslotbtn.style.display = "none";
    slotT = true;
})
let anotherMain = [];
let mymain = [];
myMainFetch()
async function myMainFetch(){
    const mainResponse = await fetch("https://pokeapi.co/api/v2/pokemon/648")
    const mainData = await mainResponse.json();
    mymain.push(mainData)
    
    const Imgg = mymain[0].sprites.other["official-artwork"].front_default;
    mainPokemonimg1.src = Imgg;
    mainPokemonimg1.style.display = "block";

    const mainResponse2 = await fetch("https://pokeapi.co/api/v2/pokemon/608")
    const mainData2 = await mainResponse2.json();
    mymain.push(mainData2)
    
    const Imgg2 = mymain[1].sprites.other["official-artwork"].front_default;
    mainPokemonimg2.src = Imgg2;
    mainPokemonimg2.style.display = "block";

    const mainResponse3 = await fetch("https://pokeapi.co/api/v2/pokemon/149")
    const mainData3 = await mainResponse3.json();
    mymain.push(mainData3)
    
    const Imgg3 = mymain[2].sprites.other["official-artwork"].front_default;
    mainPokemonimg3.src = Imgg3;
    mainPokemonimg3.style.display = "block";

    const mainResponse4 = await fetch("https://pokeapi.co/api/v2/pokemon/131")
    const mainData4 = await mainResponse4.json();
    mymain.push(mainData4)
    
    const Imgg4 = mymain[3].sprites.other["official-artwork"].front_default;
    mainPokemonimg4.src = Imgg4;
    mainPokemonimg4.style.display = "block";

    const mainResponse5 = await fetch("https://pokeapi.co/api/v2/pokemon/157")
    const mainData5 = await mainResponse5.json();
    mymain.push(mainData5)
    
    const Imgg5 = mymain[4].sprites.other["official-artwork"].front_default;
    mainPokemonimg5.src = Imgg5;
    mainPokemonimg5.style.display = "block";

    const mainResponse6 = await fetch("https://pokeapi.co/api/v2/pokemon/495")
    const mainData6 = await mainResponse6.json();
    mymain.push(mainData6)
    
    const Imgg6 = mymain[5].sprites.other["official-artwork"].front_default;
    mainPokemonimg6.src = Imgg6;
    mainPokemonimg6.style.display = "block";

    console.log(mymain);
}

