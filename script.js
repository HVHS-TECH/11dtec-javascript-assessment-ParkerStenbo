/*-------------------------------------------------------------PROGRAM START-------------------------------------------------------------*/
console.log("Running Script.js");
/*---------------------------------------------------------VARIABLE  DECLARATION---------------------------------------------------------*/
//Location information
let locations = ["Hyrule caslte", "Hyrule caslte", "Hyrule feild", "Hyrule feild", "Kokiri village", "Field town", "lost woods", "forest village", "forest temple", "forest temple", "tower of spirits", "northern town", "northern town", "desert town", "desert", "big island", "island village", "harbor town", "isolated island", "Twin tunnels", "Northern lake", "coniferous forest"];
let locationX = [-14,               -9,              -24,            -20,            -25,              -6,          -40,          -38,              -43.5,          -45.5,            0.5,                -43.5,           -43.5,           7.5,           13,       22,           23.5,             36,            41,                -30,           -38,             -17];
let locationY = [10.5,              -2,              -6,             -15,            2.5,              -10,         -25,          -17,              -8,             -9,               60,                 23,              10,              -12,           3,        -18,          -8.5,             7,             -23,                12,           26,              26];
let locationW = [9,                 9,               10,             10,             10,               16,          16,           12,                7,             3,                10,                 7,               10,              7,             14,       20,           6,                17,            14,                 15,           10,              20];
let locationH = [20,                7,               25,             10,             13.5,             20,          16,           10,                7,             9,                45,                 15,              7,               13,            14,       9,            9,                15,            14,                 10.5,         9,               12];
let locationID = [1,                1,               2,              2,              3,                4,           5,            6,                 7,             7,                8,                  9,               9,               10,            11,       12,           13,               14,            15,                 16,           17,              18];


//Price is defined by getting the price with locationTravelPrice[locationID[i]]
let locationTravelPrice = [0,      1,              1,                1,               1,            4,             1,               5,              12,                       1,                 1,             2,       2,            1,                1,             20,                                0.5,           1,               10000000];
//so is the displayed location for the recipt
let locationDisplayName = ["N/A", "Hyrule castle", "Hyrule feild", "Kokiri village", "Field town", "Lost woods", "Forest village", "Forest temple", "The tower of spirits", "Northern village", "Desert Town", "Desert", "Big island", "Island village", "Harbor town", "Isolated island & Ocean temple", "Twin tunnels", "Northern lake", "coniferous forest"];

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
        PREVIEW.innerHTML = "<p> Please choose your starting location! </p>";
    }
    else
    {
        PREVIEW.innerHTML = "<p>Your route:</p>";
        listChosenLocations();
        PREVIEW.innerHTML += "<button class='purchaseButtons' onclick='book()'>Book!!</button> <button class='purchaseButtons' onclick='reset()'>Reset</button> <button class='purchaseButtons' onclick='undoLast()'>UNDO!!</button>"
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
    OUTPUT.innerHTML += "<button style='cursor: pointer; background-color: rgba(255, 255, 255, 0); position: absolute; padding:0; border:0; margin-left:" + ((50 + locationX[tmp]) - (locationW[tmp]/2)) + "%; margin-top:" + (100-((50 + locationY[tmp]) - (locationH[tmp]/2))) * (2/3) + "%; width: " + locationW[tmp] + "%; height: " + locationH[tmp] + "%;' onclick=' addLocation(" + locationID[tmp] + ") '> </button>";
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
    let orderNumber = Math.floor(Math.random()*10000000000000 + 1);
    console.log(orderNumber);
    if (pickedRouteLocations.length > 1)
    {
        sessionStorage.setItem("PickedRouteLocations", JSON.stringify(pickedRouteLocations));
        sessionStorage.setItem("PickedRoutePrices", JSON.stringify(pickedRoutePrices));
        sessionStorage.setItem("TotalPrice", totalPrice);
        sessionStorage.setItem("OrderNumber", orderNumber);
        console.log(orderNumber);
        PREVIEW.innerHTML = "SUCCESSFULLY BOOKED!";
        location.href="Recipt.html";
    }
    else
    {PREVIEW.innerHTML = "<p>Your route:</p>";
        listChosenLocations();
        PREVIEW.innerHTML += "<p>Please choose at least 1 destination!</p>";
        PREVIEW.innerHTML += "<button class='purchaseButtons' onclick='book()'>Book!!</button> <button class='purchaseButtons' onclick='reset()'>Reset</button> <button class='purchaseButtons' onclick='undoLast()'>UNDO!!</button>";
    }
}
function undoLast()
{
    pickedRouteLocations.splice((pickedRouteLocations.length-1));
    pickedRoutePrices.splice(pickedRouteLocations.length);
    refreshBottomBar();
}