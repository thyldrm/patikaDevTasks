const posts = [
    {title: 'Post Başlık 1', detail: 'Post Detay 1'},
    {title: 'Post Başlık 2', detail: 'Post Detay 2'},
    {title: 'Post Başlık 3', detail: 'Post Detay 3'}
];

const listPosts=()=>{
    posts.map((post)=>{
        console.log(post.title);
    })
}

const addPosts = (newPosts) => {
        const p1 = new Promise((resolve,reject) => {
        posts.push(newPosts);
        resolve(posts);
        //reject("Hatalı Sonuç")
    })
    return p1;
}

async function showPosts(){
    try{
        await addPosts({title: 'Post Başlık 23', detail: 'Post Detay 23'});
        listPosts();
    }catch (error) {
        console.log(error);
    }
}

showPosts();
