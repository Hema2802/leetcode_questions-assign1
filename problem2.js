

const nums = [1,2,2,1];
const k=1;
let length=nums.length;
let count=0;
for(let i=0;i<length;i++){
    
    for(let j=i+1;j<length;j++){
        
        if(Math.abs(nums[i]-nums[j])==k){
            count++;
            
        }
    }
}
console.log("result :",count);