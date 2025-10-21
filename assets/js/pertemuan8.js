// Pertemuan 8 - P3K Interactive Elements

document.addEventListener("DOMContentLoaded", () => {
    // Tab functionality
    const tabButtons = document.querySelectorAll(".tab-btn")
    const tabPanes = document.querySelectorAll(".tab-pane")

    tabButtons.forEach((button) => {
        button.addEventListener("click", function() {
            const tabName = this.getAttribute("data-tab")

            // Remove active class from all buttons and panes
            tabButtons.forEach((btn) => btn.classList.remove("active"))
            tabPanes.forEach((pane) => pane.classList.remove("active"))

            // Add active class to clicked button and corresponding pane
            this.classList.add("active")
            document.getElementById(tabName).classList.add("active")
        })
    })

    // Accordion functionality
    const accordionHeaders = document.querySelectorAll(".accordion-header")

    accordionHeaders.forEach((header) => {
        header.addEventListener("click", function() {
            const content = this.nextElementSibling
            const isActive = this.classList.contains("active")

            // Close all other accordions
            accordionHeaders.forEach((h) => {
                h.classList.remove("active")
                h.nextElementSibling.classList.remove("active")
            })

            // Toggle current accordion
            if (!isActive) {
                this.classList.add("active")
                content.classList.add("active")
            }
        })
    })

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault()
            const target = document.querySelector(this.getAttribute("href"))
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                })
            }
        })
    })
})