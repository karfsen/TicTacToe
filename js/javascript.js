let board=[
			[0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0]
		  ];

$(document).ready(function() {

});

let countTurn=1;
let x;
function imgClick(index){
  	x=document.getElementsByName('image')[index];
  	checkingTurn(index);
}

let currentPlayer;
function checkingTurn(index){

	if(countTurn==2){
  					if(board[1][index]==0 &&board[0][index]==0){

  					x.setAttribute("src","img/x.i,g");
  					currentPlayer=document.getElementsByName('nameP1')[0];
  					currentPlayer.setAttribute("bgcolor","white");
  					currentPlayer=document.getElementsByName('nameP2')[0];
  					currentPlayer.setAttribute("bgcolor","red");


						board[1][index]=1;
						countTurn=1;
						checkResulPtwo();

					}else{
						alert("Acces denied!!!");
					}
  	}else{
  					if(board[0][index]==0 &&board[1][index]==0){

  					x.setAttribute("src","img/.img");
  					currentPlayer=document.getElementsByName('nameP2')[0];
  					currentPlayer.setAttribute("bgcolor","white");
  					currentPlayer=document.getElementsByName('nameP1')[0];
  					currentPlayer.setAttribute("bgcolor","red");

						board[0][index]=1;
						countTurn=2;
						checkResulPone();

					}else{
						alert("Acces denied!!!");
					}
  	}

}
