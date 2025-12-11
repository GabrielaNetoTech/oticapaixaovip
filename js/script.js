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
  initializeBrandCarousel()
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

    btn.addEventListener("click", function (e) {
      const message = this.getAttribute("data-message")
      if (message) {
        e.preventDefault()
        const whatsappNumber = "5587996521288"
        const encodedMessage = encodeURIComponent(message)
        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank")
      }
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

function initializeBrandCarousel() {
  const carousel = document.querySelector(".brands-carousel")
  const leftBtn = document.querySelector(".carousel-nav-left")
  const rightBtn = document.querySelector(".carousel-nav-right")
  const brandItems = document.querySelectorAll(".brand-item")

  if (!carousel) return

  let autoplayInterval
  let currentIndex = 0

  function startAutoplay() {
    autoplayInterval = setInterval(() => {
      if (currentIndex < brandItems.length - 1) {
        currentIndex++
      } else {
        currentIndex = 0
      }
      scrollToItem(currentIndex)
    }, 2500)
  }

  function stopAutoplay() {
    clearInterval(autoplayInterval)
  }

  function scrollToItem(index) {
    const itemWidth = brandItems[0].offsetWidth + 20
    carousel.scrollTo({
      left: itemWidth * index,
      behavior: "smooth",
    })
  }

  if (leftBtn && rightBtn) {
    leftBtn.addEventListener("click", () => {
      stopAutoplay()
      if (currentIndex > 0) {
        currentIndex--
      } else {
        currentIndex = brandItems.length - 1
      }
      scrollToItem(currentIndex)
      startAutoplay()
    })

    rightBtn.addEventListener("click", () => {
      stopAutoplay()
      if (currentIndex < brandItems.length - 1) {
        currentIndex++
      } else {
        currentIndex = 0
      }
      scrollToItem(currentIndex)
      startAutoplay()
    })
  }



  let touchStartX = 0
  let touchEndX = 0

  carousel.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.changedTouches[0].screenX
      stopAutoplay()
    },
    false,
  )

  carousel.addEventListener(
    "touchend",
    (e) => {
      touchEndX = e.changedTouches[0].screenX
      handleSwipe()
      startAutoplay()
    },
    false,
  )

  function handleSwipe() {
    const threshold = 50
    const diff = touchStartX - touchEndX

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        if (currentIndex < brandItems.length - 1) {
          currentIndex++
        } else {
          currentIndex = 0
        }
      } else {
        if (currentIndex > 0) {
          currentIndex--
        } else {
          currentIndex = brandItems.length - 1
        }
      }
      scrollToItem(currentIndex)
    }
  }

  startAutoplay()

  carousel.addEventListener("scroll", () => {
    // Usuário está interagindo
  })
}

window.addEventListener("load", () => {
  const logo = document.querySelector(".logo")
  if (logo) {
    logo.style.animation = "fadeInDown 0.8s ease-out"
  }
})
