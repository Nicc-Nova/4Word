

//variables for textboxes
var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");

var box5 = document.getElementById("box5");
var box6 = document.getElementById("box6");
var box7 = document.getElementById("box7");
var box8 = document.getElementById("box8");

var box9 = document.getElementById("box9");
var box10 = document.getElementById("box10");
var box11 = document.getElementById("box11");
var box12 = document.getElementById("box12");

var box13 = document.getElementById("box13");
var box14 = document.getElementById("box14");
var box15 = document.getElementById("box15");
var box16 = document.getElementById("box16");

//4x4 array of textbox objects
const boxes=[
    [box1,box2,box3,box4],
    [box5,box6,box7,box8],
    [box9,box10,box11,box12],
    [box13,box14,box15,box16]
];

//create array of answers from ans.txt
var answers = ["acid","acid", "acre", "aged", "aide", "akin", "alas", "ally", "also", "alto", "amid", "anal", "anna", "anti", "apex",
 "arch", "area", "army", "atom", "atop", "aunt", "aura", "auto", "avid", "away", "axis", "baby", "bach", "back", "bail", "bait",
  "bake", "bald", "ball", "band", "bang", "bank", "bare", "bark", "barn", "base", "bass", "bath", "bats", "beam", "bean", "bear",
   "beat", "beck", "beef", "been", "beer", "bell", "belt", "bend", "bent", "best", "beta", "beth", "bias", "bike", "bill", "bind",
    "bird", "bite", "blew", "bloc", "blog", "blow", "blue", "blur", "boat", "body", "boil", "bold", "bolt", "bomb", "bond", 
    "bone", "book", "boom", "boon", "boot", "bore", "born", "boss", "both", "bout", "bowl", "brad", "bred", "brew", "brow", 
    "buck", "bulb", "bulk", "bull", "bump", "burn", "bury", "bush", "bust", "busy", "butt", "buzz", "cafe", "cage", "cake", 
    "calf", "call", "calm", "came", "camp", "cane", "cape", "card", "care", "carl", "carr", "cart", "case", "cash", "cast", 
    "cave", "cell", "cent", "chad", "chap", "chat", "chef", "chic", "chin", "chip", "chop", "cite", "city", "clad", "clan", 
    "clay", "clip", "club", "clue", "coal", "coat", "coca", "code", "coil", "coin", "coke", "cola", "cold", "cole", "come", 
    "cone", "conn", "cook", "cool", "cope", "copy", "cord", "core", "cork", "corn", "cost", "coup", "cove", "crap", "crew", 
    "crop", "crow", "cube", "cult", "curb", "cure", "cute", "dale", "dame", "damn", "damp", "dare", "dark", "dash", "data", 
    "date", "dawn", "days", "dead", "deaf", "deal", "dean", "dear", "debt", "deck", "deed", "deep", "deer", "dell", "demo", 
    "dent", "deny", "desk", "dial", "dice", "dick", "diet", "dire", "dirt", "disc", "dish", "disk", "dive", "dock", "does", 
    "dole", "doll", "dome", "done", "doom", "door", "dose", "dove", "down", "drag", "draw", "drew", "drop", "drug", "drum", 
    "dual", "duck", "duff", "duke", "dull", "duly", "dumb", "dump", "dusk", "dust", "duty", "each", "earl", "earn", "ease", 
    "east", "easy", "eats", "echo", "edge", "edit", "else", "envy", "epic", "euro", "even", "ever", "evil", "exam", "exit", 
    "expo", "eyed", "face", "fact", "fade", "fail", "fair", "fake", "fall", "fame", "fare", "farm", "fast", "fate", "fear", 
    "feat", "feed", "feel", "feet", "fell", "felt", "file", "fill", "film", "find", "fine", "fire", "firm", "fish", "fist", 
    "five", "flag", "flat", "fled", "flee", "flew", "flex", "flip", "flow", "flux", "foam", "foil", "fold", "folk", "fond", 
    "font", "food", "fool", "foot", "ford", "fore", "fork", "form", "fort", "foul", "four", "free", "frog", "from", "fuck", 
    "fuel", "full", "fund", "fury", "fuse", "fuss", "gain", "gala", "gale", "gall", "game", "gang", "gate", "gave", "gaze", 
    "gear", "gene", "gift", "gill", "girl", "give", "glad", "glen", "glow", "glue", "goal", "goat", "goes", "gold", "golf", 
    "gone", "good", "gore", "gown", "grab", "gram", "gray", "grew", "grey", "grid", "grim", "grin", "grip", "grow", "gulf", 
    "guru", "hail", "hair", "hale", "half", "hall", "halt", "hand", "hang", "hank", "hard", "harm", "hart", "hate", "haul", 
    "have", "hawk", "head", "heal", "heap", "hear", "heat", "heel", "heir", "held", "hell", "helm", "help", "herb", "herd", 
    "here", "hero", "hers", "hide", "high", "hike", "hill", "hint", "hire", "hold", "hole", "holt", "holy", "home", "hood", 
    "hook", "hope", "horn", "hose", "host", "hour", "huge", "hull", "hung", "hunt", "hurt", "hype", "icon", "idea", "idle", 
    "idol", "inch", "info", "into", "iris", "iron", "isle", "item", "jack", "jail", "jake", "jane", "java", "jazz", "jean", 
    "jeep", "jill", "jizz", "joey", "john", "join", "joke", "josh", "jump", "junk", "jury", "just", "keen", "keep", "kemp", 
    "kent", "kept", "khan", "kick", "kill", "kind", "king", "kirk", "kiss", "kite", "knee", "knew", "knit", "knot", "know", 
    "kohl", "Kyle", "lace", "lack", "lady", "laid", "lake", "lamb", "lamp", "land", "lane", "lang", "last", "late", "lava", 
    "lawn", "lazy", "lead", "leaf", "leak", "lean", "leap", "left", "lend", "lens", "lent", "less", "lest", "levy", "lied", 
    "lien", "life", "lift", "like", "lily", "limb", "lime", "limp", "line", "link", "lion", "list", "live", "load", "loan", 
    "lock", "loft", "logo", "lone", "long", "look", "loop", "lord", "lose", "loss", "lost", "loud", "love", "luck", "lump", 
    "lung", "lure", "lush", "lust", "made", "maid", "mail", "main", "make", "male", "mall", "mama", "many", "marc", "mark", 
    "mart", "mask", "mass", "mate", "matt", "mayo", "maze", "mead", "meal", "mean", "meat", "meet", "Mega", "melt", "memo", 
    "menu", "mere", "mesa", "mesh", "mess", "mice", "mick", "mike", "mild", "mile", "milk", "mill", "mind", "mine", "mini", 
    "mint", "miss", "mist", "mock", "mode", "mold", "monk", "mood", "moon", "more", "moss", "most", "move", "much", "must", 
    "myth", "nail", "name", "navy", "near", "neat", "neck", "need", "nest", "news", "next", "nice", "nick", "nine", "node", 
    "none", "noon", "norm", "nose", "note", "nova", "nude", "nuts", "oath", "obey", "odds", "odor", "okay", "once", "only", 
    "onto", "open", "oral", "oreo", "otto", "ours", "oval", "oven", "over", "pace", "pack", "pact", "page", "paid", "pain", "pair", 
    "pale", "palm", "papa", "para", "park", "part", "pass", "past", "path", "peak", "peat", "peck", "peel", "peer", "pest", 
    "pick", "pier", "pike", "pile", "pill", "pine", "pink", "pint", "pipe", "pity", "plan", "play", "plea", "plot", "plug", 
    "plus", "poem", "poet", "pole", "poll", "polo", "poly", "pond", "pony", "pool", "poor", "pope", "pork", "port", "pose", 
    "post", "pour", "pray", "prep", "prey", "prof", "prop", "pull", "pulp", "pump", "punk", "pure", "push", "quid", "quit", 
    "quiz", "race", "rack", "rage", "raid", "rail", "rain", "ramp", "rang", "rank", "rape", "rare", "rash", "rate", "rave", 
    "read", "real", "reap", "rear", "reed", "reef", "reel", "rely", "rent", "rest", "rice", "rich", "rick", "ride", "ring", 
    "riot", "ripe", "rise", "risk", "rite", "ritz", "road", "roar", "rock", "rode", "role", "roll", "roof", "room", "root", 
    "rope", "rose", "ruby", "rude", "ruin", "rule", "rush", "rust", "ruth", "sack", "safe", "saga", "sage", "said", "sail", 
    "sake", "sale", "salt", "same", "sand", "sang", "sank", "save", "scan", "scar", "scot", "seal", "seat", "seed", "seek", 
    "seem", "seen", "self", "sell", "semi", "send", "sent", "sept", "sexy", "shah", "shed", "ship", "shit", "shoe", "shop", 
    "shot", "show", "shut", "sick", "side", "sigh", "sign", "silk", "sing", "sink", "site", "size", "skin", "skip", "slab", 
    "slam", "slap", "slid", "slim", "slip", "slot", "slow", "snap", "snow", "soap", "soar", "soda", "sofa", "soft", "soil", 
    "sold", "sole", "solo", "some", "song", "soon", "sore", "sort", "soul", "soup", "sour", "span", "spin", "spit", "spot", 
    "spun", "spur", "star", "stay", "stem", "step", "stir", "stop", "such", "suck", "suit", "sung", "sunk", "sure", "surf", 
    "swan", "swap", "sway", "swim", "tack", "tail", "take", "tale", "talk", "tall", "tank", "tape", "taps", "task", "taxi", 
    "team", "tear", "tech", "teen", "tell", "tend", "tent", "term", "test", "text", "than", "that", "them", "then", "they", 
    "thin", "this", "thou", "thus", "tick", "tide", "tidy", "tier", "tile", "till", "tilt", "time", "tiny", "tire", "toby", 
    "told", "toll", "tomb", "tone", "tony", "took", "tool", "tops", "tore", "torn", "tort", "toss", "tour", "town", "trap", 
    "tray", "tree", "trek", "trim", "trio", "trip", "troy", "true", "tube", "tuck", "tuna", "tune", "turf", "turn", "twin", 
    "type", "ugly", "unit", "upon", "urge", "used", "user", "vain", "vary", "vast", "veil", "vein", "verb", "very", "vest", 
    "veto", "vice", "view", "vine", "visa", "void", "vote", "wade", "wage", "wait", "wake", "walk", "wall", "want", "ward", 
    "ware", "warm", "warn", "wary", "wash", "watt", "wave", "ways", "weak", "wear", "weed", "week", "well", "went", "were", 
    "west", "what", "when", "whip", "whom", "wide", "wife", "wild", "will", "wind", "wine", "wing", "wipe", "wire", "wise", 
    "wish", "with", "woke", "wolf", "wood", "wool", "word", "wore", "work", "worm", "worn", "wrap", "yang", "yard", "yarn", 
    "yeah", "year", "your", "yuan", "zero", "zinc", "zone", "zoom", "zoom"];

