const dateTimeFormatOptions: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    hourCycle: "h24",
    dayPeriod: "long",
    timeZone: "UTC",
    weekday: "long",
    month: "long",
    year: "numeric",
    minute:"2-digit",
    day:"2-digit"
}

const sevenDayTimeSpanMS = 7*24*60*60*1000

export function parseDateToString(date: Date): string {
    return ""
}


export function parseTimeSlotToString(startingDate: Date, endingDate: Date): string {
    const startingDate_str = new Intl.DateTimeFormat("fr-CA", dateTimeFormatOptions).format(startingDate)
    const endingDate_str = new Intl.DateTimeFormat("fr-CA", dateTimeFormatOptions).format(endingDate)


    const startingWeekDay = getWeekDay(startingDate_str)
    const startingMonth = getMonth(startingDate_str)
    const startingDay = getDate(startingDate_str)
    const startingHour = startingDate.getHours()
    const string = startingWeekDay + "le" + startingDay + startingMonth + "à" + startingHour
    return string
}


function getWeekDay(date_str: string): string{
    const wordsList = date_str.split(" ");
    if(wordsList.length>0){
        const firstWord = wordsList[0];
        const weekDay = firstWord.charAt(0).toUpperCase() + firstWord.substring(1);
        return weekDay
    } else {
        return date_str
    }
}


function getMonth(date_str: string): string{
    const wordsList = date_str.split(" ");
    if(wordsList.length>0){
        const month = wordsList[2];
        return month.charAt(0).toUpperCase() + month.substring(1);
    } else {
        return date_str
    }
}


function getDate(date_str: string): string{
    return date_str.split(" ")[1]
}
