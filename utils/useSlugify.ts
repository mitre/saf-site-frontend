export default function slugify(str: string){
    str = str.toLowerCase()
    str = str.trim()
    str = str.replace(/[^\w\s-]/g, '')
    str = str.replace(/[\s_-]+/g, '-')
    str = str.replace(/^-+|-+$/g, '')
    return str
    }