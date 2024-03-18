//Blog Page with Posts
window.onload = function() {

    const post = JSON.parse(localStorage.getItem('blogPost')) || [];

   for(let i = 0; i < post.length; i++){
    if (post) {
      const postsDiv = document.getElementById('posts');

      const postElement = document.createElement('div');
      postElement.classList.add('post');
      postElement.innerHTML = `
        <h3>Title: ${post[i].title}</h3>
        <p>Content: ${post[i].content}</p>
        <p>Posted by:${post[i].username}</p>
      `;
      postsDiv.appendChild(postElement);
    }
}
  };
  // Dark Mode Toggle
  const toggleModeButton = document.getElementById('toggleMode');
  toggleModeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
  });