// array showing if entries correct or not
let entries = [
    [true, true, true, true],
    [true, true, true, true],
    [true, true, true, true],
    [true, true, true, true]
];
    //check answer button
    //iterate thru array and create 8 words
    //check words against database
    //change incorrect words to red
    //if all are correct change all to green
var checkAns = document.getElementById("checkAns");

checkAns.onclick = function() {
    //need to clear past wrong answer status
    for(let i=0;i<entries.length;i++){
        for(let j=0;j<entries[i].length;j++){
            entries[i][j]=true;
            boxes[i][j].style.background = '#363636';
        }
    }

    for(let i=0; i<boxes.length; i++){/*for each row*/
        let word='';
        for(let j=0; j<boxes[i].length; j++){
            word+=boxes[i][j].value;
        }
        //alert(word);
        if(findAns(word)==true){
            for(let j=0; j<boxes[i].length; j++){
                if(entries[i][j]==true){
                    boxes[i][j].style.background = '#00cc00';
                }
            }
        } else{
            for(let j=0; j<boxes[i].length; j++){
                //need to mark red
                entries[i][j]=false;
                boxes[i][j].style.background = '#e60000';
            }
        }
    }
    //do columns
    for(let i=0; i<boxes.length; i++){/*for each column*/
        let word='';
        for(let j=0; j<boxes[i].length; j++){
            word+=boxes[j][i].value;
        }
        //alert(word);
        if(findAns(word)==true){
            for(let j=0; j<boxes[i].length; j++){
                if(entries[j][i]==true){
                    boxes[j][i].style.background = '#00cc00';
                }
            }
        } else{
            for(let j=0; j<boxes[i].length; j++){
                //need to mark red
                entries[j][i]=false;
                boxes[j][i].style.background = '#e60000';
            }
        }
    }
    //check if all correct
    let done = true;
    for(let i=0; i<entries.length; i++){
        for(let j=0; j<entries[i].length; j++){
            if(entries[i][j]==false){
                done=false;
            }
        }
    }
    if(done){
        alert("Nice job! You solved the puzzle.")
    }
};
  


