var data = "portfolio/"

function folio_load(db) {
    db.forEach(e => {
    if(e["status"] != "offline"){
        html = ""
        html += '<div class="col-lg-4 col-md-6 portfolio-item ' + e["tag"] + '">'
        html += '    <div class="portfolio-wrap">'
        html += '    <img src="' + data + e["url"] + e["image"] +'" class="img-fluid '+e["status"]+'" alt="">'
        if(e["status"] != "comming-soon"){
            html += '    <div class="portfolio-info">'
            html += '        <h4>' + e["name"] + '</h4>'
            html += '        <p>' + e["desc"] + '</p>'
            html += '        <div class="portfolio-links">'
            html += '        <a href="' + data + e["url"] + e["image"] +'" data-gallery="portfolioGallery" class="portfolio-lightbox" title="' + e["desc"] + '"><i class="bx bx-plus"></i></a>'
            html += '        <a href="' + data + e["url"] + 'details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox" title="Portfolio Details"><i class="bx bx-link"></i></a>'
            html += '        </div>'
            html += '    </div>'
        } else {
            html += '    <div class="portfolio-info">'
            html += '        <h4>Comming Soon</h4>'
            html += '        <p>25/12/2023</p>'
            html += '    </div>'
        }
        html += '    </div>'
        html += '</div>\n'
        document.getElementById("foliodb").innerHTML += html
    }
    });
}

/* 
 Filters:
 - filter-motion
 - filter-enviroment
 - filter-architectural
 Status
 - offline
 - comming-soon
 - online
*/

works = [
    {
        "name": "Joyo Zombie II",
        "desc": "3D Product Animation",
        "tag": "filter-motion filter-product",
        "url": "20240109/",
        "image": "image01.jpg",
        "status": "online"
    },
    {
        "name": "Happy 2024",
        "desc": "3D Motion Graphic",
        "tag": "filter-motion",
        "url": "20231231/",
        "image": "image01.jpg",
        "status": "online"
    },
    {
        "name": "Forest Sunset",
        "desc": "3D Enviroment Design",
        "tag": "filter-enviroment",
        "url": "20231221/",
        "image": "image01.jpg",
        "status": "online"
    },
    {
        "name": "3D Logo Animation",
        "desc": "3D Motion Design",
        "tag": "filter-motion",
        "url": "20231209/",
        "image": "image01.jpg",
        "status": "online"
    },
    {
        "name": "Car Colth Revelation",
        "desc": "3D Motion Design",
        "tag": "filter-motion",
        "url": "20231125/",
        "image": "image02.jpg",
        "status": "online"
    },
    {
        "name": "Architectural Render",
        "desc": "Architectural Render",
        "tag": "filter-architectural",
        "url": "20231109/",
        "image": "image01.jpg",
        "status": "online"
    },
    {
        "name": "Hack4u Red Team Keyboards",
        "desc": "3D Product Animation",
        "tag": "filter-motion filter-product",
        "url": "20231031/",
        "image": "image01.jpg",
        "status": "online"
    },
    {
        "name": "Forest Enviroment Low-Poly",
        "desc": "3D Enviroment Design",
        "tag": "filter-enviroment",
        "url": "20230824/",
        "image": "image01.jpg",
        "status": "online"
    },
    {
        "name": "Rubik Motion",
        "desc": "Motion Design",
        "tag": "filter-motion",
        "url": "20230512/",
        "image": "image01.jpg",
        "status": "online"
    },
    {
        "name": "Shop",
        "desc": "3D Enviroment Design",
        "tag": "filter-enviroment",
        "url": "20230505/",
        "image": "image01.jpg",
        "status": "online"
    },
    {
        "name": "Miniboard",
        "desc": "3D Product Desing",
        "tag": "filter-motion filter-product",
        "url": "20230227/",
        "image": "image01.jpg",
        "status": "online"
    },
    {
        "name": "Realistic Enviroment Design",
        "desc": "3D Enviroment Design",
        "tag": "filter-enviroment",
        "url": "20220615/",
        "image": "image01.jpg",
        "status": "online"
    },
    {
        "name": "Living Room Design",
        "desc": "3D Interior Render",
        "tag": "filter-architectural",
        "url": "20210621/",
        "image": "image01.jpg",
        "status": "online"
    }
]