export default {
  name: 'HeroLoads',
  data() {
    return {
      files: [],
    };
  },
  methods: {
    setFile() {
      const input = document.querySelector('.hero-loads__input');

      this.files.push(input.files[0].name);
      input.value = '';
    },
  },
};
