const getStoredBook=()=>{
    const storedBookSTR=localStorage.getItem("readList");
    if(storedBookSTR)
    {
        const storedBookData=JSON.parse(storedBookSTR);
        return storedBookData;
    }
    else return [];
}

const addToStoreDb=(id)=>{
    const storedBookData=getStoredBook();
    if(storedBookData.includes(id)){
        alert("Book already Exist");
    }
    else{
        storedBookData.push(id);
        const data=JSON.stringify(storedBookData);
        console.log(storedBookData);
        localStorage.setItem("readList",data);

    }
}
export {addToStoreDb,getStoredBook};