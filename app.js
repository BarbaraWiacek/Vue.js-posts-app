const posts = [
  {
    title: 'Amazing new framework!!!', 
    summary: 'Why you must start using Explode.js IMMEDIATELY!',
    votes: 0,
    thumbnail: 'https://placeimg.com/75/75/any'
  },
  {
    title: 'Understanding the Event Loop', 
    summary: 'This post will change your life.',
    votes: 0,
    thumbnail: 'https://placeimg.com/75/75/nature'
  },
  {
    title: 'No seriously, what is a $%*# is a promise?', 
    summary: 'Understanding callback heck and why you must avoid it.',
    votes: 0,
    thumbnail: 'https://placeimg.com/75/75/tech'
  },
];

new Vue({
  el: '#app',
  data: {
    posts: posts,
    title: '',
    summary: ''
  },
  methods: {
    increment: function(post){
      post.votes += 1; 
    },
    decrement: function(post){
      post.votes -= 1; 
    },
    createNew: function() {
      posts.push({
        title: this.title,
        summary: this.summary,
        votes: 0,
        thumbnail: 'https://placeimg.com/75/75/tech'
      });
      this.title = '';
      this.summary = '';
    }
  },
  computed: {
    orderedList: function() {
      return this.posts.sort(function(currentPost, nextPost) {
        return nextPost.votes - currentPost.votes;
      });
    }
  }
});