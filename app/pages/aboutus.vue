<template>
	<section class="about">
		<div class="container">
			<h1>About TetraGRIC</h1>
			<p class="lead">We build modern tools to help growers, researchers, and agribusinesses make better decisions.</p>

			<div class="cards">
				<div class="card">
					<h2>Our Mission</h2>
					<p>Deliver accessible, data-driven agricultural software that increases yield, reduces waste, and improves sustainability.</p>
				</div>

				<div class="card">
					<h2>What We Do</h2>
					<p>We combine satellite imagery, field sensors, and machine learning to provide timely insights and recommendations.</p>
				</div>

				<div class="card">
					<h2>Get Involved</h2>
					<p>Contact us to join pilot programs, contribute data, or integrate with our APIs.</p>
				</div>
			</div>


		</div>
	</section>
</template>

<style scoped>
.about { padding: 48px 16px; font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; color:#0f172a }
.container { max-width:980px; margin:0 auto }
.lead { color:#334155; margin-bottom:20px }
.cards { display:flex; gap:16px; flex-wrap:wrap }
.card { background:#fff; border:1px solid #e6edf3; padding:18px; border-radius:8px; flex:1 1 280px; box-shadow:0 1px 2px rgba(15,23,42,0.04) }
.card h2 { margin:0 0 8px; font-size:18px }
.meta { margin-top:24px; color:#475569 }
</style>

