var submitTable = document.getElementById('submit-table')

submitTable.addEventListener('click',function(){

    document.getElementById('result').innerHTML = ''
    
    var tableNumber = parseInt(document.getElementById('table-number').value)
    console.log("user ne ye table number manga ha" + tableNumber)
    var startFrom = parseInt(document.getElementById('start-from').value)
    console.log("user ne yahan se start karne ka bola ha" + startFrom)
    var endingOn = parseInt(document.getElementById('ending-on').value)
    console.log("user ne yahan tak table manga ha" + endingOn)

    for(t=startFrom;t<=endingOn;t++){
        console.log("ye loop me t ha" + t)
        var answer = tableNumber * t;
        console.log("ye answer ha" + answer)

        document.getElementById('result').innerHTML += '<tr><td>'+tableNumber+' x '+t+' = '+answer+'</td></tr>'
    }
})