const characters_data = [
    {
        id:0,
        name:"The Force Commander",
        img: require('/img/charac1.jpg'),
        text:"The Force Commander is said to be the youngest Blood Raven ever promoted to his rank. He earned renown for leading a small strike force against an enemy artillery emplacement deep behind enemy lines during the Hadrian campaign. The attack required weeks of land travel and careful strikes with a token force, yet it was very successful and the entire force survived. "
    },
    {
        id:1,
        name:"Sergeant Tarkus",
        img: require('/img/charac2.jpg'),
        text:"A veteran of centuries of campaigning, Tarkus leads his Tactical Marines into combat with confidence and a steely demeanor. Slow to anger, Tarkus is a rock-solid second-in-command, and expert tactician."
    },
    {
        id:2,
        name:"Sergeant Thaddeus",
        img: require('/img/charac3.jpg'),
        text:"Recently promoted to Sergeant, Thaddeus has made a name for himself battling the feral Orks of Calderis and Typhon. Brash and idealistic, he leads his Assault Marines with undisguised enthusiasm."
    },
    {
        id:3,
        name:"Sergeant Avitus",
        img: require('/img/charac4.png'),
        text:"Avitus's greatest weapon is his unmatched hatred for the enemy particularly non-humans and Guardsmen. Since the campaign on Victory Bay, he has unleashed his weapons with a new fury attributed to the time he fought against traitorous Guardsmen. Many of his squadmates did not survive the fighting, something that changed Avitus forever."
    },
];
let sectionCharacs = document.getElementsByClassName("characters")[0];

//-------------------------------------- \|| eventListener ||/ -----------------------------------------\\

const addCharacEvent = (section,id) =>
{
    section.addEventListener("click", e=()=>{

        el = document.querySelector(".characters__item[id='"+id+"']");
        el.classList.toggle("characters__item--show");
        el.children[1].classList.toggle("hidden");
        
    });
}

//-------------------------------------- \|| init ||/ -----------------------------------------\\

const createACharacter = (id,name,img,text) =>
{

    let characText = document.createElement("p");
    characText.classList.add("characters__text");
    characText.classList.add("hidden");
    characText.innerText = text;

    let characTitle = document.createElement("h6");
    characTitle.classList.add("characters__title");
    characTitle.innerText = name;

    let characImg= document.createElement("div");
    characImg.classList.add("characters__img");
    characImg.style.backgroundImage="url('"+img+"')";

    let characItem =  document.createElement("article");
    characItem.classList.add("characters__item");
    characItem.id = id;

    characItem.appendChild(characImg);
    characItem.appendChild(characText);
    characItem.appendChild(characTitle);
    

    addCharacEvent(characItem,id);
    sectionCharacs.appendChild(characItem);
    
}

const init = () =>
{
    for(let i = 0, n = characters_data.length; i<n;i++ )
    {
        createACharacter(characters_data[i].id,characters_data[i].name,characters_data[i].img,characters_data[i].text);
    }
}





init();