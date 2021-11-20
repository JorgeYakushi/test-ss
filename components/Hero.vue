<template>
  <div class="hero">
    <picture class="hero__image">
      <source srcset="~/assets/hero/hero.jpg" media="(min-width: 768px)" />
      <img src="~/assets/hero/hero-mobile.jpg" alt=""
    /></picture>
    <div class="hero__content">
      <div class="text">
        <h1 class="text__lead">DISCOVER</h1>
        <h1 class="text__title">YOUR STONE</h1>
        <p class="text__description">
          Start your engagement ring journey here. Craft your own bespoke design
          or browse from our ready to wear collection.
        </p>
      </div>
      <div class="hero__buttons">
        <Button
          :btnVisible="showNewArrivalsBtn"
          :btnText="'NEW ARRIVALS'"
          :bgColor="'#0EA5E9'"
          :textColor="'white'"
          :borderColor="'transparent'"
          @click-New-Arrivals="$emit('click-New-Arrivals')"
          :methodName="'click-New-Arrivals'"
        />
        <Button
          :btnVisible="showBestSellerBtn"
          :btnText="'BEST SELLERS'"
          :bgColor="'transparent'"
          :textColor="'white'"
          :borderColor="'white'"
          @click-Best-Sellers="$emit('click-Best-Sellers')"
          :methodName="'click-Best-Sellers'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Button from './Button.vue'
export default {
  name: 'Hero',
  components: {
    Button,
  },
  props: { showNewArrivalsBtn: Boolean, showBestSellerBtn: Boolean },
}
</script>

<style lang="scss">
.hero {
  position: relative;

  &__image {
    position: relative;
    img {
      object-fit: cover;
      object-position: center;
      width: 100%;
      min-height: 400px;
    }
  }
  &__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 1280px;
    width: 100%;
    .text {
      max-width: 450px;
      &__lead {
        font-size: 28px;
      }
      &__title {
        font-size: 50px;
      }
      &__description {
        color: var(--color-gray);
        font-size: 18px;
        margin: 20px 0 32px;
      }
    }
  }
  &__buttons {
    :not(:first-child) {
      margin-left: 23px;
    }
  }
  h1,
  p {
    color: white;
    font-weight: 400;
    // color: var(--color-lb);
  }
}
</style>
