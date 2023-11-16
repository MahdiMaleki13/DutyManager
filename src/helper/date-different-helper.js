export function dateDiff(deadLineTime, deliveryTime) {
  let date1 = new Date(deadLineTime);
  // let date1 = new Date('1402/4/20');
  let date2 = new Date(deliveryTime);

  let day1 = date1.getDate();
  let day2 = date2.getDate();
  let month1 = date1.getMonth() + 1;
  let month2 = date2.getMonth() + 1;
  let year1 = date1.getFullYear();
  let year2 = date2.getFullYear();

  if (month1 >= 1 && month1 <= 6) {
    month1 *= 31;
  }
  if (month1 >= 7 && month1 <= 12) {
    month1 = (month1 - 6) * 30;
    month1 += 6 * 31;
  }
  if (month2 >= 1 && month2 <= 6) {
    month2 *= 31;
  }
  if (month2 >= 7 && month2 <= 12) {
    month2 = (month2 - 6) * 30;
    month2 += 6 * 31;
  }

  let resday = day1 - day2;
  let resmonth = month1 - month2;
  let resyear = (year1 - year2) * 365;
  let res = resyear + resmonth + resday;
  if (res < 0) {
    return false;
  }
  return true;
}
