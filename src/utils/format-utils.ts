export function getCount(count :number) {
  if (count < 0) return;
  if (count < 10000) {
    return count;
  } else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 1000) / 10 + "万";
  } else {
    return Math.floor(count / 10000000) / 10 + "亿";
  }
}

/**处理音乐时间 */
export function getTime(Time :number) {
  //2:17
   if(Time < 0) return
   let newTime = Math.floor(Time / 1000)
   let minute = Math.floor(newTime / 60) 
   let second = newTime - minute * 60
   if(minute < 10){
     return '0'+ minute+':'+ second
   }else {
     return minute + ':' + second
   }
}