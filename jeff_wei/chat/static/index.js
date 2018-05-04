$(document).ready(function(){
	var socket=io()
	$('#send').click(function(e){
		socket.emit('send',{message:$("input[name='message']").val()})
		$("input[name='message']").val('')
		return false
	})
	socket.on('new_user',function(user){
		$('#users').append(`<div id='${user.id}'><p>${user.name}</p></div>`)
	})
	socket.on('new_message',function(data){
		$('#chat').prepend(`<p>${data.user}: ${data.message}</p>`)
	})
	socket.on('prompt',function(id){
		var name
		while(!name){
			name = prompt("new chat, who dis")
		}
		socket.emit('create_user',{name:name,id:id.id})
	})
	socket.on('delete_user',function(data){
		console.log(data)
		$(`#${data.id}`).remove()
	})

})