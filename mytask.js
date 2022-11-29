
#1 Task_check  number is prime or not__

  let number =19;

  let count=0;

   for(let i=1;i<=number;i++){
       if(number%i==0){
        
        count++;
   }

   }
     if(count==2){
       console.log(true);

    }else{
      console.log(false);

   }


#2 Task_2nd - Palindrome problem 
check string is palindrome problem or not,if it is palindrome print is 'Yes' if it is not then print 'No'.


    let str = 'madam';

    let bag ='';

   for(let i=str.length-1;i>=0;i--){

        bag+=str[i];


   }
      if(str==bag){

    console.log('Yes');

   }
  else{
    
    console.log('No');

     }
