let min = 1;
let max = 10;
//max - min = 5
// random(5) => 0 - 5 ( ไม่มีทางได้ 5) 

for(let i = 0; i < 20; i++){
    let r = min + Math.floor(Math.random()* (max-min+1))
    console.log(r)
}