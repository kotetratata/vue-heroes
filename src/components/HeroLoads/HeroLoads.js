export default {
  name: 'HeroLoads',
  data() {
    return {
      files: [],
    };
  },
  methods: {
    getFile(event) {
      this.files.push(event.target.files[0].name);
      document.querySelector('.hero-loads__input')
        .value = '';
    },
  },
};
