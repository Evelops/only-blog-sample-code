
  
  //선택 엑셀 다운 (체크된 row 값 기반 -> 기본형태는 2차원 배열.)
  const downChkXlsx = (chkList) => {
    // const date = new Date(); 
  
    // const wb = XLSX.utils.book_new(); // xlsx workbook 객체 생성.
    // const ws = XLSX.utils.aoa_to_sheet(chkList); // 2차원 배열을 xlsx 형식으로 변환하는 sheet.js 메서드
  
    // XLSX.utils.book_append_sheet(wb, ws, "Sheet1"); 
    // XLSX.writeFile(wb, date.toLocaleDateString("ko-kr") + " 보고서 리스트.xlsx", {
    //   numbers: XLSX_ZAHL_PAYLOAD,
    //   compression: true,
    // });
  };
  
  
  //헤더의 체크박스 선택시, 전체 선택을 처리를 위한 함수.
  const selectAll = (selectAll) => {
    const checkbox = document.querySelectorAll("#chkBox");
  
    checkbox.forEach((checkbox) => {
      checkbox.checked = selectAll.checked;
    });
  };
  
  
  
  
  
  
  