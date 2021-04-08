class FORM{
    constructor(){}
    display(){
        var Title=createElement("h2")
     Title.html("Welcome to our game")
     Title.position(100,100)
     var textBox=createInput("Enter name")
     textBox.position(250,250)
     var button=createButton("Lets go!")
     button.position(250,260)
     button.mousePressed(function(){
     textBox.hide()
     button.hide()
     var playerName= textBox.value()
     playerCon++
     player.update(playerName)
     player.updateCount(playerCon)
     var greeting=createElement("h6")
     greeting.position(260,250)
     greeting.html("Yo! Whats up"+PlayerName +"?")
     })
        
    }

}
