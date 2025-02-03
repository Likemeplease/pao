const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Confetti function
function fireConfetti() {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
}

// Change text, gif, and trigger confetti when the Yes button is clicked
yesBtn.addEventListener("click", () => {
    question.innerHTML = `If you pressed YES, when are you available? Let's discuss it here: 
    <a href="https://m.me/Likemepleaseee?hash=AbZzzWaJSaMhunJ2&source_id=6946816" target="_blank">
        Click here to chat
    </a>`;

    gif.src = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTZkODFuYWtvemZqeWs3aWcwcmtiOHJwNm9rNWR1YjdzdDdwdDA0eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xTiTnMhJTwNHChdTZS/giphy.gif";

    // Hide the No button
    noBtn.style.display = "none";

    // Fire confetti
    fireConfetti();
});

// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    // Calculate max positions to ensure the button stays within the wrapper
    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;

    // Ensure randomX and randomY are within the wrapper bounds
    const randomX = Math.min(Math.floor(Math.random() * maxX), maxX);
    const randomY = Math.min(Math.floor(Math.random() * maxY), maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});
