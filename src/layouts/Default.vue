<template>
  <div>
    <div class="bg-video">
      <video class="bg-video__content" autoplay muted loop>
        <source
          src="https://res.cloudinary.com/infinityseeker/video/upload/c_scale,w_1983/v1578348528/is-bg_ilbc8e.mp4"
          type="video/mp4"
        />
        <source
          src="https://res.cloudinary.com/infinityseeker/video/upload/c_scale,w_1983/v1578348528/is-bg_ilbc8e.webm"
          type="video/webm"
        />Your browser is not supported!
      </video>
    </div>
    <div class="layout">
      <header class="header">
        <strong>
          <g-link class="no-underline" to="/">
            <g-image
              :src="require('~/assets/Infinity-Seeker-Logo-White.svg')"
              width="140"
              class="logo"
            />
          </g-link>
        </strong>
        <nav class="nav">
          <g-link class="nav__link" to="/">Home</g-link>
          <g-link class="nav__link" to="/about">About</g-link>
          <g-link class="nav__link" to="/portfolio">Portfolio</g-link>
          <g-link class="nav__link" to="/contact">Contact</g-link>
        </nav>
      </header>
      <transition name="fade" appear>
        <main>
          <slot />
        </main>
      </transition>
    </div>
    <footer class="p-5 bg-blue-900 text-white">
      <ul>
        <li>
          <a
            href="https://www.infinityseeker.com"
            target="_blank"
            rel="noreferrer noopener"
            class="no-underline"
          >&copy; Infinity Seeker 2020</a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/alex-marek-8b49b144/"
            target="_blank"
            rel="noreferrer noopener"
            class="no-underline"
          >LinkedIn</a>
        </li>
      </ul>
    </footer>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.logo {
  max-width: 140px;
}
</style>
