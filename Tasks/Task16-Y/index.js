const student=[
    {name:'Salman Ahmed',marks:'38%',class:'3rd',address:'India'},
    {name:'Riya Sharma',marks:'85%',class:'10th',address:'123 ABC colony,Delhi'},
    {name:'Rohan Patel',marks:'70%',class:'12th',address:'456,xyz colony,Mumbai'},
    {name:'Priya Singh',marks:'95%',class:'9th',address:'466,pcq Nagar, Bangalore'},
    {name:'Ankit Gupta',marks:'69%',class:'6th',address:'101, umi board, Kolkata'},
    {name:'Neha Verma',marks:'80%',class:'11th',address:'222, ef avenues, Chennai'},
    {name:'Manoj Kumar',marks:'75%',class:'11th',address:'132,ghi lane, Hyderabad'},
    {name:'Pooja Mishra',marks:'38%',class:'12th',address:'333, stu colony, Pune'},
    {name:'Rajesh Singhala',marks:'88%',class:'3rd',address:'311, weer street, jaipur'},
];

const container=document.querySelector('.mainContainer');
const buttton=document.querySelector('.searchButton');
const input=document.querySelector(".searchInput");
const allBox=document.querySelector(".boxes");

for(let i=0;i<9;i++)
{
    const box=document.createElement('div');
    box.innerHTML=`<p class="name">Student Name: ${student[i].name} </p>
    <p class="marks">marks: ${student[i].marks} </p>
    <p class="class">class: ${student[i].class} </p>
    <p class="Address">Address: ${student[i].address} </p>`
    box.classList.add("boxes")
    container.appendChild(box);
}

buttton.addEventListener("click",(e)=>{
    const searchedText=input.value;
    const newarr=student.filter((ele)=>{
       return ele.name.trim().toLowerCase().startsWith(searchedText.trim().toLowerCase());
    });
    container.innerHTML="";
    newarr.forEach((ele)=>{
        const box=document.createElement('div');
        box.innerHTML=`<p class="name">Student Name: ${ele.name} </p>
        <p class="marks">marks: ${ele.marks} </p>
        <p class="class">class: ${ele.class} </p>
        <p class="Address">Address: ${ele.address} </p>`
        box.classList.add("boxes")
        container.appendChild(box);
    });
});