//new game button
    //clear all boxes
    // generate a new 4 letter word and fill boxes 1-4
var newGame = document.getElementById("newGame");
newGame.onclick = function() {
    for(let i=0;i<entries.length;i++){
        for(let j=0;j<entries[i].length;j++){
            entries[i][j]=true;
            boxes[i][j].style.background = '#363636';
            boxes[i][j].value = "";
        }
    }
    let word = answers[Math.floor(Math.random() * 1001) + 1];
    boxes[0][0].value=word[0]
    boxes[0][1].value=word[1]
    boxes[0][2].value=word[2]
    boxes[0][3].value=word[3]
}

//binary search for answer
function findAns(word){
    //alert('checking...');
    let mid=-1;
    let first = 0;
    let last = 1001;
    let lastMid=-2;
    while(mid!=lastMid){
        lastMid=mid;
        mid=Math.round((first+last)/2);
        //alert(mid);
        //alert(word.localeCompare(answers[mid]));
        if(word.localeCompare(answers[mid])>0){
            first=mid;
            //alert('up');
        } else if (word.localeCompare(answers[mid])<0) {
            last=mid;
            //alert('down');
        } else {
            //alert('found');
            return true;
        }
    }
    if(word===answers[mid]){
        return true;
    } else{
        //alert('not found');
        return false;
    }
}