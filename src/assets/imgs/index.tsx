export { default as LogoImg } from './logo.png';
export { default as AvatarDefaultImg } from './avatar_default.png';
export { default as HeaderHomeSelImg } from './header_home_sel.png';
export { default as HeaderHomeImg } from './header_home.png';
export { default as HeaderPatientSelImg } from './header_patient_sel.png';
export { default as HeaderPatientImg } from './header_patient.png';
export { default as HeaderVisitSelImg } from './header_visit_sel.png';
export { default as HeaderVisitImg } from './header_visit.png';
export { default as Add1Img } from './add1.png';


const files = {
  ...import.meta.globEager('./*.png'),
  ...import.meta.globEager('./*.jpg'),
}
const modules = Object.keys(files).reduce(
  (modules: { [key: string]: any }, path: string) => {
    const moduleName = path.replace(/\.\/|\.png|\.jpg/g, '');
    modules[moduleName] = files[path]?.default
    return modules
  },
  {}
)

export default modules
