# QuantumCore Gaming — Official Website (root site)

Ye repo `quantumcoregaming10-hash.github.io` naam se banayi gayi hai — GitHub Pages ka special
"user site" repo, jo seedha domain ke ROOT par serve hoti hai (koi `/repo-name/` sub-folder nahi):

```
https://quantumcoregaming10-hash.github.io/
```

## Ye root par kyun zaroori tha (app-ads.txt)

Ad networks (AdMob waghera) ka crawler `app-ads.txt` file hamesha aapke Play Console "Website"
field ke **domain ke bilkul root** par dhoondta hai — `https://<domain>/app-ads.txt` — chahe
Website field mein koi bhi sub-path likha ho. Pehle site `quantumcoregaming10-hash.github.io/quantumcore-gaming-site/`
par thi, jahan app-ads.txt sirf us sub-folder mein milta, root par nahi — is liye crawler ko wo
nazar hi nahi aata. Ab poori site is root-repo mein migrate kar di gayi hai, is liye:

- Website: `https://quantumcoregaming10-hash.github.io/`
- app-ads.txt: `https://quantumcoregaming10-hash.github.io/app-ads.txt`

Dono ek hi jagah, sahi tarah crawl ho sakte hain.

## Folder structure

```
index.html                → Homepage
style.css                 → Poori site ki styling
main.js                    → games.json se games load kar ke cards banata hai
games.json                 → Naya game add/update karne ke liye sirf ye file edit karein
icon-<game-id>.svg         → Har game ka icon
app-ads.txt                 → Ad networks ke authorized sellers ki list (AdMob se generate hui)
```

## Naya game add karna ho to

1. Naye game ka icon (`icon-<naya-game-id>.svg` ya `.png`) repo ke root mein "Add file → Upload files" se daal dein.
2. `games.json` ko GitHub par edit karein (pencil icon), `games` array mein naya object add karein:

```json
{
  "id": "naya-game-id",
  "name": "Game ka Poora Naam",
  "tagline": "Ek line ka hook",
  "description": "2-3 lines mein description.",
  "icon": "icon-naya-game-id.svg",
  "accentColor": "#4dd0a7",
  "status": "live",
  "playstoreUrl": "https://play.google.com/store/apps/details?id=com.yourpackage.id",
  "platforms": ["android"]
}
```

Commit karte hi 1-2 minute mein site khud update ho jayegi.

## app-ads.txt update karna ho to

Jab bhi AdMob mein naya mediation network add karein ya publisher ID change ho, AdMob apna
app-ads.txt snippet dobara generate karta hai (Apps → app-ads.txt tab → "How to set up
app-ads.txt"). Us naye content ko yahan `app-ads.txt` file mein GitHub par edit kar ke paste kar
dein aur commit kar dein. Naya version 1-2 minute mein root par live ho jayega. AdMob ko is file
ko dobara crawl karne mein kabhi kabhi kuch ghante se lekar ek din tak lag sakta hai.

## Purani repo (`quantumcore-gaming-site`)

Wo project-page repo ab istemaal mein nahi hai (Website field is naye root URL par point kar
raha hai). Usay waisi hi chhoda ja sakta hai ya delete kiya ja sakta hai — koi cheez usay link
nahi kar rahi.
