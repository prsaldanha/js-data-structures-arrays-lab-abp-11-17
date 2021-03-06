const drivers =  ["Milo", "Otis", "Garfield"] ;

function destructivelyAppendDriver(name)
{
  drivers.push(name);
}

function destructivelyPrependDriver(name)
{
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver()
{
  drivers.pop();
}

function destructivelyRemoveFirstDriver()
{
  drivers.shift();
}

function appendDriver(name)
{
  var newarray =  [...drivers, name];
  return newarray;
}

function prependDriver(name)
{
  var newarray = [name, ...drivers];
  return newarray;
}

function removeLastDriver()
{
  var newarray = drivers.slice(0, drivers.length - 1);
  return newarray;
}

function removeFirstDriver()
{
  var newarray = drivers.slice(1, drivers.length);
  return newarray;
}
