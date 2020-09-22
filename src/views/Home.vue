<template lang="pug">
  .welcome
    .text-div 
      h1 Welcome to the anime search
      .btns
        router-link.btn-link(to="/search") Search anime
        router-link.btn-link(to="/profile") See animes you liked
    img(src="https://images.pexels.com/photos/96422/pexels-photo-96422.jpeg")
</template>

<script>

export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
  .welcome {
    height: 100vh;
    position: relative;

    &::after {
      content: "";
      background: rgba($color: #000000, $alpha: 0.2);
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }

    .text-div {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 3;

      h1 {
        font-size: 4rem;
        color: #ff5722;
      }

      .btn-link {
        text-decoration: none;
        color: #222831;
        padding: 10px 15px;
        background-color: #ff5722;
        border-radius: 12px;
        font-size: 1.2rem;
        transition: 0.3s ease all;
        margin: 0 5px;

        &:hover {
          background-color: #222831;
          color: #ff5722;
        }

        &:last-child {
          color: #ff5722;
          background-color: #222831;

          &:hover {
            background-color: #ff5722;
            color: #222831;
          }
        }

      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media (max-width: 768px) {
    .btns {
      display: flex;

      .btn-link {
        text-align: center;
      }
    }
  }
</style>