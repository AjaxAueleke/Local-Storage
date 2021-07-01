let inputClass = document.getElementsByTagName("input");
let submit = document.getElementById("btnsubmit");
console.log(submit);
console.log(inputClass);
let object = {};
let stringObj;
let key = "userId";
let tableData;
function onSubmit() {
  localStorage.clear();
  for (let formData of inputClass) {
    object[formData.placeholder] = formData.value;
    formData.value = '';
  }
  stringObj = JSON.stringify(object);
  localStorage.setItem(key, stringObj);
  stringObj = localStorage.getItem(key);
  object = JSON.parse(stringObj);
  tableData = `<tr><td>1</td><td>${object.Username}</td><td>${object.Email}</td><td>${object.age}</td><td>${object.password}</td></tr>`;
  document.getElementById("form-data").innerHTML = tableData;
   
}
window.addEventListener('keypress', (e) => {
  if (e.keyCode == 13) {
    onSubmit();
  }
});
submit.addEventListener("click", onSubmit);
