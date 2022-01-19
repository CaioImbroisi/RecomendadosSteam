//Não usei o push porque não vi necessidade.
//Utilizei a mecânica de adicionar um jogo pela tela, mas não acho que se encaixe na minha proposta.
//O maior desafio foi ver que pela falta de um ESPAÇO depois das " na linha 75 estava impedindo de aplicar as configurações de organização das imagens kkkkk.
//Desisto de tentar fazer Carousel 
//Não consigo adicionar os botoes para os lados//
// com a Scrollbar fica feio demais:/


//Imagem dos jogos / Links dos jogos //

var soulsLikeImg = [
  "https://cdn.cloudflare.steamstatic.com/steam/apps/570940/header.jpg?t=1605604948",
  "https://cdn.cloudflare.steamstatic.com/steam/apps/335300/header.jpg?t=1588788240",
  "https://cdn.cloudflare.steamstatic.com/steam/apps/374320/header.jpg?t=1628263692",
  "https://cdn.cloudflare.steamstatic.com/steam/apps/967390/header.jpg?t=1606846851",
  "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg?t=1641856252",
];

var soulsLikeUrl = [
  "https://store.steampowered.com/app/570940/DARK_SOULS_REMASTERED/",
  "https://store.steampowered.com/app/335300/DARK_SOULS_II_Scholar_of_the_First_Sin/",
  "https://store.steampowered.com/app/374320/DARK_SOULS_III/",
  "https://store.steampowered.com/app/967390/Chronos_Before_the_Ashes/",
  "https://store.steampowered.com/app/1245620/ELDEN_RING/"
];

var rpgImg = [
  "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg?t=1621939214",
  "https://cdn.cloudflare.steamstatic.com/steam/apps/367500/header.jpg?t=1594713620",
  "https://cdn.cloudflare.steamstatic.com/steam/apps/1096530/header.jpg?t=1626438968",
  "https://cdn.cloudflare.steamstatic.com/steam/apps/794260/header.jpg?t=1625218884",
  "https://cdn.cloudflare.steamstatic.com/steam/apps/489830/header.jpg?t=1590515887",
  "https://cdn.cloudflare.steamstatic.com/steam/apps/1229380/header.jpg?t=1629399832",
];
var rpgUrl = [
  "https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/",
  "https://store.steampowered.com/app/367500/Dragons_Dogma_Dark_Arisen/",
  "https://store.steampowered.com/app/1096530/Solasta_Crown_of_the_Magister/",
  "https://store.steampowered.com/app/794260/Outward/",
  "https://store.steampowered.com/app/489830/The_Elder_Scrolls_V_Skyrim_Special_Edition/",
  "https://store.steampowered.com/app/1229380/Everhood/",
];

var fpsImg = [
  "https://cdn.cloudflare.steamstatic.com/steam/apps/379720/header.jpg?t=1593395083",
  "https://cdn.cloudflare.steamstatic.com/steam/apps/782330/header.jpg?t=1631811902",
  "https://cdn.cloudflare.steamstatic.com/steam/apps/594650/header.jpg?t=1629993728",
  "https://cdn.cloudflare.steamstatic.com/steam/apps/412020/header.jpg?t=1625576954"
];
var fpsUrl = [
  "https://store.steampowered.com/app/379720/DOOM/",
  "https://store.steampowered.com/app/782330/DOOM_Eternal/",
  "https://store.steampowered.com/app/594650/Hunt_Showdown/",
  "https://store.steampowered.com/app/412020/Metro_Exodus/"
];
var corridaImg = [
  "https://cdn.cloudflare.steamstatic.com/steam/apps/1293830/header.jpg?t=1622068013",
  "https://cdn.cloudflare.steamstatic.com/steam/apps/690790/header.jpg?t=1626343640",
  "https://cdn.cloudflare.steamstatic.com/steam/apps/244210/header.jpg?t=1618921795",
  "https://cdn.cloudflare.steamstatic.com/steam/apps/212480/header.jpg?t=1603129720",
  "https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/header.jpg?t=1640881911",
  
];

var corridaUrl = [
  "https://store.steampowered.com/app/1293830/Forza_Horizon_4/",
  "https://store.steampowered.com/app/690790/DiRT_Rally_20/",
  "https://store.steampowered.com/app/244210/Assetto_Corsa/",         "https://store.steampowered.com/app/212480/Sonic__AllStars_Racing_Transformed_Collection/",
  "https://store.steampowered.com/app/1551360/Forza_Horizon_5/"
];
var plataformaImg = [
  "https://cdn.cloudflare.steamstatic.com/steam/apps/268910/header.jpg?t=1589281999",
  "https://cdn.cloudflare.steamstatic.com/steam/apps/731490/header.jpg?t=1568841571",
  "https://cdn.cloudflare.steamstatic.com/steam/apps/996580/header.jpg?t=1588789018"
];
var plataformaUrl = [
  "https://store.steampowered.com/app/268910/Cuphead/",
  "https://store.steampowered.com/app/731490/Crash_Bandicoot_N_Sane_Trilogy/",
  "https://store.steampowered.com/app/996580/Spyro_Reignited_Trilogy/"
];
var rogueImg = ["https://cdn.cloudflare.steamstatic.com/steam/apps/1145360/header.jpg?t=1624463563",
                "https://cdn.cloudflare.steamstatic.com/steam/apps/1282730/header.jpg?t=1622216995"
                
                
  
];
var rogueUrl = ["https://store.steampowered.com/app/1145360/Hades/",
                 "https://store.steampowered.com/app/1282730/Loop_Hero/",
]

