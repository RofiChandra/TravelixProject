// function showHotel() {
//     $.getJSON('data/hotel.json', function(data) {
//         let datahotel = data.datahotel;
//         $.each(datahotel, function(i, data){
//             $('#list-hotel').append(`<div class="blog-post_img"><img>` +
//                 data.img + `</img></div><div class="blog-post_info"><h1 class="blog-post_title">` + 
//                 data.name + `</h1><div class="blog-post_date"><span><i class="fas fa-map-marker-alt"></i>` + 
//                 data.address + `</span></div><div class="hotel-rating"><i class="fas fa-star rating"></i><i class="fas fa-star rating"></i><i class="fas fa-star rating"></i><i class="fas fa-star rating"></i><i class="fas fa-star rating"></i></div><div class="point"><span class="nilai">` + 
//                 data.point + `<span class="jumlah">` + 
//                 data.reviews + `</span></span></div><div class="price"><span>` + 
//                 data.price + `</span></div><a href="kamar.html" class="btn btn-gradient">View Hotel<span class="dots"><i class="fas fa-ellipsis-h"></i></span></a></div>`)
//         })
//     })
// }

// showHotel();

const data = "data/hotel.json";
const showHotel = document.querySelector('#list-hotel');

const getshowHotel = ()=> {
    fetch(data)
        .then(response => {
            return response.json();
        }) .then(responseJson => {
            console.log(responseJson.datahotel);
            showHotel.innerHTML = "";
            let hotel = responseJson.datahotel;
            hotel.forEach(item => {
                showHotel.innerHTML += 
                `
                <div class="blog-post">
                    <div class="blog-post_img">
                        <img src="${item.img}" alt="">
                    </div>
                    <div class="blog-post_info">
                        <h1 class="blog-post_title">${item.name}</h1>
                        <div class="blog-post_date">
                            <span><i class="fas fa-map-marker-alt"></i>${item.address}</span>
                        </div>
                        <div class="hotel-rating">
                            <i class="fas fa-star rating"></i>
                            <i class="fas fa-star rating"></i>
                            <i class="fas fa-star rating"></i>
                            <i class="fas fa-star rating"></i>
                            <i class="fas fa-star rating"></i>
                        </div>
                        <div class="point">
                            <span class="nilai">${item.point}<span class="jumlah"> ${item.reviews} </span></span>
                        </div>
                        
                        <div class="price">
                            <span>${item.price}</span>
                        </div>
                        <a href="${item.link}" class="btn btn-gradient">View Hotel
                            <span class="dots"><i class="fas fa-ellipsis-h"></i></span>
                        </a>
                    </div>
                </div>
                `
            });
        }) .catch(error => {
            console.error(error);
        })
}

document.addEventListener('DOMContentLoaded', getshowHotel);
