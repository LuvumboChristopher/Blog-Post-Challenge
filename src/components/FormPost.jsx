import React, {useState} from 'react'

export default function FormPost({post,setPost, setShowPost }) {
  
  const onChange = (event) => {
    setPost({
      ...post,
      [event.target.name]: event.target.value
    });
    
  }

  const  submitForm = (event) => {
    event.preventDefault();
    console.log(post)
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(post)
    };

    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url, config)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          alert(res.error);
        } else {
          alert(`post #${res.id} has been successfully added!`);
          
          setShowPost(true)
        }
      })
      .catch((e) => {
        console.error(e);
        alert("There was an error when adding the post.");
      });
  }

  return (
    <div className="Formpost">
  <h1>New post</h1>

  <form onSubmit={submitForm}>
    <fieldset>
      <legend>Information</legend>
      <div className="form-data">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={onChange}
          value={post.title}
        />
      </div>

      <div className="form-data">
        <label htmlFor="body">Text</label>
        <input
          type="text"
          id="body"
          name="body"
          onChange={onChange}
          value={post.body}
        />
      </div>

      <input type="hidden" value={post.userId}/>

      <hr />
      <div className="form-data">
        <input type="submit" value="Send" />
      </div>
    </fieldset>
  </form>
</div>
  );
}