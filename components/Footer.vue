<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p><strong>Play & Drink</strong> by kauffret and gllm fgn. ©2020</p>
    </div>
    <div class="content container has-text-centered">
      <p>
        Say hello at
        <a href="mailto:hello@playndrink.online" class="has-text-primary">
          hello@playndrink.online
        </a>
        !
      </p>
      <p>
        Built with
        <fa-icon :icon="faWineBottle" class="fa-lg has-text-black" />
        and
        <fa-icon :icon="faHeart" class="fa-lg has-text-primary" />
        in Brest
        <br />
      </p>
    </div>
  </footer>
</template>
<script>
import { faHeart, faWineBottle } from "@fortawesome/free-solid-svg-icons"
export default {
  computed: {
    faHeart() {
      return faHeart
    },
    faWineBottle() {
      return faWineBottle
    },
  },
}
</script>
