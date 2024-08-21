<script>
	import { base } from '$app/paths';
</script>

<footer class="bg-surface-700">
	<div class="text-container">
		<span class="font-bold text-tertiary-400">For enquiries contact</span>
		<div>
			Dr. V Sajith, Associate Professor(MED) & Faculty Advisor<br />
			Team Unwired, NIT Calicut<br />
			+91 9446361125, <a class="link" href="mailto:sajith@nitc.ac.in">sajith@nitc.ac.in</a>
		</div>
		<br />
		<span class="font-bold text-tertiary-400">For more information</span>
		<div>
			Dr. Shijo Thomas, Associate Professor(MED) & Faculty Advisor<br />
			Team Unwired, NIT Calicut<br />
			+91 9446276409, <a class="link" href="mailto:shijo@nitc.ac.in">shijo@nitc.ac.in</a>
		</div>
		<br />
		<span class="font-bold text-tertiary-400">Contact address</span>
		<div>
			Team Unwired<br />
			C/o Dr.V Sajith / Dr.Shijo Thomas<br />
			Department of Materials Science and Engineering<br />
			National Institute of Technology, Calicut<br />
			Kattangal, Kerala India
		</div>
	</div>
	<div class="img-container">
		<a class="link" href="https://nitc.ac.in/"
			><img src="{base}/img/nitc-logo.jpg" id="nitc-logo" alt="NIT Calicut" /></a
		>
		<div class="social-container">
			<a class="link" href="https://www.instagram.com/teamunwired_nitcalicut/"
				><img src="{base}/img/instagram.webp" class="social-icon" alt="Instagram" /></a
			>
			<a class="link" href="https://www.youtube.com/channel/UCZ-1FWuBQePQeAdoZx1S7Pw"
				><img src="{base}/img/youtube.png" class="social-icon" alt="Youtube" /></a
			>
			<a class="link" href="https://www.linkedin.com/company/team-unwired/"
				><img src="{base}/img/linkedin.png" class="social-icon" alt="LinkedIn" /></a
			>
		</div>
	</div>
</footer>

<style>
	footer {
		color: white;
		font-family: 'Anek Devanagari', monospace;
		display: flex;
	}

	.font-bold {
		margin-left: 1rem;
	}

	.text-container {
		width: 65%;
		max-width: 65%;
	}

	.text-container > div {
		margin-left: 1.5rem;
	}

	#nitc-logo {
		height: auto;
		width: auto;
		max-width: 100%;
		max-height: 10em;
	}

	.img-container {
		max-width: 35%;
		width: 35%;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
	}

	.social-container {
		width: 35%;
		max-width: 35%;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		overflow: auto;
		flex-wrap: wrap;
		gap: 1em;
	}

	.social-icon {
		height: auto;
		width: auto;
		max-width: 2.5em;
		max-height: 2.5em;
	}
</style>
