const files = {
  ...import.meta.globEager('./**/*.png'),
  ...import.meta.globEager('./**/*.jpg'),
  ...import.meta.globEager('./**/*.svg'),
}
const modules = Object.keys(files).reduce(
  (modules: { [key: string]: any }, path: string) => {
    const pathArr = path.split(/\.\/|\.|\//)
    const moduleName = pathArr[pathArr.length - 2];
    modules[moduleName] = (files[path] as any)?.default
    return modules
  },
  {}
)
export default modules
