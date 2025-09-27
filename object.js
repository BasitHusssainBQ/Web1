const obj = {
    name: 'Basit',
    age: 27,
    email: 'basithussin@gmail.com',
    isAdmin: true,
    blogs: [{
        content: 'test',
        likes: 99,
        comments: 12,
        share: 3
    }, {
        content: 'test1',
        likes: 99,
        comments: 12,
        share: 3
    }, {
        content: 'test2',
        likes: 99,
        comments: 12,
        share: 3,
        login() {
            console.log(this)
            return this
        }
    }],
    login() {console.log('login', this)},
    logout() {console.log('logout', this)}
};

obj.login()
obj.isTeacher = true;
console.log(obj.name, obj.email)
obj.logout()

obj.isAdmin = false;    

const x = obj.blogs[2].login().content
console.log(x);

console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))