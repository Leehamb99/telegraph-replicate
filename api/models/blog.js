const db = require('../dbConfig')

class blogEntry {
    constructor(data){
        this.id = data.id
        this.name = data.name
        this.title = data.title
        this.text = data.text
    }

    static get all () {
        return new Promise (async(resolve,reject) => {
            try {
                const blogData = await db.query(`SELECT * FROM blogs`)
                const blog = 
                resolve(blogs);
            } catch (err){
                reject("Error retrieving blogs")
            }
        })
    }

    static findById (id) {
        return new Promise (async (resolve, reject) => {
            try {
                let blogData = await db.query(`SELECT * FROM blogs WHERE id = $1;`, [ id ]);
                let blog = new blogEntry(blogData.rows[0]);
                resolve (blog);
            } catch (err) {
                reject('Blog was not found');
            }
        });
    }

    static create(name,title,text){
        return new Promise (async (resolve, reject) => {
            try {
                let blogData = await db.query(`INSERT INTO blog (name, title,text) VALUES ($1, $2, $3) RETURNING *;`, [ name,title,text ]);
                let newBlog = new blogEntry(blogData.rows[0]);
                resolve (newBlog);
            } catch (err) {
                reject('Error creating blog');
            }
        });
    }

}

module.exports = blogEntry
