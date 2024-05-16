const images = [
  {
    dp: "https://images.unsplash.com/photo-1527736947477-2790e28f3443?q=80&w=1962&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1626818590138-c1e906bf29be?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1626818590159-04cb9274a5e0?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1544963151-fb47c1a06478?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1544963823-6267c70c3e11?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1582012673377-8243eea1680c?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1581931395565-196b6c2ea83c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp: "https://plus.unsplash.com/premium_photo-1669704098750-7cd22c35422b?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const feedImages = [
  {
    
    story:
      "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    
    story:
      "https://images.unsplash.com/photo-1626818590159-04cb9274a5e0?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    
    story:
      "https://images.unsplash.com/photo-1544963823-6267c70c3e11?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    
    story:
      "https://images.unsplash.com/photo-1581931395565-196b6c2ea83c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    
    story:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const storyian = document.querySelector(".storiyan");

let clutter = "";
images.forEach((image, idx) => {
  clutter += `
    <div  class="story">
        <img id="${idx}" src="${image.dp}" alt="">
    </div>
    `;
});


storyian.innerHTML = clutter;
storyian.addEventListener("click", (e) => {
  document.getElementById("full-screen").style.display = "block";
  document.getElementById("full-screen").style.backgroundImage = `url(${
    images[e.target.id].story
  })`;

  setTimeout(() => {
    document.getElementById("full-screen").style.display = "none";
  }, 3000);
});

// feed

let feedCLutter = "";
feedImages.forEach((image, idx) => {
  feedCLutter += `
  <div class="feed-card">
  <img id="${idx}" src="${image.story}" alt="">
  <i class="ri-heart-3-fill"></i>
</div>
    `;
});

const feedContainer = document.querySelector(".feed-container");
feedContainer.innerHTML = feedCLutter;

const feedCards = document.querySelectorAll('.feed-card');

feedCards.forEach(card => {
  const heartIcon = card.querySelector('i');
  card.addEventListener('click', () => {
    heartIcon.classList.add('liked');
  });

  setTimeout(()=>{
    heartIcon.classList.remove('liked');
  },3000)
});


// crsr
let main = document.getElementById('main');
let crsr = document.getElementById('crsr');

main.addEventListener('mousemove',(dets)=>{
  crsr.style.left = dets.x + 'px';
  crsr.style.top = dets.y + 'px';
})