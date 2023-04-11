<template>
  <section class="mail">
    <header>
      <h1 class="page__title">Close (Esc)</h1>
    </header>
    
    <div class="page__options">
      <input type="checkbox" name="" id="">
      <button class="btn">Mark as read (r)</button>
      <button class="btn">Archive (a)</button>
    </div>

    <ul class="mail__content">
      <li class="mail"></li>
      <li class="mail">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi eum exercitationem sint eveniet accusantium ullam expedita? Facere quidem animi recusandae velit necessitatibus cupiditate suscipit quisquam sunt quod ipsum. Repellendus, iusto.</li>
      <li class="mail">

      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.mail {
  // background: rgba(0, 0, 0, 0);
  // opacity: 0.4;
  // background-color: rgba(0, 0, 0, 0.15);
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 10;

  &__content {
    background: #fff;


  }

  &__title {
    font-size: 1rem;
    text-decoration: underline;
    font-weight: 500;
  }

  &__subtitle {
    font-size: 2rem;
    font-weight: 700;
    padding: 1rem 0 0;
  }

  &__options {
    padding: 2rem 0 1rem;

    .btn {
      border: 1px solid #ddd;
      background-color: #f9f9f9;
      outline: none;
      margin: 0 0 0 1.5rem;
    }
  }
}
</style>
