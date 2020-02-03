var matt_said = [
    'Interception blocked',
    'they thought it was cute. I was 17.',
    'It’s not the inverse, it’s the opposite.',
    'I don’t like Five Guys fries. They taste too potato-y.',
    'Land does float, actually.',
    'Lumps n\' chunks',
    'I’m not loud, at least not verbally.',
    'Re-bettering',
    'My mama always told me never to drink dark soda',
    'This thin crust pizza doesn’t taste good. It’s like saltine crackers… without the saltine.',
    'Ooo they have bubbly here. Is that champange?',
    'Get me that bourbon kit',
    'Wanna chomp?',
    'Does the pasta come with fries?'
];

function pickASaying() {
    var quoteOfThePageLoad = matt_said[Math.floor(Math.random() * matt_said.length)];
    document.getElementById("mattisim").innerHTML = quoteOfThePageLoad;
}
document.addEventListener("DOMContentLoaded", pickASaying);