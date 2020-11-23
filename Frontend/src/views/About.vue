<template>
  <div class="about container">
    <h1>This is an about page</h1>
    <div class="dropdown">
      <button
        id="dropdownMenuButton"
        class="btn btn-secondary dropdown-toggle"
        type="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Dropdown button
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
      </div>
    </div>
    <div class="mt-5">
      <button
        type="button"
        class="btn btn-lg btn-danger"
        data-toggle="popover"
        title="Popover title"
        data-content="And here's some amazing content. It's very engaging. Right?"
      >
        Click to toggle popover
      </button>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.jquery('[data-toggle="popover"]').popover();
  }
};
</script>
