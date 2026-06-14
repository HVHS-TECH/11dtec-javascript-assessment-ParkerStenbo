/*-------------------------------------------------------------PROGRAM START-------------------------------------------------------------*/
console.log("Running Script.js");
/*---------------------------------------------------------VARIABLE  DECLARATION---------------------------------------------------------*/
//Location information
let locations = ["Hyrule caslte", "Hyrule caslte", "Hyrule feild", "Hyrule feild", "Kokiri village", "Field town"];
let locationX = [-14, -9, -24, -20, -25, -6];
let locationY = [12, -1, 1, -14, 4, -9];
let locationW = [9, 9, 10, 10, 10, 16];
let locationH = [20, 7, 25, 10, 10, 20];
let locationID = [1, 1, 2, 2, 3, 4];
//Price is defined by getting the price with locationTravelPrice[locationID[i]]
let locationTravelPrice = [0, 1, 1, 1, 1];
//so is the displayed location for the recipt
let locationDisplayName = ["N/A", "Hyrule castle", "Hyrule feild", "Kokiri village", "Field town"]

//temporary list info, picked route
let pickedRouteLocations = [];
let pickedRoutePrices = [];

//running total price
let totalPrice;

const OUTPUT = document.getElementById("buttonsContainer");
const PREVIEW = document.getElementById("BottomBar");
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

refreshBottomBar();

/*---------------------------------------------------------------FUNCTIONS---------------------------------------------------------------*/

function refreshBottomBar()
{
    if (pickedRouteLocations < 1)
    {
        PREVIEW.innerHTML = "<p> Please choose your first location! </p>";
    }
    else
    {
        PREVIEW.innerHTML = "<p>Your route:</p>";
        listChosenLocations();
        PREVIEW.innerHTML += "<button class='purchaseButtons' onclick='book()'>Book!!</button> <button class='purchaseButtons' onclick='reset()'>Reset</button>"
    }   
}

function listChosenLocations()
{
    let routeList = "";
    totalPrice = (0-pickedRoutePrices[0]);
    for (let i = 0; i < pickedRouteLocations.length; i++)
    {
        routeList += pickedRouteLocations[i];
        totalPrice += pickedRoutePrices[i];
        if (i < (pickedRouteLocations.length-1))
        {
            routeList += "  >  ";
        }
    }
    PREVIEW.innerHTML += "<p>"+ routeList +"</p>";
    PREVIEW.innerHTML += "<p>This trip should cost around: " + totalPrice + " Rupees</p>";
}

function placeButton(_number) {
    let tmp= _number -1;
    let x = ((50 + locationX[tmp]) - (locationW[tmp]/2));
    let y = ((50 + locationY[tmp]) - (locationH[tmp]/2)) * (2/3);
    OUTPUT.innerHTML += "<button style='background-color: rgba(255, 255, 255, 0); position: absolute; padding:0; border:0; margin-left:" + ((50 + locationX[tmp]) - (locationW[tmp]/2)) + "%; margin-top:" + (100-((50 + locationY[tmp]) - (locationH[tmp]/2))) * (2/3) + "%; width: " + locationW[tmp] + "%; height: " + locationH[tmp] + "%;' onclick=' addLocation(" + locationID[tmp] + ") '> </button>";
    console.log(((50+locationY[tmp]) - locationH[tmp]));
}
function addLocation(_id) {
    console.log(pickedRouteLocations[(pickedRouteLocations.length -1)]);
    console.log(_id);
    console.log(locationDisplayName[locationID[_id]]);

    //this "if" statement prevents users from traveling from paying to not go anywhere.
    if (pickedRouteLocations[(pickedRouteLocations.length -1)] !== locationDisplayName[_id] || pickedRouteLocations.length < 1)
    {
        pickedRouteLocations.push(locationDisplayName[_id]);
        pickedRoutePrices.push(locationTravelPrice[_id]);
    }
    console.log(pickedRouteLocations);
    refreshBottomBar();
}

function reset()
{
    pickedRouteLocations = [];
    pickedRoutePrices = [];
    refreshBottomBar();
}
function book()
{
    PREVIEW.innerHTML = "SUCCESSFULLY BOOKED!"
}