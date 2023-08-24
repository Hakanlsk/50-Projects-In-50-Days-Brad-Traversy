const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus()

textarea.addEventListener('keyup', (e)=> {
    createTags(e.target.value);

    if(e.key === 'Enter'){
        setTimeout(()=>{
            e.target.value = ''
        },10)
        randomSelect();
    }
})

function createTags(input) {
    const tags = input
      .split(',')                                   // "," ile ayırma işlemi (string ifadeyi array e çevirir)
      .filter((tag) => tag.trim() !== '')           //.trim() metodu, bir dizenin başındaki ve sonundaki boşlukları keser
      .map((tag) => tag.trim())                     //map metodu dizinin her bir elemanı üstünde belirtilen işlemi (trim) yapar
  
    tagsEl.innerHTML = ''
  
    tags.forEach((tag) => {
      const tagEl = document.createElement('span')
      tagEl.classList.add('tag')
      tagEl.innerHTML = tag
      tagsEl.appendChild(tagEl)
    })
  }
  
  function randomSelect() {

    const times = 30
  
    const interval = setInterval(() => {

      const randomTag = pickRandomTag()         //rastgele seçilen tag "randomTag" ' e atanır
      highlightTag(randomTag)                   // randomTag highlightTag fonksiyonu ile vurgulanır
      setTimeout(() => {
        unHighLight(randomTag)                  //unHighLight ile bir süre sonra vurgulama kaldırırlır 
      }, 100)
    }, 100)
  
    setTimeout(() => {
      clearInterval(interval)
  
      setTimeout(() => {
        const randomTag = pickRandomTag()
  
        highlightTag(randomTag)
      }, 100)
    }, times * 100)
  }
  
  function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
  
    return tags[Math.floor(Math.random() * tags.length)]
  }
  
  function highlightTag(tag) {
    tag.classList.add('highlight')
  }
  
  function unHighLight(tag) {
    tag.classList.remove('highlight')
  }
