import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  
  });

  setTimeout(()=>{
    window.document.title = "One new message";
    console.log("changing Title");
    
    },3000);
});
