<script>
  import { base } from '$app/paths';
</script>

<footer class="bg-black">
  <div class="h-1 w-full bg-primary-600"></div>
  <div class="flex flex-col items-center justify-between md:flex-row">
    <div class="mb-2.5 mt-2.5 flex w-[100%] max-w-[100%] flex-row items-center justify-evenly">
      <img src="{base}/img/tuw-logo.png" alt="Team Unwired Logo" />
      <a href="https://nitc.ac.in/"
        ><img
          src="{base}/img/nitc-logo.webp"
          class="h-auto max-h-20 w-auto max-w-full md:max-h-40"
          alt="NIT Calicut"
        /></a
      >
    </div>
    <div
      class="flex w-[100%] max-w-[100%] items-center justify-evenly sm:mb-5 sm:w-full sm:max-w-full sm:items-center sm:justify-evenly"
    >
      <a class="link" href="https://www.instagram.com/teamunwired_nitcalicut/"
        ><img src="{base}/img/instagram.webp" class="max-w-10" alt="Instagram" /></a
      >
      <a class="link" href="https://www.youtube.com/channel/UCZ-1FWuBQePQeAdoZx1S7Pw"
        ><img src="{base}/img/youtube.png" class="max-w-10" alt="Youtube" /></a
      >
      <a class="link" href="https://www.linkedin.com/company/team-unwired/"
        ><img src="{base}/img/linkedin.png" class="max-w-10" alt="LinkedIn" /></a
      >
    </div>
  </div>
</footer>
