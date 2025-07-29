import fetch from "node-fetch";

async function fetchGoogleData() {
    const res=await fetch("https://www.google.com");
    console.log(res);
}
fetchGoogleData();