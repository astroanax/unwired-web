<script>
  import { base } from '$app/paths';
  import { Navbar, NavBrand, NavHamburger, NavLi, NavUl } from 'flowbite-svelte';
  import '@coreui/icons/css/all.min.css';
</script>

<header class="customheaderheight fixed top-0 z-10">
  <div class="flex h-[5vh] max-h-[5vh] w-full items-center justify-between bg-[#04091E]">
    <div class="ml-[5vw] flex w-[15vw] items-center justify-around">
      <i class="cib-instagram customhovercolor text-white"></i>
      <i class="cib-linkedin customhovercolor text-white"></i>
      <i class="cib-facebook customhovercolor text-white"></i>
      <i class="cib-youtube customhovercolor text-white"></i>
    </div>
    <div class="customhovercolor mr-[5vw] text-white">teamunwired@nitc.ac.in</div>
  </div>
  <Navbar
    let:NavContainer
    class="header-navbar h-full bg-opacity-0 bg-cover bg-no-repeat shadow-[inset_0_0_1000px_1000px_rgba(4,9,30,0.85)]"
  >
    <NavContainer>
      <NavBrand href="{base}/">
        <img src="{base}/img/tuw-logo.png" alt="Team Unwired Logo" />
      </NavBrand>
      <NavHamburger class="bg-primary-900 text-primary-200 hover:bg-primary-900" />
      <NavUl classUl="bg-black bg-opacity-0 mr-[5vw]" class="customanim">
        <NavLi
          class="customhovercolor  text-xl  text-white hover:text-tertiary-500"
          href="http://teamunwired.org/"
          >HOME
        </NavLi>
        <NavLi class="customhovercolor text-xl text-white" href="http://teamunwired.org/about.html"
          >ABOUT</NavLi
        >
        <NavLi class="customhovercolor text-xl text-white" href="{base}/">PROJECTS</NavLi>
        <NavLi
          class="customhovercolor text-xl text-white"
          href="http://teamunwired.org/gallery.html"
          >GALLERY
        </NavLi>
        <NavLi
          class="customhovercolor text-xl text-white"
          href="http://teamunwired.org/teamtry.html"
          >TEAM
        </NavLi>
        <NavLi class="customhovercolor text-xl text-white" href="{base}/sponsors">SPONSORS</NavLi>
        <NavLi
          class="customhovercolor text-xl text-white"
          href="http://teamunwired.org/contact.html">CONTACT</NavLi
        >
      </NavUl>
    </NavContainer>
  </Navbar>
</header>

<style>
  header {
    font-family: 'Anek Devanagari', monospace;
    width: 100%;
  }

  img {
    margin-left: 5vw;
    max-width: 50vw;
  }
</style>
