class Game{
    constructor(){

    }
    getState(){
        database.ref("gameState").on("value",function(data){
            gameState=data.val()
        })
    }
    update(input){
        database.ref("/").update({
            gameState:input
        })
    }
    start(){
        if (gameState==0){
            player=new player()
            player.refcount()
            form= new FORM()
            form.display()
        }
       
    }
}