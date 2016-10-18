/*
 * Complete the function below.
 */
function getSortedList(names) {
    names = names.sort(sortRoyalNames);
    return names;
}

function sortRoyalNames(x, y){
    var xSplit = x.split(' ');
    var ySplit = y.split(' ');
    var xfirstName = xSplit[0];
    var yfirstName = ySplit[0];
    var xRoman = xSplit[1];
    var yRoman = ySplit[1];
    
    if(xfirstName === yfirstName){
        if(getNumericEqui(xRoman) === getNumericEqui(yRoman)){
            return 0; //the 2 names r same
        }
        else if(getNumericEqui(xRoman) > getNumericEqui(yRoman)){
            return 1;
        }
        else{
            return -1;
        }
    }
    else if(xfirstName > yfirstName){
        return 1;
    }
    else{
        return -1;
    }    
}

/*function sortByRomanNum(a,b){
    if (a === b){
        return 0;
    }
    else if(getNumericEqui(a) > getNumericEqui(b)){
        return 1;
    }
    else{
        return -1;
    }
}*/

function getNumericEqui(r){
    var	r = r.toUpperCase();
	var regEx = /^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/;
    // /^M*(D?C{0,3}|C[MD])(L?X{0,3}|X[CL])(V?I{0,3}|I[XV])$/;
	var token = /[MDLV]|C[MD]?|X[CL]?|I[XV]?/g; 
    // /[LV]|X[L]?|I[XV]?/g
    // /[VL]|I[VX]?|X[L]?/g
	var key = {L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
	var num = 0;
    var m;
	if (!(r && regEx.test(r)))
		return false;
	while (m = token.exec(r))
		num += key[m[0]]; //VIII m[0]="V" m[1],m[2]
	return num;   
}


//Discussion
var a = [0, 1, 2, 3, 4];
//a = a.sort(); //ascending order is returned by default in a new array which is sorted so we need to store in a variable.
a = a.sort(descFunc); //.sort takes in a func called a comparator which accepts 2 args

function descFunc(a, b){
    if(a === b){
        return 0;
    }
    else if(a < b){
        return 1;
    }
    else{
        return -1;
    }

}