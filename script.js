const actionLinks = document.querySelectorAll(".link-card .link-action")
const toast = document.getElementById("toast")
const sosmedHover = document.querySelectorAll(".sosmed i")

actionLinks.forEach((action) => {
    //fungsi untuk emngkopi link ketika di klik
    action.addEventListener("click", function(e) {
        e.preventDefault()
        const url = action.parentElement.getAttribute("href")
        // mengkopi link 
        navigator.clipboard.writeText(url)
        // memunculkan toast notification
        toast.innerHTML = `
        <div class="toast-container">
            <p>✅Link ${action.parentElement.innerText} berhasil disalin!</p>
        </div>`
        setTimeout(() => {
            document.querySelector("#toast .toast-container")
            .classList.add("toast-gone")
        }, 200)
        // menghilangkan toast notification
        setTimeout(() => {
            document.querySelector("#toast .toast-container")
            .remove()
        }, 1500);
    })
})

// mengganti icon sosmed saat di hover
sosmedHover.forEach((sosmed) => {
    sosmed.addEventListener("mouseenter", () => {
        sosmed.classList.remove("ph")
        sosmed.classList.add("ph-fill")
    })
    sosmed.addEventListener("mouseleave", () => {
        sosmed.classList.remove("ph-fill")
        sosmed.classList.add("ph")
    })
})

// animasi teks bergerak saat scroll
document.addEventListener("scroll", (e) => {
    document.querySelector(".bg-text-animation").style.transform = `translateX(${
      window.scrollY / 5
    }px)`;
  });