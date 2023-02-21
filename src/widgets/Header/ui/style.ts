export const headerStyle = [
  'bg-slate-500',
  'px-3',
  'py-3',
  'text-slate-100',
  'flex',
  'justify-center',
].join(' ');


// const someObj = {
//   f1: {
//     component: ({title}: {title: string}) => {console.log(title)},
//     props: {
//       title: 'vasya'
//     }
//   },
//   f2: {
//     component: ({age}: {age: number}) => {console.log(age)},
//     props: {
//       age: 22
//     }
//   },
// }

// const k = Math.round( Math.random()) ? 'f1' : 'f2';
// const componentField = someObj[k].component ;
// const componentProps = someObj[k].props

// type SomeType<C, P> = {
//   component: C,
//   props: P,
// }

// const {component, props} = someObj[k] as SomeType<string,>;

// component(props)