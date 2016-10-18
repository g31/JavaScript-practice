
// example dictionary
// const dictionary1 = {"a": "apple", "b": {"c": "cat"}};

// example json
// const json1 = '{a:apple,b:{c:cat}}'

function dictionaryToJson(dictionary) {
   var json = "{";
   var i ;
   var propIsDict;
   var arr = Object.getOwnPropertyNames(dictionary);
   //console.log(arr);
   for(i=0; i<arr.length; i++){
       if(typeof dictionary[arr[i]] === "object"){
           //type of 'value' field is a nested dictionary object
           //capture the 'value' which is a nested dictionary and make a recursive call when concatenating that 'property' in variable 'json'
            if(i === arr.length-1){
                json = json + arr[i] + ":"+ dictionaryToJson(dictionary[arr[i]]) + "}";
           }
           else{
               json = json + arr[i] + ":"+ dictionaryToJson(dictionary[arr[i]]) + ",";
           }
        }
        
        else{ 
            //type of 'value' field is a string
            if(i === arr.length-1){
                json = json + arr[i] + ":"+ dictionary[arr[i]] + "}";
            }
            else{
               json = json + arr[i] + ":"+ dictionary[arr[i]] + ",";
            }
        }
   }
    //console.log(json);
 return json;

}

function jsonToDictionary(json) {
    var i;
    var len = json.length;
    console.log(json);
    //var jsonSubstr = json.substring(1, len-1);
    //console.log(jsonSubstr);
    for(i = 0; i < len; i++){
        if(json.charAt(i) !== ':' || json.charAt(i) !== '{' || json.charAt(i) !== '}'){
            //surround that char with double quotes.
        }
    }
  //return dictionary;    
}

//driver code for subproblem #1
var dict = {"a": "apple", "b": {"c": "cat", "d": {"e" :"elephant"}}};
var dict1 = {"a": "apple", "b": {"c": "cat"}, "d":"dog"};
var dict2 = {"a" : "apple", "b": {"b":"blueberry", "c":"cranberry"}};
//console.log(dictionaryToJson(dict1));

//driver code for subproblem #2
var str = "{a:apple,b:{b:blueberry,c:cranberry}}";
var str1 = "{a:apple,b:{c:cat},d:dog}";
//console.log(jsonToDictionary(str));
jsonToDictionary(str);