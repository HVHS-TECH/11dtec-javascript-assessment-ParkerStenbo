/*-------------------------------------------------------------PROGRAM START-------------------------------------------------------------*/
console.log("Running Script.js");
/*---------------------------------------------------------VARIABLE  DECLARATION---------------------------------------------------------*/
let locations = ["Hyrule caslte", "Hyrule feild", "Kokiri village", "Field town"];
let locationX = [-14, 10, 20, 30];
let locationY = [12, 10, 20, 30];
let locationW = [9, 5, 5, 5];
let locationH = [20, 5, 5, 5];

const OUTPUT = document.getElementById("buttonsContainer");
console.log("variables declared successfully");
/*---------------------------------------------------------------MAIN CODE---------------------------------------------------------------*/
console.log(locations.length);
for (let i = 1; i <= locations.length; i++)
{
    //OUTPUT.innerHTML += "<button style='width:100%; height:100%; padding:0; margin:1; border:0; margin-top: -135%; background-color:rgb(0, 0, 0);'>";
    placeButton(i);
    //OUTPUT.innerHTML += "<button style=' margin-left:-100%; margin-bottom:100%;'>RAAR</button>";
    console.log("i=" + i);
    //OUTPUT.innerHTML += "</button>";
}

/*---------------------------------------------------------------FUNCTIONS---------------------------------------------------------------*/

function placeButton(_number) {
    let tmp= _number -1;
    let x = ((50 + locationX[tmp]) - (locationW[tmp]/2));
    let y = ((50 + locationY[tmp]) - (locationH[tmp]/2)) * (2/3);
    OUTPUT.innerHTML += "<button style='position: absolute; padding:0; border:0; margin-left:" + ((50 + locationX[tmp]) - (locationW[tmp]/2)) + "%; margin-top:" + (100-((50 + locationY[tmp]) - (locationH[tmp]/2))) * (2/3) + "%; width: " + locationW[tmp] + "%; height: " + locationH[tmp] + "%;'>" + locations[tmp] + "</button>";
    console.log(((50+locationY[tmp]) - locationH[tmp]));
}