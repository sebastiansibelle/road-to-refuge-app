import '../ui/components/button';

document.write('welcome to my app');
console.log('app loaded');

let checkName= (firstName, lastName) => {
 if(firstName !== 'nader' || lastName !== 'dabit') {
   console.log('You are not Nader Dabit');
 } else {
    console.log('You are Nader Dabit');
  }
}
checkName('nader', 'jackson');
