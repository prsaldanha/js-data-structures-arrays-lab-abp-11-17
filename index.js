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
