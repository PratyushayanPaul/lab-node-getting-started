class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(num) {
    this.items.push(num);
    this.items.sort((a,b)=>a-b);
    this.length = this.items.length;
   
  }
  get(pos) {
    if(pos <= this.length){
      return this.items.indexOf(pos);
    }
    else{
      throw new Error('OutOfBounds');
    }
  }
  max() {
    if(this.length===0){
      throw new Error('EmptySortedList');
    }
    else{
      return Math.max(...this.items)
    }
  }
  min() {
    if(this.length===0){
      throw new Error('EmptySortedList');
    }
    else{
      return Math.min(...this.items);
    }
  }

  sum() {
    if(this.length>0){
      return this.items.reduce((a,b)=>a+b,0);
    }
    else{
      return 0;
    }
  }

  avg() {
    if(this.length>0){
      return this.sum()/this.length;
    }
    else{
      throw new Error("EmptySortedList");
    }
  }
};

module.exports = SortedList;