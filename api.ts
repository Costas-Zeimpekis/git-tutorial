interface Post{
    postId: number;
    id: number;
    title: string;
    body: string;
}

interface Comment{
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

export function posts(){
    return fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => console.log(data));
}

export function comments(){
    return fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.json())
            .then(data => console.log(data));
}