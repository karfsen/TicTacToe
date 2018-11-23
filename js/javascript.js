let board=[0,0,0,0,0,0,0,0,0];
let player=1;
let winner=0;

$(document).ready(function() {

});

//funkcia zaregistruje kliknutie na biely obrazok na obrazovke
function imgClick(index){
  console.log(index);

  if(board[index]===0 && winner===0){
    board[index]=player;


    if(player===1)
        paintCell('img/x.jpg',index);
    else
        paintCell('img/0.jpg',index);
    changePlayer();
    setTimeout(checkWinner,500);
  }

}

//funkcia zmeni obrazok polička
function paintCell(imagexo,index){
  let image=document.getElementsByName('image')[index].src=imagexo;

}

//funkcia zmeni hrača
function changePlayer(){
  player=player===1?2:1;
  let playerDiv=document.getElementById('player');
  if(player===1)
    playerDiv.innerHTML='Next player: X';
   else
      playerDiv.innerHTML='Next player: O';

}

//funkcia čekne kto vyhral
function checkWinner(){
  let t =0;
  for(i=0;i<7;i=i+3){
    t=board[i]*board[i+1]*board[i+2];
    if(t==1)
        winner=1;
    if(t==8)
        winner=2;
  }


  for(i=0;i<3;i++){
    t=board[i]*board[i+3]*board[i+6];
    if(t==1)
          winner=1;
    if(t==8)
          winner=2;
  }


  t=board[0]*board[4]*board[8];

  if(t==1)
        winner=1;
  if(t==8)
        winner=2;


  t=board[2]*board[4]*board[6];
      if(t==1)
            winner=1;
      if(t==8)
            winner=1;



   if(winner==1)
      alert('X is winner !');
   if(winner==2)
         alert('O is winner !');

}

//funkcia zresetuje obrazky a začne novu hru
function resetGame(){
  winner=0;
  player=1;
  for(i=0;i<9;i++){
    board[i]=0;
    paintCell('img/empty.jpg',i);
  }
}
