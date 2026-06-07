/*-------------------------------------------------------------PROGRAM START-------------------------------------------------------------*/
console.log("Running Script.js");
/*---------------------------------------------------------VARIABLE  DECLARATION---------------------------------------------------------*/
let locations = ["Hyrule caslte", "Hyrule feild", "Kokiri village", "Field town"];
let locationX = [0, 10, 20, 30];
let locationY = [0, 10, 20, 30];
let locationW = [5, 5, 5, 5];
let locationH = [5, 5, 5, 5];

const OUTPUT = document.getElementById("buttonsContainer");
console.log("variables declared successfully");
/*---------------------------------------------------------------MAIN CODE---------------------------------------------------------------*/
placeButton(1)

function placeButton(_number) {
    let tmp= _number -1;
    OUTPUT.innerHTML = "<button style='margin-left:" + ((50 + locationX[tmp]) - (locationW[tmp]/2)) + "%; margin-top:" + ((50 + locationY[tmp]) - (locationH[tmp]/2)) + "%; height: " + locationH[tmp] + "%;'>" + locations[tmp] + "</button>";
    console.log(((locationX[tmp]) - locationW[tmp]));
}