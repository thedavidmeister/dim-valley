// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('colours.ui_gradients');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('camel_snake_kebab.core');
goog.require('colours.config');
colours.ui_gradients.stops = (function colours$ui_gradients$stops(var_args){
var args21525 = [];
var len__8981__auto___21529 = arguments.length;
var i__8982__auto___21530 = (0);
while(true){
if((i__8982__auto___21530 < len__8981__auto___21529)){
args21525.push((arguments[i__8982__auto___21530]));

var G__21531 = (i__8982__auto___21530 + (1));
i__8982__auto___21530 = G__21531;
continue;
} else {
}
break;
}

var G__21527 = args21525.length;
switch (G__21527) {
case 0:
return colours.ui_gradients.stops.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return colours.ui_gradients.stops.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21525.length)].join('')));

}
});

colours.ui_gradients.stops.cljs$core$IFn$_invoke$arity$0 = (function (){
return colours.ui_gradients.stops.cljs$core$IFn$_invoke$arity$1(colours.config.gradient_name);
});

colours.ui_gradients.stops.cljs$core$IFn$_invoke$arity$1 = (function (name){
var parse = JSON.parse;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__21528 = "[\n    {\n        \"name\": \"Purple Love\",\n        \"colors\": [\"#cc2b5e\", \"#753a88\"]\n    },\n    {\n        \"name\": \"Sexy Blue\",\n        \"colors\": [\"#2193b0\", \"#6dd5ed\"]\n    },\n    {\n        \"name\": \"Blooker20\",\n        \"colors\": [\"#e65c00\", \"#F9D423\"]\n    },\n    {\n        \"name\": \"Sea Blue\",\n        \"colors\": [\"#2b5876\", \"#4e4376\"]\n    },\n    {\n        \"name\": \"Nimvelo\",\n        \"colors\": [\"#314755\", \"#26a0da\"]\n    },\n    {\n        \"name\": \"Hazel\",\n        \"colors\": [\"#77A1D3\", \"#79CBCA\", \"#E684AE\"]\n    },\n    {\n        \"name\": \"Noon to Dusk\",\n        \"colors\": [\"#ff6e7f\", \"#bfe9ff\"]\n    },\n    {\n        \"name\": \"YouTube\",\n        \"colors\": [\"#e52d27\", \"#b31217\"]\n    },\n    {\n        \"name\": \"Cool Brown\",\n        \"colors\": [\"#603813\", \"#b29f94\"]\n    },\n    {\n        \"name\": \"Harmonic Energy\",\n        \"colors\": [\"#16A085\", \"#F4D03F\"]\n    },\n    {\n        \"name\": \"Playing with Reds\",\n        \"colors\": [\"#D31027\", \"#EA384D\"]\n    },\n    {\n        \"name\": \"Sunny Days\",\n        \"colors\": [\"#EDE574\", \"#E1F5C4\"]\n    },\n    {\n        \"name\": \"Green Beach\",\n        \"colors\": [\"#02AAB0\", \"#00CDAC\"]\n    },\n    {\n        \"name\": \"Intuitive Purple\",\n        \"colors\": [\"#DA22FF\", \"#9733EE\"]\n    },\n    {\n        \"name\": \"Emerald Water\",\n        \"colors\": [\"#348F50\", \"#56B4D3\"]\n    },\n    {\n        \"name\": \"Lemon Twist\",\n        \"colors\": [\"#3CA55C\", \"#B5AC49\"]\n    },\n    {\n        \"name\": \"Monte Carlo\",\n        \"colors\": [\"#CC95C0\", \"#DBD4B4\", \"#7AA1D2\"]\n    },\n    {\n        \"name\": \"Horizon\",\n        \"colors\": [\"#003973\", \"#E5E5BE\"]\n    },\n    {\n        \"name\": \"Rose Water\",\n        \"colors\": [\"#E55D87\", \"#5FC3E4\"]\n    },\n    {\n        \"name\": \"Frozen\",\n        \"colors\": [\"#403B4A\", \"#E7E9BB\"]\n    },\n    {\n        \"name\": \"Mango Pulp\",\n        \"colors\": [\"#F09819\", \"#EDDE5D\"]\n    },\n    {\n        \"name\": \"Bloody Mary\",\n        \"colors\": [\"#FF512F\", \"#DD2476\"]\n    },\n    {\n        \"name\": \"Aubergine\",\n        \"colors\": [\"#AA076B\", \"#61045F\"]\n    },\n    {\n        \"name\": \"Aqua Marine\",\n        \"colors\": [\"#1A2980\", \"#26D0CE\"]\n    },\n    {\n        \"name\": \"Sunrise\",\n        \"colors\": [\"#FF512F\", \"#F09819\"]\n    },\n    {\n        \"name\": \"Purple Paradise\",\n        \"colors\": [\"#1D2B64\", \"#F8CDDA\"]\n    },\n    {\n        \"name\": \"Stripe\",\n        \"colors\": [\"#1FA2FF\", \"#12D8FA\", \"#A6FFCB\"]\n    },\n    {\n        \"name\": \"Sea Weed\",\n        \"colors\": [\"#4CB8C4\", \"#3CD3AD\"]\n    },\n    {\n        \"name\": \"Pinky\",\n        \"colors\": [\"#DD5E89\", \"#F7BB97\"]\n    },\n    {\n        \"name\": \"Cherry\",\n        \"colors\": [\"#EB3349\", \"#F45C43\"]\n    },\n    {\n        \"name\": \"Mojito\",\n        \"colors\": [\"#1D976C\", \"#93F9B9\"]\n    },\n    {\n        \"name\": \"Juicy Orange\",\n        \"colors\": [\"#FF8008\", \"#FFC837\"]\n    },\n    {\n        \"name\": \"Mirage\",\n        \"colors\": [\"#16222A\", \"#3A6073\"]\n    },\n    {\n        \"name\": \"Steel Gray\",\n        \"colors\": [\"#1F1C2C\", \"#928DAB\"]\n    },\n    {\n        \"name\": \"Kashmir\",\n        \"colors\": [\"#614385\", \"#516395\"]\n    },\n    {\n        \"name\": \"Electric Violet\",\n        \"colors\": [\"#4776E6\", \"#8E54E9\"]\n    },\n    {\n        \"name\": \"Venice Blue\",\n        \"colors\": [\"#085078\", \"#85D8CE\"]\n    },\n    {\n        \"name\": \"Bora Bora\",\n        \"colors\": [\"#2BC0E4\", \"#EAECC6\"]\n    },\n    {\n        \"name\": \"Moss\",\n        \"colors\": [\"#134E5E\", \"#71B280\"]\n    },\n    {\n        \"name\": \"Shroom Haze\",\n        \"colors\": [\"#5C258D\", \"#4389A2\"]\n    },\n    {\n        \"name\": \"Mystic\",\n        \"colors\": [\"#757F9A\", \"#D7DDE8\"]\n    },\n    {\n        \"name\": \"Midnight City\",\n        \"colors\": [\"#232526\", \"#414345\"]\n    },\n    {\n        \"name\": \"Sea Blizz\",\n        \"colors\": [\"#1CD8D2\", \"#93EDC7\"]\n    },\n    {\n        \"name\": \"Opa\",\n        \"colors\": [\"#3D7EAA\", \"#FFE47A\"]\n    },\n    {\n        \"name\": \"Titanium\",\n        \"colors\": [\"#283048\", \"#859398\"]\n    },\n    {\n        \"name\": \"Mantle\",\n        \"colors\": [\"#24C6DC\", \"#514A9D\"]\n    },\n    {\n        \"name\": \"Dracula\",\n        \"colors\": [\"#DC2424\", \"#4A569D\"]\n    },\n    {\n        \"name\": \"Peach\",\n        \"colors\": [\"#ED4264\", \"#FFEDBC\"]\n    },\n    {\n        \"name\": \"Moonrise\",\n        \"colors\": [\"#DAE2F8\", \"#D6A4A4\"]\n    },\n    {\n        \"name\": \"Clouds\",\n        \"colors\": [\"#ECE9E6\", \"#FFFFFF\"]\n    },\n    {\n        \"name\": \"Stellar\",\n        \"colors\": [\"#7474BF\", \"#348AC7\"]\n    },\n    {\n        \"name\": \"Bourbon\",\n        \"colors\": [\"#EC6F66\", \"#F3A183\"]\n    },\n    {\n        \"name\": \"Calm Darya\",\n        \"colors\": [\"#5f2c82\", \"#49a09d\"]\n    },\n    {\n        \"name\": \"Influenza\",\n        \"colors\": [\"#C04848\", \"#480048\"]\n    },\n    {\n        \"name\": \"Shrimpy\",\n        \"colors\": [\"#e43a15\", \"#e65245\"]\n    },\n    {\n        \"name\": \"Army\",\n        \"colors\": [\"#414d0b\", \"#727a17\"]\n    },\n    {\n        \"name\": \"Miaka\",\n        \"colors\": [\"#FC354C\", \"#0ABFBC\"]\n    },\n    {\n        \"name\": \"Pinot Noir\",\n        \"colors\": [\"#4b6cb7\", \"#182848\"]\n    },\n    {\n        \"name\": \"Day Tripper\",\n        \"colors\": [\"#f857a6\", \"#ff5858\"]\n    },\n    {\n        \"name\": \"Namn\",\n        \"colors\": [\"#a73737\", \"#7a2828\"]\n    },\n    {\n        \"name\": \"Blurry Beach\",\n        \"colors\": [\"#d53369\", \"#cbad6d\"]\n    },\n    {\n        \"name\": \"Vasily\",\n        \"colors\": [\"#e9d362\", \"#333333\"]\n    },\n    {\n        \"name\": \"A Lost Memory\",\n        \"colors\": [\"#DE6262\", \"#FFB88C\"]\n    },\n    {\n        \"name\": \"Petrichor\",\n        \"colors\": [\"#666600\", \"#999966\"]\n    },\n    {\n        \"name\": \"Jonquil\",\n        \"colors\": [\"#FFEEEE\", \"#DDEFBB\"]\n    },\n    {\n        \"name\": \"Sirius Tamed\",\n        \"colors\": [\"#EFEFBB\", \"#D4D3DD\"]\n    },\n    {\n        \"name\": \"Kyoto\",\n        \"colors\": [\"#c21500\", \"#ffc500\"]\n    },\n    {\n        \"name\": \"Misty Meadow\",\n        \"colors\": [\"#215f00\", \"#e4e4d9\"]\n    },\n    {\n        \"name\": \"Aqualicious\",\n        \"colors\": [\"#50C9C3\", \"#96DEDA\"]\n    },\n    {\n        \"name\": \"Moor\",\n        \"colors\": [\"#616161\", \"#9bc5c3\"]\n    },\n    {\n        \"name\": \"Almost\",\n        \"colors\": [\"#ddd6f3\", \"#faaca8\"]\n    },\n    {\n        \"name\": \"Forever Lost\",\n        \"colors\": [\"#5D4157\", \"#A8CABA\"]\n    },\n    {\n        \"name\": \"Winter\",\n        \"colors\": [\"#E6DADA\", \"#274046\"]\n    },\n    {\n        \"name\": \"Autumn\",\n        \"colors\": [\"#DAD299\", \"#B0DAB9\"]\n    },\n    {\n        \"name\": \"Candy\",\n        \"colors\": [\"#D3959B\", \"#BFE6BA\"]\n    },\n    {\n        \"name\": \"Reef\",\n        \"colors\": [\"#00d2ff\", \"#3a7bd5\"]\n    },\n    {\n        \"name\": \"The Strain\",\n        \"colors\": [\"#870000\", \"#190A05\"]\n    },\n    {\n        \"name\": \"Dirty Fog\",\n        \"colors\": [\"#B993D6\", \"#8CA6DB\"]\n    },\n    {\n        \"name\": \"Earthly\",\n        \"colors\": [\"#649173\", \"#DBD5A4\"]\n    },\n    {\n        \"name\": \"Virgin\",\n        \"colors\": [\"#C9FFBF\", \"#FFAFBD\"]\n    },\n    {\n        \"name\": \"Ash\",\n        \"colors\": [\"#606c88\", \"#3f4c6b\"]\n    },\n    {\n        \"name\": \"Shadow Night\",\n        \"colors\": [\"#000000\", \"#53346D\"]\n    },\n    {\n        \"name\": \"Cherryblossoms\",\n        \"colors\": [\"#FBD3E9\", \"#BB377D\"]\n    },\n    {\n        \"name\": \"Parklife\",\n        \"colors\": [\"#ADD100\", \"#7B920A\"]\n    },\n    {\n        \"name\": \"Dance To Forget\",\n        \"colors\": [\"#FF4E50\", \"#F9D423\"]\n    },\n    {\n        \"name\": \"Starfall\",\n        \"colors\": [\"#F0C27B\", \"#4B1248\"]\n    },\n    {\n        \"name\": \"Red Mist\",\n        \"colors\": [\"#000000\", \"#e74c3c\"]\n    },\n    {\n        \"name\": \"Teal Love\",\n        \"colors\": [\"#AAFFA9\", \"#11FFBD\"]\n    },\n    {\n        \"name\": \"Neon Life\",\n        \"colors\": [\"#B3FFAB\", \"#12FFF7\"]\n    },\n    {\n        \"name\": \"Man of Steel\",\n        \"colors\": [\"#780206\", \"#061161\"]\n    },\n    {\n        \"name\": \"Amethyst\",\n        \"colors\": [\"#9D50BB\", \"#6E48AA\"]\n    },\n    {\n        \"name\": \"Cheer Up Emo Kid\",\n        \"colors\": [\"#556270\", \"#FF6B6B\"]\n    },\n    {\n        \"name\": \"Shore\",\n        \"colors\": [\"#70e1f5\", \"#ffd194\"]\n    },\n    {\n        \"name\": \"Facebook Messenger\",\n        \"colors\": [\"#00c6ff\", \"#0072ff\"]\n    },\n    {\n        \"name\": \"SoundCloud\",\n        \"colors\": [\"#fe8c00\", \"#f83600\"]\n    },\n    {\n        \"name\": \"Behongo\",\n        \"colors\": [\"#52c234\", \"#061700\"]\n    },\n    {\n        \"name\": \"ServQuick\",\n        \"colors\": [\"#485563\", \"#29323c\"]\n    },\n    {\n        \"name\": \"Friday\",\n        \"colors\": [\"#83a4d4\", \"#b6fbff\"]\n    },\n    {\n        \"name\": \"Martini\",\n        \"colors\": [\"#FDFC47\", \"#24FE41\"]\n    },\n    {\n        \"name\": \"Metallic Toad\",\n        \"colors\": [\"#abbaab\", \"#ffffff\"]\n    },\n    {\n        \"name\": \"Between The Clouds\",\n        \"colors\": [\"#73C8A9\", \"#373B44\"]\n    },\n    {\n        \"name\": \"Crazy Orange I\",\n        \"colors\": [\"#D38312\", \"#A83279\"]\n    },\n    {\n        \"name\": \"Hersheys\",\n        \"colors\": [\"#1e130c\", \"#9a8478\"]\n    },\n    {\n        \"name\": \"Talking To Mice Elf\",\n        \"colors\": [\"#948E99\", \"#2E1437\"]\n    },\n    {\n        \"name\": \"Purple Bliss\",\n        \"colors\": [\"#360033\", \"#0b8793\"]\n    },\n    {\n        \"name\": \"Predawn\",\n        \"colors\": [\"#FFA17F\", \"#00223E\"]\n    },\n    {\n        \"name\": \"Endless River\",\n        \"colors\": [\"#43cea2\", \"#185a9d\"]\n    },\n    {\n        \"name\": \"Pastel Orange at the Sun\",\n        \"colors\": [\"#ffb347\", \"#ffcc33\"]\n    },\n    {\n        \"name\": \"Twitch\",\n        \"colors\": [\"#6441A5\", \"#2a0845\"]\n    },\n    {\n        \"name\": \"Atlas\",\n        \"colors\": [\"#FEAC5E\", \"#C779D0\", \"#4BC0C8\"]\n    },\n    {\n        \"name\": \"Instagram\",\n        \"colors\": [\"#833ab4\", \"#fd1d1d\", \"#fcb045\"]\n    },\n    {\n        \"name\": \"Flickr\",\n        \"colors\": [\"#ff0084\", \"#33001b\"]\n    },\n    {\n        \"name\": \"Vine\",\n        \"colors\": [\"#00bf8f\", \"#001510\"]\n    },\n    {\n        \"name\": \"Turquoise flow\",\n        \"colors\": [\"#136a8a\", \"#267871\"]\n    },\n    {\n        \"name\": \"Portrait\",\n        \"colors\": [\"#8e9eab\", \"#eef2f3\"]\n    },\n    {\n        \"name\": \"Virgin America\",\n        \"colors\": [\"#7b4397\", \"#dc2430\"]\n    },\n    {\n        \"name\": \"Koko Caramel\",\n        \"colors\": [\"#D1913C\", \"#FFD194\"]\n    },\n    {\n        \"name\": \"Fresh Turboscent\",\n        \"colors\": [\"#F1F2B5\", \"#135058\"]\n    },\n    {\n        \"name\": \"Green to dark\",\n        \"colors\": [\"#6A9113\", \"#141517\"]\n    },\n    {\n        \"name\": \"Ukraine\",\n        \"colors\": [\"#004FF9\", \"#FFF94C\"]\n    },\n    {\n        \"name\": \"Curiosity blue\",\n        \"colors\": [\"#525252\", \"#3d72b4\"]\n    },\n    {\n        \"name\": \"Dark Knight\",\n        \"colors\": [\"#BA8B02\", \"#181818\"]\n    },\n    {\n        \"name\": \"Piglet\",\n        \"colors\": [\"#ee9ca7\", \"#ffdde1\"]\n    },\n    {\n        \"name\": \"Lizard\",\n        \"colors\": [\"#304352\", \"#d7d2cc\"]\n    },\n    {\n        \"name\": \"Sage Persuasion\",\n        \"colors\": [\"#CCCCB2\", \"#757519\"]\n    },\n    {\n        \"name\": \"Between Night and Day\",\n        \"colors\": [\"#2c3e50\", \"#3498db\"]\n    },\n    {\n        \"name\": \"Timber\",\n        \"colors\": [\"#fc00ff\", \"#00dbde\"]\n    },\n    {\n        \"name\": \"Passion\",\n        \"colors\": [\"#e53935\", \"#e35d5b\"]\n    },\n    {\n        \"name\": \"Clear Sky\",\n        \"colors\": [\"#005C97\", \"#363795\"]\n    },\n    {\n        \"name\": \"Master Card\",\n        \"colors\": [\"#f46b45\", \"#eea849\"]\n    },\n    {\n        \"name\": \"Back To Earth\",\n        \"colors\": [\"#00C9FF\", \"#92FE9D\"]\n    },\n    {\n        \"name\": \"Deep Purple\",\n        \"colors\": [\"#673AB7\", \"#512DA8\"]\n    },\n    {\n        \"name\": \"Little Leaf\",\n        \"colors\": [\"#76b852\", \"#8DC26F\"]\n    },\n    {\n        \"name\": \"Netflix\",\n        \"colors\": [\"#8E0E00\", \"#1F1C18\"]\n    },\n    {\n        \"name\": \"Light Orange\",\n        \"colors\": [\"#FFB75E\", \"#ED8F03\"]\n    },\n    {\n        \"name\": \"Green and Blue\",\n        \"colors\": [\"#c2e59c\", \"#64b3f4\"]\n    },\n    {\n        \"name\": \"Poncho\",\n        \"colors\": [\"#403A3E\", \"#BE5869\"]\n    },\n    {\n        \"name\": \"Back to the Future\",\n        \"colors\": [\"#C02425\", \"#F0CB35\"]\n    },\n    {\n        \"name\": \"Blush\",\n        \"colors\": [\"#B24592\", \"#F15F79\"]\n    },\n    {\n        \"name\": \"Inbox\",\n        \"colors\": [\"#457fca\", \"#5691c8\"]\n    },\n    {\n        \"name\": \"Purplin\",\n        \"colors\": [\"#6a3093\", \"#a044ff\"]\n    },\n    {\n        \"name\": \"Pale Wood\",\n        \"colors\": [\"#eacda3\", \"#d6ae7b\"]\n    },\n    {\n        \"name\": \"Haikus\",\n        \"colors\": [\"#fd746c\", \"#ff9068\"]\n    },\n    {\n        \"name\": \"Pizelex\",\n        \"colors\": [\"#114357\", \"#F29492\"]\n    },\n    {\n        \"name\": \"Joomla\",\n        \"colors\": [\"#1e3c72\", \"#2a5298\"]\n    },\n    {\n        \"name\": \"Christmas\",\n        \"colors\": [\"#2F7336\", \"#AA3A38\"]\n    },\n    {\n        \"name\": \"Minnesota Vikings\",\n        \"colors\": [\"#5614B0\", \"#DBD65C\"]\n    },\n    {\n        \"name\": \"Miami Dolphins\",\n        \"colors\": [\"#4DA0B0\", \"#D39D38\"]\n    },\n    {\n        \"name\": \"Forest\",\n        \"colors\": [\"#5A3F37\", \"#2C7744\"]\n    },\n    {\n        \"name\": \"Nighthawk\",\n        \"colors\": [\"#2980b9\", \"#2c3e50\"]\n    },\n    {\n        \"name\": \"Superman\",\n        \"colors\": [\"#0099F7\", \"#F11712\"]\n    },\n    {\n        \"name\": \"Suzy\",\n        \"colors\": [\"#834d9b\", \"#d04ed6\"]\n    },\n    {\n        \"name\": \"Dark Skies\",\n        \"colors\": [\"#4B79A1\", \"#283E51\"]\n    },\n    {\n        \"name\": \"Deep Space\",\n        \"colors\": [\"#000000\", \"#434343\"]\n    },\n    {\n        \"name\": \"Decent\",\n        \"colors\": [\"#4CA1AF\", \"#C4E0E5\"]\n    },\n    {\n        \"name\": \"Colors Of Sky\",\n        \"colors\": [\"#E0EAFC\", \"#CFDEF3\"]\n    },\n    {\n        \"name\": \"Purple White\",\n        \"colors\": [\"#BA5370\", \"#F4E2D8\"]\n    },\n    {\n        \"name\": \"Ali\",\n        \"colors\": [\"#ff4b1f\", \"#1fddff\"]\n    },\n    {\n        \"name\": \"Alihossein\",\n        \"colors\": [\"#f7ff00\", \"#db36a4\"]\n    },\n    {\n        \"name\": \"Shahabi\",\n        \"colors\": [\"#a80077\", \"#66ff00\"]\n    },\n    {\n        \"name\": \"Red Ocean\",\n        \"colors\": [\"#1D4350\", \"#A43931\"]\n    },\n    {\n        \"name\": \"Tranquil\",\n        \"colors\": [\"#EECDA3\", \"#EF629F\"]\n    },\n    {\n        \"name\": \"Transfile\",\n        \"colors\": [\"#16BFFD\", \"#CB3066\"]\n    },\n\n    {\n        \"name\": \"Sylvia\",\n        \"colors\": [\"#ff4b1f\", \"#ff9068\"]\n    },\n    {\n        \"name\": \"Sweet Morning\",\n        \"colors\": [\"#FF5F6D\", \"#FFC371\"]\n    },\n    {\n        \"name\": \"Politics\",\n        \"colors\": [\"#2196f3\", \"#f44336\"]\n    },\n    {\n        \"name\": \"Bright Vault\",\n        \"colors\": [\"#00d2ff\", \"#928DAB\"]\n    },\n    {\n        \"name\": \"Solid Vault\",\n        \"colors\": [\"#3a7bd5\", \"#3a6073\"]\n    },\n    {\n        \"name\": \"Sunset\",\n        \"colors\": [\"#0B486B\", \"#F56217\"]\n    },\n    {\n        \"name\": \"Grapefruit Sunset\",\n        \"colors\": [\"#e96443\", \"#904e95\"]\n    },\n    {\n        \"name\": \"Deep Sea Space\",\n        \"colors\": [\"#2C3E50\", \"#4CA1AF\"]\n    },\n    {\n        \"name\": \"Dusk\",\n        \"colors\": [\"#2C3E50\", \"#FD746C\"]\n    },\n    {\n        \"name\": \"Minimal Red\",\n        \"colors\": [\"#F00000\", \"#DC281E\"]\n    },\n    {\n        \"name\": \"Royal\",\n        \"colors\": [\"#141E30\", \"#243B55\"]\n    },\n    {\n        \"name\": \"Mauve\",\n        \"colors\": [\"#42275a\", \"#734b6d\"]\n    },\n    {\n        \"name\": \"Frost\",\n        \"colors\": [\"#000428\", \"#004e92\"]\n    },\n    {\n        \"name\": \"Lush\",\n        \"colors\": [\"#56ab2f\", \"#a8e063\"]\n    },\n    {\n        \"name\": \"Firewatch\",\n        \"colors\": [\"#cb2d3e\", \"#ef473a\"]\n    },\n    {\n        \"name\": \"Sherbert\",\n        \"colors\": [\"#f79d00\", \"#64f38c\"]\n    },\n    {\n        \"name\": \"Blood Red\",\n        \"colors\": [\"#f85032\", \"#e73827\"]\n    },\n    {\n        \"name\": \"Sun on the Horizon\",\n        \"colors\": [\"#fceabb\", \"#f8b500\"]\n    },\n    {\n        \"name\": \"IIIT Delhi\",\n        \"colors\": [\"#808080\", \"#3fada8\"]\n    },\n    {\n        \"name\": \"Dusk\",\n        \"colors\": [\"#ffd89b\", \"#19547b\"]\n    },\n    {\n        \"name\": \"50 Shades of Grey\",\n        \"colors\": [\"#bdc3c7\", \"#2c3e50\"]\n    },\n    {\n        \"name\": \"Dania\",\n        \"colors\": [\"#BE93C5\", \"#7BC6CC\"]\n    },\n    {\n        \"name\": \"Limeade\",\n        \"colors\": [\"#A1FFCE\", \"#FAFFD1\"]\n    },\n    {\n        \"name\": \"Disco\",\n        \"colors\": [\"#4ECDC4\", \"#556270\"]\n    },\n    {\n        \"name\": \"Love Couple\",\n        \"colors\": [\"#3a6186\", \"#89253e\"]\n    },\n    {\n        \"name\": \"Azure Pop\",\n        \"colors\": [\"#ef32d9\", \"#89fffd\"]\n    },\n    {\n        \"name\": \"Nepal\",\n        \"colors\": [\"#de6161\", \"#2657eb\"]\n    },\n    {\n        \"name\": \"Cosmic Fusion\",\n        \"colors\": [\"#ff00cc\", \"#333399\"]\n    },\n    {\n        \"name\": \"Snapchat\",\n        \"colors\": [\"#fffc00\", \"#ffffff\"]\n    },\n    {\n        \"name\": \"Ed's Sunset Gradient\",\n        \"colors\": [\"#ff7e5f\", \"#feb47b\"]\n    },\n    {\n        \"name\": \"Brady Brady Fun Fun\",\n        \"colors\": [\"#00c3ff\", \"#ffff1c\"]\n    },\n    {\n        \"name\": \"Black Ros\u00E9\",\n        \"colors\": [\"#f4c4f3\", \"#fc67fa\"]\n    },\n    {\n        \"name\": \"80's Purple\",\n        \"colors\": [\"#41295a\", \"#2F0743\"]\n    },\n    {\n        \"name\": \"Radar\",\n        \"colors\": [\"#A770EF\", \"#CF8BF3\", \"#FDB99B\"]\n    },\n    {\n        \"name\": \"Ibiza Sunset\",\n        \"colors\": [\"#ee0979\", \"#ff6a00\"]\n    },\n    {\n        \"name\": \"Dawn\",\n        \"colors\": [\"#F3904F\", \"#3B4371\"]\n    },\n    {\n        \"name\": \"Mild\",\n        \"colors\": [\"#67B26F\", \"#4ca2cd\"]\n    },\n    {\n\n        \"name\": \"Vice City\",\n        \"colors\": [\"#3494E6\", \"#EC6EAD\"]\n    },\n    {\n        \"name\": \"Jaipur\",\n        \"colors\": [\"#DBE6F6\", \"#C5796D\"]\n\n    },\n    {\n        \"name\": \"Cocoaa Ice\",\n        \"colors\": [\"#c0c0aa\", \"#1cefff\"]\n    },\n    {\n        \"name\": \"EasyMed\",\n        \"colors\": [\"#DCE35B\", \"#45B649\"]\n    },\n    {\n        \"name\": \"Rose Colored Lenses\",\n        \"colors\": [\"#E8CBC0\", \"#636FA4\"]\n    },\n    {\n        \"name\": \"What lies Beyond\",\n        \"colors\": [\"#F0F2F0\", \"#000C40\"]\n    },\n    {\n        \"name\": \"Roseanna\",\n        \"colors\": [\"#FFAFBD\", \"#ffc3a0\"]\n    },\n    {\n        \"name\": \"Honey Dew\",\n        \"colors\": [\"#43C6AC\", \"#F8FFAE\"]\n    },\n    {\n        \"name\": \"Under the Lake\",\n        \"colors\": [\"#093028\", \"#237A57\"]\n    },\n    {\n        \"name\": \"The Blue Lagoon\",\n        \"colors\": [\"#43C6AC\", \"#191654\"]\n    },\n    {\n        \"name\": \"Can You Feel The Love Tonight\",\n        \"colors\": [\"#4568DC\", \"#B06AB3\"]\n    },\n    {\n        \"name\": \"Very Blue\",\n        \"colors\": [\"#0575E6\", \"#021B79\"]\n    },\n    {\n        \"name\": \"Love and Liberty\",\n        \"colors\": [\"#200122\", \"#6f0000\"]\n    },\n    {\n        \"name\": \"Orca\",\n        \"colors\": [\"#44A08D\", \"#093637\"]\n    },\n    {\n        \"name\": \"Venice\",\n        \"colors\": [\"#6190E8\", \"#A7BFE8\"]\n    },\n    {\n        \"name\": \"Pacific Dream\",\n        \"colors\": [\"#34e89e\", \"#0f3443\"]\n    },\n    {\n        \"name\": \"Learning and Leading\",\n        \"colors\": [\"#F7971E\", \"#FFD200\"]\n    },\n    {\n        \"name\": \"Celestial\",\n        \"colors\": [\"#C33764\", \"#1D2671\"]\n    },\n    {\n        \"name\": \"Purplepine\",\n        \"colors\": [\"#20002c\", \"#cbb4d4\"]\n    },\n    {\n        \"name\": \"Sha la la\",\n        \"colors\": [\"#D66D75\", \"#E29587\"]\n    },\n    {\n        \"name\": \"Mini\",\n        \"colors\": [\"#30E8BF\", \"#FF8235\"]\n    },\n    {\n        \"name\": \"Maldives\",\n        \"colors\": [\"#B2FEFA\", \"#0ED2F7\"]\n    },\n    {\n        \"name\": \"Cinnamint\",\n        \"colors\": [\"#4AC29A\", \"#BDFFF3\"]\n    },\n    {\n        \"name\": \"Html\",\n        \"colors\": [\"#E44D26\", \"#F16529\"]\n    },\n    {\n        \"name\": \"Coal\",\n        \"colors\": [\"#EB5757\", \"#000000\"]\n    },\n    {\n        \"name\": \"Sunkist\",\n        \"colors\": [\"#F2994A\", \"#F2C94C\"]\n    },\n    {\n        \"name\": \"Blue Skies\",\n        \"colors\": [\"#56CCF2\", \"#2F80ED\"]\n    },\n    {\n        \"name\": \"Chitty Chitty Bang Bang\",\n        \"colors\": [\"#007991\", \"#78ffd6\"]\n    },\n    {\n        \"name\": \"Visions of Grandeur\",\n        \"colors\": [\"#000046\", \"#1CB5E0\"]\n    },\n    {\n      \"name\": \"Indian at Heart\",\n      \"colors\": [\"#FF9933\", \"#FFFFFF\", \"#138808\"]\n    },\n    {\n        \"name\": \"Crystal Clear\",\n        \"colors\": [\"#159957\", \"#155799\"]\n    },\n    {\n        \"name\": \"Mello\",\n        \"colors\": [\"#c0392b\", \"#8e44ad\"]\n    },\n    {\n        \"name\": \"Compare Now\",\n        \"colors\": [\"#EF3B36\", \"#FFFFFF\"]\n    },\n    {\n        \"name\": \"Meridian\",\n        \"colors\": [\"#283c86\", \"#45a247\"]\n    },\n    {\n        \"name\": \"Relay\",\n        \"colors\": [\"#3A1C71\", \"#D76D77\", \"#FFAF7B\"]\n    },\n    {\n        \"name\": \"Alive\",\n        \"colors\": [\"#CB356B\", \"#BD3F32\"]\n    },\n    {\n        \"name\": \"Scooter\",\n        \"colors\": [\"#36D1DC\", \"#5B86E5\"]\n    },\n        {\n        \"name\": \"Terminal\",\n        \"colors\": [\"#000000\", \"#0f9b0f\"]\n    },\n    {\n        \"name\": \"Telegram\",\n        \"colors\": [\"#1c92d2\", \"#f2fcfe\"]\n    },\n    {\n        \"name\": \"Crimson Tide\",\n        \"colors\": [\"#642B73\", \"#C6426E\"]\n    },\n    {\n        \"name\": \"Socialive\",\n        \"colors\": [\"#06beb6\", \"#48b1bf\"]\n    },\n    {\n      \"name\": \"Subu\",\n      \"colors\": [\"#0cebeb\", \"#20e3b2\", \"#29ffc6\"]\n    },\n    {\n      \"name\": \"Holy\",\n      \"colors\": [\"#EF00DF\", \"#E8FF59\", \"#73C105\"]\n    },\n    {\n      \"name\": \"Shift\",\n      \"colors\": [\"#000000\", \"#E5008D\", \"#FF070B\"]\n    },\n    {\n      \"name\": \"Clot\",\n      \"colors\": [\"#070000\", \"#4C0001\", \"#070000\"]\n    },\n    {\n      \"name\": \"Broken Hearts\",\n      \"colors\": [\"#d9a7c7\", \"#fffcdc\"]\n    },\n    {\n      \"name\": \"Kimoby Is The New Blue\",\n      \"colors\": [\"#396afc\", \"#2948ff\"]\n    },\n    {\n      \"name\": \"Dull\",\n      \"colors\": [\"#C9D6FF\", \"#E2E2E2\"]\n    },\n    {\n      \"name\": \"Purpink\",\n      \"colors\": [\"#7F00FF\", \"#E100FF\"]\n    }\n]\n";
var G__21528__$1 = (((G__21528 == null))?null:(parse.cljs$core$IFn$_invoke$arity$1 ? parse.cljs$core$IFn$_invoke$arity$1(G__21528) : parse.call(null,G__21528)));
var G__21528__$2 = (((G__21528__$1 == null))?null:cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(G__21528__$1));
var G__21528__$3 = (((G__21528__$2 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__21528,G__21528__$1,G__21528__$2,parse){
return (function (p1__21524_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__21524_SHARP_,"name"));
});})(G__21528,G__21528__$1,G__21528__$2,parse))
,G__21528__$2));
if((G__21528__$3 == null)){
return null;
} else {
return cljs.core.first(G__21528__$3);
}
})(),"colors");
});

colours.ui_gradients.stops.cljs$lang$maxFixedArity = 1;

colours.ui_gradients.base_colour = cljs.core.last(colours.ui_gradients.stops.cljs$core$IFn$_invoke$arity$0());
colours.ui_gradients.secondary_colour = cljs.core.first(colours.ui_gradients.stops.cljs$core$IFn$_invoke$arity$0());
