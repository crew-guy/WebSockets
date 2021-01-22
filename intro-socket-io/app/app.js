const socket = io('ws://localhost:8080')

socket.on('message', message =>
{
    const li = document.createElement('li');
    li.innerText = message
    document.querySelector('ul').appendChild(li);
})

document.querySelector('button').onclick = () => {
    socket.emit('message', document.querySelector('input').value)
};