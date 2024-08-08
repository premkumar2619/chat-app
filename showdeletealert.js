let deletebtns = document.querySelectorAll(".delete");

deletebtns.forEach(deletebtn => {
    deletebtn.addEventListener("click",(e)=>{
        const confirmDelete = confirm("Do You Want to delete Chat");
        if(!confirmDelete){
            e.preventDefault();
        }
    });
});