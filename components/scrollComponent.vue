<template>
  <div>
    <div class="test">
      <div class="carre carre1"></div>
      <div class="carre carre2"></div>
      <div class="carre carre3"></div>
      <!-- <div class="scrollText">Scroll</div> -->
    </div>
  </div>
</template>

<script>
import gsap from 'gsap';
export default {
  mounted() {
    var tl = gsap.timeline({ repeat: -1, repeatDelay: 0.2, yoyo: true });
    tl.staggerFrom(".carre", 0.6,  { opacity: 0, y : "+=5" },0.2);
  },
};
</script>

<style lang="scss">
.carre {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  height: 40px;
  width: 40px;
  position: absolute;
  border-right: solid 4px #2c3e50;
  border-bottom: solid 4px #2c3e50;

  &.carre2 {
    transform: translate(-50%, -20%) rotate(45deg);
  }

  &.carre3 {
    transform: translate(-50%, 10%) rotate(45deg);
  }
}

.test {
  transform: translateY(-30px);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
}

.scrollText {
    position: absolute;
    left: 50%;
    text-align: center;
    top:170%;
    transform: translate(-50%,-50%);
    font-weight: 700;
    color: #2c3e50;

}
</style>