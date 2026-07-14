/*==================================================
CONFIGURATION
==================================================*/

const starsContainer = document.querySelector(".stars");
const hero = document.querySelector(".hero");
const discoverBtn = document.getElementById("discover");
const light = document.querySelector(".cursor-light");
const music = document.getElementById("bgMusic");


/*==================================================
SCENE 2
==================================================*/

const scene2 = `
<section class="scene2">

    <div class="overlay"></div>

    <div class="story">

        <p class="text">
            Parce que...
        </p>

        <p class="text">
            Je ne voulais pas être le 53ème
            "Joyeux anniversaire".
        </p>

        <p class="text">
            Je sais que tu m'as souhaité très tôt mon anniversaire 😂.
            <br>
            Je te souhaite tard parce que j'ai pris toute la journée à te préparer ceci...
        </p>

        <p class="text">
            Je veux que tu saches que
            <span>tu es devenue une personne qui compte beaucoup pour moi.</span>
        </p>

        <p class="text">
            Une personne que j'ai appris à connaître petit à petit...
            <br>
            et que je suis heureux d'avoir rencontrée. 😌
        </p>

        <p class="text">
            Alors je voulais simplement être...
        </p>

        <p class="text highlight">
            La dernière surprise de ta journée. 😉
        </p>

        <p class="text">
            Amo...
        </p>

        <p class="text">
            Je voulais prendre un moment pour te dire quelque chose
            que je ne dis peut-être pas assez souvent...
        </p>

        <p class="text highlight">
            Tu es une personne vraiment très spéciale. ✨
        </p>

        <p class="text">
            Depuis qu'on se connaît,
            j'ai découvert quelqu'un de calme,
            de gentil
            et de profondément attentionné.
        </p>

        <p class="text">
            Tu le montres peut-être pas assez...
            <br>
            mais tu sais vraiment écouter.
            Enfin...
            tu as surtout la flemme d'écrire 😂😂
        </p>

        <p class="text">
            Malgré ça...
            😌
            <span>tu sais toujours accorder du temps aux autres.</span>
        </p>

        <p class="text">
            Je suis content que des paroles d'une chanson
            nous aient permis de nous rencontrer.
        </p>

        <p class="text">
            N'aie pas peur de grandir...
            profite encore de ton adolescence. 😆
        </p>

        <p class="text">
            Aujourd'hui,
            je voulais juste que tu saches
            que ta présence compte énormément.
            Surtout pour oi-m...
        </p>

        <p class="text">
            Flemmoune 😚...
            Je voulais juste te dire...
            sincèrement...
        </p>

        <p class="text highlight birthday">
            ✨ Joyeux anniversaire Amorelle. ✨
        </p>

        <p class="text">
            Et surtout...
        </p>

        <p class="text highlight">
            Guéris vite ta grippe inh 😭
        </p>

    </div>

</section>
`;


/*==================================================
TEMPS D'AFFICHAGE
==================================================*/

const MESSAGE_TIMES = [

    1200, // Parce que

    5000, // 53ème

    6500, // Tu m'as souhaité

    5000, // Tu comptes beaucoup

    5000, // Heureux de t'avoir rencontrée

    3000, // Alors

    5500, // Dernière surprise

    1800, // Amo

    5000, // Je voulais prendre un moment

    4500, // Très spéciale

    5500, // Depuis qu'on se connaît

    6000, // Flemme d'écrire

    5000, // Malgré ça

    5000, // Chanson

    4500, // Adolescence

    5500, // Ta présence compte

    5000, // Flemmoune

    6500, // Joyeux anniversaire

    2500, // Et surtout

    6000  // Guéris vite

];


/*==================================================
ETOILES
==================================================*/

for(let i=0;i<45;i++){

    const star=document.createElement("span");

    star.className="star";

    star.style.left=Math.random()*100+"%";

    star.style.top=Math.random()*100+"%";

    const size=1+Math.random()*3;

    star.style.width=size+"px";
    star.style.height=size+"px";

    star.style.animationDuration=(2+Math.random()*5)+"s";
    star.style.animationDelay=Math.random()*5+"s";

    starsContainer.appendChild(star);

}


