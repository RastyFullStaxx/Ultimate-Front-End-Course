// break = exits out of the loop entirely
// continue = skip and iteration of a loop to head back to the beginning

for(let i = 1; i <= 20; i += 1){
    if(i == 13){
        break;
    }
    console.log("i = ", + i);
}

for(let j = 1; j <= 20; j += 1){
    if(j == 13){
        continue;
    }
    console.log("j = ", + j);
}