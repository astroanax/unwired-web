<script>
  import { base } from '$app/paths';
  const headerBg = base + '/img/3c.webp';
  import { Navbar, NavBrand, NavHamburger, NavLi, NavUl } from 'flowbite-svelte';
  import '@coreui/icons/css/all.min.css';
</script>

<header class="sticky top-0 z-10 max-h-[30vh]">
  <div class="w-full h-[5vh] bg-[#04091E] flex items-center justify-between">
    <div class="flex items-center justify-around w-[15vw] ml-[5vw]">
      <i class="cib-instagram customhovercolor text-white"></i>
      <i class="cib-linkedin customhovercolor text-white"></i>
      <i class="cib-facebook customhovercolor text-white"></i>
      <i class="cib-youtube customhovercolor text-white"></i>
    </div>
    <div class="text-white customhovercolor mr-[5vw]">teamunwired@nitc.ac.in</div>
  </div>
  <Navbar
    let:NavContainer
    class="header-navbar bg-opacity-85 bg-cover bg-no-repeat shadow-[inset_0_0_1000px_1000px_rgba(4,9,30,0.85)]"
    style="background-image: url({headerBg})"
  >
    <NavContainer>
      <NavBrand href="{base}/">
        <img src="{base}/img/tuw-logo.png" alt="Team Unwired Logo" />
      </NavBrand>
      <NavHamburger class="bg-primary-900 text-primary-200 hover:bg-primary-900" />
      <NavUl classUl="bg-black bg-opacity-0 mr-[5vw]" class="customanim">
        <NavLi
          class="text-xl  hover:text-tertiary-500  text-white customhovercolor"
          href="http://teamunwired.org/"
          >HOME
        </NavLi>
        <NavLi
          class="text-xl customhovercolor text-white"
          href="http://teamunwired.org/about.html">ABOUT</NavLi
        >
        <NavLi class="text-xl customhovercolor text-white" href="{base}/"
          >PROJECTS
        </NavLi>
        <NavLi
          class="text-xl customhovercolor text-white"
          href="http://teamunwired.org/gallery.html"
          >GALLERY
        </NavLi>
        <NavLi
          class="text-xl customhovercolor text-white"
          href="http://teamunwired.org/teamtry.html"
          >TEAM
        </NavLi>
        <NavLi
          class="text-xl customhovercolor text-white"
          href="{base}/sponsors"
          >SPONSORS
        </NavLi>
        <NavLi
          class="text-xl customhovercolor text-white"
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
