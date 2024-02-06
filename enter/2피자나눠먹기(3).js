function solution(slice, n) {
    if((Math.floor(slice%n)%(2))==0){
        console.log("true출력")
        console.log((Math.floor(slice/n)))
        return answer = Math.floor(slice/n);
        
    }else{
        console.log("false출력")
        console.log(Math.floor((slice/n)+1))
        return answer = Math.floor((slice/n)+1)
        
    }

    return answer;
}

solution(7,10)

// 그러니까 

// 나머지가0이면 그대로 입력
// 나머지가 1이상이면 +1 해서 답안 제출하기


