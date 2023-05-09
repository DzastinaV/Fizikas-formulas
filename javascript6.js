function submitQuiz() {
  let total = 16;
  let score = 0;

  
  let q1 = document.getElementsByName("q1");
  for (let i = 0; i < q1.length; i++) {
    if (q1[i].checked) {
      if (q1[i].value == "b") {
        score++;
      }
      break;
    }
  }

  
  let q2 = document.getElementsByName("q2");
  for (let i = 0; i < q2.length; i++) {
    if (q2[i].checked) {
      if (q2[i].value == "b") {
        score++;
      }
      break;
    }
  }


  let q3 = document.getElementsByName("q3");
  for (let i = 0; i < q3.length; i++) {
    if (q3[i].checked) {
      if (q3[i].value == "d") {
        score++;
      }
      break;
    }
  }

   
   let q4 = document.getElementsByName("q4");
   for (let i = 0; i < q4.length; i++) {
     if (q4[i].checked) {
       if (q4[i].value == "a") {
         score++;
       }
       break;
     }
   }
 
   
   let q5 = document.getElementsByName("q5");
   for (let i = 0; i < q5.length; i++) {
     if (q5[i].checked) {
       if (q5[i].value == "b") {
         score++;
       }
       break;
     }
   }
 
  
   let q6 = document.getElementsByName("q6");
   for (let i = 0; i < q6.length; i++) {
     if (q6[i].checked) {
       if (q6[i].value == "a") {
         score++;
       }
       break;
     }
   }

   
  
  let q7 = document.getElementsByName("q7");
  for (let i = 0; i < q7.length; i++) {
    if (q7[i].checked) {
      if (q7[i].value == "c") {
        score++;
      }
      break;
    }
  }

  
  let q8 = document.getElementsByName("q8");
  for (let i = 0; i < q8.length; i++) {
    if (q8[i].checked) {
      if (q8[i].value == "a") {
        score++;
      }
      break;
    }
  }

  
  let q9 = document.getElementsByName("q9");
  for (let i = 0; i < q9.length; i++) {
    if (q9[i].checked) {
      if (q9[i].value == "a") {
        score++;
      }
      break;
    }
  }

    
    let q10 = document.getElementsByName("q10");
    for (let i = 0; i < q10.length; i++) {
      if (q10[i].checked) {
        if (q10[i].value == "d") {
          score++;
        }
        break;
      }
    }
  
    
    let q11 = document.getElementsByName("q11");
    for (let i = 0; i < q11.length; i++) {
      if (q11[i].checked) {
        if (q11[i].value == "b") {
          score++;
        }
        break;
      }
    }
  
    
    let q12 = document.getElementsByName("q12");
    for (let i = 0; i < q12.length; i++) {
      if (q12[i].checked) {
        if (q12[i].value == "a") {
          score++;
        }
        break;
      }
    }

        
        let q13 = document.getElementsByName("q13");
        for (let i = 0; i < q13.length; i++) {
          if (q13[i].checked) {
            if (q13[i].value == "a") {
              score++;
            }
            break;
          }
        }
      
        
        let q14 = document.getElementsByName("q14");
        for (let i = 0; i < q14.length; i++) {
          if (q14[i].checked) {
            if (q14[i].value == "c") {
              score++;
            }
            break;
          }
        }
      
        
        let q15 = document.getElementsByName("q15");
        for (let i = 0; i < q15.length; i++) {
          if (q15[i].checked) {
            if (q15[i].value == "a") {
              score++;
            }
            break;
          }
        }

         
         let q16 = document.getElementsByName("q16");
         for (let i = 0; i < q16.length; i++) {
           if (q16[i].checked) {
             if (q16[i].value == "c") {
               score++;
             }
             break;
           }
         }

  
  let percent = score / total * 100;
  document.getElementById("result").innerHTML = "Jūsu rezultāts: " + percent + "%";
}

