function checkAge() {
  const ageField = document.getElementById("age");
  const ageText = ageField.value;

  const errorTag = document.getElementById("error");

  try {
    const age = parseInt(ageText);
    if (isNaN(age)) {
      console.log("age not found", age, ageText);
    }
  } catch (error) {
    console.log("Error", error);
    errorTag.innerHTML = "Something Wrong";
  } finally {
    console.log("all done inside try catch");
  }
  console.log(11111);
}
