let ip = ['192.168.13.1','192.168.13.2','192.168.13.3','192.168.13.4','192.168.13.5','192.168.13.6','192.168.13.7','192.168.13.8','192.168.13.9','192.168.13.10'];
for(index = 0; index < ip.length; index++){
    if(ip[index] === '192.168.13.7'){
        let value = prompt('Enter New IP Address: ')
        ip[index] = value;
        console.log('Rahul');
    }
}
console.log(ip);
