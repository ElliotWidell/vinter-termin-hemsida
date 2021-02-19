
let links = [
    "https://www.youtube.com/watch?v=REmZhFKmOmo&ab_channel=PlayboiCartiVEVO",
    "https://www.youtube.com/watch?v=bnFa4Mq5PAM&ab_channel=LILUZIVERT",
    "https://www.youtube.com/watch?v=MieIOV-GoGo&ab_channel=Comethazine",
    "https://www.youtube.com/watch?v=vVk47cEMfUQ&ab_channel=TeeGrizzley",
    "https://www.youtube.com/watch?v=_mVD77GThEY&ab_channel=TeeGrizzley"
]




let randomButton = document.querySelector(".random-btn");

randomButton.addEventListener("click", goToRandom);


function goToRandom() {
    let randomNumb = Math.floor(Math.random() * 5);
    let randomLink = links[randomNumb];
    console.log(randomNumb);
    console.log(randomLink);
    window.location.href = randomLink;
}