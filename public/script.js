
  function saveComment(){
    if (document.getElementById("name").value == "" || document.getElementById("comment").value == "") {
      alert("Please enter your name and comment");
      return;
    }
    
    const name = document.getElementById("name").value;
    const comment = document.getElementById("comment").value;
    const combinedComment = "<strong>" + name + "</strong><br>" +comment

    addDiv('userComments', combinedComment, {
      'class': 'final',
      'data-attr': 'attr'
    });
    updateTitle(comment)
    clearCommentBox();
  }

  function addDiv(parent_div, content, attrs) {
    const div = document.createElement('div');
    const space = document.createElement('br');
    const parent = document.getElementById(parent_div);
  
    for (var key in attrs) {
      if (attrs.hasOwnProperty(key)) {
        div.setAttribute(key, attrs[key]);
      }
    }

    div.innerHTML = content;
    if (parent) {
      parent.appendChild(div);
      parent.appendChild(space)
    }
  }

  function clearCommentBox() {
    document.getElementById("name").value = "";
    document.getElementById("comment").value = "";
}

function updateTitle(title) {
  document.title =  title
}
