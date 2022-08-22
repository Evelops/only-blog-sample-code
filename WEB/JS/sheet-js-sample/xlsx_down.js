//전체 엑셀 다운 (테이블 id 값 기반.)
const xlsxdown = () => {
  let wb = XLSX.utils.table_to_book(
    // table_to_book=> 함수는 HTML의 Table 태그의 데이터를 모두 가져와 다운로드 하는 역할을 수행한다.
    document.querySelector("#table_1"), // 위에서 id 값이 table_1인 talbe을 찾는다.
    { sheet: "sheet_1", raw: true } // sheet name은 다음과 같이 지정할 수 있다.
  );
  XLSX.writeFile(
    wb,
    "sheetJS 테스트.xlsx" // 엑셀 파일명 지정.
  );
};

//선택 엑셀 다운 (체크된 row 값 기반 -> 기본형태는 2차원 배열.)
const downChkXlsx = (chkList) => {
  const date = new Date(); 

  const wb = XLSX.utils.book_new(); // xlsx workbook 객체 생성.
  const ws = XLSX.utils.aoa_to_sheet(chkList); // 2차원 배열을 xlsx 형식으로 변환하는 sheet.js 메서드

  XLSX.utils.book_append_sheet(wb, ws, "Sheet1"); 
  XLSX.writeFile(wb, date.toLocaleDateString("ko-kr") + " 보고서 리스트.xlsx", {
    numbers: XLSX_ZAHL_PAYLOAD,
    compression: true,
  });
};


//헤더의 체크박스 선택시, 전체 선택을 처리를 위한 함수.
const selectAll = (selectAll) => {
  const checkbox = document.querySelectorAll("#chkBox");

  checkbox.forEach((checkbox) => {
    checkbox.checked = selectAll.checked;
  });
};



//체크박스에 선택된 값들만 가져와 다운로드 시킨다.
const selectDown = () => {
  const xlsxArr = new Array(['No','Name','Birth','Location']); // sheet.js에서 데이터를 한 개씩 집어 넣기위해서는 colum[row[]] => 형식의 2차원 배열로 만들어주어야한다. 최종적으로 2차원 배열의 틀이 되는 배열 선언.
  const rowArr = new Array();


  const selctedItem = "input[name=user_CheckBox]:checked";
  const chkItemList = document.querySelectorAll(selctedItem);
  console.log(chkItemList.length);

  for (let j = 0; j < chkItemList.length; j++) {
    let tr = chkItemList[j].parentNode.parentNode;

    let no = tr.cells[1].innerHTML + "";
    let name = tr.cells[2].innerHTML + "";
    let birth = tr.cells[3].innerHTML + "";
    let location = tr.cells[4].innerHTML + "";

    console.log(no, name, birth, location);

    rowArr[j] = new Array();
    rowArr[j].push(no);
    rowArr[j].push(name);
    rowArr[j].push(birth);
    rowArr[j].push(location);
    xlsxArr.push(rowArr[j]);
  }
  console.log(xlsxArr);

  downChkXlsx(xlsxArr);
};


