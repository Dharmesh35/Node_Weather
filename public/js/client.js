import axios from "https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";
const fetcher = async (place) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/weather?address=${place}`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

let location = document.querySelector("input");
let form = document.querySelector("form");
let msg1 = document.querySelector(".msg1");
let msg2 = document.querySelector(".msg2");
let msg3 = document.querySelector(".msg3");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let place = location.value;
  msg1.textContent = "Loading...";
  msg3.textContent="";
  const data = await fetcher(place);
  msg1.textContent = "Weather of "+data.name+","+data.region+","+data.country;
  msg3.textContent = "Today is going to be "+data.condition+ " weather, temperature will be "+data.temp+" celsius and wind will be "+data.wind+" mph in "+data.winddir +" under the pressure of "+data.pressure+" mbar";
});
