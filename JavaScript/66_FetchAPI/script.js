let weather = fetch("https://goweather.xyz/weather/London");
weather.then( (value) =>{
    console.log(value.status); // 200
    console.log(value.ok); // boolean value indicating if the request was successful

    console.log(value.headers); // Headers object containing the response headers
    // return value;
    // you can use value.text() or value.json() to get the response body
    // If you want to get the response body as text, use value.text()
    // using both will lead to an error because the response body can only be read once
    // return value.text(); // returns a promise that resolves to the response body as text
    return value.json(); // returns a promise that resolves to the JSON data
}).then((value1) => {
    console.log(value1); // JSON data of the weather in London
    // console.log(value1.text())
    // console.log(value);
}) 
