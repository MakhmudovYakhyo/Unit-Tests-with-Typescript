export function dateFormat(strDate: string): boolean {
    
    // ****** Using Date class

    var date = new Date(strDate);
    return !isNaN(date.getTime());



    // ****** Using regex

    /* var regex = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$|^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$|^((0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])-\d{4})$/;
    return regex.test(strDate); */


}