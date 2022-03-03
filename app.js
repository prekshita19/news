// let url = "https://example.com";

// fetch(url)
//   .then((res) => res.json())
//   .then((out) => console.log("Checkout this JSON! ", out))
//   .catch((err) => throw err);

function looping(out) {
  for (i of out.articles) {
    document.getElementById(
      "news"
    ).innerHTML += `<div class="container" style="border:1px solid black;margin:10px;">
  <div class="row" align="center" >
  <div class="col-sm">  
  <div style="color:green;"><b>${i.title}</b></div>
  </div>
  <div class="row">
    <div class="col-sm">
    <div><img src="${i.urlToImage}" style="height:200px;width:200px;"></div>
    </div>
    <div class="col-sm">
      ${i.description}
    </div>
  </div>
</div>`;
  }
}

function displaynews() {
  var ele = document.getElementById("country");
  var element = ele.value;
  console.log("element selected", element);
  if (element === "USA") {
    data = fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=fdbdab306b7347a8bb088a0079b4a5c6`
    )
      .then((res) => res.json())
      // .then((out) => console.log("Checkout this JSON! ", out));
      .then((out) => looping(out));
  } else if (element === "India") {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=fdbdab306b7347a8bb088a0079b4a5c6`
    )
      .then((res) => res.json())
      .then((out) => looping(out));
  } else {
    // pass
  }
}
