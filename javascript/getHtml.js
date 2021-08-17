const text1 = document.querySelector(".name");
console.log(text1);

const linker = document.querySelector('link[rel="import"][href="/index.html"]');
console.log(linker);
const seeker = linker.querySelector('.seeker');
console.log(seeker.innerText);
if(seeker.innerText === "카페 초안"){
    console.dir("true");
}else {
    console.dir("false");
}

const name = seeker.innerText;
