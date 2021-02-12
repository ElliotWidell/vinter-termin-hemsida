let q1 = document.querySelector("#question1-1");

let socre = 0;

if(q1.checked === true)
{
    score = score + 1;
}

randomnumb = random(10);
randomlink = "";

if(randomnumb === 0)
{
    randomlink = "https://www.youtube.com/watch?v=REmZhFKmOmo&ab_channel=PlayboiCartiVEVO";
}

if(randomnumb === 1)
{
    randomlink = "https://www.youtube.com/watch?v=bnFa4Mq5PAM&ab_channel=LILUZIVERT"
}

if(randomnumb === 2)
{
    randomlink = "https://www.youtube.com/watch?v=MieIOV-GoGo&ab_channel=Comethazine"
}

if(randomnumb === 3)
{
    randomlink = "https://www.youtube.com/watch?v=vVk47cEMfUQ&ab_channel=TeeGrizzley"
}

if(randomnumb === 4)
{
    randomlink = "https://www.youtube.com/watch?v=cr82wSBZeeQ&ab_channel=LyricalLemonade"
}

if(randomnumb === 5)
{
    randomlink = "https://www.youtube.com/watch?v=_mVD77GThEY&ab_channel=TeeGrizzley"
}