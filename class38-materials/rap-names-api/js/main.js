document.querySelector("button").addEventListener("click", apiRequest);

async function apiRequest() {
  const rappersName = document.querySelector("input").value;
  try {
    const response = await fetch(`http://localhost:8000/${rappersName}`);
    const data = await response.json();

    console.log(data);
    document.querySelector("h2").innerText = data.birthName;
  } catch (error) {
    console.log(error);
  }
}
