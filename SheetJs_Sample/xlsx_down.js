 //table 태그 내부에 들어있는 데이터를 양식에 맞춰 다운로드 해주는 함수. 
 const xlsxdown = () => {
    let wb = XLSX.utils.table_to_book(    // table_to_book=> 함수는 HTML의 Table 태그의 데이터를 모두 가져와 다운로드 하는 역할을 수행한다.
      document.querySelector("#table_1"), // 위에서 id 값이 table_1인 talbe을 찾는다. 
      { sheet: "sheet_1", raw: true } // sheet name은 다음과 같이 지정할 수 있다.
    );
    XLSX.writeFile(
      wb,
      "sheetJS 테스트.xlsx" // 엑셀 파일명 지정. 
    );
  }