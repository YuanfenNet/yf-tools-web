<template>
  <div class="loader-wrapper">
    <div class="loader" />
    <slot />
  </div>
</template>

<style lang="scss">
.loader-wrapper {
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .loader {
    flex-shrink: 0;
    width: 50px;
    aspect-ratio: 1;
    display: grid;
    color: #008080;
    background: radial-gradient(
      farthest-side,
      currentColor calc(100% - 6px),
      #0000 calc(100% - 5px) 0
    );
    mask: radial-gradient(
      farthest-side,
      #0000 calc(100% - 13px),
      #000 calc(100% - 12px)
    );
    border-radius: 50%;
    animation: ani-rotate 2s infinite linear;
  }
  .loader::before,
  .loader::after {
    content: '';
    grid-area: 1/1;
    background:
      linear-gradient(currentColor 0 0) center,
      linear-gradient(currentColor 0 0) center;
    background-size:
      100% 10px,
      10px 100%;
    background-repeat: no-repeat;
  }
  .loader::after {
    transform: rotate(45deg);
  }

  @keyframes ani-rotate {
    100% {
      transform: rotate(1turn);
    }
  }
}
</style>