/*==================================================
CURSEUR
==================================================*/

if(light){

    window.addEventListener("mousemove",(e)=>{

        light.style.left=e.clientX+"px";
        light.style.top=e.clientY+"px";

    });

}


/*==================================================
OUVERTURE
==================================================*/

/*==================================================
OUVERTURE SCENE 2 + MUSIQUE
==================================================*/

discoverBtn.addEventListener("click",()=>{


    // Lancement musique avec fondu doux
    if(music){

        music.volume = 0;

        music.play();


        let volume = 0;


        const fadeIn = setInterval(()=>{


            volume += 0.02;


            if(volume >= 0.4){

                volume = 0.4;

                clearInterval(fadeIn);

            }


            music.volume = volume;


        },100);

    }



    // Transition vers la scène 2
    hero.classList.add("hide");


    setTimeout(()=>{


        hero.remove();


        document.body.insertAdjacentHTML(
            "beforeend",
            scene2
        );


        startScene2();


    },900);


});



/*==================================================
ANIMATION SCENE 2
==================================================*/

function startScene2(){

    const texts = document.querySelectorAll(".text");

    let current = 0;


    // Premier message
    texts[0].classList.add("active");


    function next(){

        texts[current].classList.remove("active");

        current++;


        // Fin de l'histoire
        if(current >= texts.length){

            showSignature();

            return;

        }


        setTimeout(()=>{


            texts[current].classList.add("active");


            // Effet anniversaire
            if(texts[current].classList.contains("birthday")){

                launchBirthdayEffect();

            }


            setTimeout(next, MESSAGE_TIMES[current]);


        },350);


    }


    // Temps du premier message
    setTimeout(next, MESSAGE_TIMES[0]);


}


/*==================================================
EFFETS ANNIVERSAIRE
==================================================*/

function launchBirthdayEffect(){

    // Fond lumineux
    document.querySelector(".background").classList.add("flash");

    // Les étoiles brillent davantage
    document.querySelectorAll(".star").forEach(star=>{

        star.style.animationDuration=".8s";

        star.style.opacity="1";

        star.style.transform="scale(1.8)";

    });

    // Lancement des particules pendant 10 secondes
    let interval=setInterval(createParticles,180);

    setTimeout(()=>{

        clearInterval(interval);

        document.querySelector(".background").classList.remove("flash");

        document.querySelectorAll(".star").forEach(star=>{

            star.style.animationDuration=(2+Math.random()*5)+"s";

            star.style.transform="scale(1)";

        });

    },10000);

}


/*==================================================
PARTICULES
==================================================*/

function createParticles(){

    for(let i=0;i<6;i++){

        const particle=document.createElement("span");

        particle.className="particle";

        particle.style.left=Math.random()*100+"vw";

        particle.style.top="-30px";

        particle.style.setProperty(
            "--drift",
            (Math.random()*200-100)+"px"
        );

        particle.style.animationDuration=
        (5+Math.random()*3)+"s";

        const colors=[

            "#ffffff",
            "#ffd4eb",
            "#f8bcd8",
            "#ffe89a"

        ];

        const color=
        colors[Math.floor(Math.random()*colors.length)];

        particle.style.background=color;

        particle.style.color=color;

        document.body.appendChild(particle);

        setTimeout(()=>{

            particle.remove();

        },9000);

    }

}


/*==================================================
SIGNATURE
==================================================*/

function showSignature(){

    document.body.insertAdjacentHTML(

        "beforeend",

        `

        <div class="signature">

    <div class="fin">
        Fin.
    </div>

    <div class="signature-text">
        Ton copain préféré...
        <br>
        (j'espère 😌)
    </div>

    <div class="name">
        — Mohamed Sam
    </div>

</div>

        `

    );

    requestAnimationFrame(()=>{

        document
        .querySelector(".signature")
        .classList.add("show");

    });

}