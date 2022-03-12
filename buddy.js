const loadBuddy = () => fetch('https://randomuser.me/api/?results=5').then(res => res.json()).then(data =>showBuddy(data))
loadBuddy()
const showBuddy=data=>{
    const buddys=data.results;
    for(const buddy of buddys){
        console.log(buddy)
    }
}
