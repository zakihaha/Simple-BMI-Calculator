const calculateBMI = (e) => {
    e.preventDefault();

    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    
    const bmi = weight / (height / 100) ** 2;

    let category;
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal";
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Overweight";
    } else {
        category = "Obesity";
    }

    const result = document.getElementById("result");
    result.style.display = "block";

    const bmiResult = document.getElementById("bmi-result");
    bmiResult.innerHTML = bmi.toFixed(1);

    const bmiCategory = document.getElementById("bmi-category");
    bmiCategory.innerHTML = category;
}

form.addEventListener('submit', calculateBMI);