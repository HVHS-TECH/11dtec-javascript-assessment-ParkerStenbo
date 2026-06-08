/*-------------------------------------------------------------PROGRAM START-------------------------------------------------------------*/
console.log("Running Script.js");
/*---------------------------------------------------------VARIABLE  DECLARATION---------------------------------------------------------*/
let locations = ["Hyrule caslte", "Hyrule feild", "Kokiri village", "Field town"];
let locationX = [100, 10, 20, 30];
let locationY = [0, 10, 20, 30];
let locationW = [9, 5, 5, 5];
let locationH = [12, 5, 5, 5];

const OUTPUT = document.getElementById("buttonsContainer");
console.log("variables declared successfully");
/*---------------------------------------------------------------MAIN CODE---------------------------------------------------------------*/
placeButton(1);

function placeButton(_number) {
    let tmp= _number -1;
    let x = ((50 + locationX[tmp]) - (locationW[tmp]/2));
    let y = ((50 + locationY[tmp]) - (locationH[tmp]/2)) * (2/3);
    OUTPUT.innerHTML += "<button style=' padding:0; border:0; translate:" + x + "%" + y + "%; width: " + locationW[tmp] + "%; height: " + locationH[tmp] + "%;'>" + locations[tmp] + "</button>";
    console.log(((50+locationY[tmp]) - locationH[tmp]));
}