const v = (digits) => {
        digits = digits.map((el,index) => {
          if((index + 1) % 2 === 0){
			result = el * 2;
            
            if (result > 9) {
              result = result - 9;
            }
            
           el = result;
          }
          return el;
        }); 
        
        const total = digits.reduce((c,a) => {
        	return c+a;
        });
        
        return total % 10;
      };
      
     console.log(v([7,9,9,2,7,3,9,8,7,1,3]));;
