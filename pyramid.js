function gen_pyramid(num_of_rows){
  for(i= 1; i <= num_of_rows; i++){ 
    spaces = ' '.repeat(num_of_rows - i);
    stars = '*'.repeat(2 * i - 1);
    console.log(spaces + stars + spaces);
}}
// example usage
gen_pyramid(5);
