const boyName = ['Piotrek','Mateusz','Darek','Daniel','Łukasz','Marcin','Alojzik','Wiesław'];

const girlName = ['Maria','Monika','Ewa','Ewelina','Katarzyna','Daria','Elwira'];

const btnBoy = document.querySelector('#btnBoy');
const btnGirl = document.querySelector('#btnGirl');

const girlResult = document.querySelector('#girlResult');

const boyResult = document.querySelector('#boyResult');
   


btnBoy.addEventListener('click',()=>{




boyName.forEach(()=>{
 const resBoy = Math.floor(Math.random()* boyName.length)
boyResult.textContent =`Imię dla chłopca to: ${ boyName[resBoy]} !!`
girlResult.textContent = ""

})





})

btnGirl.addEventListener('click',()=>{


    girlName.forEach(()=>{
        const resGirl = Math.floor(Math.random()* girlName.length)
       girlResult.textContent =`Imię dla dziewczynki to: ${ girlName[resGirl]} !!`

boyResult.textContent = ""

})

})