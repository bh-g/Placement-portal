let users =[{
    firstname:'Piya',
    lastname:'Ahuja',
    batch:'2021',
    branch:'CSE',
    dob:'1.01.2003',
    cgpa:'8.7',
    activebacklog:'0',
    aadhar:'1234-2345-2768',
    deadbacklog:'0',
    cmail:'piya104btcse21@.igdtuw.ac.in',
    pmail:'piyaahuja99@gmail.com',
    mothername:'Pallavi Gupta',
    fathername:'Shyam Ahuja',
    contact:'9876123466',
    address:'B-26 Mayur Vihar Phase -1,New Delhi',
    motherwork:'hairstylist',
    fatherwork:'businessman',
    mothernum:'9827003456',
    fathernum:'7673981029'
},
{
    firstname: 'Vartika',
    lastname: 'Sinha',
    batch: '2024',
    branch: 'CSE',
    dob: '01-01-2001',
    cgpa: '8.5',
    aadhar: '1234-5678-9012',
    activebacklog: '0',
    deadbacklog: '0',
    cmail:'vartika033btcse20@.igdtuw.ac.in',
    pmail:'sinhavartika@gmail.com',
    mothername: 'Geeta Kumar',
    fathername: 'Ayush Sinha',
    contact: '9876543210',
    address:'C-204,Tower 2, Panchsheel Apartments,Punjabi Bagh West,New Delhi',
    motherwork:'pilot',
    fatherwork:'doctor',
    mothernum:'7027801096',
    fathernum:'9011567381'
}]
document.addEventListener('DOMContentLoaded', function() {
    getUserProfile(users);
});

function getUserProfile(users){
    let x=Math.floor(Math.random()*10)%2;
    let user=users[0]
document.getElementById('firstname').textContent=user.firstname;
document.getElementById('lastname').textContent=user.lastname;
document.getElementById('batch').textContent=user.batch;
document.getElementById('branch').textContent=user.branch;
document.getElementById('dob').textContent=user.dob;
document.getElementById('cgpa').textContent=user.cgpa;
document.getElementById('aadhar').textContent=user.aadhar;
document.getElementById('activebacklog').textContent=user.activebacklog;
document.getElementById('deadbacklog').textContent=user.deadbacklog;
document.getElementById('address').textContent=user.address;
document.getElementById('cmail').textContent=user.cmail;
document.getElementById('pmail').textContent=user.pmail;
document.getElementById('mothername').textContent=user.mothername;
document.getElementById('fathername').textContent=user.fathername;
document.getElementById('contact').textContent=user.contact;
document.getElementById('motherwork').textContent=user.motherwork;
document.getElementById('fatherwork').textContent=user.fatherwork;
document.getElementById('fathernum').textContent=user.fathernum;
document.getElementById('mothernum').textContent=user.mothernum;
}

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("content").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("content").style.marginLeft = "0";

}

