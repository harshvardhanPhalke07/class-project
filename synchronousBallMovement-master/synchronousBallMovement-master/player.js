class Player{
    constructor(){}
    
    refcount(){
        database.ref("playerCount").on("value",function(data){
         playerCon=data.val()
        })
    }
    updateCount(input){
        database.ref("/").update({
            playerCount:input
        })
    }
    update(INPUT){
        database.ref("player"+playerCon).set({
            name:INPUT
        })

        
    }
}