import { format, getTime, formatDistanceToNow } from 'date-fns';

// ----------------------------------------------------------------------

export function fDate(date) {
  return format(new Date(date), 'dd MMMM yyyy');
}

export function displayEventTime(event){
  if(event.containsTime){
    return fDateTime(event.dateTime)
  }
  else{
    return fShortDate(event.dateTime)
  }
}

export function fShortDate(date) {
  return format(new Date(date), 'dd MMM yyyy');
}

export function fDateTime(date) {
  return format(new Date(date), 'dd MMM yyyy HH:mm');
}

export function fTimestamp(date) {
  return getTime(new Date(date));
}

export function fDateTimeSuffix(date) {
  return format(new Date(date), 'dd/MM/yyyy hh:mm p');
}

export function fToNow(date) {
  try{
    return formatDistanceToNow(new Date(date), {
      addSuffix: true
    });
  }
  catch(err){
    return "Invaild Date";
  }
  
}
export function fDescriptionTypeDate(date, isTime = true){
  // console.log(date, "date");
  try{
    if(isTime)
    return format(new Date(date),"EEEE dd, MMMM, yyyy p");
    else
    return format(new Date(date),"EEEE dd, MMMM, yyyy");
  }
  catch(err){
    return(`${date}`)
  }
  
}