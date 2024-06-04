// => I've to delete it cz in futer perhaps we need more than one post to splice
const ONE = 1 
const THREE = 3
const SEVEN = 7

const Tweeter = function () {

    let postIdCounter = THREE;
    let commentIdCounter = SEVEN;
    const _posts =
        [
            {
                text: "First post!",
                id: "p1",
                comments: [
                    { id: "c1", text: "First comment on first post!" },
                    { id: "c2", text: "Second comment on first post!!" },
                    { id: "c3", text: "Third comment on first post!!!" }
                ]
            },
            {
                text: "Aw man, I wanted to be first",
                id: "p2",
                comments: [
                    { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                    { id: "c5", text: "Yeah, believe in yourself!" },
                    { id: "c6", text: "Haha second place what a joke." }
                ]
            }
        ]

    const getPosts = function () {
        return (_posts)
    }

    const addPost = function (text) {
        let newPost = ({ id: "p" + postIdCounter, text: text, comments: [] })
        _posts.push(newPost)
        postIdCounter++;
    }

    const removePost = function (postID) {
        for (let i in _posts) {
            if (_posts[i].id === postID) {
                _posts.splice(i, ONE);
            }
        }
    }

    const addComment = function (text, postID) {
        let newComment = ({ id: "c" + commentIdCounter, text: text })

        for (let i in _posts) {
            if (_posts[i].id == postID) {
                _posts[i].comments.push(newComment)
            }
            commentIdCounter++;
        }
    }

    const removeComment = function (postID, commentID) {
        for (let i in _posts) {
            if (_posts[i].id === postID) {
                for (let c in _posts[i].comments) {
                    if (_posts[i].comments[c].id == commentID) {
                        _posts[i].comments.splice(c, ONE);
                    }
                }
            }
        }
    }

    return {
        addPost: addPost,
        getPosts: getPosts,
        removePost: removePost,
        addComment: addComment,
        removeComment: removeComment
    }
}



