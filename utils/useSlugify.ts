export default function slugify(str: string) {
  let newStr = str;
  newStr = newStr.toLowerCase();
  newStr = newStr.trim();
  newStr = newStr.replace(/[^\w\s-]/g, '');
  newStr = newStr.replace(/[\s_-]+/g, '-');
  newStr = newStr.replace(/^-+|-+$/g, '');
  return newStr;
}
