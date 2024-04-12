// =========================variables=================================
const products = [
    { name: "Petunia", image: "images/products/Petunia.webp" },
    { name: "Geranium", image: "images/products/Geranium.jpeg" },
    { name: "Snapdragon", image: "images/products/Snapdragon.jpeg" },
    { name: "Daylilies", image: "images/products/daylilies.webp" },
    { name: "Basil", image: "images/products/basil.webp" },
    { name: "Perennial", image: "images/products/perennial.jpeg" },
  ];
  
  const testimonials = [
    {
      name: "Tonny Stark",
      image: "images/testimonials/t1.jpeg",
      content:
        "I stumbled upon Outback Nursery while searching for a gift for my mother's birthday, and I'm so glad I did! The selection of plants was impressive, and the staff helped me choose the perfect arrangement. My mother was thrilled with her gift, and it brought a smile to her face every time she looked at it.",
    },
  
    {
      name: "Captain America",
      image: "images/testimonials/t2.jpeg",
      content:
        "Outback Nursery exceeded my expectations in every way. Not only did they have a wide variety of plants to choose from, but their prices were also very reasonable. The staff was friendly and knowledgeable, and they went above and beyond to ensure that I left satisfied. I'll definitely be returning for all my gardening needs.",
    },
    {
      name: "Thor",
      image: "images/testimonials/t3.webp",
      content:
        "As a busy professional, I don't have a lot of time to devote to gardening. However, Outback Nursery made it easy for me to bring a touch of greenery into my home. Their selection of low-maintenance houseplants was exactly what I was looking for, and their care tips have helped me keep my plants thriving despite my hectic schedule.",
    },
    {
        name: "Thor",
        image: "images/testimonials/t3.webp",
        content:
          "As a busy professional, I don't have a lot of time to devote to gardening. However, Outback Nursery made it easy for me to bring a touch of greenery into my home. Their selection of low-maintenance houseplants was exactly what I was looking for, and their care tips have helped me keep my plants thriving despite my hectic schedule.",
      },
      {
        name: "Captain America",
        image: "images/testimonials/t2.jpeg",
        content:
          "Outback Nursery exceeded my expectations in every way. Not only did they have a wide variety of plants to choose from, but their prices were also very reasonable. The staff was friendly and knowledgeable, and they went above and beyond to ensure that I left satisfied. I'll definitely be returning for all my gardening needs.",
      },
      {
        name: "Tonny Stark",
        image: "images/testimonials/t1.jpeg",
        content:
          "I stumbled upon Outback Nursery while searching for a gift for my mother's birthday, and I'm so glad I did! The selection of plants was impressive, and the staff helped me choose the perfect arrangement. My mother was thrilled with her gift, and it brought a smile to her face every time she looked at it.",
      },
      {
        name: "Captain America",
        image: "images/testimonials/t2.jpeg",
        content:
          "Outback Nursery exceeded my expectations in every way. Not only did they have a wide variety of plants to choose from, but their prices were also very reasonable. The staff was friendly and knowledgeable, and they went above and beyond to ensure that I left satisfied. I'll definitely be returning for all my gardening needs.",
      },
      {
        name: "Tonny Stark",
        image: "images/testimonials/t1.jpeg",
        content:
          "I stumbled upon Outback Nursery while searching for a gift for my mother's birthday, and I'm so glad I did! The selection of plants was impressive, and the staff helped me choose the perfect arrangement. My mother was thrilled with her gift, and it brought a smile to her face every time she looked at it.",
      },
      {
        name: "Thor",
        image: "images/testimonials/t3.webp",
        content:
          "As a busy professional, I don't have a lot of time to devote to gardening. However, Outback Nursery made it easy for me to bring a touch of greenery into my home. Their selection of low-maintenance houseplants was exactly what I was looking for, and their care tips have helped me keep my plants thriving despite my hectic schedule.",
      },
  ];
  
  let currentPage = 0;
    
  // =====================stand alone functions=========================
  
  const getNumChildren = () => {
    const pageWidth = window.innerWidth;
    if (pageWidth > 900) return 3;
    else if (pageWidth <= 900 && pageWidth >= 768) return 2;
    else return 1;
  };
  
  const testimonialsPerPage = getNumChildren();
  
  const showRandomProducts = () => {
    const numProductsToShow = getNumChildren();
  
    const randomProducts = [];
    const productIndices = [];
    while (randomProducts.length < numProductsToShow) {
      const randomIndex = Math.floor(Math.random() * products.length);
      if (!productIndices.includes(randomIndex)) {
        randomProducts.push(products[randomIndex]);
        productIndices.push(randomIndex);
      }
    }
  
    const productListDiv = document.getElementById("product-list");
    productListDiv.innerHTML = "";
  
    randomProducts.forEach((product) => {
      const cardDiv = document.createElement("div");
      cardDiv.classList.add(
        "card",
        "l-flex",
        "l-flex-column",
        "l-pb-1",
        "l-grid-gap-1"
      );
  
      const img = document.createElement("img");
      img.src = product.image;
      img.height = 230;
      img.width = 300;
  
      const span = document.createElement("span");
      span.textContent = product.name;
  
      cardDiv.appendChild(img);
      cardDiv.appendChild(span);
  
      productListDiv.appendChild(cardDiv);
    });
  };
  
  const showTestimonials = () => {
    const startIndex = currentPage * testimonialsPerPage;
    const endIndex = startIndex + testimonialsPerPage;
    const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);
  
    const testimonialsDiv = document.getElementById("testimonials-list");
    testimonialsDiv.innerHTML = "";
  
    testimonials.slice(startIndex, endIndex).forEach((testimonial) => {
      const cardDiv = document.createElement("div");
      cardDiv.classList.add(
        "t-card",
        "l-flex",
        "l-align-center",
        "l-flex-column",
        "l-grid-gap-1",
        "l-p-1"
      );
  
      const img = document.createElement("img");
      img.src = testimonial.image;
  
      const h2 = document.createElement("h2");
      h2.textContent = testimonial.name;
  
      const p = document.createElement("p");
      p.textContent = testimonial.content;
      p.style.textAlign = "justify";
  
      cardDiv.appendChild(img);
      cardDiv.appendChild(h2);
      cardDiv.appendChild(p);
  
      testimonialsDiv.appendChild(cardDiv);
    });
  
    document.getElementById("pages").innerHTML = `Page ${
      currentPage + 1
    } of ${totalPages}`;
  
    updatePaginationButtons();
  };
  
  const updatePaginationButtons = () => {
    const prevBtn = document.getElementById("prevButtonTesti");
    const nextBtn = document.getElementById("nextButtonTesti");
  
    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled =
      (currentPage + 1) * testimonialsPerPage >= testimonials.length;
  };
  
  const prevPage = () => {
    if (currentPage > 0) {
      currentPage--;
      showTestimonials();
    }
  };
  
  // Function to navigate to the next page
  const nextPage = () => {
    if ((currentPage + 1) * testimonialsPerPage < testimonials.length) {
      currentPage++;
      showTestimonials();
    }
  };
  
  function activateMenuIcon() {
    const menuIcon = document.querySelector(".menu-icon");
    const options = document.querySelector(".options");
  
    menuIcon.addEventListener("click", () => {
      options.classList.toggle("active");
    });
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    // =======================HEADER JS================================
    const menuIcon = document.querySelector(".menu-icon");
    const options = document.querySelector(".options");
  
    menuIcon.addEventListener("click", () => {
      options.classList.toggle("active");
    });
  
    // =======================Product Section JS================================
    document.getElementById("prevButton").addEventListener("click", () => {
      showRandomProducts();
    });
  
    document.getElementById("nextButton").addEventListener("click", () => {
      showRandomProducts();
    });
  
    showRandomProducts();
    showTestimonials();
    window.addEventListener("resize", () => {
      showRandomProducts();
      showTestimonials();
    });
  });


  // html code show

  function copyCode() {
    const htmlCode = document.getElementById("html-code");
    const range = document.createRange();
    range.selectNode(htmlCode);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("Code copied!");
  }
  