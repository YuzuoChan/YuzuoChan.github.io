window.onload = function () {
  //Hàm này dùng để tính toán
  const main = () => {
    //Lấy textbox chứa số Year mà User nhập vào
    //Lấy giá trị của Year
    const txtYear = document.getElementById("txtYear");
    const y = parseInt(txtYear.value);

    var Can = "";
    var Chi = "";
    var result;

    console.log("Nam la:", y);

    //Viết logic làm bài của bạn ở dây
    switch (y % 10) {

      case 0: {
        Can = "Canh";
        break;
      } case 1: {
        Can = "Tân";
        break;
      }
      case 2: {
        Can = "Nhâm";
        break;
      }
      case 3: {
        Can = "Quý"
        break;
      }
      case 4: {
        Can = "Giáp";
        break;
      }
      case 5: {
        Can = "Ất";
        break;
      }
      case 6: {
        Can = "Bính";
        break;
      }
      case 7: {
        Can = "Đinh";
        break;
      }
      case 8: {
        Can = "Mậu";
        break;
      }
      case 9: {
        Can = "Kỷ";
        break;
      }

      default: {
        // do something
      }
    }
    switch (y % 12) {
      case 0: {
        Chi = "Thân";
        break;
      }
      case 1: {
        Chi = "Dậu";
        break;
      }
      case 2: {
        Chi = "Tuất";
        break;
      }
      case 3: {
        Chi = "Hợi";
        break;
      }
      case 4: {
        Chi = "Tý";
        break;
      }
      case 5: {
        Chi = "Sửu";
        break;
      }
      case 6: {
        Chi = "Dần";
        break;
      }
      case 7: {
        Chi = "Mẹo";
        break;
      }
      case 8: {
        Chi = "Thìn";
        break;
      }
      case 9: {
        Chi = "Tý";
        break;
      }
      case 10: {
        Chi = "Ngọ";
        break;
      }
      case 11: {
        Chi = "Mùi";
        break;
      }
      default: {
        // do something
      }
    }
    result = `Năm ${y} có năm Âm Lịch là ${Can} ${Chi}`;
    //Lấy span chứa kết quả ở đây
    const lblResult = document.getElementById("lblResult");

    //Cập nhật kết quả tính toán
    lblResult.innerText = `${result}`;
  };
  //Lấy nút Submit
  const btnSubmit = document.getElementById("btnSubmit");
  //Thêm sự kiện onclick vào button
  btnSubmit.onclick = (event) => {
    main();
  };
};
