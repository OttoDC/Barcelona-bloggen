console.log('JavaScript virker!');

//Vælg et element
const logo = document.querySelector('header img');

//Lyt efter klik
logo.addEventListener('click', function() {
    console.log('Du klikkede på logoet');
});
