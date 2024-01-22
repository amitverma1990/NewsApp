let newsAccordian = document.getElementById('newsAccordion');



let source = 'bbc-news';
let api_key = '1a0525485f334f9cbe0e295fb2849fcb';
const xhr = new XMLHttpRequest();
xhr.open('GET',`https://newsapi.org/v2/top-headlines?country=in&apiKey=${api_key}`,true);

xhr.onload=function(){
if(this.status ==200){
    let json = JSON.parse(this.responseText);
let articles = json.articles;
let newsHtml ='';
articles.forEach(function(element,index){

    let news = `<div class="accordion-item">
<div class="accordion-header" id="heading${index}">
    <h2 class="mb-0">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}"
            aria-expanded="false" aria-controls="collapse${index}">
         ${element["title"]}
        </button>
    </h2>
</div>

<div id="collapse${index}" class="accordion-collapse collapse show" aria-labelledby="heading${index}"
    data-bs-parent="#newsAccordion">
    <div class="accordion-body">
${element["content"]}.<a href =${element["url"]} target="_blank">Reed more...</a>
    </div>
</div>
</div>`;
newsHtml +=news;
});
newsAccordian.innerHTML = newsHtml;
}
else{
    console.log('Error has occured.');
}
}

xhr.send();