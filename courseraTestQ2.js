/*
 * Complete the function below.
 */
function reformatDate(dates) {
     return dates.map(function(d){
        return formatDate(d);
    });
}

function formatDate(d){
    var dArr = d.split(' ');
    var dd = dateToNumeric(dArr[0]);
    var mm = monthStringToNum(dArr[1]);
    var yyyy = dArr[2];
    
    return yyyy.toString() + '-' + mm.toString() + '-' + dd.toString();
}

function monthStringToNum(mon){
    var lookUp = {
        'JAN': '01',
        'FEB': '02',
        'MAR': '03',
        'APR': '04',
        'MAY': '05',
        'JUN': '06',
        'JUL': '07',
        'AUG': '08',
        'SEP': '09',
        'OCT': '10',
        'NOV': '11',
        'DEC': '12'
    };
    mon = mon.toUpperCase();
    return lookUp[mon];
}

function dateToNumeric(date){
       var regEx = /[a-z]{2},/;
       var d = date.replace(/(\d+)(st|nd|rd|th)/, "$1");
       d = Number(d);
    if(d < 10){
       return '0' + d;
    }
    else{
        return '' + d;
    }
}