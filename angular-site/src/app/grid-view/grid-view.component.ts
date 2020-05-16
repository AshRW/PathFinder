import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit {
  //data
  // numbers:any
  steps:any
  algorithms:any=[
    {"name":"Dijkstra's",
    "desc":"Dijkstra's algorithm (or Dijkstra's Shortest Path First algorithm, SPF algorithm) is an algorithm for finding the shortest paths between nodes in a graph, which may represent, for example, road networks. It was conceived by computer scientist Edsger W. Dijkstra in 1956 and published three years later."},
    {"name":"A-star",
    "desc":"A* (pronounced A-star) is a graph traversal and path search algorithm, which is often used in computer science due to its completeness, optimality, and optimal efficiency. One major practical drawback is its space complexity, as it stores all generated nodes in memory. Thus, in practical travel-routing systems, it is generally outperformed by algorithms which can pre-process the graph to attain better performance, as well as memory-bounded approaches; however, A* is still the best solution in many cases."}
  ]
  twodar:any[][]
  outputarray:any[][]   //This is the 2d array to be used for monipulation by the algorithm

  set2darray(first:any,second:any,third:any){
    // console.log("here")
    this.outputarray[first][second]=third;
  }

  constructor() {
    // making the 2d array that makes the HTML Grids
    this.twodar=[];
    for(let i=0;i<20;i++){
      this.twodar[i]=[];
      for(let j=0;j<20;j++){
        this.twodar[i][j]=1000;
      }
    }
    // Making the 2d array that contains the start, end & wall data
    this.outputarray=[];
    for(let i=0;i<20;i++){
      this.outputarray[i]=[];
      for(let j=0;j<20;j++){
        this.outputarray[i][j]=1000;
      }
    }

  }

  ngOnInit() {
    this.onFirstLoad();
  }

  onFirstLoad(){
    // this.numbers = Array(400).fill(0);
    this.steps=0;
  }
  clicked(ind1:any, ind2:any){
    //console.log(ind1,ind2)
    //console.log(document.getElementById(ind1+'_'+ind2))
    // console.log(this.twodar)
    switch(this.steps){
      case 0: {this.getStartPoint(ind1, ind2);
      }
      break;
      case 1: this.getEndPoint(ind1, ind2);
      break;
      case 2: this.getWallPoints(ind1, ind2);
      break;
      // default: window.location.reload();     //CHECK THIS PIECE LATER
    }
  }
  selectedAlgo(ind:any){
    console.log(this.algorithms[ind])
    document.getElementById("info").innerHTML="<b>Information</b>: "+this.algorithms[ind].desc
  }
  reset(){
    window.location.reload();
  }

  getStartPoint(ind1, ind2){
    this.steps=1;
    this.set2darray(ind1,ind2,-1);
    document.getElementById(ind1+"_"+ind2).style.background="blue";
  }
  getEndPoint(ind1, ind2){
    this.steps=2;
    this.set2darray(ind1,ind2,-2)
    document.getElementById(ind1+"_"+ind2).style.background="red";
  }
  getWallPoints(ind1, ind2){
    this.set2darray(ind1,ind2,-3)
    document.getElementById(ind1+"_"+ind2).style.background="grey";
  }

  //trial
  walldone(){
    this.steps=3;
  }

  mouseoverfun(x, y, event:any){
    let status=false
    document.onmousedown=function(){
      status=true;
      console.log("down")
    }
    document.onmouseup=function(){
      status=false;
      console.log("up")
    }
    document.onmouseover=function(){
      if(status){
        console.log("done")
        console.log(x,y)
        console.log(event)
      }
    }
  }

}
