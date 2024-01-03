let a = 10;

const foo = (a) => {
  let y = 12;

  return (x) => {
    x(y);
    console.log(a);
  };
};

const run = foo(a);

const bar = (data) => {
  a = data;
};

run(bar);
