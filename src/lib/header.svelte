<script>
  import { base } from '$app/paths';
  const headerBg = base + '/img/carr.webp';
  import { Navbar, NavBrand, NavHamburger, NavLi, NavUl } from 'flowbite-svelte';
</script>

<header class="sticky top-0 z-10 max-h-[20vh]">
  <Navbar
    let:NavContainer
    class="header-navbar bg-opacity-85 bg-cover bg-no-repeat shadow-[inset_0_0_1000px_1000px_rgba(0,0,0,0.85)]"
    style="background-image: url({headerBg})"
  >
    <NavContainer>
      <NavBrand href="{base}/">
        <img src="{base}/img/tuw-logo.png" alt="Team Unwired Logo" />
      </NavBrand>
      <NavHamburger class="bg-primary-900 text-primary-200 hover:bg-primary-900" />
      <NavUl classUl="bg-black bg-opacity-0" class="customanim">
        <NavLi
          class="link text-xl hover:bg-primary-900 hover:text-secondary-100"
          href="http://teamunwired.org/"
          >Home
        </NavLi>
        <NavLi
          class="link text-xl hover:bg-primary-900 hover:text-secondary-100"
          href="http://teamunwired.org/about.html">About</NavLi
        >
        <NavLi class="link text-xl hover:bg-primary-900 hover:text-secondary-100" href="{base}/"
          >Projects
        </NavLi>
        <NavLi
          class="link text-xl hover:bg-primary-900 hover:text-secondary-100"
          href="http://teamunwired.org/gallery.html"
          >Gallery
        </NavLi>
        <NavLi
          class="link text-xl hover:bg-primary-900 hover:text-secondary-100"
          href="http://teamunwired.org/teamtry.html"
          >Team
        </NavLi>
        <NavLi
          class="link text-xl hover:bg-primary-900 hover:text-secondary-100"
          href="{base}/sponsors"
          >Sponsors
        </NavLi>
        <NavLi
          class="link text-xl hover:bg-primary-900 hover:text-secondary-100"
          href="http://teamunwired.org/contact.html">Contact</NavLi
        >
      </NavUl>
    </NavContainer>
  </Navbar>
  <div class="h-1 w-full bg-primary-600"></div>
</header>

<style>
  header {
    font-family: 'Anek Devanagari', monospace;
    width: 100%;
  }

  img {
    margin-left: 5%;
  }
</style>
