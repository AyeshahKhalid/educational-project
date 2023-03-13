

function cardsTemplate(props) {
  const container = document.createElement("div");
  container.classList.add("container-fluid", "cards-container");
  
  const lightColors = ["#ff69b4", "#ff7f50", "#ffa500", "#ffd700", "#00ff00", "#00bfff", "#9370db", "#ff00ff", "#6a5acd", "#4169e1"];

  for (let grade in props) {
    let h2 = document.createElement("h2");
    h2.classList.add("h2-grade","fun-font");
    h2.textContent = grade;
    let row = document.createElement("div");
    row.classList.add("row");
    
    for (let topic in props[grade]) {
      let h3 = document.createElement("h3");
      h3.classList.add("h3-topic","bubbling-text");
      h3.textContent = topic;
      let col = document.createElement("div");
      col.classList.add("col-4","topic-container");
      col.append(h3);
        let cards = props[grade][topic];
        let numCards = cards.length;
        
      for (let i = 0; i < numCards; i++) {
        
        let card = document.createElement("h5");
        card.classList.add("cards");
        
        let link = document.createElement("a");
        // link.href = `https://www.google.com/search?q=${cards[i]}`;
        link.classList.add("link");
        link.target = "_blank";
        link.addEventListener("click", function () {
          event.preventDefault(); // prevent the default behavior of the link
          const html = htmlTemplate(props);
          const newTab = window.open();
          newTab.document.write(html); // write the generated HTML to the new tab
        });
        link.textContent = cards[i];
        card.append(link);
        

        // card.textContent = `${cards[i]}`;
        // Set background color of col
        col.style.backgroundColor = lightColors[i % lightColors.length];
        col.append(card);
      }
     
      
      row.append(col);
    }
    container.append(h2,row);

  }
  console.log("cardsTemplate==>",container)
  return container;
}


document.querySelector(
  "body").addEventListener("mousemove", eyeball);
function eyeball() {
    var eye = document.querySelectorAll(".eye");
    eye.forEach(function (eye) {
        let x =
            eye.getBoundingClientRect().left +
            eye.clientWidth / 2;
       
        let y =
            eye.getBoundingClientRect().top +
            eye.clientHeight / 2;
        let radian =
        Math.atan2(event.pageX - x, event.pageY - y);
        let rot = radian * (180 / Math.PI) * -1 + 270;
        eye.style.transform =
          "rotate(" + rot + "deg)";
    });
}