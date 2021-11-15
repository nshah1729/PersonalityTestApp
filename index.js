const btn=document.getElementById('btn').addEventListener('click',()=>{
    let name=document.getElementById('name').value;
    document.getElementById('imgchange').src=`https://joeschmoe.io/api/v1/${name}`;
})