async function saveStudent(){
    const s ={
        name: name.value,
        mobile: mobile.value,
        room: room.value,
        house: house.value
    };

    let ok = await addStudentDB(s);
    if(ok){
        alert("Student Added ✔");
        loadStudents();
    }else{
        alert("Failed to add student");
    }
}

async function loadStudents(){
    const data = await fetchStudents();
    list.innerHTML="";

    data.forEach(s=>{
        list.innerHTML += `<p>${s.name} | ${s.mobile} | ${s.room} | ${s.house}</p>`;
    })
}

loadStudents();
