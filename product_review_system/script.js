document.addEventListener("DOMContentLoaded",function(){
    const reviewForm=document.getElementById("review-form");
    const reviewsList=document.getElementById("reviews-list");
    reviewForm.addEventListener("submit",function(event){
        event.preventDefault();
        const name=document.getElementById("name").value;
        const email=document.getElementById("email").value;
        const productTypeSelect=document.getElementById("product-type");
        const productType=productTypeSelect.options[productTypeSelect.selectedIndex].text;
        const text=document.getElementById("text").value;
        const price=document.getElementById("price").value;
        const datePurchased=document.getElementById("date-purchased").value;
        const rating=document.getElementById("rating").value;
        const reviewText=document.getElementById("review").value;
        const reviewElement=document.createElement("div");
        reviewElement.classList.add("review");
        reviewElement.innerHTML = `
            <h3>${name}</h3>
            <p>Email: ${email}</p>
            <p>Product Type: ${productType}</p>
            <p>Name of the brand and product: ${text}</p>
            <p>Price of the product (in Rupees): ₹${price}</p>
            <p>Date of Purchase: ${datePurchased}</p>
            <p>Rating: ${rating}</p>
            <p>${reviewText}</p>
        `;
        reviewsList.appendChild(reviewElement);
        reviewForm.reset();
    });
});
