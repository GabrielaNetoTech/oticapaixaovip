const observerOptions = {
  threshold: 0.15,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("aos-animate")
      observer.unobserve(entry.target)
    }
  })
}, observerOptions)

document.addEventListener("DOMContentLoaded", () => {
  // Animar elementos com data-aos
  const aosElements = document.querySelectorAll("[data-aos]")
  aosElements.forEach((element) => {
    observer.observe(element)
  })

  // Inicializar efeitos interativos
  initializeLinkEffects()
  initializeScrollEffects()
  initializeProductCards()
})

function initializeLinkEffects() {
  const linkButtons = document.querySelectorAll(".link-btn")

  linkButtons.forEach((btn) => {
    btn.addEventListener("mouseenter", function () {
      this.style.transform = "translateX(8px)"
    })

    btn.addEventListener("mouseleave", function () {
      this.style.transform = "translateX(0)"
    })
  })
}

function initializeScrollEffects() {
  window.addEventListener("scroll", () => {
    const geometricPattern = document.querySelector(".geometric-pattern")
    if (geometricPattern) {
      const yOffset = window.scrollY * 0.1
      geometricPattern.style.backgroundPosition = `${yOffset}px ${yOffset}px`
    }
  })
}

function initializeProductCards() {
  const productCards = document.querySelectorAll(".product-card")

  productCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-8px)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
    })
  })
}

window.addEventListener("load", () => {
  const logo = document.querySelector(".logo")
  if (logo) {
    logo.style.animation = "fadeInDown 0.8s ease-out"
  }
})
