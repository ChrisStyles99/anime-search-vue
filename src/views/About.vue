<template lang="pug">
  .about
    .text-about
      h1 About us
      p Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolor, unde mollitia dignissimos ipsa ratione asperiores repellat aperiam? Facilis, cupiditate!
    img(src="https://images.pexels.com/photos/1049622/pexels-photo-1049622.jpeg")
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  .about {
    height: 100vh;
    display: grid;
    grid-template-rows: 1fr 1fr;

    .text-about {
      margin: auto;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
</style>