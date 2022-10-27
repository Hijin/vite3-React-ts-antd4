const files = import.meta.globEager('./**/index.tsx')
const modules = Object.keys(files).reduce(
  (modules: { [key: string]: any }, path: string) => {
    const module = (files[path] as any)?.default
    modules[module.name] = module
    return modules
  },
  {}
)
export default modules
