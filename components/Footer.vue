<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p><strong>Play & Drink</strong> by kauffret and gllm fgn. ©2020</p>
    </div>
    <div class="content container has-text-centered">
      <p v-html="$t('footer.hello')"></p>
      <p>
        {{ $t("footer.built") }}
        <fa-icon :icon="faWineBottle" class="fa-lg has-text-black" />
        {{ $t("footer.and") }}
        <fa-icon :icon="faHeart" class="fa-lg has-text-primary" />
        {{ $t("footer.city") }}
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
