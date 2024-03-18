// Home Page Submission
document.getElementById('blogForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const postArray = JSON.parse(localStorage.getItem("blogPost")) || []

    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
  
    if (username.trim() === '' || title.trim() === '' || content.trim() === '') {
      alert('Please complete all fields.');
      return;
    }
  
    const post = { username, title, content };
    postArray.push(post)

    localStorage.setItem('blogPost', JSON.stringify(postArray));
    window.location.href = 'blog.html';
  });
  const toggleModeButton = document.getElementById('toggleMode');
  toggleModeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
  });
  
  