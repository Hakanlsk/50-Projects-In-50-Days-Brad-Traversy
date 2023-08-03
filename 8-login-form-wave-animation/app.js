const labels = document.querySelectorAll('.form-control label')

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split('')                           /*her harfin ayrı bir eleman olarak alınması için bölünmesi*/
    .map(                               /*map ile dizinin her elemanı üzerinde belirli bir işlem yapılabilir*/
      (letter, index) =>
        `<span style="transition-delay:${index * 50}ms">${letter}</span>`
    )
    .join('')                           //elemanları tekrar birleştirir
})

//letter --> elemanın kendisi 
//index --> elemanın indexi

