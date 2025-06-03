export const setFooter = () => {

    const Footer = `
    
    <footer class="fixed fixed-bottom bg-light pb-2 pt-2 container-fluid">

       <div class="row">
          <button class="btn-hero" data-bs-toggle="modal" data-bs-target="#modalNewsletter">
            Click <string>NEWSLETTER</string>
          </button>

       
              <a href="https://linktr.ee/usinaecocultural" target="_blank" rel="noopener noreferrer"
                class="px-4 btn-hero">
                <img src="assets/icons/linktree.svg" alt="linktree icon" width="40px" height="40px"
                 >LINKTREE
              </a>
             
   
          </div>
       
    </footer>`

    const footerHTML = document.getElementById('idFooter');
    footerHTML.innerHTML = Footer;
}


export default setFooter;