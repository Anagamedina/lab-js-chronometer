class Chronometer {  

  constructor() {
    this.currentTime=0;  
    this.intervalId= null ;
  }  

  start(printTimeCallback) {
    
      this.intervalId= setInterval(()) => {   
        this.currentTime++;
        if(printTimeCallback){
          printTimeCallback(); 

        }

      }, 1000);

  }.   

  getMinutes() {   
    return Math.floor(this.currentTime/60); 
    }
  
  getSeconds() {
    const seconds = this.currentTime % 60;
    return seconds;
     
  }
  
  computeTwoDigitNumber(value) {
    if (value<10){
      return "0"+ value;

    }else {
      return value.tostring();
    }
  }

  stop() {
   clearInterval(this.intervalId);
  }

  reset() {  
   this.currentTime= 0;
  }

  split() {
    const minutes= this.computeTwoDigitNumber(this.getMinutes());
    const seconds= this.computeTwoDigitNumber(this.getSeconds());
  return `${minutes}:${seconds}` };
}
