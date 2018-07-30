
// To extract dropdown value from menu

var todaydate;
var curDateFormat;
var curDate = new Date();
var inputNumberElem;
var inputNumber;
var arrIn = new Array;

function curDateFunc() {

    todaydate = document.getElementById("dateformat");
    curDateFormat = (todaydate.options[todaydate.selectedIndex].value);        

    var curYear = curDate.getFullYear();
    var curMonth = curDate.getMonth() + 1;
    var curDayOfMonth = curDate.getDate();

    curDateFormat = curDateFormat.replace("mm", curMonth);
    curDateFormat = curDateFormat.replace("dd", curDayOfMonth);
    curDateFormat = curDateFormat.replace("yyyy", curYear);

    document.getElementById("todaysdate").textContent = curDateFormat;

}

function inputNumberFun()
    {
    inputNumberElem = document.getElementById("inputNumber");
    inputNumber = (inputNumberElem.value);
    var randnbr = Math.floor((Math.random() * 10) + 1);
    console.log(randnbr);
    if (randnbr == inputNumber){
        document.getElementById("resulttxt").textContent = "Good Luck! you have won!!";      
    }
    else {
        document.getElementById("resulttxt").textContent = "Bad Luck! Please try again!!";      
    }
}

function multiplyFunc(){
 var MathInput1 = document.getElementById("MathInput1").value;
 var MathInput2 = document.getElementById("MathInput2").value;
 var mulResult = MathInput1 * MathInput2;
 document.getElementById("resultcalc").textContent = mulResult;
}

function divideFunc(){
    var MathInput1 = document.getElementById("MathInput1").value;
    var MathInput2 = document.getElementById("MathInput2").value;
    var divResult = MathInput1 / MathInput2;
    document.getElementById("resultcalc").textContent = divResult;
}

function uCaseFunc() {
    var lCaseStr = document.getElementById("lCaseStr").value;
    var splitStr = lCaseStr.toLowerCase().split(' ');
    console.log(splitStr);
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    var uCaseStr =  splitStr.join(' ');
    document.getElementById("uCaseStr").textContent=uCaseStr;
 }

function checkLetFunc() {
    var inputStr = document.getElementById("inputStr").value;
    var pCtr = 0; var sCtr = 0;
    console.log(inputStr);
    for (var i = 0; i < inputStr.length; i++) {
        if ((inputStr[i] == 'p') || (inputStr[i] == 'P')) {
            pCtr = pCtr + 1;
        }
        if ((inputStr[i] == 's') || (inputStr[i] == 'S')) {
            sCtr = sCtr + 1;
        }
    }
    if (pCtr == 0 && sCtr == 0) {
        document.getElementById("checkLetOut").textContent=" ";
    }
    else if (pCtr === sCtr) {
        document.getElementById("checkLetOut").textContent="True";
    }
    else {
        document.getElementById("checkLetOut").textContent="False";
    }
};

function copyFunc() {
    var copyInp = document.getElementById("copyInp").value;
        var strLen = copyInp.length;
        var newstr = copyInp.substring(strLen-3,strLen).repeat(4);
        document.getElementById("copyOut").textContent = newstr;
    }

function addArray(){
    arrIn.push(document.getElementById("arrayInp").value);
    console.log(arrIn);
    document.getElementById("arrayInp").value="";
    document.getElementById("arrayDisp").textContent = arrIn;
}

function swapArr(){
    var firstElem = arrIn.shift();
    var lastElem = arrIn.pop();
    arrIn.push(firstElem);
    arrIn.unshift(lastElem);
    document.getElementById("arrOut").textContent = arrIn;
}

function revFunc()
    {
    var revInput = document.getElementById("revInput").value;
    var arrayRevOut = new Array;
    var arrayRevInp = revInput.split('');
    arrayRevOut = arrayRevInp.reverse();
    var RevOutput = arrayRevOut.toString();
    while (RevOutput.indexOf(",") > 0) {
        RevOutput = RevOutput.replace(',','');
    }
    document.getElementById("revOutput").textContent = RevOutput;
}

function alphFunc()
    {
    var alphInput = document.getElementById("alphInput").value;
    var arrayAlphInp = alphInput.split('');
    arrayAlphOut = arrayAlphInp.sort();
    var alphOutput = arrayAlphOut.toString();
    while (alphOutput.indexOf(",") > 0) {
        alphOutput = alphOutput.replace(',','');
    }
    document.getElementById("alphOutput").textContent = alphOutput;
}

function stringFunc() {
    var stringInp = document.getElementById("stringInp").value;
    var arrayWordInput = stringInp.split(" ");
    var longestWord = arrayWordInput.reduce(
        function(longest, currentWord){
            if (longest.length > currentWord.length) {
                return longest;
            }
            else {
                return currentWord;
            }
        }," "
    )

    document.getElementById("stringOut1").textContent = longestWord;

    var stringInp1=stringInp;
    var uniqchars="";

    for (var x=0;x < stringInp1.length;x++)
    {
   
     if(uniqchars.indexOf(str.charAt(x))==-1)
      {
        uniqchars += str[x];  
      
       }
    }
      return uniqchars;  
}

    var unqString = arrayCharInput1.toString();
    while (unqString.indexOf(",") > 0) {
        unqString = unqString.replace(',','');
    }
    document.getElementById("stringOut2").textContent=unqString;
}

function makeid() {

  }
  
setTimeout(() => {

    var curDay = curDate.getDay();
    var curHour = curDate.getHours();
    var curPart;

    if (curHour > 12) {
        curHour = curHour - 12;
        curPart = "PM";
    }
    else
    {
        curPart = "AM";
    };

    var curMin = curDate.getMinutes();
    var curSec = curDate.getSeconds();
    var dayArray = new Array;
    dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    document.getElementById("dayofweek").textContent=dayArray[curDay];
    document.getElementById("hourofday").textContent=curHour;
    document.getElementById("partofday").textContent=curPart;
    document.getElementById("minuteofday").textContent=curMin;
    document.getElementById("secondofday").textContent=curSec;

    // show date month and year as per dropdown
    var urlInfo = window.location.href;
    document.getElementById("urlInfo").textContent = urlInfo;

    // show randon generated string for problem 13
    var randString1 = "";
    var possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 8; i++) {
    randString1 += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
    }
    document.getElementById("randString1").textContent=randString1;

}, 500);