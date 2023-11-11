

addSmoothScrool('about','about-link')
addSmoothScrool('events','events-link')
addSmoothScrool('features','features-link')
addSmoothScrool('footer','connect-link')

function addSmoothScrool(name1,name2){
    const about = document.getElementById(name1);
    const aboutLink = document.getElementById(name2)
    
    aboutLink.addEventListener("click",(event)=>{
        event.preventDefault();
        about.scrollIntoView({behavior: "smooth"});
    })
}
