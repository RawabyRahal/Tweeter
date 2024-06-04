const tweeter = Tweeter()
const renderer = Renderer()
renderer.renderPosts(tweeter.getPosts())

// renderPosts(tweeter.getPosts())

// add eventlistener to tweeter btn

$("#post").on("click", function () {
    const tweet = $("#input").val()
    console.log(tweet)

    if (tweet.length === 0) {
        return alert("Empty Field!")
    }
    tweeter.addPost(tweet)
    renderer.renderPosts(tweeter.getPosts())
    // renderPosts(tweeter.getPosts())
})



// Add comment
$("#posts").on("click", '.commentbtn', function () {
    const postId = $(this).attr('id').slice(THREE)
    const comment = $("#input" + postId).val()

    if (comment.length === 0) {
        return alert("Empty Field!")
    }
    tweeter.addComment(comment, postId)
    renderer.renderPosts(tweeter.getPosts())
    // renderPosts(tweeter.getPosts())
  
})

// Delete Post
$("#posts").on("click", '.delete', function () {
    const postId = $(this).attr('id').slice(THREE)
    if (confirm("Are you sure you want to delete this post?")) {
        console.log("Deleted Successfully!");
        tweeter.removePost(postId)
        renderer.renderPosts(tweeter.getPosts())
        // renderPosts(tweeter.getPosts())
    }
})

// Delete comment
$("#posts").on("click", '.delete-comment', function () {

    const postId = $(this).closest(".post").attr('id')
    const commentId = $(this).closest(".comments").attr('id')
    if (confirm("Are you sure you want to delete this comment?")) {
        tweeter.removeComment(postId, commentId)
        renderer.renderPosts(tweeter.getPosts())
        // renderPosts(tweeter.getPosts())

        const pList = document.getElementById('plist')
        pList.setAttribute('open', true);

        const commentList = document.getElementById('clist')
        commentList.setAttribute('open', true);
    }
})


