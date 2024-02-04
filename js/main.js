let arr = [];
  function addNum() {
    let inputArray = Number(document.getElementById('inputArray').value);
    let resultElement = document.getElementById('result');

    arr.push(inputArray);
    console.log(arr);
    document.getElementById('inputArray').value = '';

    let showArr ='';
    for (let i = 0; i < arr.length; i++) {
      const LArr = arr[i];
      console.log(LArr);
      const PArr = `${LArr}, `
      showArr += PArr;
      console.log(showArr);
      document.getElementById("Arr").innerHTML = showArr;
    }

    // 1.
    let tongDuong = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        tongDuong += arr[i];
      }
    }
    
    // 2.
    let soDuong = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        soDuong++;
      }
    }
    // 3.
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if(arr[i]< min) {
        min = arr[i];
      } 
    }
    //4.
    let duongNN = Infinity;
    for (let i = 0; i < arr.length; i++) {
      if(arr[i]>0 && arr[i]< duongNN) {
      duongNN = arr[i]; 
      }
    }
    //5.
    let lastEvenNumber = -1
    for (let i = arr.length-1; i >= 0; i--) {
      if(arr[i] % 2 === 0){
        lastEvenNumber = arr[i];
        break;
      }
      
    }

    //7.
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        // Swap if the element found is greater than the next element
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    //10.
    let sNDuong = 0;
    let sNAm = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        sNDuong++;
      } else if (arr[i] < 0) {
        sNAm++;
      }
      function soSanh() {      
        if (sNDuong > sNAm) {
        return "Số Dương Nhiêu Hơn.";
        } else if (sNAm > sNDuong) {
        return "Số Âm Nhiều Hơn.";
        } else {
        return "Số Âm = Số Dương";
        }
    }
}

    resultElement.innerHTML = `
      1. Tổng các số dương: ${tongDuong}
      <br>
      2. Các số dương trong có trong Array: ${soDuong}
      <br>
      3. Số nhỏ nhất: ${min}
      <br>
      4. Số dương nhỏ nhất : ${duongNN}
      <br>
      5. Số chăn cuối cùng : ${lastEvenNumber}
      <br>
      6.
      <br>
      7. Xắp xếp arr tăng dần: ${arr}
      <br>
      8.
      <br>
      9.
      <br>
      10. So Sánh lượng số âm và số dương: ${soSanh(sNDuong, sNAm)}
      `
}