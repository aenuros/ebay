<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width" />
  <title>raise your own Pokemon!</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <h1>raise your own Pokemon!</h1>
  <div id="test"></div>

  <script src="script.js"></script>
</head><SCRIPT LANGUAGE="JavaScript">
<!-- Original:  Paul (Poke_Paul@hotmail.com) -->
<!-- Web Site:  http://www.angelfire.com/ak3/MewHiddenLair -->



<!-- Begin
now=new Date;
x=now.getTime() %32768;
function Random(min,max) {
x=(1103515245*x+12345) % 32768;
return Math.floor(x*(max-min+1)/32768+min);
}
var num = new Array;
num[0] = -1;
num[1] = 1;
var ctrsmit = new Array;
ctrsmit[0] = '<|x_x|>';
ctrsmit[1] = '<|!_!|>';
var i = 0, will2live = 0;
function livewill(j) {
i += j;
if (i == 0) tLiphe();
if (i < 6) stat(mood[3]);
if (oldstats == mood[3] && i >= 6) stat(mood[0]);
if (alive == true) {
barzies(i);
   }
}
var bars='';
function barzies(num) {
bars='';
for (var i=0;i!=num;i++) bars += '';
document.ctrform.will.value = bars;
}
var mood = new Array;
mood[0] = 'Happy';
mood[1] = 'Mad';
mood[2] = 'Ticked-Off';
mood[3] = 'Suicidal';
mood[4] = 'Elated';
var Stat = new Array;
Stat[0] = 'Alive';
Stat[1] = 'Pokeball cleaned';
Stat[2] = 'Pokeball not messy';
Stat[3] = 'In pain';
Stat[4] = 'Dead';
Stat[5] = 'Infected!';
Stat[6] = 'Disinfected!';
Stat[7] = 'Not infected';
Stat[8] = 'Drooling';
var alive = false, aniID, statID, moodID, liveID, crapID, sickID, illID, normguy = '<(^_^)>';
function gLiphe() {
normguy = '<(^_^)>';
stat('Catching...');
livewill(15);
statID = setTimeout("stat(Stat[0])",3500);
setTimeout("alive = true",3500);
Animate(false,'(-o-)');
aniID = setTimeout("Animate(false,'<(o_o)>')",2500);
aniID = setTimeout("Animate(false,'(O_o)>')",3500);
aniID = setTimeout("Animate(false,'<(o_o)>')",4300);
aniID = setTimeout("Animate(false,'<(o_O)')",4500);
aniID = setTimeout("Animate(false,'<(o_o)>')",5300);
aniID = setTimeout("Animate(false,'(O_o)>')",5500);
aniID = setTimeout("Animate(false,normguy)",6500);livewill(15);
setTimeout("independence()",6501)
}
function ID(dep) {
clearTimeout(aniID);
clearTimeout(statID);
clearTimeout(liveID);
clearTimeout(crapID);
if (dep == true) clearTimeout(independ);
}
var f, t = '          ';
function Animate(auto,ctrex) {
if (auto == false) f = ctrex;
if (auto == true) t = spacey.substring(0,Pos());
document.ctrform.ctr.value = t + ctrex + poopie();
}
var indID, independ;
function independence() {
independ = setTimeout("Animate(true,f)",400);
independ = setTimeout("Animate(true,f)",1200);
independ = setTimeout("Animate(true,f)",2000);
independ = setTimeout("Animate(true,f)",2800);
independ = setTimeout("Animate(true,f)",3600);
indID = setTimeout("independence()",4000);
}
var spacey = '                            ', k, l = 10;
function Pos() {
k = Random(0,1)
if (k == 0) {
if (t.length < 22) return l++;
else if (t.length >= 22) Pos()
}
if (k == 1) {
if (t.length > 0) return l--;
else if (t.length == 0) return l++;
   }
}
var poop = false;
function poopie() {
if (poop == true) return " <<poo>> ";
else return '';
}
function eatpoop() {
if (poop == false) {
document.ctrform.phood.selectedIndex = 0;
stat(Stat[2]);
}
if (poop == true) {
ID(true);
eatpoopie();
   }
}
function eatpoopie() {
poop = false;
eat(false,'<<poo>>');
aniID = setTimeout("Animate(false,'<(¯o>)>')",750);
if (sick == false) setTimeout("befect()",4000);
}
var pasto,healthy,eaty='<(¯o¯)>',eati='<(¯-¯)>',eaty2;
function eat(health,pasti) {
healthy = health;
pasto = pasti;
if (sick == true) {
eaty = '<(¡o¡)>';
eaty2 = '<(¡o)>';
eati = '<(¡-¡)>';
}
else {
eaty = '<(¯o¯)>';
eaty2 = '<(¯o)>';
eati = '<(¯-¯)>';
}
Animate(false,eati +'  '+ pasto);
aniID = setTimeout("Animate(false,eaty +'  '+ pasto)",150);
aniID = setTimeout("Animate(false,eaty +' '+ pasto)",300);
aniID = setTimeout("Animate(false,eaty + pasto)",450);
aniID = setTimeout("Animate(false,eaty2+ pasto)",600);
setTimeout("phood(healthy)",650);
}
function pheed(antipasto) {
if (antipasto == 0) eat(true,'>o<');
else if (antipasto == 1) eat(true,'ð');
else if (antipasto == 2) eatpoop();
}
function takeone() {
ID(true);
Animate(false,'<(¯=¯)>');
aniID = setTimeout("Animate(false,'<(>_<)>')",500);
aniID = setTimeout("Animate(false,'<(¯=¯)>')",1300);
aniID = setTimeout("Animate(false,'<(>_<)>')",2600);
aniID = setTimeout("Animate(false,normguy)",4800);
setTimeout("infekt()",4799);
setTimeout("poop = true",4799);
full = 0;
}
function cleancage() {
if (poop == false) stat(Stat[2]);
if (poop == true) {
poop = false;
Animate(false,normguy);
stat(Stat[1]);
clearTimeout(sickID);
ickcount = 0;
   }
}
function tLiphe() {
normguy = '<(×_×)>';
poop = false;
clearTimeout(sickID);
clearTimeout(illID);
clearTimeout(indID);
ID(true);
sick = false;
full = 0;
l = 1;
i = 0;
aniID = setTimeout("Animate(false,normguy)",1);
statID = setTimeout("stat(Stat[4])",1);
barzies(0);
bruised = 0;
poked = false;
alive = false;
}
var oldstats, ick = '';
function stat(stats) {
ick = '';
oldstats = stats;
if (sick == true) ick = '[sick] ';
document.ctrform.ctrstatus.value = ick + oldstats;
}
var j;
function smite() {
if (sick == false) normguy = '<(<¬>_<¬>)>';
ID(true);
statID = setTimeout("stat(Stat[3])",10);
aniID = setTimeout("Animate(false,ctrsmit[Random(0,1)])",10);
liveID = setTimeout("livewill(num[0])",20);
aniID = setTimeout("Animate(false,normguy)",1300);
statID = setTimeout("stat(mood[1])",1300);
}
var full = 0;
function phood(salubrious) {
if (sick == false) normguy = '<(^_^)>';
ID(true);
full++;
if (salubrious == true) livewill(num[1]);
aniID = setTimeout("Animate(false,eaty)",200);
aniID = setTimeout("Animate(false,eati)",700);
aniID = setTimeout("Animate(false,eaty)",1200);
aniID = setTimeout("Animate(false,eati)",1700);
aniID = setTimeout("Animate(false,eaty)",2200);
aniID = setTimeout("Animate(false,eati)",2700);
aniID = setTimeout("Animate(false,normguy)",3200);
if (full == 3) setTimeout("takeone()",6000);
if (full >= 3) full = 0;
}
var sick = false, ickcount = 0;
function infekt() {
ickcount++;
if (ickcount != 2) sickID = setTimeout("infekt()",30000);
if (ickcount == 2) befect();
}
function befect() {
sick = true;
setTimeout("stat(Stat[5])",500);
ickcount = 0;
besick();
normguy = '<(¡_¡)>';
}
function besick() {
livewill(num[0]);
Animate(false,normguy);
if (sick == true) illID = setTimeout("besick()",2000);
}
function dnfekt() {
if (sick == false) stat(Stat[7]);
if (sick == true) {
if (poop == false) clearTimeout(sickID);
normguy = '<(^_^)>';
eat(false,'¤');
sick = false;
setTimeout("stat(Stat[6])",4000);
ickcount = 0;
if (poop == true) infekt();
   }
}
function scratchyscratchy() {
normguy = '<(^_^)>';
ID(true);
statID = setTimeout("stat(Stat[8] +'(scratch scratch)')",710);
aniID = setTimeout("Animate(false,'¦ p')",200);
aniID = setTimeout("Animate(false,'¦ P¨')",800);
aniID = setTimeout("Animate(false,'¦ p ¨')",1400);
aniID = setTimeout("Animate(false,'¦ P¨¨')",2000);
aniID = setTimeout("Animate(false,'¦ p ¨¨')",2600);
aniID = setTimeout("Animate(false,'¦ P¨¨¨')",3400);
aniID = setTimeout("Animate(false,'¦ p ¨¨¨')",4200);
aniID = setTimeout("Animate(false,'¦ P ¨¨¨¨')",5000);
aniID = setTimeout("Animate(false,': P¨')",5600);
aniID = setTimeout("Animate(false,normguy)",6600);
statID = setTimeout("stat(mood[0])",6600);
liveID = setTimeout("livewill(num[1])",6600);
}
var bruised = 0, poked = false;
function poke() {
if (bruised >= 7) {
normguy='o_-';
aniID = setTimeout("Animate(false,'(O_-)')",1);
liveID = setTimeout("livewill(num[0])",1);
if (poked == false) statID = setTimeout("stat('You poked his eye out!!')",10);
aniID = setTimeout("Animate(false,normguy)",300);
poked = true;
}
if (bruised < 7) {
bruised++;
normguy = '<(^_^)>'
aniID = setTimeout("Animate(false,' <(^o^)>')",1);
liveID = setTimeout("livewill(num[1])",1);
statID = setTimeout("stat('PikaPi...')",10);
aniID = setTimeout("Animate(false,normguy)",300);
   }
}
//  End -->
</script>


