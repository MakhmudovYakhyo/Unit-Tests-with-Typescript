export function checkDateFormat(strDate: string): boolean {
    
    let date = new Date(strDate);
    return !isNaN(date.getTime());
}