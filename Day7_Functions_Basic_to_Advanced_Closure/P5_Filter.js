    const arr=[1,2,3,4,5,6,7,8,9,10];

    function filter(arr){
        let temp=[];
        for(let num of arr){
            if(num>5){
                temp.push(num);
            }
        }

        return temp;
    }

    console.log(filter(arr));
    console.log("---------------------------------------------------------------");

    const output=arr.filter(arr=>arr>5);
    console.log(output);

    console.log("---------------------------------------------------------------");

    //if we have to find the even numbers
    console.log(arr.filter(arr=>arr%2==0));
