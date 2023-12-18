var data = "portfolio/"

function folio_load(db) {
    db.forEach(e => {
        html = ""
        html += '<div class="col-lg-4 col-md-6 portfolio-item ' + e["tag"] + '">'
        html += '    <div class="portfolio-wrap">'
        html += '    <img src="' + data + e["url"] + e["image"] +'" class="img-fluid" alt="">'
        html += '    <div class="portfolio-info">'
        html += '        <h4>' + e["name"] + '</h4>'
        html += '        <p>' + e["desc"] + '</p>'
        html += '        <div class="portfolio-links">'
        html += '        <a href="' + data + e["url"] + e["image"] +'" data-gallery="portfolioGallery" class="portfolio-lightbox" title="' + e["desc"] + '"><i class="bx bx-plus"></i></a>'
        html += '        <a href="' + data + e["url"] + 'details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox" title="Portfolio Details"><i class="bx bx-link"></i></a>'
        html += '        </div>'
        html += '    </div>'
        html += '    </div>'
        html += '</div>\n'
        document.getElementById("foliodb").innerHTML += html
    });
}

 
works = [
    {
        "name": "3D Logo Animation",
        "desc": "3D Motion Design",
        "tag": "filter-motion",
        "url": "20231209/",
        "image": "image01.jpg"
    },
    {
        "name": "Car Colth Revelation",
        "desc": "3D Motion Design",
        "tag": "filter-motion",
        "url": "20231125/",
        "image": "image02.jpg"
    },
    {
        "name": "Architectural Render",
        "desc": "3D Enviroment Design",
        "tag": "filter-enviroment",
        "url": "20231109/",
        "image": "image01.jpg"
    },
    {
        "name": "Hack4u Red Team Keyboards",
        "desc": "3D Product Animation",
        "tag": "filter-motion",
        "url": "20231031/",
        "image": "image01.jpg"
    },
    {
        "name": "Forest Enviroment Low-Poly",
        "desc": "3D Enviroment Design",
        "tag": "filter-enviroment",
        "url": "20230824/",
        "image": "image01.jpg"
    },
    {
        "name": "Rubik Motion",
        "desc": "Motion Design",
        "tag": "filter-motion",
        "url": "20230512/",
        "image": "image01.jpg"
    },
    {
        "name": "Shop",
        "desc": "3D Enviroment Design",
        "tag": "filter-enviroment",
        "url": "20230505/",
        "image": "image01.jpg"
    },
    {
        "name": "3D Product Render",
        "desc": "3D Product Desing",
        "tag": "filter-motion",
        "url": "20230227/",
        "image": "image01.jpg"
    },
    {
        "name": "Realistic Enviroment Design",
        "desc": "3D Enviroment Design",
        "tag": "filter-enviroment",
        "url": "20220615/",
        "image": "image01.jpg"
    },
    {
        "name": "Living Room Design",
        "desc": "3D Interior Render",
        "tag": "filter-enviroment",
        "url": "20210621/",
        "image": "image01.jpg"
    }
]