var terrorImg= ["https://cdn.cloudflare.steamstatic.com/steam/apps/883710/header.jpg?t=1608602727","https://cdn.cloudflare.steamstatic.com/steam/apps/1196590/header.jpg?t=1627344204"

]
var terrorUrl= ["https://store.steampowered.com/app/883710/Resident_Evil_2/",
                "https://store.steampowered.com/app/1196590/Resident_Evil_Village/",

]                
var lutaImg= ["https://cdn.cloudflare.steamstatic.com/steam/apps/976310/header.jpg?t=1607567250",
              "https://cdn.cloudflare.steamstatic.com/steam/apps/310950/header.jpg?t=1631697759",            
  
]
var lutaUrl= ["https://store.steampowered.com/app/976310/Mortal_Kombat11/",
  "https://store.steampowered.com/app/310950/Street_Fighter_V/",
  
]
var acaoImg=["https://cdn.cloudflare.steamstatic.com/steam/apps/230410/header.jpg?t=1631125421",
             "https://cdn.cloudflare.steamstatic.com/steam/apps/601150/header.jpg?t=1608599498",
             "https://cdn.cloudflare.steamstatic.com/steam/apps/985890/header.jpg?t=1626192580",
             "https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/header.jpg?t=1642526157",
             
  
]
var acaoUrl= ["https://store.steampowered.com/app/230410/Warframe/",
              "https://store.steampowered.com/app/601150/Devil_May_Cry_5/",
              "https://store.steampowered.com/app/985890/Streets_of_Rage_4/",
              "https://store.steampowered.com/app/1593500/God_of_War/"
              
  
]

//Variável para cada gênero
for (var i = 0; i < soulsLikeImg.length; i++) {
  soulsLike.innerHTML +=
    "<a href=" +
    soulsLikeUrl[i] +
    " target='_blank'><img class='imagemJogos' 'carousel() src=" +
    soulsLikeImg[i] +
    "></a>";
}
for (var i = 0; i < rpgImg.length; i++) {
  rpg.innerHTML +=
    "<a href=" +
    rpgUrl[i] +
    " target='_blank'><img class='imagemJogos' 'carousel()' src=" +
    rpgImg[i] +
    "></a>";
}
for (var i = 0; i < fpsImg.length; i++) {
  fps.innerHTML +=
    "<a href=" +
    fpsUrl[i] +
    " target='_blank'><img class='imagemJogos' 'carousel()' src=" +
    fpsImg[i] +
    "></a>";
}
for (var i = 0; i < corridaImg.length; i++) {
  corrida.innerHTML +=
    "<a href=" +
    corridaUrl[i] +
    " target='_blank'><img class='imagemJogos' 'carousel()' src=" +
    corridaImg[i] +
    "></a>";
}
for (var i = 0; i < plataformaImg.length; i++) {
  plataforma.innerHTML +=
    "<a href=" +
    plataformaUrl[i] +
    " target='_blank'><img class='imagemJogos' 'carousel()' src=" +
    plataformaImg[i] +
    "></a>";
}
for (var i = 0; i < rogueImg.length; i++) {
  rogue.innerHTML +=
    "<a href=" +
    rogueUrl[i] +
    " target='_blank'><img class='imagemJogos' 'carousel()' src=" +
    rogueImg[i] +
    "></a>";
}
for (var i = 0; i < terrorImg.length; i++) {
  terror.innerHTML +=
    "<a href=" +
    terrorUrl[i] +
    " target='_blank'><img class='imagemJogos' 'carousel()' src=" +
    terrorImg[i] +
    "></a>";
}
for (var i = 0; i < lutaImg.length; i++) {
  luta.innerHTML +=
    "<a href=" +
    lutaUrl[i] +
    " target='_blank'><img class='imagemJogos' 'carousel()' src=" +
    lutaImg[i] +
    "></a>";
}
for (var i = 0; i < acaoImg.length; i++) {
  acao.innerHTML +=
    "<a href=" +
    acaoUrl[i] +
    " target='_blank'><img class='imagemJogos' 'carousel()' src=" +
    acaoImg[i] +
    "></a>";
}