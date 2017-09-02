import moment from 'moment';

const metaKeys = ['title', 'slug', 'date', 'category', 'tags'];

function splitAt(string, index) {
    return [
        string.slice(0, index),
        string.slice(index)
    ];
}

function extractMeta(content) {
    let meta = content.indexOf('</p>');
    [meta, content] = splitAt(content, meta + 4);
    meta = meta.slice(3, -4).split('@');

    let post = { content: content };
    for (let key in metaKeys) {
        key = metaKeys[key];
        for (let line in meta) {
            line = meta[line];
            if (line.startsWith(key + ':')) {
                let value = line.slice(key.length + 1).trim();
                post[key] = value;
            }
        }
    }

    return post;
}

function makePost(name, content) {
    let post = extractMeta(content);

    post.date = moment(post.date || name.slice(0, 6), ['YYYY-MM-DD', 'YYMMDD']);
    post.date = post.date.format('dddd, MMMM Do YYYY');
    post.slug = post.slug || name.slice(0, -3);

    return post;
}

function generatePosts(directory) {
    let posts = [];
    for (let file in directory) {
        let post = makePost(file, directory[file].src);
        posts.push(post);
    }
    return posts;
}

export default generatePosts;
