

var findIntersectionValues = function(nums1, nums2) {
    let count1=0;
    let count2=0;

    let newNum1=[...new Set(nums1)];
    let newNum2=[...new Set(nums2)];

    for(let i=0;i<nums1.length;i++){
        for(let j=0;j<newNum2.length;j++){
            if(nums1[i]==newNum2[j]){
                count1++;
            }
        }
    }

    for(let i=0;i<nums2.length;i++){
        for(let j=0;j<newNum1.length;j++){
            if(nums2[i]==newNum1[j]){
                count2++;
            }
        }
    }

    let result=[count1,count2];
    console.log(result);

};

let nums1=[2,3,2];
let nums2=[1,2];

findIntersectionValues(nums1, nums2);
