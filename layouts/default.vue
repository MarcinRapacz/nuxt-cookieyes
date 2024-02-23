<template>
  <nav :class="$style.nav">
    <NuxtLink to="/">Homepage</NuxtLink>
    <NuxtLink to="/cart">Cart</NuxtLink>
    <NuxtLink to="/about-us">About us</NuxtLink>
    <NuxtLink to="/contact-us">Contact us</NuxtLink>
  </nav>
  <div :class="$style.page">
    <NuxtPage />
  </div>
</template>

<style lang="scss" module>
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
}
</style>
