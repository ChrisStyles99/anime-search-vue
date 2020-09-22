<template lang="pug">
  nav
    h1 
      router-link.home-link(to="/") Home
    ul
      li(v-for="(link, index) in links" :key="index")
        router-link.link-item(:to="'/'+link.toLowerCase()") {{link}}
</template>

<script>
export default {
  name: 'NavbarComp',
  data() {
    return {
      links: ['About', 'Search', 'Profile']
    }
  },
}
</script>

<style lang="scss" scoped>
  nav {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #222831;

    h1 {
      margin-left: 10px;
      font-size: 2rem;

      .home-link {
        text-decoration: none;
        color: #fff;
        transition: 0.3s ease all;
      }

      .router-link-exact-active {
        color: #ff5722;
      }
    }

    ul {
      display: flex;
      flex-direction: row;
      list-style-type: none;

      li {
        margin: 10px;

        .link-item {
          text-decoration: none;
          color: #fff;
          padding: 10px 15px;
          border-radius: 12px;
          transition: 0.3s ease all;

          &:hover {
            background-color: #393e46;
          }
        }

        .router-link-exact-active {
          color: #ff5722;
        }
      }
    }
  }
</style>