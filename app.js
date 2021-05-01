const submit = document.querySelector('#submit')
submit.addEventListener('click',()=>{
  document.querySelector('img').style.display = 'inline'
  let value = document.querySelector('input').value
const url = `https://apis.paralleldots.com/v4/abuse`;
// Note: Depending on your API this may need to be different
let data = new URLSearchParams();
data.append(`text`, value);
data.append(`api_key`, `VwQnEb3aDI6qyLiKXmKNyQ8UTqBPMthjQiM4iw9CU30`);

const options = {
  method: `POST`,
  body: data
};

fetch(url, options)
  .then((res)=>res.json()).then((data)=>{
      document.querySelector('img').style.display = 'none'

      document.querySelector('#abuse').style.width = `${(Math.floor(data.abusive*100))}%`
      document.querySelector('#hate').style.width =`${(Math.floor(data.hate_speech*100))}%`
      document.querySelector('#neutral').style.width = `${(Math.floor(data.neither*100))}%`

      document.querySelector('#abuse').innerText = `${(Math.floor(data.abusive*100))}%`
      document.querySelector('#hate').innerText =`${(Math.floor(data.hate_speech*100))}%`
      document.querySelector('#neutral').innerText = `${(Math.floor(data.neither*100))}%`
      console.log(data)
      console.log(`$(Math.floor(data.abusive*100))%`)
  })


})

//{abusive: 0.9967705011, hate_speech: 0.0031034623, neither: 0.0001260851}
