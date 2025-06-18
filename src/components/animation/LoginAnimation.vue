<template>
  <div class="login-animation">
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
  </div>
</template>

<script>
export default {
  name: 'LoginAnimation',
};
</script>

<style scoped>
.login-animation {
  --size: 200px;

  position: relative;
  width: calc(2 * var(--size));
  height: calc(2 * var(--size));
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-animation .square {
  border: 1px solid var(--sidebar-color);
  width: var(--size);
  height: var(--size);
  position: absolute;
  box-shadow: rgba(255, 255, 255, 0.5) 0 0 calc(var(--size) / 10) inset,
    rgba(255, 255, 255, 0.5) 0 0 calc(var(--size) / 20);
  animation: bounce 1.5s cubic-bezier(0.46, 0.03, 0.52, 0.96) infinite alternate;
  transform: rotate(45deg)
    translate(calc(-1 * var(--size) / 5), calc(-1 * var(--size) / 5));
}

.login-animation .square:nth-of-type(2) {
  animation-delay: 200ms;
}

.login-animation .square:nth-of-type(3) {
  animation-delay: 400ms;
}

@keyframes bounce {
  from {
    transform: rotate(45deg)
      translate(calc(-1 * var(--size) / 5), calc(-1 * var(--size) / 5));
  }
  to {
    transform: rotate(45deg)
      translate(calc(var(--size) / 5), calc(var(--size) / 5));
  }
}
</style>
