export function fetchPosts(){
    fetch( 'https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => console.log(json))
}

export function fetchComments(){
    fetch( 'https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(json => console.log(json))
}

