var name = new URLSearchParams(window.location.search);
var team = name.replace('team=','');

var title = document.getElementById('titleText');
var submit = document.getElementById('submit');
var body = document.getElementById('body');
var baseballTalk = document.getElementById('baseballTalk');
var goodPic = document.getElementById('goodpic');
var badPic = document.getElementById('badpic');
var backButton = document.getElementById('backButton');

if(team == 'New+York+Mets') {
    title.innerHTML = "Correct!";
    baseballTalk.innerHTML = "You picked the correct option. Good Job!";
    body.style.background = 'lime';
    submit.style.display = 'none';
    goodPic.style.display = 'block';
    backButton.style.display = 'block';
}
else if(team != 'New+York+Mets' && team != '') {
    title.innerHTML = "Wrong!";
    baseballTalk.innerHTML = "You picked the wrong option. Shame on you!";
    body.style.background = 'red';
    submit.style.display = 'none';
    badPic.style.display = 'block';
    backButton.style.display = 'block';
}