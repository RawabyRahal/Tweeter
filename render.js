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

const Renderer = function () {

    const renderPosts = function (posts) {
        $('#posts').empty()
        $('#posts').innerHTML = ''

        for (let p of posts) {
            console.log(p.text)
            let divPost = $("<details id = 'plist' ><summary>Post no. "+ p.id.slice(1) + "</summary><br><div class= 'post' id=" + p.id + '>' + "<div class= 'post-text'>" + p.text + "</div></div><br></details>")

            $('#posts').append(divPost)
            $("#input").val('')

            let commentList = $(`<details id = 'clist' open style='padding-top:5px; padding-bottom:5px'><summary>Comment List</summary></details>`);
            $('#' + p.id).append(commentList)
            // ;
            for (let c of p.comments) {
                const deletX = "<span class= delete-comment >x</span>"
                let divComment = $("<div class= 'comments'  id=" + c.id + ">" + deletX + " " + c.text + "</div>")
                commentList.append(divComment)
            }

            const newtext = "<input id =input" + p.id + " placeholder= comment? calss = 'text' style = 'font-family:serif;'>"
            const newbtn = "<button  id=btn" + p.id + " class='commentbtn' style='margin-left:5px; font-family:serif;'>comment</button>"
            $("#" + p.id).append(newtext)
            $("#" + p.id).append(newbtn)
            const delBtn = "<br><br><button id=del" + p.id + " class = delete style = 'font-family:serif;'>Delete Post</button>"
            $("#" + p.id).append(delBtn)

            $("#" + p.id).find('details').attr('open', false);
        }
    }



    return { renderPosts: renderPosts }
}


// const source = $('#posts-template').html();
// const template = Handlebars.compile(source);

// const renderPosts = function (posts) {
//     $("#posts").empty()
//     console.log(posts) //array of apartments to render

//     const newHTML = template({posts:posts});
//     $('#posts').append(newHTML);
// }




