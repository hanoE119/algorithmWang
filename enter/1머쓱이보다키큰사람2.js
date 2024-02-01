let arr=[149, 180, 192, 170];
let myh=167;
let myh_num=0;


function solution(array, height) {

    for(i=0; i<arr.length; i++){
        if(arr[i]>myh){
            myh_num +=1;
        }
    }
    
    var answer = myh_num;
    return answer;
}

solution(arr,myh);
