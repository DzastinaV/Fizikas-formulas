function submitQuiz() {
    let total = 12;
    let score = 0;
  
    // Check answer to question 1
    let q1 = document.getElementsByName("q1");
    for (let i = 0; i < q1.length; i++) {
      if (q1[i].checked) {
        if (q1[i].value == "c") {
          score++;
        }
        break;
      }
    }
  
    // Check answer to question 2
    let q2 = document.getElementsByName("q2");
    for (let i = 0; i < q2.length; i++) {
      if (q2[i].checked) {
        if (q2[i].value == "a") {
          score++;
        }
        break;
      }
    }
  
    // Check answer to question 3
    let q3 = document.getElementsByName("q3");
    for (let i = 0; i < q3.length; i++) {
      if (q3[i].checked) {
        if (q3[i].value == "c") {
          score++;
        }
        break;
      }
    }
  
     // Check answer to question 1
     let q4 = document.getElementsByName("q4");
     for (let i = 0; i < q4.length; i++) {
       if (q4[i].checked) {
         if (q4[i].value == "c") {
           score++;
         }
         break;
       }
     }
   
     // Check answer to question 2
     let q5 = document.getElementsByName("q5");
     for (let i = 0; i < q5.length; i++) {
       if (q5[i].checked) {
         if (q5[i].value == "a") {
           score++;
         }
         break;
       }
     }
   
     // Check answer to question 3
     let q6 = document.getElementsByName("q6");
     for (let i = 0; i < q6.length; i++) {
       if (q6[i].checked) {
         if (q6[i].value == "c") {
           score++;
         }
         break;
       }
     }
  
     
      // Check answer to question 1
    let q7 = document.getElementsByName("q7");
    for (let i = 0; i < q7.length; i++) {
      if (q7[i].checked) {
        if (q7[i].value == "c") {
          score++;
        }
        break;
      }
    }
  
    // Check answer to question 2
    let q8 = document.getElementsByName("q8");
    for (let i = 0; i < q8.length; i++) {
      if (q8[i].checked) {
        if (q8[i].value == "a") {
          score++;
        }
        break;
      }
    }
  
    // Check answer to question 3
    let q9 = document.getElementsByName("q9");
    for (let i = 0; i < q9.length; i++) {
      if (q9[i].checked) {
        if (q9[i].value == "c") {
          score++;
        }
        break;
      }
    }
  
      // Check answer to question 1
      let q10 = document.getElementsByName("q10");
      for (let i = 0; i < q10.length; i++) {
        if (q10[i].checked) {
          if (q10[i].value == "c") {
            score++;
          }
          break;
        }
      }
    
      // Check answer to question 2
      let q11 = document.getElementsByName("q11");
      for (let i = 0; i < q11.length; i++) {
        if (q11[i].checked) {
          if (q11[i].value == "a") {
            score++;
          }
          break;
        }
      }
    
      // Check answer to question 3
      let q12 = document.getElementsByName("q12");
      for (let i = 0; i < q12.length; i++) {
        if (q12[i].checked) {
          if (q12[i].value == "c") {
            score++;
          }
          break;
        }
      }
  
  
    // Display result
    let percent = score / total * 100;
    document.getElementById("result").innerHTML = "Jūsu rezultāts: " + percent + "%";
  }
  