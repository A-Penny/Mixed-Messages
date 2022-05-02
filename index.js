//Plan: Create a song name generator using three random title sections
const songTitleParts = {
    titleOne: ['The', 'A', 'One', 'My', 'That', 'His', 'Her'],
    titleTwo: ['Baby', 'Woman', 'Family', 'Gun', 'Truck', 'Hat', 'Dog' ],
    titleThree: ['Stinks', 'Talks', 'Hurts', 'Heals', 'Sings', 'Smokes', 'Dances']
    
};

const r = () => {
   return Math.floor(Math.random() * 7); 
};
const generateSongTitle = () => {
    let p1 = songTitleParts.titleOne[r()];
    let p2 = songTitleParts.titleTwo[r()];
    let p3 = songTitleParts.titleThree[r()];
    console.log(p1 + ' ' + p2 + ' ' + p3);

};

generateSongTitle();

