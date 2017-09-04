/*jshint esversion: 6*/
class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction = "up";
    this.begin= 0;
    this.waitingList=[];
    this.passengers=[];
  }

  start() {
    this. begin = setInterval(() => this.update(), 1000);
    this.stop();
   }
  stop() {
    setTimeout(() => { clearInterval(this.begin);}, 20000);

   }
  update() {
      console.log(`Direction: ${this.direction} || floor: ${this.floor}`);
      if(this.floor==10){
        this.direction="down";
      }else if(this.floor==0){
        this.direction="up";
    }
    if(this.direction=="up"){
      this.floorUp();
    }else if(this.direction=="down"){
      this.floorDown();
  }
   }
  _passengersEnter() {
    for(var i=0;i<this.waitingList.length;i++){
      if(this.floor==this.waitingList[i].originFloor){
        console.log(`${this.waitingList[i].name} has enter the elevator`);
        this.passengers.push(this.waitingList[i]);

        this.waitingList.splice(i,1);

        this.requests.push(this.passengers[i].destinationFloor);

    }
   }
 }
  _passengersLeave() {
    for(var i=0;i<this.passengers.length;i++){
      if(this.passengers[i].destinationFloor==this.floor){
        console.log(`${this.passengers[i].name} has left the elevator`);
        this.passengers.splice(i,1);

  }
}
}
  floorUp() {
    if(this.floor<10){
    this.floor++;
  }
    console.log(this.floor);
    this._passengersEnter();
    this._passengersLeave();
  }
  floorDown() {
    if(this.floor>0){
    this.floor--;
  }
    console.log(this.floor);
    this._passengersEnter();
    this._passengersLeave();
   }
  call(person) {
    this.requests.push(person.originFloor);
    this.waitingList.push(person);
    
   }
  log() { }
}

module.exports = Elevator;