</body><center>
<form name="ctrform">
<table BORDER="4" CELLSPACING="5" CELLPADDING="5" bgcolor="red">
<tr><td><font color="blue"><br>
<table>
<tr>
<th>Life</th>
<th>Status</th>
</tr>
<tr>
<td><div align="center"><center><p><input type="text" size="20" name="will"></td>
<td align="center"><input type="text" size="25" name="ctrstatus"></td>
</tr>
<tr align="center">
<th>Pikachu</th>
<th>Options</th>
</tr>
<tr align="center">
<td><input type="text" name="ctr" size="30" onFocus="if (alive == true) tLiphe()"></td>
<td><div align="center"><center><p><input type="button" value="Catch a Pikachu"
onClick="if (alive == false) gLiphe()"></td>
</tr>
</table>
<div align="center"><center>
<table>
<tr>
<td><input type="button" value="Smack" onClick="if (alive == true) smite()"></td></tr><tr>
<td><input type="button" value="Clean Pokéball" onClick="if (alive == true) cleancage()"></td></tr><tr>
<td><input type="button" value="Give Medicine" onClick="if (alive == true) dnfekt()"></td>
</tr>
<tr>
<td><input type="button" value="Give Food"
onClick="if (alive == true) pheed(document.ctrform.phood.selectedIndex)">
<select name="phood" size="1">
<option>Rare Candy</option>
<option>Apple</option>
</select></td>
</tr>
<tr>
<td><input type="button" value="Scratch" onClick="if (alive == true) scratchyscratchy()"></td>
</tr>
<tr>
<td><input type="button" value="Poke Pikachu" onClick="if (alive == true) poke()"><br></td>
</tr>
</table>
</center>
</div>
</td>
</tr>
</table>
</form>
</center>
</html>
