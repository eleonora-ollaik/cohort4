
const functions = {
    
    size: (num) => {
        if (num < 10) return "small";
        else if (num < 20) return "medium";
        else return "large";
    },

    add: (num1, num2) => {
        return num1 + num2;
    },

    subtract: (num1, num2) => {
        return num1 - num2; 
    },
    
    isEven: (num) => {
        if (num%2 === 0) {
            return true;
        } else {
            return false;
        }},

  

    // equal: () => {
    //     let exp = document.getElementsByClassName(textview).value;
    //     if(exp){
    //         document.getElementsByClassName(textview).value = eval(exp)
    //     }
    //     },

    // clean: () =>{
    //     document.getElementsByClassName(textview).value = "";
    //     }
        
    }

    


export default functions;
