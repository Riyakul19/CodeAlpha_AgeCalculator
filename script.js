function calculateAge() {
  const dob = new Date(document.getElementById("dob").value);
  const today = new Date();

  if (isNaN(dob.getTime())) {
    document.getElementById("result").innerHTML = "Please enter a valid date.";
    return;
  }

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  document.getElementById("result").innerHTML = 
    `You are ${years} years, ${months} months, and ${days} days old.`;
}
