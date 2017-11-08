date1 = '2016-07-01'
date2 = '2018-07-04'

month_chart = {
  1:'January',
  2:'February',
  3:'March',
  4:'April',
  5:'May',
  6:'June',
  7:'July',
  8:'August',
  9:'September',
  10:'October',
  11:'November',
  12:'December'
}

var makeFriendlyDates = function(date1,date2){
  var year1 = date1.slice(0,4);
  var month1 = Number(date1.slice(5,7));
  var day1 = Number(date1.slice(8,10));

  var year2 = date2.slice(0,4);
  var month2 = Number(date2.slice(5,7));
  var day2 = Number(date2.slice(8,10));

  var month1_name = month_chart[month1];
  var month2_name = month_chart[month2];

  var originalFromCardinal = function(d){
  if(d>3 && d<21) {
    return 'th'
  };
  switch (d % 10) {
        case 1:  return "st";
        case 2:  return "nd";
        case 3:  return "rd";
        default: return "th";
    }
  }

  var day1_name = day1 + originalFromCardinal(day1);
  var day2_name = day2 + originalFromCardinal(day2);

  var full_date_range = ""

  if(year1 === year2 && month1 === month2){
    full_date_range = month1_name + " " + day1_name + " - " + day2_name
  } else if(year1 === year2){
    full_date_range = month1_name + " "  + day1_name + " - " + month2_name  + " " + day2_name
  } else {
    full_date_range = month1_name + " " + day1_name + " " + year1 + " - " + month2_name + " " + day2_name + " " + year2
  }

  console.log(full_date_range);

}
